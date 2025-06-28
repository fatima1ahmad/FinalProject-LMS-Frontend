import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/HomePage/HomePage";
import GoogleOAuthCallback from "./components/auth/GoogleOAuthCallback";

import LoginForm from "./components/auth/LoginForm/LoginForm";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import RegisterForm from "./components/auth/RegisterForm/RegisterForm";
import InstructorDashboard from "./pages/Dashboard/InstructoDashboard";
import AllCoursesPage from "./components/studant/Assignment/AllCourses"; // Import the AllCoursesPage component
import Footer from "./components/common/Footer/Footer";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              courses={AllCoursesPage.courses} // Pass courses data to HomePage
            />
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/courses" element={<AllCoursesPage />} />{" "}
        <Route path="/auth/google/callback" element={<GoogleOAuthCallback />} />
        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute roles={["student"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        {/* Instructor Routes */}
        <Route
          path="/instructor/dashboard"
          element={
            <ProtectedRoute roles={["instructor"]}>
              <InstructorDashboard />
            </ProtectedRoute>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeContextProvider>
  );
}

export default App;
