// // // // // // import React, { useState } from "react";
// // // // // // import {
// // // // // //   Box,
// // // // // //   CssBaseline,
// // // // // //   useTheme,
// // // // // //   useMediaQuery,
// // // // // //   Typography,
// // // // // //   Paper,
// // // // // //   Grid,
// // // // // //   Card,
// // // // // //   CardContent,
// // // // // //   Button,
// // // // // //   Chip,
// // // // // //   Avatar,
// // // // // //   List,
// // // // // //   ListItem,
// // // // // //   ListItemText,
// // // // // //   ListItemIcon,
// // // // // //   Divider,
// // // // // // } from "@mui/material";
// // // // // // import {
// // // // // //   Assignment as AssignmentIcon,
// // // // // //   Quiz as QuizIcon,
// // // // // //   BarChart as BarChartIcon,
// // // // // //   People as PeopleIcon,
// // // // // //   Visibility as VisibilityIcon,
// // // // // //   TrendingUp as TrendingUpIcon,
// // // // // //   School as SchoolIcon,
// // // // // //   CheckCircle as CheckCircleIcon,
// // // // // //   Add as AddIcon,
// // // // // //   Book as BookIcon,
// // // // // // } from "@mui/icons-material";

// // // // // // import InstructorSidebar from "../../components/common/Sidebar/InstructorSidebar";
// // // // // // import Header from "../../components/common/Sidebar/AdminHeader";
// // // // // // import InstructorDashboardView from "./InstructorDashboardView";
// // // // // // import CourseForm from "../instructor/CourseForm";
// // // // // // import AssignmentsList from "../../components/assignmnet/AssignmentsList"; // Fixed import path
// // // // // // import StudentEnrollmentDashboardd from "../instructor/EnrollmentStats";
// // // // // // import QuizPage from "../../components/assignmnet/QuizPage"; // Add your actual import path here

// // // // // // const InstructorDashboard = () => {
// // // // // //   const theme = useTheme();
// // // // // //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// // // // // //   const drawerWidth = 240;
// // // // // //   const collapsedWidth = 72;

// // // // // //   // State for managing the current view
// // // // // //   const [currentView, setCurrentView] = useState("dashboard");
// // // // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // // // //   const [collapsed, setCollapsed] = useState(false);

// // // // // //   // State for course editing
// // // // // //   const [editingCourse, setEditingCourse] = useState(null);

// // // // // //   const handleDrawerToggle = () => {
// // // // // //     if (isMobile) {
// // // // // //       setMobileOpen(!mobileOpen);
// // // // // //     } else {
// // // // // //       setCollapsed(!collapsed);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleViewChange = (view) => {
// // // // // //     setCurrentView(view);
// // // // // //     if (isMobile) {
// // // // // //       setMobileOpen(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle creating a new course
// // // // // //   const handleCreateCourse = () => {
// // // // // //     setEditingCourse(null);
// // // // // //     setCurrentView("create-course");
// // // // // //   };

// // // // // //   // Handle editing an existing course
// // // // // //   const handleEditCourse = (course) => {
// // // // // //     setEditingCourse(course);
// // // // // //     setCurrentView("create-course");
// // // // // //   };

// // // // // //   // Handle going back to dashboard after course operations
// // // // // //   const handleBackToDashboard = () => {
// // // // // //     setEditingCourse(null);
// // // // // //     setCurrentView("dashboard");
// // // // // //   };

// // // // // //   // Clean components without mock data
// // // // // //   const MyCoursesView = () => (
// // // // // //     <Box>
// // // // // //       <Box
// // // // // //         display="flex"
// // // // // //         justifyContent="space-between"
// // // // // //         alignItems="center"
// // // // // //         mb={4}
// // // // // //       >
// // // // // //         <Box>
// // // // // //           <Typography variant="h4" gutterBottom fontWeight="bold">
// // // // // //             My Courses
// // // // // //           </Typography>
// // // // // //           <Typography variant="body1" color="textSecondary">
// // // // // //             Manage all your published and draft courses
// // // // // //           </Typography>
// // // // // //         </Box>
// // // // // //         <Button
// // // // // //           variant="contained"
// // // // // //           startIcon={<AddIcon />}
// // // // // //           onClick={handleCreateCourse}
// // // // // //           sx={{ borderRadius: 2, px: 3 }}
// // // // // //         >
// // // // // //           Create New Course
// // // // // //         </Button>
// // // // // //       </Box>

// // // // // //       {/* This will be populated with real data from your API */}
// // // // // //       <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
// // // // // //         <BookIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
// // // // // //         <Typography variant="h6" gutterBottom>
// // // // // //           Your courses will appear here
// // // // // //         </Typography>
// // // // // //         <Typography variant="body2" color="textSecondary" mb={3}>
// // // // // //           Start by creating your first course to see it listed here
// // // // // //         </Typography>
// // // // // //         <Button
// // // // // //           variant="outlined"
// // // // // //           startIcon={<AddIcon />}
// // // // // //           onClick={handleCreateCourse}
// // // // // //           sx={{ borderRadius: 2 }}
// // // // // //         >
// // // // // //           Create Your First Course
// // // // // //         </Button>
// // // // // //       </Paper>
// // // // // //     </Box>
// // // // // //   );

// // // // // //   // Fixed Assignments View
// // // // // //   const AssignmentsView = () => (
// // // // // //     <Box>
// // // // // //       <Box
// // // // // //         display="flex"
// // // // // //         justifyContent="space-between"
// // // // // //         alignItems="center"
// // // // // //         mb={4}
// // // // // //       >
// // // // // //         <Box>
// // // // // //           <Typography variant="h4" gutterBottom fontWeight="bold">
// // // // // //             Assignments
// // // // // //           </Typography>
// // // // // //           <Typography variant="body1" color="textSecondary">
// // // // // //             Create and manage course assignments
// // // // // //           </Typography>
// // // // // //         </Box>
// // // // // //         <Button
// // // // // //           variant="contained"
// // // // // //           startIcon={<AssignmentIcon />}
// // // // // //           sx={{ borderRadius: 2, px: 3 }}
// // // // // //         >
// // // // // //           Create Assignment
// // // // // //         </Button>
// // // // // //       </Box>

// // // // // //       {/* Render the AssignmentsList component */}
// // // // // //       <AssignmentsList />
// // // // // //     </Box>
// // // // // //   );

// // // // // //   const VisualizationView = () => (
// // // // // //     <Box>
// // // // // //       <Typography variant="h4" gutterBottom fontWeight="bold">
// // // // // //         Data Visualization
// // // // // //       </Typography>
// // // // // //       <Typography variant="body1" color="textSecondary" mb={4}>
// // // // // //         Visual insights into your course performance
// // // // // //       </Typography>

// // // // // //       <Grid container spacing={3}>
// // // // // //         <Grid item xs={12} md={6}>
// // // // // //           <Paper sx={{ p: 3, height: 300, borderRadius: 3 }}>
// // // // // //             <Typography variant="h6" gutterBottom>
// // // // // //               Student Progress Analytics
// // // // // //             </Typography>
// // // // // //             <Box
// // // // // //               display="flex"
// // // // // //               alignItems="center"
// // // // // //               justifyContent="center"
// // // // // //               height="80%"
// // // // // //               sx={{
// // // // // //                 backgroundColor: "grey.50",
// // // // // //                 borderRadius: 2,
// // // // // //                 flexDirection: "column",
// // // // // //                 gap: 2,
// // // // // //               }}
// // // // // //             >
// // // // // //               <VisibilityIcon sx={{ fontSize: 48, color: "primary.main" }} />
// // // // // //               <Typography variant="body1" color="textSecondary">
// // // // // //                 Analytics charts will be integrated here
// // // // // //               </Typography>
// // // // // //             </Box>
// // // // // //           </Paper>
// // // // // //         </Grid>

// // // // // //         <Grid item xs={12} md={6}>
// // // // // //           <Paper sx={{ p: 3, height: 300, borderRadius: 3 }}>
// // // // // //             <Typography variant="h6" gutterBottom>
// // // // // //               Engagement Metrics
// // // // // //             </Typography>
// // // // // //             <Box
// // // // // //               display="flex"
// // // // // //               alignItems="center"
// // // // // //               justifyContent="center"
// // // // // //               height="80%"
// // // // // //               sx={{
// // // // // //                 backgroundColor: "grey.50",
// // // // // //                 borderRadius: 2,
// // // // // //                 flexDirection: "column",
// // // // // //                 gap: 2,
// // // // // //               }}
// // // // // //             >
// // // // // //               <BarChartIcon sx={{ fontSize: 48, color: "success.main" }} />
// // // // // //               <Typography variant="body1" color="textSecondary">
// // // // // //                 Real-time engagement data will appear here
// // // // // //               </Typography>
// // // // // //             </Box>
// // // // // //           </Paper>
// // // // // //         </Grid>
// // // // // //       </Grid>
// // // // // //     </Box>
// // // // // //   );

// // // // // //   // Updated QuizzesView to render your QuizPage component
// // // // // //   const QuizzesView = () => (
// // // // // //     <Box>
// // // // // //       <QuizPage />
// // // // // //     </Box>
// // // // // //   );

