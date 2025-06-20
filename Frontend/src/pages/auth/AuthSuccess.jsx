// src/pages/AuthSuccess.js
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext/AuthContext";

const AuthSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      setToken(token);
      navigate("/dashboard"); // Or your default post-login route
    } else {
      navigate("/login");
    }
  }, [location, navigate, setToken]);

  return <div>Loading...</div>;
};

export default AuthSuccess;
