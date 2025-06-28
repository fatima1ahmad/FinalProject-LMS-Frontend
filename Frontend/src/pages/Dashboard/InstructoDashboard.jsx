import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  CircularProgress,
  Container,
  Stack,
  IconButton,
  Fade,
  Grow,
} from "@mui/material";
import {
  Assignment as AssignmentIcon,
  Quiz as QuizIcon,
  BarChart as BarChartIcon,
  People as PeopleIcon,
  Add as AddIcon,
  Book as BookIcon,
  Edit as EditIcon,
  Refresh as RefreshIcon,
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
  Timeline as TimelineIcon,
  AutoStories as AutoStoriesIcon,
} from "@mui/icons-material";

import InstructorSidebar from "../../components/common/Sidebar/InstructorSidebar";
import Header from "../../components/common/Header/Header";
import InstructorDashboardView from "./InstructorDashboardView";
import CourseForm from "../instructor/CourseForm";
import AssignmentsList from "../../components/assignmnet/AssignmentsList";
import StudentEnrollmentDashboardd from "../instructor/EnrollmentStats";
import QuizPage from "../../components/assignmnet/QuizPage";
import Settings from "../../components/common/Settings/Settings";
import InstructorService from "../../services/instructorService";
import { useNavigate } from "react-router-dom";
import VisualizationView from "../instructor/StudantEnrollment";

const InstructorDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const drawerWidth = 240;
  const collapsedWidth = 72;
  const navigate = useNavigate();

  // State management
  const [currentView, setCurrentView] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses when My Courses view is selected
  useEffect(() => {
    if (currentView === "my-courses") {
      fetchCourses();
    }
  }, [currentView]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await InstructorService.getInstructorCourses();

      // Handle different response structures
      const coursesData = Array.isArray(response)
        ? response
        : Array.isArray(response?.data)
        ? response.data
        : [];

      setCourses(coursesData);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
      setError("Failed to load courses. Please try again.");
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleCreateCourse = () => {
    setEditingCourse(null);
    setCurrentView("create-course");
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setCurrentView("create-course");
  };

  const handleBackToDashboard = () => {
    setEditingCourse(null);
    setCurrentView("dashboard");
  };

  const handleViewCourseDetails = (courseId) => {
    navigate(`/instructor/courses/${courseId}`);
  };

  const getStatusColor = (status) => {
    if (!status) return "default";
    switch (status.toLowerCase()) {
      case "published":
        return "success";
      case "draft":
        return "warning";
      case "pending":
        return "info";
      case "rejected":
        return "error";
      default:
        return "default";
    }
  };

  // Modern styled components
  const ModernCard = ({ children, delay = 0, ...props }) => (
    <Grow in timeout={1000 + delay}>
      <Card
        sx={{
          background:
            "linear-gradient(145deg, #ffffff 0%, #f8faff 40%, #f1f5ff 100%)",
          borderRadius: 4,
          border: "1px solid rgba(99, 102, 241, 0.12)",
          boxShadow:
            "0 8px 32px rgba(99, 102, 241, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
            pointerEvents: "none",
          },
          "&:hover": {
            transform: "translateY(-8px) scale(1.02)",
            boxShadow:
              "0 16px 48px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
            borderColor: "rgba(99, 102, 241, 0.2)",
          },
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </Card>
    </Grow>
  );

  const ModernButton = ({
    children,
    variant = "contained",
    color = "#6366f1",
    ...props
  }) => (
    <Button
      variant={variant}
      sx={{
        borderRadius: 3,
        px: 4,
        py: 1.5,
        fontWeight: 700,
        textTransform: "none",
        fontSize: "0.95rem",
        letterSpacing: "0.02em",
        background:
          variant === "contained"
            ? `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`
            : "transparent",
        border: variant === "outlined" ? `2px solid ${color}40` : "none",
        color: variant === "contained" ? "#ffffff" : color,
        boxShadow:
          variant === "contained"
            ? `0 4px 16px ${color}30, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
            : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-2px) scale(1.05)",
          boxShadow:
            variant === "contained"
              ? `0 8px 24px ${color}40, inset 0 1px 0 rgba(255, 255, 255, 0.3)`
              : `0 4px 16px ${color}20`,
          background:
            variant === "contained"
              ? `linear-gradient(135deg, ${color}ee 0%, ${color}cc 100%)`
              : `${color}08`,
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );

  const MyCoursesView = () => (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Fade in timeout={800}>
        <Box>
          {/* Header Section */}
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)",
              borderRadius: 4,
              p: 4,
              mb: 4,
              border: "1px solid rgba(99, 102, 241, 0.12)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background:
                  "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
              },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
              spacing={3}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 70%, #ec4899 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  My Courses
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#64748b",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  Manage all your published and draft courses
                </Typography>
              </Box>
              <ModernButton
                startIcon={<AddIcon />}
                onClick={handleCreateCourse}
                sx={{ minWidth: 200 }}
              >
                Create New Course
              </ModernButton>
            </Stack>
          </Box>

          {/* Content Section */}
          {error ? (
            <ModernCard>
              <CardContent sx={{ textAlign: "center", py: 6 }}>
                <BookIcon
                  sx={{ fontSize: 80, color: "#ef4444", mb: 3, opacity: 0.8 }}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#ef4444", fontWeight: 700 }}
                >
                  {error}
                </Typography>
                <ModernButton
                  variant="outlined"
                  startIcon={<RefreshIcon />}
                  onClick={fetchCourses}
                  color="#ef4444"
                  sx={{ mt: 2 }}
                >
                  Retry
                </ModernButton>
              </CardContent>
            </ModernCard>
          ) : loading ? (
            <Box display="flex" justifyContent="center" py={8}>
              <CircularProgress
                size={80}
                sx={{
                  color: "#6366f1",
                  filter: "drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))",
                }}
              />
            </Box>
          ) : courses.length === 0 ? (
            <ModernCard>
              <CardContent sx={{ textAlign: "center", py: 8 }}>
                <AutoStoriesIcon
                  sx={{ fontSize: 100, color: "#6366f1", mb: 3, opacity: 0.8 }}
                />
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: "#1e293b",
                    mb: 2,
                  }}
                >
                  No courses yet
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#64748b",
                    mb: 4,
                    maxWidth: 500,
                    mx: "auto",
                  }}
                >
                  Start your teaching journey by creating your first course
                </Typography>
                <ModernButton
                  startIcon={<AddIcon />}
                  onClick={handleCreateCourse}
                  sx={{ py: 2, px: 6 }}
                >
                  Create Your First Course
                </ModernButton>
              </CardContent>
            </ModernCard>
          ) : (
            <Grid container spacing={4}>
              {courses.map((course, index) => (
                <Grid item xs={12} md={4} key={course._id || course.id}>
                  <ModernCard delay={index * 100}>
                    {course.thumbnail_url && (
                      <Box
                        sx={{
                          height: 200,
                          backgroundImage: `url(${course.thumbnail_url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          position: "relative",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "50%",
                            background:
                              "linear-gradient(transparent, rgba(0,0,0,0.3))",
                          },
                        }}
                      />
                    )}
                    <CardContent sx={{ p: 3 }}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        mb={2}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#1e293b",
                            lineHeight: 1.3,
                          }}
                        >
                          {course.title || "Untitled Course"}
                        </Typography>
                        <Chip
                          label={course.status || "unknown"}
                          size="medium"
                          color={getStatusColor(course.status)}
                          sx={{
                            textTransform: "capitalize",
                            fontWeight: 600,
                            borderRadius: 2,
                          }}
                        />
                      </Stack>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#64748b",
                          mb: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {course.description
                          ? course.description.length > 120
                            ? `${course.description.substring(0, 120)}...`
                            : course.description
                          : "No description available"}
                      </Typography>

                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        mb={3}
                      >
                        <PeopleIcon sx={{ color: "#6366f1", fontSize: 20 }} />
                        <Typography
                          variant="body1"
                          sx={{ color: "#475569", fontWeight: 600 }}
                        >
                          {course.enrolledStudents || 0} students enrolled
                        </Typography>
                      </Stack>
                    </CardContent>

                    <Box sx={{ p: 3, pt: 0 }}>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          onClick={() =>
                            handleViewCourseDetails(course._id || course.id)
                          }
                          sx={{
                            flex: 1,
                            borderRadius: 2,
                            border: "2px solid rgba(99, 102, 241, 0.3)",
                            color: "#6366f1",
                            fontWeight: 600,
                            "&:hover": {
                              borderColor: "#6366f1",
                              background: "rgba(99, 102, 241, 0.05)",
                            },
                          }}
                        >
                          View Details
                        </Button>
                        <IconButton
                          onClick={() => handleEditCourse(course)}
                          sx={{
                            background:
                              "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                            color: "white",
                            borderRadius: 2,
                            p: 1.5,
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #5856eb 0%, #7c3aed 100%)",
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Stack>
                    </Box>
                  </ModernCard>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Fade>
    </Container>
  );

  const AssignmentsView = () => (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Fade in timeout={800}>
        <Box>
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)",
              borderRadius: 4,
              p: 4,
              mb: 4,
              border: "1px solid rgba(16, 185, 129, 0.12)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #10b981 0%, #22c55e 100%)",
              },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
              spacing={3}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #10b981 0%, #22c55e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  Assignments
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#64748b",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  Create and manage course assignments
                </Typography>
              </Box>
              <ModernButton
                startIcon={<AssignmentIcon />}
                color="#10b981"
                sx={{ minWidth: 200 }}
              >
                Create Assignment
              </ModernButton>
            </Stack>
          </Box>
          <ModernCard>
            <AssignmentsList />
          </ModernCard>
        </Box>
      </Fade>
    </Container>
  );

  const QuizzesView = () => (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Fade in timeout={800}>
        <ModernCard>
          <QuizPage />
        </ModernCard>
      </Fade>
    </Container>
  );

  const SettingsView = () => (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Fade in timeout={800}>
        <ModernCard>
          <Settings />
        </ModernCard>
      </Fade>
    </Container>
  );

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <InstructorDashboardView
            onCreateCourse={handleCreateCourse}
            onEditCourse={handleEditCourse}
          />
        );
      case "my-courses":
        return <MyCoursesView />;
      case "create-course":
        return (
          <Container maxWidth="xl" sx={{ py: 4 }}>
            <ModernCard>
              <CourseForm
                course={editingCourse}
                onBack={handleBackToDashboard}
                onSuccess={() => {
                  handleBackToDashboard();
                  fetchCourses();
                }}
              />
            </ModernCard>
          </Container>
        );
      case "enrollment-stats":
        return (
          <Container maxWidth="xl" sx={{ py: 4 }}>
            <ModernCard>
              <StudentEnrollmentDashboardd />
            </ModernCard>
          </Container>
        );
      case "assignments":
        return <AssignmentsView />;
      case "visualization":
        return (
          <Container maxWidth="xl" sx={{ py: 4 }}>
            <ModernCard>
              <VisualizationView />
            </ModernCard>
          </Container>
        );
      case "quizzes":
        return <QuizzesView />;
      case "settings":
        return <SettingsView />;
      default:
        return (
          <InstructorDashboardView
            onCreateCourse={handleCreateCourse}
            onEditCourse={handleEditCourse}
          />
        );
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <CssBaseline />
      <Header />
      <InstructorSidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
        currentView={currentView}
        onViewChange={handleViewChange}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 10,
          width: {
            sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`,
          },
          background:
            "linear-gradient(145deg, #ffffff 0%, #f8faff 40%, #f1f5ff 100%)",
          height: "100vh",
          position: "relative",
          overflowY: "auto",
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.02) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: 0,
          },
          "& > *": {
            position: "relative",
            zIndex: 1,
          },
        }}
      >
        {renderView()}
      </Box>
    </Box>
  );
};

export default InstructorDashboard;
