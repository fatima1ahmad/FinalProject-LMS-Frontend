import React from "react";
import { Routes, Route } from "react-router-dom";
import InstructorDashboard from "../pages/Dashboard/InstructoDashboard";
import CourseList from "../pages/instructor/CourseList";
import CourseForm from "../pages/instructor/CourseForm";
import CourseDetails from "../pages/instructor/CourseDetails";
import ModuleForm from "../pages/instructor/ModuleForm";
import LessonForm from "../pages/instructor/LessonForm";
import ModuleDetails from "../pages/instructor/ModuleDetails";
import StudentEnrollmentDashboard from "../pages/instructor/EnrollmentStats";
import AssignmentsList from "../components/assignmnet/AssignmentsList"; // <-- لازم تعمل الصفحة هذي
import QuizPage from "../components/assignmnet/QuizPage"; // أو ال
import StudentEnrollmentDashboardd from "../pages/instructor/StudantEnrollment";
const InstructorRoutes = () => {
  return (
    <Routes>
      <Route path="/modules/:moduleId" element={<ModuleDetails />} />

      <Route path="/dashboard" element={<InstructorDashboard />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/courses/create" element={<CourseForm />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="/courses/edit/:courseId" element={<CourseForm />} />
      <Route path="/courses/:courseId/modules/new" element={<ModuleForm />} />
      <Route
        path="/courses/:courseId/modules/:moduleId/edit"
        element={<ModuleForm />}
      />
      <Route path="enrollments" element={<StudentEnrollmentDashboard />} />

      <Route path="modules/:moduleId/lessons/new" element={<LessonForm />} />
      <Route path="lessons/:lessonId/edit" element={<LessonForm />} />

      {/* هنا أضفت مسار تفاصيل الواجب */}
      <Route path="/assignments" element={<AssignmentsList />} />
      <Route path="/Quizze" element={<QuizPage />} />
      <Route path="/Visualization" element={<StudentEnrollmentDashboardd />} />
    </Routes>
  );
};

export default InstructorRoutes;
