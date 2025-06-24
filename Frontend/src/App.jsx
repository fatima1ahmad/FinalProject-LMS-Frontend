// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import { ThemeProvider, createTheme } from "@mui/material/styles";
// // // import CssBaseline from "@mui/material/CssBaseline";
// // // import { AuthProvider } from "./contexts/AuthContext/AuthContext";
// // // import { ThemeProvider } from "./contexts/ThemeContext"; // ✅ New import

// // // import HomePage from "./pages/HomePage/HomePage";
// // // import LoginForm from "./components/auth/LoginForm/LoginForm";
// // // import StudentDashboard from "./pages/Dashboard/StudentDashboard";
// // // import InstructorDashboard from "./pages/Dashboard/InstructoDashboard";
// // // import AdminDashboard from "./pages/Dashboard/AdminDashboard";
// // // import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
// // // import RegisterForm from "./components/auth/RegisterForm/RegisterForm";
// // // import "./styles/base.css";
// // // import "./styles/global.css";

// // // const theme = createTheme({
// // //   palette: {
// // //     primary: { main: "#1976d2" },
// // //     secondary: { main: "#9c27b0" },
// // //     error: { main: "#d32f2f" },
// // //     background: { default: "#f5f5f5" },
// // //   },
// // //   typography: {
// // //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
// // //   },
// // // });

// // // const AppRoutes = () => {
// // //   return (
// // //     <Routes>
// // //       <Route path="/" element={<HomePage />} />
// // //       <Route path="/login" element={<LoginForm />} />
// // //       <Route path="/register" element={<RegisterForm />} />

// // //       {/* Protected routes */}
// // //       <Route
// // //         path="/student/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["student"]}>
// // //             <StudentDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <InstructorDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/admin/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["admin"]}>
// // //             <AdminDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />

// // //       <Route path="*" element={<div>404 Not Found</div>} />
// // //     </Routes>
// // //   );
// // // };

// // // function App() {
// // //   return (
// // //     <ThemeProvider theme={theme}>
// // //       <CssBaseline />
// // //       <AuthProvider>
// // //         <Router>
// // //           <AppRoutes />
// // //         </Router>
// // //       </AuthProvider>
// // //     </ThemeProvider>
// // //   );
// // // }

// // // export default App;
// // // App.js
// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import CssBaseline from "@mui/material/CssBaseline";
// // // import { AuthProvider } from "./contexts/AuthContext/AuthContext";
// // // import { ThemeProvider } from "./contexts/ThemeContext"; // ✅ New import
// // // import HomePage from "./pages/HomePage/HomePage";
// // // import LoginForm from "./components/auth/LoginForm/LoginForm";
// // // import StudentDashboard from "./pages/Dashboard/StudentDashboard";
// // // import InstructorDashboard from "./pages/Dashboard/InstructoDashboard";
// // // import AdminDashboard from "./pages/Dashboard/AdminDashboard";
// // // import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
// // // import RegisterForm from "./components/auth/RegisterForm/RegisterForm";
// // // import InstructorCourses from "./components/instructor/InstructorCourses/InstructorCourses";
// // // import CourseForm from "./components/instructor/InstructorCourses/CourseForm";
// // // import CourseDetails from "./components/instructor/InstructorCourses/Mycourses";
// // // import "./styles/base.css";
// // // import "./styles/global.css";
// // // const AppRoutes = () => {
// // //   return (
// // //     <Routes>
// // //       <Route path="/" element={<HomePage />} />
// // //       <Route path="/login" element={<LoginForm />} />
// // //       <Route path="/register" element={<RegisterForm />} />

// // //       {/* Student Routes */}
// // //       <Route
// // //         path="/student/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["student"]}>
// // //             <StudentDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />

