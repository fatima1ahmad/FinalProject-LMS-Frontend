import api from "../api/index";
import { API_ENDPOINTS } from "../constants/ApiEndpoints";

const CourseService = {
  getPendingCourses: async () => {
    try {
      const response = await api.get(API_ENDPOINTS.ADMIN.PENDING_COURSES);
      return response.data.courses;
    } catch (error) {
      console.error("Error fetching pending courses:", error);
      throw error;
    }
  },

  approveCourse: async (courseId, feedback = "") => {
    try {
      // جرب هذا:
      const response = feedback
        ? await api.patch(
            API_ENDPOINTS.ADMIN.APPROVE_COURSE.replace(":courseId", courseId),
            { feedback }
          )
        : await api.patch(
            API_ENDPOINTS.ADMIN.APPROVE_COURSE.replace(":courseId", courseId)
          );
      return response.data;
    } catch (error) {
      console.error("Error approving course:", error);
      throw error;
    }
  },

  rejectCourse: async (courseId, feedback) => {
    try {
      const response = await api.patch(
        API_ENDPOINTS.ADMIN.REJECT_COURSE.replace(":courseId", courseId),
        { feedback }
      );
      return response.data;
    } catch (error) {
      console.error("Error rejecting course:", error);
      throw error;
    }
  },

  getCourseDetails: async (courseId) => {
    try {
      const response = await api.get(
        API_ENDPOINTS.COURSES.GET_COURSE.replace(":courseId", courseId)
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching course details:", error);
      throw error;
    }
  },
};

export default CourseService;