// // // // // //   const SettingsView = () => (
// // // // // //     <Box>
// // // // // //       <Typography variant="h4" gutterBottom fontWeight="bold">
// // // // // //         Settings
// // // // // //       </Typography>
// // // // // //       <Typography variant="body1" color="textSecondary" mb={4}>
// // // // // //         Manage your account and preferences
// // // // // //       </Typography>

// // // // // //       <Grid container spacing={3}>
// // // // // //         <Grid item xs={12} md={6}>
// // // // // //           <Paper sx={{ p: 3, borderRadius: 3 }}>
// // // // // //             <Typography variant="h6" gutterBottom>
// // // // // //               Profile Settings
// // // // // //             </Typography>
// // // // // //             <Typography variant="body2" color="textSecondary">
// // // // // //               Update your profile information and preferences
// // // // // //             </Typography>
// // // // // //             {/* Add your profile settings form here */}
// // // // // //           </Paper>
// // // // // //         </Grid>

// // // // // //         <Grid item xs={12} md={6}>
// // // // // //           <Paper sx={{ p: 3, borderRadius: 3 }}>
// // // // // //             <Typography variant="h6" gutterBottom>
// // // // // //               Notification Settings
// // // // // //             </Typography>
// // // // // //             <Typography variant="body2" color="textSecondary">
// // // // // //               Configure how you want to receive notifications
// // // // // //             </Typography>
// // // // // //             {/* Add your notification settings here */}
// // // // // //           </Paper>
// // // // // //         </Grid>
// // // // // //       </Grid>
// // // // // //     </Box>
// // // // // //   );

// // // // // //   // Render the appropriate view based on currentView state
// // // // // //   const renderView = () => {
// // // // // //     switch (currentView) {
// // // // // //       case "dashboard":
// // // // // //         return (
// // // // // //           <InstructorDashboardView
// // // // // //             onCreateCourse={handleCreateCourse}
// // // // // //             onEditCourse={handleEditCourse}
// // // // // //           />
// // // // // //         );
// // // // // //       case "my-courses":
// // // // // //         return <MyCoursesView />;
// // // // // //       case "create-course":
// // // // // //         return (
// // // // // //           <CourseForm
// // // // // //             course={editingCourse}
// // // // // //             onBack={handleBackToDashboard}
// // // // // //             onSuccess={handleBackToDashboard}
// // // // // //           />
// // // // // //         );
// // // // // //       case "enrollment-stats":
// // // // // //         return <StudentEnrollmentDashboardd />;
// // // // // //       case "assignments":
// // // // // //         return <AssignmentsView />; // Fixed: Now uses the proper AssignmentsView
// // // // // //       case "visualization":
// // // // // //         return <VisualizationView />;
// // // // // //       case "quizzes":
// // // // // //         return <QuizzesView />; // Now renders your QuizPage component
// // // // // //       case "settings":
// // // // // //         return <SettingsView />;
// // // // // //       default:
// // // // // //         return (
// // // // // //           <InstructorDashboardView
// // // // // //             onCreateCourse={handleCreateCourse}
// // // // // //             onEditCourse={handleEditCourse}
// // // // // //           />
// // // // // //         );
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <Box sx={{ display: "flex", minHeight: "100vh" }}>
// // // // // //       <CssBaseline />
// // // // // //       <Header />
// // // // // //       <InstructorSidebar
// // // // // //         mobileOpen={mobileOpen}
// // // // // //         handleDrawerToggle={handleDrawerToggle}
// // // // // //         collapsed={collapsed}
// // // // // //         setCollapsed={setCollapsed}
// // // // // //         isMobile={isMobile}
// // // // // //         currentView={currentView}
// // // // // //         onViewChange={handleViewChange}
// // // // // //       />

// // // // // //       <Box
// // // // // //         component="main"
// // // // // //         sx={{
// // // // // //           flexGrow: 1,
// // // // // //           p: 5,
// // // // // //           pt: 13,
// // // // // //           width: {
// // // // // //             sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`,
// // // // // //           },
// // // // // //           backgroundColor: theme.palette.background.default,
// // // // // //           minHeight: "100vh",
// // // // // //         }}
// // // // // //       >
// // // // // //         {renderView()}
// // // // // //       </Box>
// // // // // //     </Box>
// // // // // //   );
// // // // // // };

// // // // // // export default InstructorDashboard;
// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   Box,
// // // // //   CssBaseline,
// // // // //   useTheme,
// // // // //   useMediaQuery,
// // // // //   Typography,
// // // // //   Paper,
// // // // //   Grid,
// // // // //   Card,
// // // // //   CardContent,
// // // // //   Button,
// // // // //   Chip,
// // // // //   Avatar,
// // // // //   List,
// // // // //   ListItem,
// // // // //   ListItemText,
// // // // //   ListItemIcon,
// // // // //   Divider,
// // // // // } from "@mui/material";
// // // // // import {
// // // // //   Assignment as AssignmentIcon,
// // // // //   Quiz as QuizIcon,
// // // // //   BarChart as BarChartIcon,
// // // // //   People as PeopleIcon,
// // // // //   Visibility as VisibilityIcon,
// // // // //   TrendingUp as TrendingUpIcon,
// // // // //   School as SchoolIcon,
// // // // //   CheckCircle as CheckCircleIcon,
// // // // //   Add as AddIcon,
// // // // //   Book as BookIcon,
// // // // // } from "@mui/icons-material";

// // // // // import InstructorSidebar from "../../components/common/Sidebar/InstructorSidebar";
// // // // // import Header from "../../components/common/Sidebar/AdminHeader";
// // // // // import InstructorDashboardView from "./InstructorDashboardView";
// // // // // import CourseForm from "../instructor/CourseForm";
// // // // // import AssignmentsList from "../../components/assignmnet/AssignmentsList";
// // // // // import StudentEnrollmentDashboardd from "../instructor/EnrollmentStats";
// // // // // import QuizPage from "../../components/assignmnet/QuizPage";

// // // // // const InstructorDashboard = () => {
// // // // //   const theme = useTheme();
// // // // //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// // // // //   const drawerWidth = 240;
// // // // //   const collapsedWidth = 72;

// // // // //   // State for managing the current view
// // // // //   const [currentView, setCurrentView] = useState("dashboard");
// // // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // // //   const [collapsed, setCollapsed] = useState(false);

// // // // //   // State for course editing
// // // // //   const [editingCourse, setEditingCourse] = useState(null);

// // // // //   const handleDrawerToggle = () => {
// // // // //     if (isMobile) {
// // // // //       setMobileOpen(!mobileOpen);
// // // // //     } else {
// // // // //       setCollapsed(!collapsed);
// // // // //     }
// // // // //   };

// // // // //   const handleViewChange = (view) => {
// // // // //     setCurrentView(view);
// // // // //     if (isMobile) {
// // // // //       setMobileOpen(false);
// // // // //     }
// // // // //   };

// // // // //   // Handle creating a new course
// // // // //   const handleCreateCourse = () => {
// // // // //     setEditingCourse(null);
// // // // //     setCurrentView("create-course");
// // // // //   };

// // // // //   // Handle editing an existing course
// // // // //   const handleEditCourse = (course) => {
// // // // //     setEditingCourse(course);
// // // // //     setCurrentView("create-course");
// // // // //   };

// // // // //   // Handle going back to dashboard after course operations
// // // // //   const handleBackToDashboard = () => {
// // // // //     setEditingCourse(null);
// // // // //     setCurrentView("dashboard");
// // // // //   };

// // // // //   // Clean components without mock data
// // // // //   const MyCoursesView = () => (
// // // // //     <Box>
// // // // //       <Box
// // // // //         display="flex"
// // // // //         justifyContent="space-between"
// // // // //         alignItems="center"
// // // // //         mb={4}
// // // // //       >
// // // // //         <Box>
// // // // //           <Typography variant="h4" gutterBottom fontWeight="bold">
// // // // //             My Courses
// // // // //           </Typography>
// // // // //           <Typography variant="body1" color="textSecondary">
// // // // //             Manage all your published and draft courses
// // // // //           </Typography>
// // // // //         </Box>
// // // // //         <Button
// // // // //           variant="contained"
// // // // //           startIcon={<AddIcon />}
// // // // //           onClick={handleCreateCourse}
// // // // //           sx={{ borderRadius: 2, px: 3 }}
// // // // //         >
// // // // //           Create New Course
// // // // //         </Button>
// // // // //       </Box>

// // // // //       {/* This will be populated with real data from your API */}
// // // // //       <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
// // // // //         <BookIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
// // // // //         <Typography variant="h6" gutterBottom>
// // // // //           Your courses will appear here
// // // // //         </Typography>
// // // // //         <Typography variant="body2" color="textSecondary" mb={3}>
// // // // //           Start by creating your first course to see it listed here
// // // // //         </Typography>
// // // // //         <Button
// // // // //           variant="outlined"
// // // // //           startIcon={<AddIcon />}
// // // // //           onClick={handleCreateCourse}
// // // // //           sx={{ borderRadius: 2 }}
// // // // //         >
// // // // //           Create Your First Course
// // // // //         </Button>
// // // // //       </Paper>
// // // // //     </Box>
// // // // //   );

