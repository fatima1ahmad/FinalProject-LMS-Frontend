// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Container,
//   Paper,
//   Button,
//   Tabs,
//   Tab,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   IconButton,
//   CircularProgress,
//   Divider,
//   Chip,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import {
//   ArrowBack as ArrowBackIcon,
//   Edit as EditIcon,
//   Add as AddIcon,
//   CloudUpload as CloudUploadIcon,
//   Close as CloseIcon,
//   ChevronRight as ChevronRightIcon,
// } from "@mui/icons-material";
// import { useNavigate, useParams } from "react-router-dom";
// import InstructorService from "../../../services/instructorService";
// import ModuleList from "../../instructor/InstructorCourses/ModuleList";
// import MaterialList from "../../instructor/InstructorCourses/MaterialList";
// import api from "../../../api";

// const CourseDetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [tabValue, setTabValue] = useState(0);
//   const [modules, setModules] = useState([]);
//   const [thumbnailUploading, setThumbnailUploading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   useEffect(() => {
//     fetchCourseDetails();
//   }, [id]);

//   const fetchCourseDetails = async () => {
//     try {
//       setLoading(true);
//       const courseData = await InstructorService.getCourseDetails(id);
//       setCourse(courseData);
//       setModules(courseData.modules || []);
//     } catch (error) {
//       console.error("Error fetching course details:", error);
//       showSnackbar("Failed to load course details", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showSnackbar = (message, severity = "success") => {
//     setSnackbar({ open: true, message, severity });
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const handleEditCourse = () => {
//     navigate(`/instructor/courses/${id}/edit`);
//   };

//   const handleAddModule = () => {
//     navigate(`/instructor/courses/${id}/modules/new`);
//   };

//   const handleThumbnailUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // Validate file
//     if (!file.type.match("image.*")) {
//       showSnackbar("Only image files are allowed", "error");
//       return;
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       showSnackbar("File size must be less than 5MB", "error");
//       return;
//     }

//     try {
//       setThumbnailUploading(true);
//       const formData = new FormData();
//       formData.append("file", file);

//       // Upload new thumbnail
//       const uploadResponse = await api.post(
//         "/api/attachments/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Update course with new thumbnail URL
//       await InstructorService.updateCourse(id, {
//         thumbnail_url: uploadResponse.data.attachment.secure_url,
//       });

//       // Refresh course data
//       const updatedCourse = await InstructorService.getCourseDetails(id);
//       setCourse(updatedCourse);
//       showSnackbar("Thumbnail updated successfully", "success");
//     } catch (error) {
//       console.error("Error updating thumbnail:", error);
//       showSnackbar("Failed to update thumbnail", "error");
//     } finally {
//       setThumbnailUploading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <Container maxWidth="xl">
//         <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//           <CircularProgress />
//         </Box>
//       </Container>
//     );
//   }

//   if (!course) {
//     return (
//       <Container maxWidth="xl">
//         <Typography variant="h6" color="error">
//           Course not found
//         </Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="xl">
//       <Box sx={{ my: 4 }}>
//         <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//           <IconButton
//             onClick={() => navigate("/instructor/courses")}
//             sx={{ mr: 2 }}
//           >
//             <ArrowBackIcon />
//           </IconButton>
//           <Typography variant="h4" component="h1">
//             {course.title}
//           </Typography>
//           <Chip
//             label={course.status}
//             color={
//               course.status === "approved"
//                 ? "success"
//                 : course.status === "pending"
//                 ? "warning"
//                 : "error"
//             }
//             sx={{ ml: 2 }}
//           />
//           <Button
//             variant="outlined"
//             startIcon={<EditIcon />}
//             sx={{ ml: "auto" }}
//             onClick={handleEditCourse}
//           >
//             Edit Course
//           </Button>
//         </Box>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8}>
//             <Paper sx={{ p: 3, mb: 3 }}>
//               <Typography variant="h6" gutterBottom>
//                 Course Description
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 {course.description}
//               </Typography>

//               <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//                 <Typography variant="body2" color="text.secondary">
//                   Duration: {course.duration} hours
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Category: {course.category?.name || "N/A"}
//                 </Typography>
//               </Box>
//             </Paper>

//             <Paper sx={{ p: 2 }}>
//               <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//                 <Tabs value={tabValue} onChange={handleTabChange}>
//                   <Tab label="Modules" />
//                   <Tab label="Materials" />
//                   <Tab label="Students" />
//                   <Tab label="Analytics" />
//                 </Tabs>
//               </Box>

//               <Box sx={{ pt: 3 }}>
//                 {tabValue === 0 && (
//                   <>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "flex-end",
//                         mb: 2,
//                       }}
//                     >
//                       <Button
//                         variant="contained"
//                         startIcon={<AddIcon />}
//                         onClick={handleAddModule}
//                       >
//                         Add Module
//                       </Button>
//                     </Box>
//                     <ModuleList
//                       modules={modules}
//                       courseId={id}
//                       onUpdate={fetchCourseDetails}
//                     />
//                   </>
//                 )}

//                 {tabValue === 1 && <MaterialList courseId={id} />}

//                 {tabValue === 2 && (
//                   <Typography>
//                     Students enrolled in this course will be listed here
//                   </Typography>
//                 )}

//                 {tabValue === 3 && (
//                   <Typography>
//                     Course analytics will be displayed here
//                   </Typography>
//                 )}
//               </Box>
//             </Paper>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Card sx={{ mb: 3 }}>
//               {course.thumbnail_url && (
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={course.thumbnail_url}
//                   alt={course.title}
//                 />
//               )}
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   Course Thumbnail
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   fullWidth
//                   startIcon={
//                     thumbnailUploading ? (
//                       <CircularProgress size={20} />
//                     ) : (
//                       <CloudUploadIcon />
//                     )
//                   }
//                   component="label"
//                   disabled={thumbnailUploading}
//                 >
//                   Upload New Thumbnail
//                   <input
//                     type="file"
//                     hidden
//                     accept="image/*"
//                     onChange={handleThumbnailUpload}
//                   />
//                 </Button>
//               </CardContent>
//             </Card>

//             <Paper sx={{ p: 3 }}>
//               <Typography variant="h6" gutterBottom>
//                 Instructor
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
//                 <Typography variant="body1">
//                   {course.instructor_name}
//                 </Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>

//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           sx={{ width: "100%" }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default CourseDetailPage;

// src/pages/instructor/CourseDetailPage.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  CircularProgress,
  Divider,
  Chip,
  Dialog,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  Close as CloseIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import InstructorService from "../../../services/instructorService";
import ModuleLessonManager from "../../../components/instructor/InstructorCourses/ModuleLessonManager";

const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [thumbnailUploading, setThumbnailUploading] = useState(false);
  const [openContentManager, setOpenContentManager] = useState(false);

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  const fetchCourseDetails = async () => {
    try {
      setLoading(true);
      const courseData = await InstructorService.getCourseDetails(id);
      setCourse(courseData);
    } catch (error) {
      console.error("Error fetching course details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEditCourse = () => {
    navigate(`/instructor/courses/${id}/edit`);
  };

  const handleThumbnailUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setThumbnailUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await InstructorService.uploadAttachment(file);
      await InstructorService.updateCourse(id, {
        thumbnail_url: uploadResponse.secure_url,
      });

      const updatedCourse = await InstructorService.getCourseDetails(id);
      setCourse(updatedCourse);
    } catch (error) {
      console.error("Error updating thumbnail:", error);
    } finally {
      setThumbnailUploading(false);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (!course) {
    return (
      <Container maxWidth="xl">
        <Typography variant="h6" color="error">
          Course not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <IconButton
            onClick={() => navigate("/instructor/courses")}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" component="h1">
            {course.title}
          </Typography>
          <Chip
            label={course.status}
            color={
              course.status === "approved"
                ? "success"
                : course.status === "pending"
                ? "warning"
                : "error"
            }
            sx={{ ml: 2 }}
          />
          <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEditCourse}
            >
              Edit Course
            </Button>
            <Button
              variant="contained"
              onClick={() => setOpenContentManager(true)}
            >
              Manage Content
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Course Description
              </Typography>
              <Typography variant="body1" paragraph>
                {course.description}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Duration: {course.duration} hours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {course.category?.name || "N/A"}
                </Typography>
              </Box>
            </Paper>

            <Paper sx={{ p: 2 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="Overview" />
                  <Tab label="Students" />
                  <Tab label="Analytics" />
                </Tabs>
              </Box>

              <Box sx={{ pt: 3 }}>
                {tabValue === 0 && (
                  <Typography>
                    Course overview and statistics will be displayed here
                  </Typography>
                )}
                {tabValue === 1 && (
                  <Typography>
                    Students enrolled in this course will be listed here
                  </Typography>
                )}
                {tabValue === 2 && (
                  <Typography>
                    Course analytics will be displayed here
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 3 }}>
              {course.thumbnail_url && (
                <CardMedia
                  component="img"
                  height="200"
                  image={course.thumbnail_url}
                  alt={course.title}
                />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Course Thumbnail
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={
                    thumbnailUploading ? (
                      <CircularProgress size={20} />
                    ) : (
                      <CloudUploadIcon />
                    )
                  }
                  component="label"
                  disabled={thumbnailUploading}
                >
                  Upload New Thumbnail
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleThumbnailUpload}
                  />
                </Button>
              </CardContent>
            </Card>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Instructor
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Typography variant="body1">
                  {course.instructor_name}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Module and Lesson Management Dialog */}
      <Dialog
        open={openContentManager}
        onClose={() => setOpenContentManager(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            height: "90vh",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Course Content Management</Typography>
          <IconButton onClick={() => setOpenContentManager(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <ModuleLessonManager
            courseId={id}
            onClose={() => setOpenContentManager(false)}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default CourseDetailPage;