// // //       {/* Instructor Routes */}
// // //       <Route
// // //         path="/instructor/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <InstructorDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <InstructorCourses />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/new"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <CourseForm />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/:id"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <CourseDetails />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/:id/edit"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <CourseForm />
// // //           </ProtectedRoute>
// // //         }
// // //       />

// // //       {/* Admin Routes */}
// // //       <Route
// // //         path="/admin/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["admin"]}>
// // //             <AdminDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />

// // //       <Route path="*" element={<div>404 Not Found</div>} />
// // //     </Routes>
// // //   );
// // // };

// // // function App() {
// // //   return (
// // //     <ThemeProvider>
// // //       <CssBaseline />
// // //       <AuthProvider>
// // //         <Router>
// // //           <AppRoutes />
// // //         </Router>
// // //       </AuthProvider>
// // //     </ThemeProvider>
// // //   );
// // // }

// // // export default App;
// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import CssBaseline from "@mui/material/CssBaseline";
// // // import { AuthProvider } from "./contexts/AuthContext/AuthContext";
// // // import { ThemeProvider } from "./contexts/ThemeContext";
// // // import HomePage from "./pages/HomePage/HomePage";
// // // import LoginForm from "./components/auth/LoginForm/LoginForm";
// // // import StudentDashboard from "./pages/Dashboard/StudentDashboard";
// // // import InstructorDashboard from "./pages/Dashboard/InstructoDashboard";
// // // import AdminDashboard from "./pages/Dashboard/AdminDashboard";
// // // import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
// // // import RegisterForm from "./components/auth/RegisterForm/RegisterForm";
// // // import "./styles/base.css";
// // // import "./styles/global.css";

// // // // Import the new course management components
// // // import CoursesPage from "./pages/instructor/CoursesPage";
// // // import CourseDetailPage from "./components/instructor/InstructorCourses/CourseDetailPage";
// // // import CourseForm from "./components/instructor/InstructorCourses/CourseForm";
// // // import ModuleForm from "./components/instructor/InstructorCourses/ModuleList";
// // // import LessonForm from "./components/instructor/InstructorCourses/MaterialList";

// // // const AppRoutes = () => {
// // //   return (
// // //     <Routes>
// // //       <Route path="/" element={<HomePage />} />
// // //       <Route path="/login" element={<LoginForm />} />
// // //       <Route path="/register" element={<RegisterForm />} />

// // //       {/* Student Routes */}
// // //       <Route
// // //         path="/student/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["student"]}>
// // //             <StudentDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />

// // //       {/* Instructor Routes */}
// // //       <Route
// // //         path="/instructor/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <InstructorDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />

// // //       {/* Course Management Routes */}
// // //       <Route
// // //         path="/instructor/courses"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <CoursesPage />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/new"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <CourseForm />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/:courseId"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <CourseDetailPage />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/:courseId/edit"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <CourseForm isEditMode />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/:courseId/modules/new"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <ModuleForm />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/:courseId/modules/:moduleId/edit"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <ModuleForm isEditMode />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/:courseId/modules/:moduleId/lessons/new"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <LessonForm />
// // //           </ProtectedRoute>
// // //         }
// // //       />
// // //       <Route
// // //         path="/instructor/courses/:courseId/modules/:moduleId/lessons/:lessonId/edit"
// // //         element={
// // //           <ProtectedRoute roles={["instructor"]}>
// // //             <LessonForm isEditMode />
// // //           </ProtectedRoute>
// // //         }
// // //       />

// // //       {/* Admin Routes */}
// // //       <Route
// // //         path="/admin/dashboard"
// // //         element={
// // //           <ProtectedRoute roles={["admin"]}>
// // //             <AdminDashboard />
// // //           </ProtectedRoute>
// // //         }
// // //       />

// // //       <Route path="*" element={<div>404 Not Found</div>} />
// // //     </Routes>
// // //   );
// // // };