// // // // //   // Fixed Assignments View
// // // // //   const AssignmentsView = () => (
// // // // //     <Box>
// // // // //       <Box
// // // // //         display="flex"
// // // // //         justifyContent="space-between"
// // // // //         alignItems="center"
// // // // //         mb={4}
// // // // //       >
// // // // //         <Box>
// // // // //           <Typography variant="h4" gutterBottom fontWeight="bold">
// // // // //             Assignments
// // // // //           </Typography>
// // // // //           <Typography variant="body1" color="textSecondary">
// // // // //             Create and manage course assignments
// // // // //           </Typography>
// // // // //         </Box>
// // // // //         <Button
// // // // //           variant="contained"
// // // // //           startIcon={<AssignmentIcon />}
// // // // //           sx={{ borderRadius: 2, px: 3 }}
// // // // //         >
// // // // //           Create Assignment
// // // // //         </Button>
// // // // //       </Box>

// // // // //       {/* Render the AssignmentsList component */}
// // // // //       <AssignmentsList />
// // // // //     </Box>
// // // // //   );

// // // // //   // const student = () => (
// // // // //   //   <Box>
// // // // //   //     <StudentEnrollmentDashboardd />
// // // // //   //   </Box>
// // // // //   // );
// // // // //     const VisualizationView = () => (
// // // // //     <Box>
// // // // //       <StudentEnrollmentDashboardd />
// // // // //     </Box>
// // // // //   );

// // // // //   // Updated QuizzesView to render your QuizPage component
// // // // //   const QuizzesView = () => (
// // // // //     <Box>
// // // // //       <QuizPage />
// // // // //     </Box>
// // // // //   );

// // // // //   const SettingsView = () => (
// // // // //     <Box>
// // // // //       <Typography variant="h4" gutterBottom fontWeight="bold">
// // // // //         Settings
// // // // //       </Typography>
// // // // //       <Typography variant="body1" color="textSecondary" mb={4}>
// // // // //         Manage your account and preferences
// // // // //       </Typography>

// // // // //       <Grid container spacing={3}>
// // // // //         <Grid item xs={12} md={6}>
// // // // //           <Paper sx={{ p: 3, borderRadius: 3 }}>
// // // // //             <Typography variant="h6" gutterBottom>
// // // // //               Profile Settings
// // // // //             </Typography>
// // // // //             <Typography variant="body2" color="textSecondary">
// // // // //               Update your profile information and preferences
// // // // //             </Typography>
// // // // //             {/* Add your profile settings form here */}
// // // // //           </Paper>
// // // // //         </Grid>

// // // // //         <Grid item xs={12} md={6}>
// // // // //           <Paper sx={{ p: 3, borderRadius: 3 }}>
// // // // //             <Typography variant="h6" gutterBottom>
// // // // //               Notification Settings
// // // // //             </Typography>
// // // // //             <Typography variant="body2" color="textSecondary">
// // // // //               Configure how you want to receive notifications
// // // // //             </Typography>
// // // // //             {/* Add your notification settings here */}
// // // // //           </Paper>
// // // // //         </Grid>
// // // // //       </Grid>
// // // // //     </Box>
// // // // //   );

// // // // //   // Render the appropriate view based on currentView state
// // // // //   const renderView = () => {
// // // // //     switch (currentView) {
// // // // //       case "dashboard":
// // // // //         return (
// // // // //           <InstructorDashboardView
// // // // //             onCreateCourse={handleCreateCourse}
// // // // //             onEditCourse={handleEditCourse}
// // // // //           />
// // // // //         );
// // // // //       case "my-courses":
// // // // //         return <MyCoursesView />;
// // // // //       case "create-course":
// // // // //         return (
// // // // //           <CourseForm
// // // // //             course={editingCourse}
// // // // //             onBack={handleBackToDashboard}
// // // // //             onSuccess={handleBackToDashboard}
// // // // //           />
// // // // //         );
// // // // //       case "enrollment-stats":
// // // // //         return <StudentEnrollmentDashboardd />;
// // // // //       case "assignments":
// // // // //         return <AssignmentsView />;
// // // // //       case "visualization":
// // // // //         return <VisualizationView />;
// // // // //       case "quizzes":
// // // // //         return <QuizzesView />;
// // // // //       case "settings":
// // // // //         return <SettingsView />;
// // // // //       default:
// // // // //         return (
// // // // //           <InstructorDashboardView
// // // // //             onCreateCourse={handleCreateCourse}
// // // // //             onEditCourse={handleEditCourse}
// // // // //           />
// // // // //         );
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <Box sx={{ display: "flex", minHeight: "100vh" }}>
// // // // //       <CssBaseline />
// // // // //       <Header />
// // // // //       <InstructorSidebar
// // // // //         mobileOpen={mobileOpen}
// // // // //         handleDrawerToggle={handleDrawerToggle}
// // // // //         collapsed={collapsed}
// // // // //         setCollapsed={setCollapsed}
// // // // //         isMobile={isMobile}
// // // // //         currentView={currentView}
// // // // //         onViewChange={handleViewChange}
// // // // //       />

// // // // //       <Box
// // // // //         component="main"
// // // // //         sx={{
// // // // //           flexGrow: 1,
// // // // //           p: 5,
// // // // //           pt: 13,
// // // // //           width: {
// // // // //             sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`,
// // // // //           },
// // // // //           backgroundColor: theme.palette.background.default,
// // // // //           minHeight: "100vh",
// // // // //         }}
// // // // //       >
// // // // //         {renderView()}
// // // // //       </Box>
// // // // //     </Box>
// // // // //   );
// // // // // };

// // // // // export default InstructorDashboard;
// // // // import React, { useState } from "react";
// // // // import {
// // // //   Box,
// // // //   CssBaseline,
// // // //   useTheme,
// // // //   useMediaQuery,
// // // //   Typography,
// // // //   Paper,
// // // //   Grid,
// // // //   Card,
// // // //   CardContent,
// // // //   Button,
// // // //   Chip,
// // // //   Avatar,
// // // //   List,
// // // //   ListItem,
// // // //   ListItemText,
// // // //   ListItemIcon,
// // // //   Divider,
// // // // } from "@mui/material";
// // // // import {
// // // //   Assignment as AssignmentIcon,
// // // //   Quiz as QuizIcon,
// // // //   BarChart as BarChartIcon,
// // // //   People as PeopleIcon,
// // // //   Visibility as VisibilityIcon,
// // // //   TrendingUp as TrendingUpIcon,
// // // //   School as SchoolIcon,
// // // //   CheckCircle as CheckCircleIcon,
// // // //   Add as AddIcon,
// // // //   Book as BookIcon,
// // // // } from "@mui/icons-material";

// // // // import InstructorSidebar from "../../components/common/Sidebar/InstructorSidebar";
// // // // import Header from "../../components/common/Sidebar/AdminHeader";
// // // // import InstructorDashboardView from "./InstructorDashboardView";
// // // // import CourseForm from "../instructor/CourseForm";
// // // // import AssignmentsList from "../../components/assignmnet/AssignmentsList";
// // // // import StudentEnrollmentDashboardd from "../instructor/EnrollmentStats";
// // // // import QuizPage from "../../components/assignmnet/QuizPage";
// // // // import Settings from "../../components/common/Settings/Settings"; // Import the Settings component

// // // // const InstructorDashboard = () => {
// // // //   const theme = useTheme();
// // // //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// // // //   const drawerWidth = 240;
// // // //   const collapsedWidth = 72;

// // // //   // State for managing the current view
// // // //   const [currentView, setCurrentView] = useState("dashboard");
// // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // //   const [collapsed, setCollapsed] = useState(false);

// // // //   // State for course editing
// // // //   const [editingCourse, setEditingCourse] = useState(null);

// // // //   const handleDrawerToggle = () => {
// // // //     if (isMobile) {
// // // //       setMobileOpen(!mobileOpen);
// // // //     } else {
// // // //       setCollapsed(!collapsed);
// // // //     }
// // // //   };

// // // //   const handleViewChange = (view) => {
// // // //     setCurrentView(view);
// // // //     if (isMobile) {
// // // //       setMobileOpen(false);
// // // //     }
// // // //   };

// // // //   // Handle creating a new course
// // // //   const handleCreateCourse = () => {
// // // //     setEditingCourse(null);
// // // //     setCurrentView("create-course");
// // // //   };

// // // //   // Handle editing an existing course
// // // //   const handleEditCourse = (course) => {
// // // //     setEditingCourse(course);
// // // //     setCurrentView("create-course");
// // // //   };

// // // //   // Handle going back to dashboard after course operations
// // // //   const handleBackToDashboard = () => {
// // // //     setEditingCourse(null);
// // // //     setCurrentView("dashboard");
// // // //   };

