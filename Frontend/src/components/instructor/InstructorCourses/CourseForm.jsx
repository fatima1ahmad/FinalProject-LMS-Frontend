// // import React, { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Stepper,
// //   Step,
// //   StepLabel,
// //   Button,
// //   Typography,
// //   TextField,
// //   Grid,
// //   Paper,
// //   Divider,
// //   CircularProgress,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// // } from "@mui/material";
// // import { useSnackbar } from "notistack";
// // import InstructorService from "../../services/instructorService";
// // import ModuleForm from "./ModuleForm";
// // import LessonForm from "./LessonForm";

// // const steps = ["Course Details", "Modules", "Lessons"];

// // const CourseForm = ({ course, onSuccess }) => {
// //   const [activeStep, setActiveStep] = useState(0);
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     description: "",
// //     category_id: "",
// //     thumbnail_url: "",
// //     duration: 0,
// //     modules: [],
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const { enqueueSnackbar } = useSnackbar();

// //   useEffect(() => {
// //     if (course) {
// //       setFormData({
// //         title: course.title,
// //         description: course.description,
// //         category_id: course.category_id,
// //         thumbnail_url: course.thumbnail_url,
// //         duration: course.duration,
// //         modules: course.modules || [],
// //       });
// //     }
// //   }, [course]);

// //   const handleNext = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// //   };

// //   const handleBack = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleAddModule = (module) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       modules: [...prev.modules, module],
// //     }));
// //   };

// //   const handleUpdateModule = (index, updatedModule) => {
// //     setFormData((prev) => {
// //       const updatedModules = [...prev.modules];
// //       updatedModules[index] = updatedModule;
// //       return { ...prev, modules: updatedModules };
// //     });
// //   };

// //   const handleDeleteModule = (index) => {
// //     setFormData((prev) => {
// //       const updatedModules = [...prev.modules];
// //       updatedModules.splice(index, 1);
// //       return { ...prev, modules: updatedModules };
// //     });
// //   };

// //   const handleAddLesson = (moduleIndex, lesson) => {
// //     setFormData((prev) => {
// //       const updatedModules = [...prev.modules];
// //       if (!updatedModules[moduleIndex].lessons) {
// //         updatedModules[moduleIndex].lessons = [];
// //       }
// //       updatedModules[moduleIndex].lessons.push(lesson);
// //       return { ...prev, modules: updatedModules };
// //     });
// //   };

// //   const handleUpdateLesson = (moduleIndex, lessonIndex, updatedLesson) => {
// //     setFormData((prev) => {
// //       const updatedModules = [...prev.modules];
// //       updatedModules[moduleIndex].lessons[lessonIndex] = updatedLesson;
// //       return { ...prev, modules: updatedModules };
// //     });
// //   };

