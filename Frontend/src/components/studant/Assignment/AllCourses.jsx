import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";
import CourseService from "../../../services/StudentService";
import EnrollmentService from "../../../services/EnrollemtServices";
import CourseCard from "../../../components/studant/CourseCard";
import EnrollmentDialog from "../../../components/studant/EnrollmentDialog";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
          [
            CourseService.getAllCourses(),
            EnrollmentService.getUserEnrollments(),
          ]
        );

        const allCourses = Array.isArray(allCoursesResponse)
          ? allCoursesResponse
          : allCoursesResponse?.data || [];

        const userEnrollments = Array.isArray(userEnrollmentsResponse)
          ? userEnrollmentsResponse
          : userEnrollmentsResponse?.data || [];

        const enrolledIds = userEnrollments.map((e) => e.course_id);

        setCourses(allCourses);
        setEnrolledCourseIds(enrolledIds);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setEnrollmentDialogOpen(true);
  };

  const handleEnroll = async () => {
    try {
      await EnrollmentService.enrollUser(selectedCourse.id);
      const updatedEnrollments = await EnrollmentService.getUserEnrollments();
      setEnrolledCourseIds(updatedEnrollments.map((e) => e.course_id));
      setEnrollmentDialogOpen(false);
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" py={6}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ pt: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight={700}>
        All Courses
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => {
          const isEnrolled = enrolledCourseIds.includes(course.id);
          return (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <CourseCard
                course={course}
                isEnrolled={isEnrolled}
                onEnrollClick={!isEnrolled ? handleEnrollClick : null}
              />
            </Grid>
          );
        })}
      </Grid>

      <EnrollmentDialog
        open={enrollmentDialogOpen}
        onClose={() => setEnrollmentDialogOpen(false)}
        course={selectedCourse}
        onEnroll={handleEnroll}
      />
    </Container>
  );
};

export default AllCoursesPage;