// // // //   // Clean components without mock data
// // // //   const MyCoursesView = () => (
// // // //     <Box>
// // // //       <Box
// // // //         display="flex"
// // // //         justifyContent="space-between"
// // // //         alignItems="center"
// // // //         mb={4}
// // // //       >
// // // //         <Box>
// // // //           <Typography variant="h4" gutterBottom fontWeight="bold">
// // // //             My Courses
// // // //           </Typography>
// // // //           <Typography variant="body1" color="textSecondary">
// // // //             Manage all your published and draft courses
// // // //           </Typography>
// // // //         </Box>
// // // //         <Button
// // // //           variant="contained"
// // // //           startIcon={<AddIcon />}
// // // //           onClick={handleCreateCourse}
// // // //           sx={{ borderRadius: 2, px: 3 }}
// // // //         >
// // // //           Create New Course
// // // //         </Button>
// // // //       </Box>

// // // //       {/* This will be populated with real data from your API */}
// // // //       <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
// // // //         <BookIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
// // // //         <Typography variant="h6" gutterBottom>
// // // //           Your courses will appear here
// // // //         </Typography>
// // // //         <Typography variant="body2" color="textSecondary" mb={3}>
// // // //           Start by creating your first course to see it listed here
// // // //         </Typography>
// // // //         <Button
// // // //           variant="outlined"
// // // //           startIcon={<AddIcon />}
// // // //           onClick={handleCreateCourse}
// // // //           sx={{ borderRadius: 2 }}
// // // //         >
// // // //           Create Your First Course
// // // //         </Button>
// // // //       </Paper>
// // // //     </Box>
// // // //   );

// // // //   // Fixed Assignments View
// // // //   const AssignmentsView = () => (
// // // //     <Box>
// // // //       <Box
// // // //         display="flex"
// // // //         justifyContent="space-between"
// // // //         alignItems="center"
// // // //         mb={4}
// // // //       >
// // // //         <Box>
// // // //           <Typography variant="h4" gutterBottom fontWeight="bold">
// // // //             Assignments
// // // //           </Typography>
// // // //           <Typography variant="body1" color="textSecondary">
// // // //             Create and manage course assignments
// // // //           </Typography>
// // // //         </Box>
// // // //         <Button
// // // //           variant="contained"
// // // //           startIcon={<AssignmentIcon />}
// // // //           sx={{ borderRadius: 2, px: 3 }}
// // // //         >
// // // //           Create Assignment
// // // //         </Button>
// // // //       </Box>

// // // //       {/* Render the AssignmentsList component */}
// // // //       <AssignmentsList />
// // // //     </Box>
// // // //   );

// // // //   const VisualizationView = () => (
// // // //     <Box>
// // // //       <StudentEnrollmentDashboardd />
// // // //     </Box>
// // // //   );

// // // //   // Updated QuizzesView to render your QuizPage component
// // // //   const QuizzesView = () => (
// // // //     <Box>
// // // //       <QuizPage />
// // // //     </Box>
// // // //   );

// // // //   // Settings View - Now using your imported Settings component
// // // //   const SettingsView = () => (
// // // //     <Box>
// // // //       <Settings />
// // // //     </Box>
// // // //   );

// // // //   // Render the appropriate view based on currentView state
// // // //   const renderView = () => {
// // // //     switch (currentView) {
// // // //       case "dashboard":
// // // //         return (
// // // //           <InstructorDashboardView
// // // //             onCreateCourse={handleCreateCourse}
// // // //             onEditCourse={handleEditCourse}
// // // //           />
// // // //         );
// // // //       case "my-courses":
// // // //         return <MyCoursesView />;
// // // //       case "create-course":
// // // //         return (
// // // //           <CourseForm
// // // //             course={editingCourse}
// // // //             onBack={handleBackToDashboard}
// // // //             onSuccess={handleBackToDashboard}
// // // //           />
// // // //         );
// // // //       case "enrollment-stats":
// // // //         return <StudentEnrollmentDashboardd />;
// // // //       case "assignments":
// // // //         return <AssignmentsView />;
// // // //       case "visualization":
// // // //         return <VisualizationView />;
// // // //       case "quizzes":
// // // //         return <QuizzesView />;
// // // //       case "settings":
// // // //         return <SettingsView />;
// // // //       default:
// // // //         return (
// // // //           <InstructorDashboardView
// // // //             onCreateCourse={handleCreateCourse}
// // // //             onEditCourse={handleEditCourse}
// // // //           />
// // // //         );
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Box sx={{ display: "flex", minHeight: "100vh" }}>
// // // //       <CssBaseline />
// // // //       <Header />
// // // //       <InstructorSidebar
// // // //         mobileOpen={mobileOpen}
// // // //         handleDrawerToggle={handleDrawerToggle}
// // // //         collapsed={collapsed}
// // // //         setCollapsed={setCollapsed}
// // // //         isMobile={isMobile}
// // // //         currentView={currentView}
// // // //         onViewChange={handleViewChange}
// // // //       />

// // // //       <Box
// // // //         component="main"
// // // //         sx={{
// // // //           flexGrow: 1,
// // // //           p: 5,
// // // //           pt: 13,
// // // //           width: {
// // // //             sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`,
// // // //           },
// // // //           backgroundColor: theme.palette.background.default,
// // // //           minHeight: "100vh",
// // // //         }}
// // // //       >
// // // //         {renderView()}
// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default InstructorDashboard;
// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   Box,
// // //   CssBaseline,
// // //   useTheme,
// // //   useMediaQuery,
// // //   Typography,
// // //   Paper,
// // //   Grid,
// // //   Card,
// // //   CardContent,
// // //   Button,
// // //   Chip,
// // //   Avatar,
// // //   List,
// // //   ListItem,
// // //   ListItemText,
// // //   ListItemIcon,
// // //   Divider,
// // //   CircularProgress,
// // // } from "@mui/material";
// // // import {
// // //   Assignment as AssignmentIcon,
// // //   Quiz as QuizIcon,
// // //   BarChart as BarChartIcon,
// // //   People as PeopleIcon,
// // //   Visibility as VisibilityIcon,
// // //   TrendingUp as TrendingUpIcon,
// // //   School as SchoolIcon,
// // //   CheckCircle as CheckCircleIcon,
// // //   Add as AddIcon,
// // //   Book as BookIcon,
// // //   Edit as EditIcon,
// // //   Delete as DeleteIcon,
// // // } from "@mui/icons-material";

// // // import InstructorSidebar from "../../components/common/Sidebar/InstructorSidebar";
// // // import Header from "../../components/common/Sidebar/AdminHeader";
// // // import InstructorDashboardView from "./InstructorDashboardView";
// // // import CourseForm from "../instructor/CourseForm";
// // // import AssignmentsList from "../../components/assignmnet/AssignmentsList";
// // // import StudentEnrollmentDashboardd from "../instructor/EnrollmentStats";
// // // import QuizPage from "../../components/assignmnet/QuizPage";
// // // import Settings from "../../components/common/Settings/Settings";
// // // import InstructorService from "../../services/instructorService";
// // // import { useNavigate } from "react-router-dom";

// // // const InstructorDashboard = () => {
// // //   const theme = useTheme();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// // //   const drawerWidth = 240;
// // //   const collapsedWidth = 72;
// // //   const navigate = useNavigate();

// // //   // State for managing the current view
// // //   const [currentView, setCurrentView] = useState("dashboard");
// // //   const [mobileOpen, setMobileOpen] = useState(false);
// // //   const [collapsed, setCollapsed] = useState(false);
// // //   const [editingCourse, setEditingCourse] = useState(null);
// // //   const [courses, setCourses] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     if (currentView === "my-courses") {
// // //       fetchCourses();
// // //     }
// // //   }, [currentView]);

// // //   const fetchCourses = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const data = await InstructorService.getInstructorCourses();
// // //       setCourses(data);
// // //     } catch (error) {
// // //       console.error("Failed to fetch courses:", error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleDrawerToggle = () => {
// // //     if (isMobile) {
// // //       setMobileOpen(!mobileOpen);
// // //     } else {
// // //       setCollapsed(!collapsed);
// // //     }
// // //   };

// // //   const handleViewChange = (view) => {
// // //     setCurrentView(view);
// // //     if (isMobile) {
// // //       setMobileOpen(false);
// // //     }
// // //   };

// // //   const handleCreateCourse = () => {
// // //     setEditingCourse(null);
// // //     setCurrentView("create-course");
// // //   };

// // //   const handleEditCourse = (course) => {
// // //     setEditingCourse(course);
// // //     setCurrentView("create-course");
// // //   };

// // //   const handleBackToDashboard = () => {
// // //     setEditingCourse(null);
// // //     setCurrentView("dashboard");
// // //   };

// // //   const handleViewCourseDetails = (courseId) => {
// // //     navigate(`/instructor/courses/${courseId}`);
// // //   };

// // //   const getStatusColor = (status) => {
// // //     switch (status.toLowerCase()) {
// // //       case "published":
// // //         return "success";
// // //       case "draft":
// // //         return "warning";
// // //       case "pending":
// // //         return "info";
// // //       case "rejected":
// // //         return "error";
// // //       default:
// // //         return "default";
// // //     }
// // //   };