// //   const handleDeleteLesson = (moduleIndex, lessonIndex) => {
// //     setFormData((prev) => {
// //       const updatedModules = [...prev.modules];
// //       updatedModules[moduleIndex].lessons.splice(lessonIndex, 1);
// //       return { ...prev, modules: updatedModules };
// //     });
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       setLoading(true);
// //       if (course) {
// //         await InstructorService.updateCourse(course.id, formData);
// //         enqueueSnackbar("Course updated successfully", { variant: "success" });
// //       } else {
// //         await InstructorService.createCourse(formData);
// //         enqueueSnackbar("Course created successfully", { variant: "success" });
// //       }
// //       onSuccess();
// //     } catch (error) {
// //       enqueueSnackbar(error.message || "Failed to save course", {
// //         variant: "error",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const renderStepContent = (step) => {
// //     switch (step) {
// //       case 0:
// //         return (
// //           <Grid container spacing={3}>
// //             <Grid item xs={12}>
// //               <TextField
// //                 fullWidth
// //                 label="Course Title"
// //                 name="title"
// //                 value={formData.title}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </Grid>
// //             <Grid item xs={12}>
// //               <TextField
// //                 fullWidth
// //                 label="Description"
// //                 name="description"
// //                 value={formData.description}
// //                 onChange={handleInputChange}
// //                 multiline
// //                 rows={4}
// //                 required
// //               />
// //             </Grid>
// //             <Grid item xs={12} md={6}>
// //               <FormControl fullWidth>
// //                 <InputLabel>Category</InputLabel>
// //                 <Select
// //                   name="category_id"
// //                   value={formData.category_id}
// //                   onChange={handleInputChange}
// //                   required
// //                 >
// //                   <MenuItem value={1}>Programming</MenuItem>
// //                   <MenuItem value={2}>Design</MenuItem>
// //                   <MenuItem value={3}>Business</MenuItem>
// //                   <MenuItem value={4}>Marketing</MenuItem>
// //                 </Select>
// //               </FormControl>
// //             </Grid>
// //             <Grid item xs={12} md={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Duration (hours)"
// //                 name="duration"
// //                 type="number"
// //                 value={formData.duration}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </Grid>
// //             <Grid item xs={12}>
// //               <TextField
// //                 fullWidth
// //                 label="Thumbnail URL"
// //                 name="thumbnail_url"
// //                 value={formData.thumbnail_url}
// //                 onChange={handleInputChange}
// //                 placeholder="https://example.com/image.jpg"
// //               />
// //             </Grid>
// //           </Grid>
// //         );
// //       case 1:
// //         return (
// //           <ModuleForm
// //             modules={formData.modules}
// //             onAdd={handleAddModule}
// //             onUpdate={handleUpdateModule}
// //             onDelete={handleDeleteModule}
// //             courseId={course?.id}
// //           />
// //         );
// //       case 2:
// //         return (
// //           <LessonForm
// //             modules={formData.modules}
// //             onAddLesson={handleAddLesson}
// //             onUpdateLesson={handleUpdateLesson}
// //             onDeleteLesson={handleDeleteLesson}
// //           />
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <Box sx={{ width: "100%", mt: 2 }}>
// //       <Stepper activeStep={activeStep} alternativeLabel>
// //         {steps.map((label) => (
// //           <Step key={label}>
// //             <StepLabel>{label}</StepLabel>
// //           </Step>
// //         ))}
// //       </Stepper>

// //       <Paper sx={{ p: 3, mt: 3 }}>{renderStepContent(activeStep)}</Paper>

// //       <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
// //         <Button
// //           disabled={activeStep === 0 || loading}
// //           onClick={handleBack}
// //           variant="outlined"
// //         >
// //           Back
// //         </Button>

// //         {activeStep === steps.length - 1 ? (
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             onClick={handleSubmit}
// //             disabled={loading}
// //           >
// //             {loading ? <CircularProgress size={24} /> : "Finish"}
// //           </Button>
// //         ) : (
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             onClick={handleNext}
// //             disabled={
// //               (activeStep === 0 &&
// //                 (!formData.title || !formData.description)) ||
// //               loading
// //             }
// //           >
// //             Next
// //           </Button>
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default CourseForm;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
//   TextField,
//   Grid,
//   Paper,
//   CircularProgress,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { useSnackbar } from "notistack";
// import InstructorService from "../../services/instructorService";
// import ModuleForm from "./ModuleForm";
// import LessonForm from "./LessonForm";

// const steps = ["Course Details", "Modules", "Lessons"];