// // // function App() {
// // //   return (
// // //     <ThemeProvider>
// // //       <CssBaseline />
// // //       <AuthProvider>
// // //         <Router>
// // //           <AppRoutes />
// // //         </Router>
// // //       </AuthProvider>
// // //     </ThemeProvider>
// // //   );
// // // }

// // // export default App;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import CssBaseline from "@mui/material/CssBaseline";
// // import { AuthProvider } from "./contexts/AuthContext/AuthContext";
// // import { ThemeContextProvider } from "./contexts/ThemeContext";
// // import HomePage from "./pages/HomePage/HomePage";
// // import LoginForm from "./components/auth/LoginForm/LoginForm";
// // import StudentDashboard from "./pages/Dashboard/StudentDashboard";
// // import AdminDashboard from "./pages/Dashboard/AdminDashboard";
// // import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
// // import RegisterForm from "./components/auth/RegisterForm/RegisterForm";
// // import "./styles/base.css";
// // import "./styles/global.css";
// // import InstructorRoutes from "./router/InstructorRoutes";

// // const AppRoutes = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<HomePage />} />
// //       <Route path="/login" element={<LoginForm />} />
// //       <Route path="/register" element={<RegisterForm />} />

// //       {/* Student Routes */}
// //       <Route
// //         path="/student/dashboard"
// //         element={
// //           <ProtectedRoute roles={["student"]}>
// //             <StudentDashboard />
// //           </ProtectedRoute>
// //         }
// //       />

// //       {/* Instructor Routes - New Structure */}
// //       <Route path="/instructor/*">
// //         <Route
// //           path="*"
// //           element={
// //             <ProtectedRoute roles={["instructor"]}>
// //               <InstructorRoutes />
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Route>

// //       {/* Admin Routes */}
// //       <Route
// //         path="/admin/dashboard"
// //         element={
// //           <ProtectedRoute roles={["admin"]}>
// //             <AdminDashboard />
// //           </ProtectedRoute>
// //         }
// //       />

// //       <Route path="*" element={<div>404 Not Found</div>} />
// //     </Routes>
// //   );
// // };

// // function App() {
// //   return (
// //     <ThemeContextProvider>
// //       <CssBaseline />
// //       <AuthProvider>
// //         <Router>
// //           <AppRoutes />
// //         </Router>
// //       </AuthProvider>
// //     </ThemeContextProvider>
// //   );
// // }

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CssBaseline from "@mui/material/CssBaseline";
// import { AuthProvider } from "./contexts/AuthContext/AuthContext";
// import { ThemeContextProvider } from "./contexts/ThemeContext";
// import HomePage from "./pages/HomePage/HomePage";
// import LoginForm from "./components/auth/LoginForm/LoginForm";
// import StudentDashboard from "./pages/Dashboard/StudentDashboard";
// import AdminDashboard from "./pages/Dashboard/AdminDashboard";
// import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
// import RegisterForm from "./components/auth/RegisterForm/RegisterForm";
// import InstructorDashboard from "./pages/Dashboard/InstructoDashboard";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/register" element={<RegisterForm />} />

//       {/* Student Routes */}
//       <Route
//         path="/student/dashboard"
//         element={
//           <ProtectedRoute roles={["student"]}>
//             <StudentDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Instructor Routes */}
//       <Route
//         path="/instructor/dashboard"
//         element={
//           <ProtectedRoute roles={["instructor"]}>
//             <InstructorDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Admin Routes */}
//       <Route
//         path="/admin/dashboard"
//         element={
//           <ProtectedRoute roles={["admin"]}>
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />

//       <Route path="*" element={<div>404 Not Found</div>} />
//     </Routes>
//   );
// };

// function App() {
//   return (
//     <ThemeContextProvider>
//       <CssBaseline />
//       <AuthProvider>
//         <Router>
//           <AppRoutes />
//         </Router>
//       </AuthProvider>
//     </ThemeContextProvider>
//   );
// }

// export default App;
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

const AppRoutes = () => {
  return (
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