// // //   const MyCoursesView = () => (
// // //     <Box>
// // //       <Box
// // //         display="flex"
// // //         justifyContent="space-between"
// // //         alignItems="center"
// // //         mb={4}
// // //       >
// // //         <Box>
// // //           <Typography variant="h4" gutterBottom fontWeight="bold">
// // //             My Courses
// // //           </Typography>
// // //           <Typography variant="body1" color="textSecondary">
// // //             Manage all your published and draft courses
// // //           </Typography>
// // //         </Box>
// // //         <Button
// // //           variant="contained"
// // //           startIcon={<AddIcon />}
// // //           onClick={handleCreateCourse}
// // //           sx={{ borderRadius: 2, px: 3 }}
// // //         >
// // //           Create New Course
// // //         </Button>
// // //       </Box>

// // //       {loading ? (
// // //         <Box display="flex" justifyContent="center" my={4}>
// // //           <CircularProgress />
// // //         </Box>
// // //       ) : courses.length === 0 ? (
// // //         <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
// // //           <BookIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
// // //           <Typography variant="h6" gutterBottom>
// // //             You don't have any courses yet
// // //           </Typography>
// // //           <Typography variant="body2" color="textSecondary" mb={3}>
// // //             Start by creating your first course to see it listed here
// // //           </Typography>
// // //           <Button
// // //             variant="outlined"
// // //             startIcon={<AddIcon />}
// // //             onClick={handleCreateCourse}
// // //             sx={{ borderRadius: 2 }}
// // //           >
// // //             Create Your First Course
// // //           </Button>
// // //         </Paper>
// // //       ) : (
// // //         <Grid container spacing={3}>
// // //           {courses.map((course) => (
// // //             <Grid item xs={12} sm={6} md={4} key={course._id}>
// // //               <Card
// // //                 sx={{
// // //                   height: "100%",
// // //                   display: "flex",
// // //                   flexDirection: "column",
// // //                   transition: "transform 0.3s, box-shadow 0.3s",
// // //                   "&:hover": {
// // //                     transform: "translateY(-5px)",
// // //                     boxShadow: 3,
// // //                   },
// // //                 }}
// // //               >
// // //                 {course.thumbnail_url && (
// // //                   <Box
// // //                     sx={{
// // //                       height: 140,
// // //                       backgroundImage: `url(${course.thumbnail_url})`,
// // //                       backgroundSize: "cover",
// // //                       backgroundPosition: "center",
// // //                     }}
// // //                   />
// // //                 )}
// // //                 <CardContent sx={{ flexGrow: 1 }}>
// // //                   <Box
// // //                     display="flex"
// // //                     justifyContent="space-between"
// // //                     alignItems="flex-start"
// // //                     mb={1}
// // //                   >
// // //                     <Typography
// // //                       variant="h6"
// // //                       component="h3"
// // //                       sx={{ fontWeight: 600 }}
// // //                     >
// // //                       {course.title}
// // //                     </Typography>
// // //                     <Chip
// // //                       label={course.status}
// // //                       size="small"
// // //                       color={getStatusColor(course.status)}
// // //                       sx={{ textTransform: "capitalize" }}
// // //                     />
// // //                   </Box>
// // //                   <Typography
// // //                     variant="body2"
// // //                     color="text.secondary"
// // //                     sx={{ mb: 2 }}
// // //                   >
// // //                     {course.description.length > 100
// // //                       ? `${course.description.substring(0, 100)}...`
// // //                       : course.description}
// // //                   </Typography>
// // //                   <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
// // //                     <PeopleIcon
// // //                       fontSize="small"
// // //                       sx={{ mr: 1, color: "text.secondary" }}
// // //                     />
// // //                     <Typography variant="body2" color="text.secondary">
// // //                       {course.enrolledStudents || 0} students
// // //                     </Typography>
// // //                   </Box>
// // //                 </CardContent>
// // //                 <Box
// // //                   sx={{
// // //                     p: 2,
// // //                     display: "flex",
// // //                     justifyContent: "space-between",
// // //                   }}
// // //                 >
// // //                   <Button
// // //                     size="small"
// // //                     onClick={() => handleViewCourseDetails(course._id)}
// // //                     sx={{ mr: 1 }}
// // //                   >
// // //                     View Details
// // //                   </Button>
// // //                   <Box>
// // //                     <IconButton
// // //                       size="small"
// // //                       onClick={() => handleEditCourse(course)}
// // //                       sx={{ mr: 1 }}
// // //                     >
// // //                       <EditIcon fontSize="small" />
// // //                     </IconButton>
// // //                   </Box>
// // //                 </Box>
// // //               </Card>
// // //             </Grid>
// // //           ))}
// // //         </Grid>
// // //       )}
// // //     </Box>
// // //   );

// // //   const AssignmentsView = () => (
// // //     <Box>
// // //       <Box
// // //         display="flex"
// // //         justifyContent="space-between"
// // //         alignItems="center"
// // //         mb={4}
// // //       >
// // //         <Box>
// // //           <Typography variant="h4" gutterBottom fontWeight="bold">
// // //             Assignments
// // //           </Typography>
// // //           <Typography variant="body1" color="textSecondary">
// // //             Create and manage course assignments
// // //           </Typography>
// // //         </Box>
// // //         <Button
// // //           variant="contained"
// // //           startIcon={<AssignmentIcon />}
// // //           sx={{ borderRadius: 2, px: 3 }}
// // //         >
// // //           Create Assignment
// // //         </Button>
// // //       </Box>
// // //       <AssignmentsList />
// // //     </Box>
// // //   );

// // //   const VisualizationView = () => (
// // //     <Box>
// // //       <StudentEnrollmentDashboardd />
// // //     </Box>
// // //   );

// // //   const QuizzesView = () => (
// // //     <Box>
// // //       <QuizPage />
// // //     </Box>
// // //   );

// // //   const SettingsView = () => (
// // //     <Box>
// // //       <Settings />
// // //     </Box>
// // //   );

// // //   const renderView = () => {
// // //     switch (currentView) {
// // //       case "dashboard":
// // //         return (
// // //           <InstructorDashboardView
// // //             onCreateCourse={handleCreateCourse}
// // //             onEditCourse={handleEditCourse}
// // //           />
// // //         );
// // //       case "my-courses":
// // //         return <MyCoursesView />;
// // //       case "create-course":
// // //         return (
// // //           <CourseForm
// // //             course={editingCourse}
// // //             onBack={handleBackToDashboard}
// // //             onSuccess={handleBackToDashboard}
// // //           />
// // //         );
// // //       case "enrollment-stats":
// // //         return <StudentEnrollmentDashboardd />;
// // //       case "assignments":
// // //         return <AssignmentsView />;
// // //       case "visualization":
// // //         return <VisualizationView />;
// // //       case "quizzes":
// // //         return <QuizzesView />;
// // //       case "settings":
// // //         return <SettingsView />;
// // //       default:
// // //         return (
// // //           <InstructorDashboardView
// // //             onCreateCourse={handleCreateCourse}
// // //             onEditCourse={handleEditCourse}
// // //           />
// // //         );
// // //     }
// // //   };

// // //   return (
// // //     <Box sx={{ display: "flex", minHeight: "100vh" }}>
// // //       <CssBaseline />
// // //       <Header />
// // //       <InstructorSidebar
// // //         mobileOpen={mobileOpen}
// // //         handleDrawerToggle={handleDrawerToggle}
// // //         collapsed={collapsed}
// // //         setCollapsed={setCollapsed}
// // //         isMobile={isMobile}
// // //         currentView={currentView}
// // //         onViewChange={handleViewChange}
// // //       />

// // //       <Box
// // //         component="main"
// // //         sx={{
// // //           flexGrow: 1,
// // //           p: 5,
// // //           pt: 13,
// // //           width: {
// // //             sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`,
// // //           },
// // //           backgroundColor: theme.palette.background.default,
// // //           minHeight: "100vh",
// // //         }}
// // //       >
// // //         {renderView()}
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default InstructorDashboard;
// // import React, { useState, useEffect } from "react";
// // import {
// //   Box,
// //   CssBaseline,
// //   useTheme,
// //   useMediaQuery,
// //   Typography,
// //   Paper,
// //   Grid,
// //   Card,
// //   CardContent,
// //   Button,
// //   Chip,
// //   Avatar,
// //   CircularProgress,
// // } from "@mui/material";
// // import {
// //   Assignment as AssignmentIcon,
// //   Quiz as QuizIcon,
// //   BarChart as BarChartIcon,
// //   People as PeopleIcon,
// //   Add as AddIcon,
// //   Book as BookIcon,
// //   Edit as EditIcon,
// //   Refresh as RefreshIcon,
// // } from "@mui/icons-material";

