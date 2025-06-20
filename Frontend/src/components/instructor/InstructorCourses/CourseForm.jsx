import React, { useState, useEffect } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
  Divider,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useSnackbar } from "notistack";
import InstructorService from "../../services/instructorService";
import ModuleForm from "./ModuleForm";
import LessonForm from "./LessonForm";

const steps = ["Course Details", "Modules", "Lessons"];

const CourseForm = ({ course, onSuccess }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category_id: "",
    thumbnail_url: "",
    duration: 0,
    modules: [],
  });
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title,
        description: course.description,
        category_id: course.category_id,
        thumbnail_url: course.thumbnail_url,
        duration: course.duration,
        modules: course.modules || [],
      });
    }
  }, [course]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddModule = (module) => {
    setFormData((prev) => ({
      ...prev,
      modules: [...prev.modules, module],
    }));
  };

  const handleUpdateModule = (index, updatedModule) => {
    setFormData((prev) => {
      const updatedModules = [...prev.modules];
      updatedModules[index] = updatedModule;
      return { ...prev, modules: updatedModules };
    });
  };

  const handleDeleteModule = (index) => {
    setFormData((prev) => {
      const updatedModules = [...prev.modules];
      updatedModules.splice(index, 1);
      return { ...prev, modules: updatedModules };
    });
  };

  const handleAddLesson = (moduleIndex, lesson) => {
    setFormData((prev) => {
      const updatedModules = [...prev.modules];
      if (!updatedModules[moduleIndex].lessons) {
        updatedModules[moduleIndex].lessons = [];
      }
      updatedModules[moduleIndex].lessons.push(lesson);
      return { ...prev, modules: updatedModules };
    });
  };

  const handleUpdateLesson = (moduleIndex, lessonIndex, updatedLesson) => {
    setFormData((prev) => {
      const updatedModules = [...prev.modules];
      updatedModules[moduleIndex].lessons[lessonIndex] = updatedLesson;
      return { ...prev, modules: updatedModules };
    });
  };

  const handleDeleteLesson = (moduleIndex, lessonIndex) => {
    setFormData((prev) => {
      const updatedModules = [...prev.modules];
      updatedModules[moduleIndex].lessons.splice(lessonIndex, 1);
      return { ...prev, modules: updatedModules };
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (course) {
        await InstructorService.updateCourse(course.id, formData);
        enqueueSnackbar("Course updated successfully", { variant: "success" });
      } else {
        await InstructorService.createCourse(formData);
        enqueueSnackbar("Course created successfully", { variant: "success" });
      }
      onSuccess();
    } catch (error) {
      enqueueSnackbar(error.message || "Failed to save course", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Course Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleInputChange}
                  required
                >
                  <MenuItem value={1}>Programming</MenuItem>
                  <MenuItem value={2}>Design</MenuItem>
                  <MenuItem value={3}>Business</MenuItem>
                  <MenuItem value={4}>Marketing</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Duration (hours)"
                name="duration"
                type="number"
                value={formData.duration}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Thumbnail URL"
                name="thumbnail_url"
                value={formData.thumbnail_url}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <ModuleForm
            modules={formData.modules}
            onAdd={handleAddModule}
            onUpdate={handleUpdateModule}
            onDelete={handleDeleteModule}
            courseId={course?.id}
          />
        );
      case 2:
        return (
          <LessonForm
            modules={formData.modules}
            onAddLesson={handleAddLesson}
            onUpdateLesson={handleUpdateLesson}
            onDeleteLesson={handleDeleteLesson}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper sx={{ p: 3, mt: 3 }}>{renderStepContent(activeStep)}</Paper>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button
          disabled={activeStep === 0 || loading}
          onClick={handleBack}
          variant="outlined"
        >
          Back
        </Button>

        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Finish"}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={
              (activeStep === 0 &&
                (!formData.title || !formData.description)) ||
              loading
            }
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CourseForm;