// const CourseForm = ({ course, onSuccess, onBack }) => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category_id: "",
//     thumbnail_url: "",
//     duration: 0,
//     modules: [],
//   });
//   const [loading, setLoading] = useState(false);
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     if (course) {
//       setFormData({
//         title: course.title,
//         description: course.description,
//         category_id: course.category_id,
//         thumbnail_url: course.thumbnail_url,
//         duration: course.duration,
//         modules: course.modules || [],
//       });
//     } else {
//       // Reset form when creating new course
//       setFormData({
//         title: "",
//         description: "",
//         category_id: "",
//         thumbnail_url: "",
//         duration: 0,
//         modules: [],
//       });
//       setActiveStep(0);
//     }
//   }, [course]);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleAddModule = (module) => {
//     setFormData((prev) => ({
//       ...prev,
//       modules: [...prev.modules, module],
//     }));
//   };

//   const handleUpdateModule = (index, updatedModule) => {
//     setFormData((prev) => {
//       const updatedModules = [...prev.modules];
//       updatedModules[index] = updatedModule;
//       return { ...prev, modules: updatedModules };
//     });
//   };

//   const handleDeleteModule = (index) => {
//     setFormData((prev) => {
//       const updatedModules = [...prev.modules];
//       updatedModules.splice(index, 1);
//       return { ...prev, modules: updatedModules };
//     });
//   };

//   const handleAddLesson = (moduleIndex, lesson) => {
//     setFormData((prev) => {
//       const updatedModules = [...prev.modules];
//       if (!updatedModules[moduleIndex].lessons) {
//         updatedModules[moduleIndex].lessons = [];
//       }
//       updatedModules[moduleIndex].lessons.push(lesson);
//       return { ...prev, modules: updatedModules };
//     });
//   };

//   const handleUpdateLesson = (moduleIndex, lessonIndex, updatedLesson) => {
//     setFormData((prev) => {
//       const updatedModules = [...prev.modules];
//       updatedModules[moduleIndex].lessons[lessonIndex] = updatedLesson;
//       return { ...prev, modules: updatedModules };
//     });
//   };

//   const handleDeleteLesson = (moduleIndex, lessonIndex) => {
//     setFormData((prev) => {
//       const updatedModules = [...prev.modules];
//       updatedModules[moduleIndex].lessons.splice(lessonIndex, 1);
//       return { ...prev, modules: updatedModules };
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       if (course) {
//         await InstructorService.updateCourse(course.id, formData);
//         enqueueSnackbar("Course updated successfully", { variant: "success" });
//       } else {
//         await InstructorService.createCourse(formData);
//         enqueueSnackbar("Course created successfully", { variant: "success" });
//       }
//       onSuccess();
//     } catch (error) {
//       enqueueSnackbar(error.message || "Failed to save course", {
//         variant: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Course Title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 multiline
//                 rows={4}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <FormControl fullWidth>
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   name="category_id"
//                   value={formData.category_id}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <MenuItem value={1}>Programming</MenuItem>
//                   <MenuItem value={2}>Design</MenuItem>
//                   <MenuItem value={3}>Business</MenuItem>
//                   <MenuItem value={4}>Marketing</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Duration (hours)"
//                 name="duration"
//                 type="number"
//                 value={formData.duration}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Thumbnail URL"
//                 name="thumbnail_url"
//                 value={formData.thumbnail_url}
//                 onChange={handleInputChange}
//                 placeholder="https://example.com/image.jpg"
//               />
//             </Grid>
//           </Grid>
//         );
//       case 1:
//         return (
//           <ModuleForm
//             modules={formData.modules}
//             onAdd={handleAddModule}
//             onUpdate={handleUpdateModule}
//             onDelete={handleDeleteModule}
//             courseId={course?.id}
//           />
//         );
//       case 2:
//         return (
//           <LessonForm
//             modules={formData.modules}
//             onAddLesson={handleAddLesson}
//             onUpdateLesson={handleUpdateLesson}
//             onDeleteLesson={handleDeleteLesson}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ width: "100%", p: 2 }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
//         <Typography variant="h4" gutterBottom>
//           {course ? "Edit Course" : "Create New Course"}
//         </Typography>
//         <Button variant="outlined" onClick={onBack}>
//           Back to Dashboard
//         </Button>
//       </Box>

//       <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
//         {renderStepContent(activeStep)}
//       </Paper>

//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Button
//           disabled={activeStep === 0 || loading}
//           onClick={handleBack}
//           variant="outlined"
//           sx={{ mr: 1 }}
//         >
//           Back
//         </Button>

//         {activeStep === steps.length - 1 ? (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? (
//               <CircularProgress size={24} color="inherit" />
//             ) : course ? (
//               "Update Course"
//             ) : (
//               "Create Course"
//             )}
//           </Button>
//         ) : (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleNext}
//             disabled={
//               (activeStep === 0 &&
//                 (!formData.title || !formData.description)) ||
//               loading
//             }
//           >
//             Next
//           </Button>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default CourseForm;
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