// // import InstructorSidebar from "../../components/common/Sidebar/InstructorSidebar";
// // import Header from "../../components/common/Header/Header";
// // import InstructorDashboardView from "./InstructorDashboardView";
// // import CourseForm from "../instructor/CourseForm";
// // import AssignmentsList from "../../components/assignmnet/AssignmentsList";
// // import StudentEnrollmentDashboardd from "../instructor/EnrollmentStats";
// // import QuizPage from "../../components/assignmnet/QuizPage";
// // import Settings from "../../components/common/Settings/Settings";
// // import InstructorService from "../../services/instructorService";
// // import { useNavigate } from "react-router-dom";
// // import VisualizationView from "../instructor/StudantEnrollment";

// // const InstructorDashboard = () => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// //   const drawerWidth = 240;
// //   const collapsedWidth = 72;
// //   const navigate = useNavigate();

// //   // State management
// //   const [currentView, setCurrentView] = useState("dashboard");
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [editingCourse, setEditingCourse] = useState(null);
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch courses when My Courses view is selected
// //   useEffect(() => {
// //     if (currentView === "my-courses") {
// //       fetchCourses();
// //     }
// //   }, [currentView]);

// //   const fetchCourses = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);
// //       const response = await InstructorService.getInstructorCourses();

// //       // Handle different response structures
// //       const coursesData = Array.isArray(response)
// //         ? response
// //         : Array.isArray(response?.data)
// //         ? response.data
// //         : [];

// //       setCourses(coursesData);
// //     } catch (err) {
// //       console.error("Failed to fetch courses:", err);
// //       setError("Failed to load courses. Please try again.");
// //       setCourses([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleDrawerToggle = () => {
// //     if (isMobile) {
// //       setMobileOpen(!mobileOpen);
// //     } else {
// //       setCollapsed(!collapsed);
// //     }
// //   };

// //   const handleViewChange = (view) => {
// //     setCurrentView(view);
// //     if (isMobile) {
// //       setMobileOpen(false);
// //     }
// //   };

// //   const handleCreateCourse = () => {
// //     setEditingCourse(null);
// //     setCurrentView("create-course");
// //   };

// //   const handleEditCourse = (course) => {
// //     setEditingCourse(course);
// //     setCurrentView("create-course");
// //   };

// //   const handleBackToDashboard = () => {
// //     setEditingCourse(null);
// //     setCurrentView("dashboard");
// //   };

// //   const handleViewCourseDetails = (courseId) => {
// //     navigate(`/instructor/courses/${courseId}`);
// //   };

// //   const getStatusColor = (status) => {
// //     if (!status) return "default";
// //     switch (status.toLowerCase()) {
// //       case "published":
// //         return "success";
// //       case "draft":
// //         return "warning";
// //       case "pending":
// //         return "info";
// //       case "rejected":
// //         return "error";
// //       default:
// //         return "default";
// //     }
// //   };

// //   const MyCoursesView = () => (
// //     <Box>
// //       <Box
// //         display="flex"
// //         justifyContent="space-between"
// //         alignItems="center"
// //         mb={4}
// //       >
// //         <Box>
// //           <Typography variant="h4" gutterBottom fontWeight="bold">
// //             My Courses
// //           </Typography>
// //           <Typography variant="body1" color="textSecondary">
// //             Manage all your published and draft courses
// //           </Typography>
// //         </Box>
// //         <Button
// //           variant="contained"
// //           startIcon={<AddIcon />}
// //           onClick={handleCreateCourse}
// //           sx={{ borderRadius: 2, px: 3 }}
// //         >
// //           Create New Course
// //         </Button>
// //       </Box>

// //       {error ? (
// //         <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
// //           <BookIcon sx={{ fontSize: 64, color: "error.main", mb: 2 }} />
// //           <Typography variant="h6" gutterBottom color="error">
// //             {error}
// //           </Typography>
// //           <Button
// //             variant="outlined"
// //             startIcon={<RefreshIcon />}
// //             onClick={fetchCourses}
// //             sx={{ borderRadius: 2 }}
// //           >
// //             Retry
// //           </Button>
// //         </Paper>
// //       ) : loading ? (
// //         <Box display="flex" justifyContent="center" my={4}>
// //           <CircularProgress size={60} />
// //         </Box>
// //       ) : courses.length === 0 ? (
// //         <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
// //           <BookIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
// //           <Typography variant="h6" gutterBottom>
// //             You don't have any courses yet
// //           </Typography>
// //           <Typography variant="body2" color="textSecondary" mb={3}>
// //             Start by creating your first course to see it listed here
// //           </Typography>
// //           <Button
// //             variant="outlined"
// //             startIcon={<AddIcon />}
// //             onClick={handleCreateCourse}
// //             sx={{ borderRadius: 2 }}
// //           >
// //             Create Your First Course
// //           </Button>
// //         </Paper>
// //       ) : (
// //         <Grid container spacing={3}>
// //           {courses.map((course) => (
// //             <Grid item xs={12} sm={6} md={4} key={course._id || course.id}>
// //               <Card
// //                 sx={{
// //                   height: "100%",
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   transition: "transform 0.3s, box-shadow 0.3s",
// //                   "&:hover": {
// //                     transform: "translateY(-5px)",
// //                     boxShadow: 3,
// //                   },
// //                 }}
// //               >
// //                 {course.thumbnail_url && (
// //                   <Box
// //                     sx={{
// //                       height: 160,
// //                       backgroundImage: `url(${course.thumbnail_url})`,
// //                       backgroundSize: "cover",
// //                       backgroundPosition: "center",
// //                     }}
// //                   />
// //                 )}
// //                 <CardContent sx={{ flexGrow: 1 }}>
// //                   <Box
// //                     display="flex"
// //                     justifyContent="space-between"
// //                     alignItems="flex-start"
// //                   >
// //                     <Typography
// //                       variant="h6"
// //                       component="h3"
// //                       sx={{ fontWeight: 600, mb: 1 }}
// //                     >
// //                       {course.title || "Untitled Course"}
// //                     </Typography>
// //                     <Chip
// //                       label={course.status || "unknown"}
// //                       size="small"
// //                       color={getStatusColor(course.status)}
// //                       sx={{ textTransform: "capitalize" }}
// //                     />
// //                   </Box>
// //                   <Typography
// //                     variant="body2"
// //                     color="text.secondary"
// //                     sx={{ mb: 2 }}
// //                   >
// //                     {course.description
// //                       ? course.description.length > 100
// //                         ? `${course.description.substring(0, 100)}...`
// //                         : course.description
// //                       : "No description available"}
// //                   </Typography>
// //                   <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
// //                     <PeopleIcon
// //                       fontSize="small"
// //                       sx={{ mr: 1, color: "text.secondary" }}
// //                     />
// //                     <Typography variant="body2" color="text.secondary">
// //                       {course.enrolledStudents || 0} students
// //                     </Typography>
// //                   </Box>
// //                 </CardContent>
// //                 <Box
// //                   sx={{
// //                     p: 2,
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                   }}
// //                 >
// //                   <Button
// //                     size="small"
// //                     onClick={() =>
// //                       handleViewCourseDetails(course._id || course.id)
// //                     }
// //                   >
// //                     View Details
// //                   </Button>
// //                   <Button
// //                     size="small"
// //                     startIcon={<EditIcon fontSize="small" />}
// //                     onClick={() => handleEditCourse(course)}
// //                   >
// //                     Edit
// //                   </Button>
// //                 </Box>
// //               </Card>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       )}
// //     </Box>
// //   );

// //   const AssignmentsView = () => (
// //     <Box>
// //       <Box
// //         display="flex"
// //         justifyContent="space-between"
// //         alignItems="center"
// //         mb={4}
// //       >
// //         <Box>
// //           <Typography variant="h4" gutterBottom fontWeight="bold">
// //             Assignments
// //           </Typography>
// //           <Typography variant="body1" color="textSecondary">
// //             Create and manage course assignments
// //           </Typography>
// //         </Box>
// //         <Button
// //           variant="contained"
// //           startIcon={<AssignmentIcon />}
// //           sx={{ borderRadius: 2, px: 3 }}
// //         >
// //           Create Assignment
// //         </Button>
// //       </Box>
// //       <AssignmentsList />
// //     </Box>
// //   );

// //   // const VisualizationView = () => (
// //   //   <Box>
// //   //     <VisualizationView />
// //   //   </Box>
// //   // );

// //   const QuizzesView = () => (
// //     <Box>
// //       <QuizPage />
// //     </Box>
// //   );

// //   const SettingsView = () => (
// //     <Box>
// //       <Settings />
// //     </Box>
// //   );

// //   const renderView = () => {
// //     switch (currentView) {
// //       case "dashboard":
// //         return (
// //           <InstructorDashboardView
// //             onCreateCourse={handleCreateCourse}
// //             onEditCourse={handleEditCourse}
// //           />
// //         );
// //       case "my-courses":
// //         return <MyCoursesView />;
// //       case "create-course":
// //         return (
// //           <CourseForm
// //             course={editingCourse}
// //             onBack={handleBackToDashboard}
// //             onSuccess={() => {
// //               handleBackToDashboard();
// //               fetchCourses();
// //             }}
// //           />
// //         );
// //       case "enrollment-stats":
// //         return <StudentEnrollmentDashboardd />;
// //       case "assignments":
// //         return <AssignmentsView />;
// //       case "visualization":
// //         return <VisualizationView />;
// //       case "quizzes":
// //         return <QuizzesView />;
// //       case "settings":
// //         return <SettingsView />;
// //       default:
// //         return (
// //           <InstructorDashboardView
// //             onCreateCourse={handleCreateCourse}
// //             onEditCourse={handleEditCourse}
// //           />
// //         );
// //     }
// //   };

