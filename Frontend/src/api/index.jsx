// // // src/api/index.js
// // import axios from "axios";

// // const api = axios.create({
// //   baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
// //   withCredentials: true,
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // });

// // // Request interceptor
// // api.interceptors.request.use((config) => {
// //   const token = localStorage.getItem("access-token");
// //   if (token && token !== "undefined" && token !== "null") {
// //     config.headers.Authorization = `Bearer ${token}`;
// //   } else {
// //     console.error("No token found in localStorage or token is invalid");
// //   }
// //   return config;
// // });

// // // Response interceptor
// // api.interceptors.response.use(
// //   (response) => response,
// //   async (error) => {
// //     const originalRequest = error.config;

// //     if (error.response?.status === 401 && !originalRequest._retry) {
// //       originalRequest._retry = true;

// //       try {
// //         const refreshToken = localStorage.getItem("refresh-token");
// //         if (refreshToken) {
// //           const res = await api.post("/auth/refresh", { refreshToken });
// //           const newAccessToken = res.data.accessToken;
// //           localStorage.setItem("access-token", newAccessToken);
// //           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
// //           console.log("New access token set:", newAccessToken);
// //           return api(originalRequest);
// //         }
// //       } catch (refreshError) {
// //         localStorage.removeItem("access-token");
// //         localStorage.removeItem("refresh-token");
// //         window.location.href = "/login";
// //         return Promise.reject(refreshError);
// //       }
// //     }

// //     return Promise.reject(error);
// //   }
// // );

// // export const fetchUsers = async () => {
// //   const response = await api.get("/admin/users");
// //   return response.data;
// // };

// // // User Management Endpoints
// // export const getAllUsers = async () => api.get("/admin/users");
// // export const addUser = async (userData) => api.post("/admin/users", userData);
// // export const updateUser = async (userId, userData) =>
// //   api.put(`/admin/users/${userId}`, userData);
// // export const deleteUser = async (userId) =>
// //   api.delete(`/admin/users/${userId}`);

// // // Course Management Endpoints
// // export const fetchCourses = async (params = {}) =>
// //   api.get("/courses", { params });
// // export const fetchCourseById = async (id) => api.get(`/courses/${id}`);
// // export const createCourse = async (courseData) =>
// //   api.post("/courses", courseData);
// // export const updateCourse = async (id, courseData) =>
// //   api.put(`/courses/${id}`, courseData);
// // export const deleteCourse = async (id) => api.delete(`/courses/${id}`);
// // export const approveCourse = async (id, feedback = "") =>
// //   api.patch(`/courses/${id}/approve`, { feedback });
// // export const rejectCourse = async (id, feedback = "") =>
// //   api.patch(`/courses/${id}/reject`, { feedback });

// // // Module Management Endpoints
// // export const fetchModules = async (courseId) =>
// //   api.get(`/courses/${courseId}/modules`);
// // export const createModule = async (moduleData) =>
// //   api.post("/modules", moduleData);
// // export const updateModule = async (id, moduleData) =>
// //   api.put(`/modules/${id}`, moduleData);
// // export const deleteModule = async (id) => api.delete(`/modules/${id}`);

// // export default api;
// // services/api.js

// import axios from "axios";
// import { authService } from "../services/authService";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access-token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const response = await authService.refreshToken();
//       const newToken = response.accessToken || response.token;
//       if (newToken) {
//         localStorage.setItem("access-token", newToken); // لا تنسى تحدث التخزين أيضاً
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return api(originalRequest);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// // api.interceptors.response.use(
// //   (response) => response,
// //   async (error) => {
// //     const originalRequest = error.config;
// //     if (error.response?.status === 401 && !originalRequest._retry) {
// //       originalRequest._retry = true;
// //       const newToken = await authService.refreshToken();
// //       originalRequest.headers.Authorization = `Bearer ${newToken}`;
// //       return api(originalRequest);
// //     }
// //     return Promise.reject(error);
// //   }

// export default api;

// // import axios from "axios";
// // import { authService } from "../services/authService";

// // const api = axios.create({
// //   baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
// //   timeout: 10000,
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// //   withCredentials: true, // Important for cookies/sessions
// // });

// // // api/index.js
// // api.interceptors.request.use(
// //   (config) => {
// //     const token = localStorage.getItem("access-token"); // Changed from "token"
// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`;
// //       console.log("Token added to request:", token.substring(0, 10) + "..."); // Debug
// //     } else {
// //       console.warn("No access-token found in localStorage");
// //     }
// //     return config;
// //   },
// //   (error) => Promise.reject(error)
// // );

// // api.interceptors.response.use(
// //   (response) => response,
// //   async (error) => {
// //     const originalRequest = error.config;

// //     // Enhanced error logging
// //     console.error("API Error:", {
// //       status: error.response?.status,
// //       message: error.message,
// //       url: originalRequest.url,
// //       method: originalRequest.method,
// //     });

// //     // Handle 401 Unauthorized
// //     if (error.response?.status === 401 && !originalRequest._retry) {
// //       try {
// //         originalRequest._retry = true;
// //         const newToken = await authService.refreshToken();
// //         localStorage.setItem("token", newToken);
// //         originalRequest.headers.Authorization = `Bearer ${newToken}`;
// //         return api(originalRequest);
// //       } catch (refreshError) {
// //         console.error("Token refresh failed:", refreshError);
// //         // Redirect to login or perform cleanup
// //         localStorage.removeItem("token");
// //         window.location.href = "/login";
// //         return Promise.reject(refreshError);
// //       }
// //     }

// //     // Handle 403 Forbidden specifically
// //     if (error.response?.status === 403) {
// //       console.error("Forbidden access - Possible reasons:", {
// //         missing_roles: error.response?.data?.requiredRoles,
// //         route: originalRequest.url,
// //       });
// //       // You might want to redirect to a "not authorized" page
// //     }

// //     return Promise.reject(error);
// //   }
// // );

// // export default api;
// api/index.js
import axios from "axios";
import { authService } from "../services/authService";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api", // Make sure this matches your backend
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Avoid infinite loops
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Use the refresh token endpoint
        const refreshToken = localStorage.getItem("refresh-token");
        if (refreshToken) {
          const response = await axios.post(
            `${api.defaults.baseURL}/auth/refresh`,
            { refreshToken }
          );

          const newToken = response.data.accessToken || response.data.token;
          if (newToken) {
            localStorage.setItem("access-token", newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
          }
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
