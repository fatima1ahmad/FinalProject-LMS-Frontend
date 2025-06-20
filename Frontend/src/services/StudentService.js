// CourseService.js
import api from "../api/index";
import { API_ENDPOINTS } from "../constants/ApiEndpoints";

const CourseService = {
  getAllCourses: async () => {
    try {
      const response = await api.get(API_ENDPOINTS.COURSES.GET_ALL);
      return response.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  },

  getCourseDetails: async (courseId) => {
    try {
      const response = await api.get(
        API_ENDPOINTS.COURSES.GET_COURSE.replace(":id", courseId)
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching course details:", error);
      throw error;
    }
  },
};

export default CourseService;
