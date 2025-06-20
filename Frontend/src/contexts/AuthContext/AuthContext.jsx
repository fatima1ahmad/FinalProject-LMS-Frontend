import React, { createContext, useContext, useReducer, useEffect } from "react";
import { authService } from "../../services/authService";

const AuthContext = createContext();

// Define default redirect paths for each role
export const DEFAULT_REDIRECTS = {
  student: "/student/dashboard",
  teacher: "/teacher/dashboard",
  instructor: "/instructor/dashboard", // Added instructor for consistency
  admin: "/admin/dashboard",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.user?.role, // Store role explicitly
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        token: null,
        role: null,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        role: null,
        error: null,
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null, // Explicit role state
  loading: true,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: "SET_LOADING", payload: false });
        return;
      }
      try {
        const user = await authService.getProfile();
        if (!user?.role) {
          // تحقق من وجود role
          throw new Error("User role missing");
        }
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user, token },
        });
      } catch (error) {
        console.error("Auth check error:", error);
        localStorage.removeItem("access-token");
        dispatch({ type: "LOGOUT" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };
    checkAuth();
  }, []);
  const login = async (credentials) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await authService.login(credentials);
      console.log("Login API Response:", response);
      localStorage.setItem("access-token", response.token);

      // localStorage.setItem(
      //   "access-token",
      //   response.accessToken || response.token
      // );
      if (response.refreshToken) {
        localStorage.setItem("refresh-token", response.refreshToken);
      }
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response,
      });
      return response;
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.message || "Login failed",
      });
      throw error;
    }
  };

  const register = async (userData) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await authService.register({
        ...userData,
        // role: "student", // Default role for new registrations
      });

      dispatch({ type: "REGISTER_SUCCESS" });

      return response;
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.message || "Registration failed",
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      dispatch({ type: "LOGOUT" });
    }
  };

  // Add setToken function
  const setToken = (token) => {
    localStorage.setItem("access-token", token);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user: state.user, token }, // You may want to fetch user info here if needed
    });
  };

  const value = {
    ...state,
    login,
    logout,
    register,
    setToken, // Add setToken to context value
    DEFAULT_REDIRECTS, // Make redirect paths available to consumers
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export default AuthContext;
