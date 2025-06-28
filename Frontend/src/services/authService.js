import api from "./../api/index";

export const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  logout: async () => {
    await api.post("/auth/logout");
  },

  getProfile: async () => {
    try {
      const token = localStorage.getItem("access-token");
      if (!token) return null;

      const response = await api.get("/auth/getme"); // Changed from "/auth/me" to match your backend route
      return response.data?.user || null;
    } catch (error) {
      console.error("Error fetching profile:", error);
      return null;
    }
  },

  // Add refresh token method
  refreshToken: async () => {
    const response = await api.post("/auth/refresh");
    return response.data;
  },

  // Optional: Add method to link Google account (if you want to use it later)
  linkGoogleAccount: async (googleToken) => {
    const response = await api.post("/auth/link-google", {
      token: googleToken,
    });
    return response.data;
  },
};
