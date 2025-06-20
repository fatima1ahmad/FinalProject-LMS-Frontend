import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
  Divider,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  School,
  Assignment,
  CheckCircle,
  EventNote,
  Lightbulb,
} from "@mui/icons-material";
import CourseCard from "../../components/studant/CourseCard";
import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
import CourseService from "../../services/StudentService";
import EnrollmentService from "../../services/EnrollemtServices";
import { dashboardStyles } from "../../theme/studentStyle";

const StatCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[6],
  },
}));

const motivationalQuotes = [
  "The expert in anything was once a beginner.",
  "Your education is a dress rehearsal for a life that is yours to lead.",
  "Don't watch the clock; do what it does. Keep going.",
  // ... keep your other quotes
];

const AllCoursesPage = ({ userName }) => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
  const [stats, setStats] = useState({
    totalEnrolled: 0,
    assignmentsDue: 0,
    completedAssignments: 0,
    coursesInProgress: 0,
  });
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    setRandomQuote(
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    );
  }, []);

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

        setCourses(allCourses);
        setEnrolledCourses(userEnrollments);

        // Calculate statistics
        const now = new Date();
        const enrolledIds = userEnrollments.map((e) => e.course_id);
        const enrolledCourses = allCourses.filter((c) =>
          enrolledIds.includes(c.id)
        );

        const allAssignments = enrolledCourses.flatMap(
          (course) => course.assignments || []
        );

        setStats({
          totalEnrolled: enrolledIds.length,
          assignmentsDue: allAssignments.filter(
            (a) => !a.completed && new Date(a.due_date) > now
          ).length,
          completedAssignments: allAssignments.filter((a) => a.completed)
            .length,
          coursesInProgress: enrolledCourses.filter(
            (c) => c.progress && c.progress < 100
          ).length,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
      setEnrolledCourses(updatedEnrollments);
      setEnrollmentDialogOpen(false);
    } catch (error) {
      console.error("Error enrolling:", error);
    }
  };

  return (
    <Container maxWidth="xl">
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
          Welcome back, {userName}!
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, color: "text.secondary" }}>
          <Lightbulb color="warning" sx={{ verticalAlign: "middle", mr: 1 }} />
          {randomQuote}
        </Typography>
        <Divider sx={{ my: 3 }} />
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  <School />
                </Avatar>
                <Box>
                  <Typography variant="h6">Enrolled Courses</Typography>
                  <Typography variant="h4">{stats.totalEnrolled}</Typography>
                </Box>
              </Box>
            </CardContent>
          </StatCard>
        </Grid>
        {/* Other stat cards... */}
      </Grid>

      {/* Courses Grid */}
      <Typography variant="h4" component="h1" sx={dashboardStyles.title}>
        All Courses
      </Typography>

      {loading ? (
        <Box sx={dashboardStyles.loadingContainer}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {courses.length > 0 ? (
            courses.map((course) => {
              const isEnrolled = enrolledCourses.some(
                (enroll) => enroll.course_id === course.id
              );

              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                  <CourseCard
                    course={course}
                    isEnrolled={isEnrolled}
                    onEnrollClick={handleEnrollClick}
                  />
                </Grid>
              );
            })
          ) : (
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                No courses found
              </Typography>
            </Grid>
          )}
        </Grid>
      )}

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
