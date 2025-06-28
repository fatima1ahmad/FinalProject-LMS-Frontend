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