// //   return (
// //     <Box sx={{ display: "flex", minHeight: "100vh" }}>
// //       <CssBaseline />
// //       <Header />
// //       <InstructorSidebar
// //         mobileOpen={mobileOpen}
// //         handleDrawerToggle={handleDrawerToggle}
// //         collapsed={collapsed}
// //         setCollapsed={setCollapsed}
// //         isMobile={isMobile}
// //         currentView={currentView}
// //         onViewChange={handleViewChange}
// //       />

// //       <Box
// //         component="main"
// //         sx={{
// //           flexGrow: 1,
// //           p: 5,
// //           pt: 13,
// //           width: {
// //             sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`,
// //           },
// //           backgroundColor: theme.palette.background.default,
// //           minHeight: "100vh",
// //         }}
// //       >
// //         {renderView()}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default InstructorDashboard;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   CssBaseline,
//   useTheme,
//   useMediaQuery,
//   Typography,
//   Paper,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Chip,
//   Avatar,
//   CircularProgress,
//   Container,
//   Stack,
//   IconButton,
//   Fade,
//   Grow,
// } from "@mui/material";
// import {
//   Assignment as AssignmentIcon,
//   Quiz as QuizIcon,
//   BarChart as BarChartIcon,
//   People as PeopleIcon,
//   Add as AddIcon,
//   Book as BookIcon,
//   Edit as EditIcon,
//   Refresh as RefreshIcon,
//   TrendingUp as TrendingUpIcon,
//   School as SchoolIcon,
//   Timeline as TimelineIcon,
//   AutoStories as AutoStoriesIcon,
// } from "@mui/icons-material";

// import InstructorSidebar from "../../components/common/Sidebar/InstructorSidebar";
// import Header from "../../components/common/Header/Header";
// import InstructorDashboardView from "./InstructorDashboardView";
// import CourseForm from "../instructor/CourseForm";
// import AssignmentsList from "../../components/assignmnet/AssignmentsList";
// import StudentEnrollmentDashboardd from "../instructor/EnrollmentStats";
// import QuizPage from "../../components/assignmnet/QuizPage";
// import Settings from "../../components/common/Settings/Settings";
// import InstructorService from "../../services/instructorService";
// import { useNavigate } from "react-router-dom";
// import VisualizationView from "../instructor/StudantEnrollment";

// const InstructorDashboard = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const drawerWidth = 240;
//   const collapsedWidth = 72;
//   const navigate = useNavigate();

//   // State management
//   const [currentView, setCurrentView] = useState("dashboard");
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);
//   const [editingCourse, setEditingCourse] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch courses when My Courses view is selected
//   useEffect(() => {
//     if (currentView === "my-courses") {
//       fetchCourses();
//     }
//   }, [currentView]);

//   const fetchCourses = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await InstructorService.getInstructorCourses();

//       // Handle different response structures
//       const coursesData = Array.isArray(response)
//         ? response
//         : Array.isArray(response?.data)
//         ? response.data
//         : [];

//       setCourses(coursesData);
//     } catch (err) {
//       console.error("Failed to fetch courses:", err);
//       setError("Failed to load courses. Please try again.");
//       setCourses([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDrawerToggle = () => {
//     if (isMobile) {
//       setMobileOpen(!mobileOpen);
//     } else {
//       setCollapsed(!collapsed);
//     }
//   };

//   const handleViewChange = (view) => {
//     setCurrentView(view);
//     if (isMobile) {
//       setMobileOpen(false);
//     }
//   };

//   const handleCreateCourse = () => {
//     setEditingCourse(null);
//     setCurrentView("create-course");
//   };

//   const handleEditCourse = (course) => {
//     setEditingCourse(course);
//     setCurrentView("create-course");
//   };

//   const handleBackToDashboard = () => {
//     setEditingCourse(null);
//     setCurrentView("dashboard");
//   };

//   const handleViewCourseDetails = (courseId) => {
//     navigate(`/instructor/courses/${courseId}`);
//   };

//   const getStatusColor = (status) => {
//     if (!status) return "default";
//     switch (status.toLowerCase()) {
//       case "published":
//         return "success";
//       case "draft":
//         return "warning";
//       case "pending":
//         return "info";
//       case "rejected":
//         return "error";
//       default:
//         return "default";
//     }
//   };

//   // Modern styled components
//   const ModernCard = ({ children, delay = 0, ...props }) => (
//     <Grow in timeout={1000 + delay}>
//       <Card
//         sx={{
//           background:
//             "linear-gradient(145deg, #ffffff 0%, #f8faff 40%, #f1f5ff 100%)",
//           borderRadius: 4,
//           border: "1px solid rgba(99, 102, 241, 0.12)",
//           boxShadow:
//             "0 8px 32px rgba(99, 102, 241, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
//           backdropFilter: "blur(20px)",
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background:
//               "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
//             pointerEvents: "none",
//           },
//           "&:hover": {
//             transform: "translateY(-8px) scale(1.02)",
//             boxShadow:
//               "0 16px 48px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
//             borderColor: "rgba(99, 102, 241, 0.2)",
//           },
//           ...props.sx,
//         }}
//         {...props}
//       >
//         {children}
//       </Card>
//     </Grow>
//   );

//   const ModernButton = ({
//     children,
//     variant = "contained",
//     color = "#6366f1",
//     ...props
//   }) => (
//     <Button
//       variant={variant}
//       sx={{
//         borderRadius: 3,
//         px: 4,
//         py: 1.5,
//         fontWeight: 700,
//         textTransform: "none",
//         fontSize: "0.95rem",
//         letterSpacing: "0.02em",
//         background:
//           variant === "contained"
//             ? `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`
//             : "transparent",
//         border: variant === "outlined" ? `2px solid ${color}40` : "none",
//         color: variant === "contained" ? "#ffffff" : color,
//         boxShadow:
//           variant === "contained"
//             ? `0 4px 16px ${color}30, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
//             : "none",
//         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         "&:hover": {
//           transform: "translateY(-2px) scale(1.05)",
//           boxShadow:
//             variant === "contained"
//               ? `0 8px 24px ${color}40, inset 0 1px 0 rgba(255, 255, 255, 0.3)`
//               : `0 4px 16px ${color}20`,
//           background:
//             variant === "contained"
//               ? `linear-gradient(135deg, ${color}ee 0%, ${color}cc 100%)`
//               : `${color}08`,
//         },
//         ...props.sx,
//       }}
//       {...props}
//     >
//       {children}
//     </Button>
//   );

//   const MyCoursesView = () => (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Fade in timeout={800}>
//         <Box>
//           {/* Header Section */}
//           <Box
//             sx={{
//               background:
//                 "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)",
//               borderRadius: 4,
//               p: 4,
//               mb: 4,
//               border: "1px solid rgba(99, 102, 241, 0.12)",
//               position: "relative",
//               overflow: "hidden",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: "4px",
//                 background:
//                   "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
//               },
//             }}
//           >
//             <Stack
//               direction={{ xs: "column", md: "row" }}
//               justifyContent="space-between"
//               alignItems={{ xs: "flex-start", md: "center" }}
//               spacing={3}
//             >
//               <Box>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontWeight: 800,
//                     background:
//                       "linear-gradient(135deg, #6366f1 0%, #8b5cf6 70%, #ec4899 100%)",
//                     backgroundClip: "text",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     mb: 1,
//                     fontSize: { xs: "2rem", md: "3rem" },
//                   }}
//                 >
//                   My Courses
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: "#64748b",
//                     fontWeight: 500,
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   Manage all your published and draft courses
//                 </Typography>
//               </Box>
//               <ModernButton
//                 startIcon={<AddIcon />}
//                 onClick={handleCreateCourse}
//                 sx={{ minWidth: 200 }}
//               >
//                 Create New Course
//               </ModernButton>
//             </Stack>
//           </Box>

