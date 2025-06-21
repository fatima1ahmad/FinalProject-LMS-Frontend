import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Card,
  CardContent,
  CardActions,
  Divider,
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Collapse,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  Category as CategoryIcon,
  MenuBook as MenuBookIcon,
  Class as ClassIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { useSnackbar } from "notistack";
import InstructorService from "../../services/instructorService";
import { lightBlue, orange, grey } from "@mui/material/colors";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [editingCourse, setEditingCourse] = useState(null);
  const [expandedModules, setExpandedModules] = useState({});
  const [newModuleName, setNewModuleName] = useState("");
  const [newLessonName, setNewLessonName] = useState("");
  const [addingModuleToCourse, setAddingModuleToCourse] = useState(null);
  const [addingLessonToModule, setAddingLessonToModule] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [categoriesData, coursesData] = await Promise.all([
          InstructorService.getAllCategories(),
          InstructorService.getCourses(),
        ]);

        setCategories(categoriesData || []);

        const coursesWithDetails = await Promise.all(
          coursesData.map(async (course) => {
            try {
              const modules = await InstructorService.getModulesByCourse(
                course.id
              );

              const modulesWithLessons = await Promise.all(
                modules.map(async (module) => {
                  try {
                    const lessons = await InstructorService.getLessonsByModule(
                      module.id
                    );
                    return { ...module, lessons };
                  } catch (error) {
                    console.error(
                      `Error fetching lessons for module ${module.id}:`,
                      error
                    );
                    return { ...module, lessons: [] };
                  }
                })
              );

              return { ...course, modules: modulesWithLessons };
            } catch (error) {
              console.error(
                `Error fetching modules for course ${course.id}:`,
                error
              );
              return { ...course, modules: [] };
            }
          })
        );

        setCourses(coursesWithDetails);
      } catch (error) {
        console.error("Error loading data:", error);
        enqueueSnackbar("Failed to load data", { variant: "error" });
        setCourses([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [enqueueSnackbar]);

  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await InstructorService.deleteCourse(courseId);
        enqueueSnackbar("Course deleted successfully", { variant: "success" });
        setCourses((prev) => prev.filter((c) => c.id !== courseId));
      } catch (error) {
        enqueueSnackbar(
          error.response?.data?.message || "Failed to delete course",
          { variant: "error" }
        );
      }
    }
  };

  const openCourseViewDialog = (course) => {
    setSelectedCourse(course);
    setViewDialogOpen(true);
  };

  const openCourseEditDialog = (course) => {
    setEditingCourse({ ...course });
    setEditDialogOpen(true);
  };

  const closeCourseEditDialog = () => {
    setEditingCourse(null);
    setEditDialogOpen(false);
  };

  const closeCourseViewDialog = () => {
    setSelectedCourse(null);
    setViewDialogOpen(false);
    setAddingModuleToCourse(null);
    setAddingLessonToModule(null);
  };

  const handleSaveCourse = async () => {
    try {
      const updatedCourse = {
        ...editingCourse,
        status: "pending", // Automatically set to pending on edit
      };

      await InstructorService.updateCourse(editingCourse.id, updatedCourse);
      enqueueSnackbar(
        "Course updated successfully. Waiting for admin approval.",
        {
          variant: "success",
        }
      );

      setCourses((prev) =>
        prev.map((c) => (c.id === editingCourse.id ? updatedCourse : c))
      );
      closeCourseEditDialog();
    } catch (error) {
      enqueueSnackbar(
        error.response?.data?.message || "Failed to update course",
        { variant: "error" }
      );
    }
  };

  const toggleModuleExpansion = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const handleAddModule = async () => {
    if (!newModuleName.trim()) {
      enqueueSnackbar("Module name cannot be empty", { variant: "warning" });
      return;
    }

    try {
      const newModule = await InstructorService.createModule(
        addingModuleToCourse,
        {
          name: newModuleName,
        }
      );

      enqueueSnackbar("Module added successfully", { variant: "success" });

      setCourses((prev) =>
        prev.map((course) =>
          course.id === addingModuleToCourse
            ? {
                ...course,
                modules: [...course.modules, { ...newModule, lessons: [] }],
              }
            : course
        )
      );

      setNewModuleName("");
      setAddingModuleToCourse(null);
    } catch (error) {
      enqueueSnackbar(error.response?.data?.message || "Failed to add module", {
        variant: "error",
      });
    }
  };

  const handleAddLesson = async () => {
    if (!newLessonName.trim()) {
      enqueueSnackbar("Lesson name cannot be empty", { variant: "warning" });
      return;
    }

    try {
      const newLesson = await InstructorService.createLesson({
        module_id: addingLessonToModule,
        title: newLessonName,
        content: "New lesson content", // Required field
      });

      enqueueSnackbar("Lesson added successfully", { variant: "success" });

      setCourses((prev) =>
        prev.map((course) => ({
          ...course,
          modules: course.modules.map((module) =>
            module.id === addingLessonToModule
              ? {
                  ...module,
                  lessons: [...module.lessons, newLesson],
                }
              : module
          ),
        }))
      );

      setNewLessonName("");
      setAddingLessonToModule(null);
    } catch (error) {
      enqueueSnackbar(error.response?.data?.message || "Failed to add lesson", {
        variant: "error",
      });
    }
  };

  const handleDeleteModule = async (courseId, moduleId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this module and all its lessons?"
      )
    ) {
      try {
        await InstructorService.deleteModule(moduleId);
        enqueueSnackbar("Module deleted successfully", { variant: "success" });

        setCourses((prev) =>
          prev.map((course) =>
            course.id === courseId
              ? {
                  ...course,
                  modules: course.modules.filter(
                    (module) => module.id !== moduleId
                  ),
                }
              : course
          )
        );
      } catch (error) {
        enqueueSnackbar(
          error.response?.data?.message || "Failed to delete module",
          { variant: "error" }
        );
      }
    }
  };

  const handleDeleteLesson = async (moduleId, lessonId) => {
    if (window.confirm("Are you sure you want to delete this lesson?")) {
      try {
        await InstructorService.deleteLesson(lessonId);
        enqueueSnackbar("Lesson deleted successfully", { variant: "success" });

        setCourses((prev) =>
          prev.map((course) => ({
            ...course,
            modules: course.modules.map((module) =>
              module.id === moduleId
                ? {
                    ...module,
                    lessons: module.lessons.filter(
                      (lesson) => lesson.id !== lessonId
                    ),
                  }
                : module
            ),
          }))
        );
      } catch (error) {
        enqueueSnackbar(
          error.response?.data?.message || "Failed to delete lesson",
          { variant: "error" }
        );
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "success";
      case "draft":
        return "warning";
      case "pending":
        return "info";
      default:
        return "default";
    }
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || course.category_id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={0} sx={{ p: 3, mb: 3, bgcolor: grey[50] }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h4" component="h1" color="primary">
            My Courses
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            href="/instructor/courses/new"
            sx={{
              bgcolor: lightBlue[600],
              "&:hover": { bgcolor: lightBlue[700] },
            }}
          >
            New Course
          </Button>
        </Box>

        <Grid container spacing={2} alignItems="center" mb={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Search courses..."
              InputProps={{
                startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ bgcolor: "background.paper" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Filter by category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              size="small"
              sx={{ bgcolor: "background.paper" }}
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories?.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {filteredCourses.length === 0 ? (
        <Paper
          elevation={0}
          sx={{ p: 4, textAlign: "center", bgcolor: grey[50] }}
        >
          <Typography variant="h6" color="textSecondary">
            No courses found. Create your first course to get started!
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {filteredCourses.map((course) => (
            <Grid item xs={12} md={6} lg={4} key={course.id}>
              <Card
                elevation={2}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    mb={2}
                  >
                    <Typography variant="h6" component="h3" gutterBottom>
                      {course.title}
                    </Typography>
                    <Chip
                      label={course.status}
                      color={getStatusColor(course.status)}
                      size="small"
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {course.description?.substring(0, 100) ||
                      "No description available."}
                    {course.description?.length > 100 && "..."}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box display="flex" alignItems="center" mb={1}>
                    <CategoryIcon
                      fontSize="small"
                      color="action"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {categories.find((c) => c._id === course.category_id)
                        ?.name || "Uncategorized"}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={1}>
                    <MenuBookIcon
                      fontSize="small"
                      color="action"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {course.modules?.length || 0} Modules
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <ClassIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {course.modules?.reduce(
                        (acc, module) => acc + (module.lessons?.length || 0),
                        0
                      )}{" "}
                      Lessons
                    </Typography>
                  </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                  <Tooltip title="View Course">
                    <IconButton
                      onClick={() => openCourseViewDialog(course)}
                      size="small"
                      sx={{ color: lightBlue[600] }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit Course">
                    <IconButton
                      onClick={() => openCourseEditDialog(course)}
                      size="small"
                      sx={{ color: orange[600] }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Course">
                    <IconButton
                      onClick={() => handleDelete(course.id)}
                      size="small"
                      sx={{ color: "error.main" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* View Course Dialog */}
      <Dialog
        open={viewDialogOpen}
        onClose={closeCourseViewDialog}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        <DialogTitle>
          {selectedCourse?.title}
          <Chip
            label={selectedCourse?.status}
            color={getStatusColor(selectedCourse?.status)}
            size="small"
            sx={{ ml: 2 }}
          />
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" paragraph>
            {selectedCourse?.description}
          </Typography>

          <Box display="flex" alignItems="center" mb={2}>
            <CategoryIcon fontSize="small" color="action" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Category:{" "}
              {categories.find((c) => c._id === selectedCourse?.category_id)
                ?.name || "Uncategorized"}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Course Modules
          </Typography>

          {selectedCourse?.modules?.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No modules added yet.
            </Typography>
          ) : (
            <List>
              {selectedCourse?.modules?.map((module) => (
                <Accordion
                  key={module.id}
                  expanded={expandedModules[module.id] || false}
                  onChange={() => toggleModuleExpansion(module.id)}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Typography>{module.name}</Typography>
                      <Chip
                        label={`${module.lessons?.length || 0} lessons`}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {module.lessons?.length === 0 ? (
                      <Typography variant="body2" color="text.secondary">
                        No lessons in this module.
                      </Typography>
                    ) : (
                      <List>
                        {module.lessons?.map((lesson) => (
                          <ListItem key={lesson.id}>
                            <ListItemText primary={lesson.title} />
                            <ListItemSecondaryAction>
                              <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() =>
                                  handleDeleteLesson(module.id, lesson.id)
                                }
                                color="error"
                                size="small"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))}
                      </List>
                    )}
                    {addingLessonToModule === module.id && (
                      <Box mt={2} display="flex" alignItems="center">
                        <TextField
                          fullWidth
                          size="small"
                          label="New Lesson Title"
                          value={newLessonName}
                          onChange={(e) => setNewLessonName(e.target.value)}
                          sx={{ mr: 1 }}
                        />
                        <Button
                          variant="contained"
                          size="small"
                          onClick={handleAddLesson}
                        >
                          Add
                        </Button>
                        <Button
                          size="small"
                          sx={{ ml: 1 }}
                          onClick={() => setAddingLessonToModule(null)}
                        >
                          Cancel
                        </Button>
                      </Box>
                    )}
                    <Button
                      startIcon={<AddIcon />}
                      size="small"
                      sx={{ mt: 1 }}
                      onClick={() => setAddingLessonToModule(module.id)}
                    >
                      Add Lesson
                    </Button>
                  </AccordionDetails>
                  <Divider />
                  <Box display="flex" justifyContent="flex-end" p={1}>
                    <Button
                      startIcon={<DeleteIcon />}
                      size="small"
                      color="error"
                      onClick={() =>
                        handleDeleteModule(selectedCourse.id, module.id)
                      }
                    >
                      Delete Module
                    </Button>
                  </Box>
                </Accordion>
              ))}
            </List>
          )}

          {addingModuleToCourse === selectedCourse?.id && (
            <Box mt={2} display="flex" alignItems="center">
              <TextField
                fullWidth
                size="small"
                label="New Module Name"
                value={newModuleName}
                onChange={(e) => setNewModuleName(e.target.value)}
                sx={{ mr: 1 }}
              />
              <Button
                variant="contained"
                size="small"
                onClick={handleAddModule}
              >
                Add
              </Button>
              <Button
                size="small"
                sx={{ ml: 1 }}
                onClick={() => setAddingModuleToCourse(null)}
              >
                Cancel
              </Button>
            </Box>
          )}

          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => setAddingModuleToCourse(selectedCourse?.id)}
          >
            Add Module
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCourseViewDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Course Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={closeCourseEditDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Course</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={editingCourse?.title || ""}
            onChange={(e) =>
              setEditingCourse({
                ...editingCourse,
                title: e.target.value,
              })
            }
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            multiline
            minRows={3}
            value={editingCourse?.description || ""}
            onChange={(e) =>
              setEditingCourse({
                ...editingCourse,
                description: e.target.value,
              })
            }
          />
          <TextField
            select
            label="Category"
            fullWidth
            margin="normal"
            value={editingCourse?.category_id || ""}
            onChange={(e) =>
              setEditingCourse({
                ...editingCourse,
                category_id: e.target.value,
              })
            }
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Status"
            fullWidth
            margin="normal"
            value={editingCourse?.status || ""}
            onChange={(e) =>
              setEditingCourse({
                ...editingCourse,
                status: e.target.value,
              })
            }
            disabled={editingCourse?.status === "pending"}
            helperText={
              editingCourse?.status === "pending"
                ? "Course is pending admin approval"
                : "Changing status will require admin approval"
            }
          >
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="published">Published</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCourseEditDialog}>Cancel</Button>
          <Button
            onClick={handleSaveCourse}
            variant="contained"
            color="primary"
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CourseList;
