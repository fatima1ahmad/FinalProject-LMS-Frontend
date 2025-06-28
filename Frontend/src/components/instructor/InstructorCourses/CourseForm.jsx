import React, { useState } from "react";
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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Assignment as AssignmentIcon,
  Quiz as QuizIcon,
  BarChart as BarChartIcon,
  People as PeopleIcon,
  Visibility as VisibilityIcon,
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
  CheckCircle as CheckCircleIcon,
  Add as AddIcon,
  Book as BookIcon,
} from "@mui/icons-material";

import InstructorSidebar from "../../components/common/Sidebar/InstructorSidebar";
import Header from "../../components/common/Sidebar/AdminHeader";
import InstructorDashboardView from "./InstructorDashboardView";
import CourseForm from "../instructor/CourseForm";
import AssignmentsList from "../../components/assignmnet/AssignmentsList";
import StudentEnrollmentDashboardd from "../instructor/EnrollmentStats";
import QuizPage from "../../components/assignmnet/QuizPage";

const InstructorDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const drawerWidth = 240;
  const collapsedWidth = 72;

  // State for managing the current view
  const [currentView, setCurrentView] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // State for course editing
  const [editingCourse, setEditingCourse] = useState(null);

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

  // Handle creating a new course
  const handleCreateCourse = () => {
    setEditingCourse(null);
    setCurrentView("create-course");
  };

  // Handle editing an existing course
  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setCurrentView("create-course");
  };

  // Handle going back to dashboard after course operations
  const handleBackToDashboard = () => {
    setEditingCourse(null);
    setCurrentView("dashboard");
  };

  // Clean components without mock data
  const MyCoursesView = () => (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            My Courses
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Manage all your published and draft courses
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreateCourse}
          sx={{ borderRadius: 2, px: 3 }}
        >
          Create New Course
        </Button>
      </Box>

      {/* This will be populated with real data from your API */}
      <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
        <BookIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Your courses will appear here
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Start by creating your first course to see it listed here
        </Typography>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleCreateCourse}
          sx={{ borderRadius: 2 }}
        >
          Create Your First Course
        </Button>
      </Paper>
    </Box>
  );

  // Fixed Assignments View
  const AssignmentsView = () => (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Assignments
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Create and manage course assignments
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AssignmentIcon />}
          sx={{ borderRadius: 2, px: 3 }}
        >
          Create Assignment
        </Button>
      </Box>

      {/* Render the AssignmentsList component */}
      <AssignmentsList />
    </Box>
  );

  const VisualizationView = () => (
    <Box>
      <StudentEnrollmentDashboardd />
    </Box>
  );

  // Updated QuizzesView to render your QuizPage component
  const QuizzesView = () => (
    <Box>
      <QuizPage />
    </Box>
  );

  const SettingsView = () => (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Settings
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        Manage your account and preferences
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Settings
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Update your profile information and preferences
            </Typography>
            {/* Add your profile settings form here */}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>
              Notification Settings
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Configure how you want to receive notifications
            </Typography>
            {/* Add your notification settings here */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );

  // Render the appropriate view based on currentView state
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
          <CourseForm
            course={editingCourse}
            onBack={handleBackToDashboard}
            onSuccess={handleBackToDashboard}
          />
        );
      case "enrollment-stats":
        return <StudentEnrollmentDashboardd />;
      case "assignments":
        return <AssignmentsView />;
      case "visualization":
        return <VisualizationView />;
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
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
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
          p: 5,
          pt: 13,
          width: {
            sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`,
          },
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        {renderView()}
      </Box>
    </Box>
  );
};

export default InstructorDashboard;