//           {/* Content Section */}
//           {error ? (
//             <ModernCard>
//               <CardContent sx={{ textAlign: "center", py: 6 }}>
//                 <BookIcon
//                   sx={{ fontSize: 80, color: "#ef4444", mb: 3, opacity: 0.8 }}
//                 />
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   sx={{ color: "#ef4444", fontWeight: 700 }}
//                 >
//                   {error}
//                 </Typography>
//                 <ModernButton
//                   variant="outlined"
//                   startIcon={<RefreshIcon />}
//                   onClick={fetchCourses}
//                   color="#ef4444"
//                   sx={{ mt: 2 }}
//                 >
//                   Retry
//                 </ModernButton>
//               </CardContent>
//             </ModernCard>
//           ) : loading ? (
//             <Box display="flex" justifyContent="center" py={8}>
//               <CircularProgress
//                 size={80}
//                 sx={{
//                   color: "#6366f1",
//                   filter: "drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))",
//                 }}
//               />
//             </Box>
//           ) : courses.length === 0 ? (
//             <ModernCard>
//               <CardContent sx={{ textAlign: "center", py: 8 }}>
//                 <AutoStoriesIcon
//                   sx={{ fontSize: 100, color: "#6366f1", mb: 3, opacity: 0.8 }}
//                 />
//                 <Typography
//                   variant="h4"
//                   gutterBottom
//                   sx={{
//                     fontWeight: 700,
//                     color: "#1e293b",
//                     mb: 2,
//                   }}
//                 >
//                   No courses yet
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: "#64748b",
//                     mb: 4,
//                     maxWidth: 500,
//                     mx: "auto",
//                   }}
//                 >
//                   Start your teaching journey by creating your first course
//                 </Typography>
//                 <ModernButton
//                   startIcon={<AddIcon />}
//                   onClick={handleCreateCourse}
//                   sx={{ py: 2, px: 6 }}
//                 >
//                   Create Your First Course
//                 </ModernButton>
//               </CardContent>
//             </ModernCard>
//           ) : (
//             <Grid container spacing={4}>
//               {courses.map((course, index) => (
//                 <Grid
//                   item
//                   size={{ xs: 12, md: 4 }}
//                   key={course._id || course.id}
//                 >
//                   <ModernCard delay={index * 100}>
//                     {course.thumbnail_url && (
//                       <Box
//                         sx={{
//                           height: 200,
//                           backgroundImage: `url(${course.thumbnail_url})`,
//                           backgroundSize: "cover",
//                           backgroundPosition: "center",
//                           position: "relative",
//                           "&::after": {
//                             content: '""',
//                             position: "absolute",
//                             bottom: 0,
//                             left: 0,
//                             right: 0,
//                             height: "50%",
//                             background:
//                               "linear-gradient(transparent, rgba(0,0,0,0.3))",
//                           },
//                         }}
//                       />
//                     )}
//                     <CardContent sx={{ p: 3 }}>
//                       <Stack
//                         direction="row"
//                         justifyContent="space-between"
//                         alignItems="flex-start"
//                         mb={2}
//                       >
//                         <Typography
//                           variant="h5"
//                           sx={{
//                             fontWeight: 700,
//                             color: "#1e293b",
//                             lineHeight: 1.3,
//                           }}
//                         >
//                           {course.title || "Untitled Course"}
//                         </Typography>
//                         <Chip
//                           label={course.status || "unknown"}
//                           size="medium"
//                           color={getStatusColor(course.status)}
//                           sx={{
//                             textTransform: "capitalize",
//                             fontWeight: 600,
//                             borderRadius: 2,
//                           }}
//                         />
//                       </Stack>

//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: "#64748b",
//                           mb: 3,
//                           lineHeight: 1.6,
//                         }}
//                       >
//                         {course.description
//                           ? course.description.length > 120
//                             ? `${course.description.substring(0, 120)}...`
//                             : course.description
//                           : "No description available"}
//                       </Typography>

//                       <Stack
//                         direction="row"
//                         alignItems="center"
//                         spacing={1}
//                         mb={3}
//                       >
//                         <PeopleIcon sx={{ color: "#6366f1", fontSize: 20 }} />
//                         <Typography
//                           variant="body1"
//                           sx={{ color: "#475569", fontWeight: 600 }}
//                         >
//                           {course.enrolledStudents || 0} students enrolled
//                         </Typography>
//                       </Stack>
//                     </CardContent>

//                     <Box sx={{ p: 3, pt: 0 }}>
//                       <Stack direction="row" spacing={2}>
//                         <Button
//                           variant="outlined"
//                           onClick={() =>
//                             handleViewCourseDetails(course._id || course.id)
//                           }
//                           sx={{
//                             flex: 1,
//                             borderRadius: 2,
//                             border: "2px solid rgba(99, 102, 241, 0.3)",
//                             color: "#6366f1",
//                             fontWeight: 600,
//                             "&:hover": {
//                               borderColor: "#6366f1",
//                               background: "rgba(99, 102, 241, 0.05)",
//                             },
//                           }}
//                         >
//                           View Details
//                         </Button>
//                         <IconButton
//                           onClick={() => handleEditCourse(course)}
//                           sx={{
//                             background:
//                               "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//                             color: "white",
//                             borderRadius: 2,
//                             p: 1.5,
//                             "&:hover": {
//                               background:
//                                 "linear-gradient(135deg, #5856eb 0%, #7c3aed 100%)",
//                               transform: "scale(1.05)",
//                             },
//                           }}
//                         >
//                           <EditIcon />
//                         </IconButton>
//                       </Stack>
//                     </Box>
//                   </ModernCard>
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </Box>
//       </Fade>
//     </Container>
//   );

//   const AssignmentsView = () => (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Fade in timeout={800}>
//         <Box>
//           <Box
//             sx={{
//               background:
//                 "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)",
//               borderRadius: 4,
//               p: 4,
//               mb: 4,
//               border: "1px solid rgba(16, 185, 129, 0.12)",
//               position: "relative",
//               overflow: "hidden",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: "4px",
//                 background: "linear-gradient(90deg, #10b981 0%, #22c55e 100%)",
//               },
//             }}
//           >
//             <Stack
//               direction={{ xs: "column", md: "row" }}
//               justifyContent="space-between"
//               alignItems={{ xs: "flex-start", md: "center" }}
//               spacing={3}
//             >
//               <Box>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontWeight: 800,
//                     background:
//                       "linear-gradient(135deg, #10b981 0%, #22c55e 100%)",
//                     backgroundClip: "text",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     mb: 1,
//                     fontSize: { xs: "2rem", md: "3rem" },
//                   }}
//                 >
//                   Assignments
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: "#64748b",
//                     fontWeight: 500,
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   Create and manage course assignments
//                 </Typography>
//               </Box>
//               <ModernButton
//                 startIcon={<AssignmentIcon />}
//                 color="#10b981"
//                 sx={{ minWidth: 200 }}
//               >
//                 Create Assignment
//               </ModernButton>
//             </Stack>
//           </Box>
//           <ModernCard>
//             <AssignmentsList />
//           </ModernCard>
//         </Box>
//       </Fade>
//     </Container>
//   );

//   const QuizzesView = () => (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Fade in timeout={800}>
//         <ModernCard>
//           <QuizPage />
//         </ModernCard>
//       </Fade>
//     </Container>
//   );

//   const SettingsView = () => (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Fade in timeout={800}>
//         <ModernCard>
//           <Settings />
//         </ModernCard>
//       </Fade>
//     </Container>
//   );

//   const renderView = () => {
//     switch (currentView) {
//       case "dashboard":
//         return (
//           <InstructorDashboardView
//             onCreateCourse={handleCreateCourse}
//             onEditCourse={handleEditCourse}
//           />
//         );
//       case "my-courses":
//         return <MyCoursesView />;
//       case "create-course":
//         return (
//           <Container maxWidth="xl" sx={{ py: 4 }}>
//             <ModernCard>
//               <CourseForm
//                 course={editingCourse}
//                 onBack={handleBackToDashboard}
//                 onSuccess={() => {
//                   handleBackToDashboard();
//                   fetchCourses();
//                 }}
//               />
//             </ModernCard>
//           </Container>
//         );
//       case "enrollment-stats":
//         return (
//           <Container maxWidth="xl" sx={{ py: 4 }}>
//             <ModernCard>
//               <StudentEnrollmentDashboardd />
//             </ModernCard>
//           </Container>
//         );
//       case "assignments":
//         return <AssignmentsView />;
//       case "visualization":
//         return (
//           <Container maxWidth="xl" sx={{ py: 4 }}>
//             <ModernCard>
//               <VisualizationView />
//             </ModernCard>
//           </Container>
//         );
//       case "quizzes":
//         return <QuizzesView />;
//       case "settings":
//         return <SettingsView />;
//       default:
//         return (
//           <InstructorDashboardView
//             onCreateCourse={handleCreateCourse}
//             onEditCourse={handleEditCourse}
//           />
//         );
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh" }}>
//       <CssBaseline />
//       <Header />
//       <InstructorSidebar
//         mobileOpen={mobileOpen}
//         handleDrawerToggle={handleDrawerToggle}
//         collapsed={collapsed}
//         setCollapsed={setCollapsed}
//         isMobile={isMobile}
//         currentView={currentView}
//         onViewChange={handleViewChange}
//       />

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           pt: 10,
//           width: {
//             sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`,
//           },
//           background:
//             "linear-gradient(145deg, #ffffff 0%, #f8faff 40%, #f1f5ff 100%)",
//           minHeight: "100vh",
//           position: "relative",
//           "&::before": {
//             content: '""',
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background:
//               "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.02) 0%, transparent 50%)",
//             pointerEvents: "none",
//             zIndex: 0,
//           },
//           "& > *": {
//             position: "relative",
//             zIndex: 1,
//           },
//         }}
//       >
//         {renderView()}
//       </Box>
//     </Box>
//   );
// };

// export default InstructorDashboard;
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
