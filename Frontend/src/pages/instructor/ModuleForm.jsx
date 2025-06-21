import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Divider,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import InstructorService from "../../services/instructorService";

const ModuleForm = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [moduleData, setModuleData] = useState({
    title: "",
    description: "",
    order: 1,
    duration: 1,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (moduleId) {
      const fetchModule = async () => {
        try {
          setLoading(true);
          const response = await InstructorService.getModulesByCourse(courseId);
          const module = response.data.find((m) => m._id === moduleId);
          if (module) {
            setModuleData({
              title: module.title,
              description: module.description,
              order: module.order,
              duration: module.duration,
            });
          }
        } catch (error) {
          console.error("Failed to fetch module:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchModule();
    }
  }, [moduleId, courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModuleData({
      ...moduleData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!moduleData.title) newErrors.title = "Title is required";
    if (!moduleData.description)
      newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (moduleId) {
        await InstructorService.updateModule(moduleId, moduleData);
        navigate(`/instructor/courses/${courseId}`);
      } else {
        const module = await InstructorService.createModule(
          courseId,
          moduleData
        );
        console.log("Response from createModule:", module);
        const newModuleId = module.id; // تصحيح هنا: استعمل module.id وليس response.id
        navigate(`/instructor/modules/${newModuleId}/lessons/new`);
      }
    } catch (error) {
      console.error("Error saving module:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        {moduleId ? "Edit Module" : "Create New Module"}
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Module Title"
              name="title"
              value={moduleData.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={moduleData.description}
              onChange={handleChange}
              multiline
              rows={4}
              error={!!errors.description}
              helperText={errors.description}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Order"
              name="order"
              type="number"
              value={moduleData.order}
              onChange={handleChange}
              inputProps={{ min: 1 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Duration (hours)"
              name="duration"
              type="number"
              value={moduleData.duration}
              onChange={handleChange}
              inputProps={{ min: 0.5, step: 0.5 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="outlined"
                onClick={() => navigate(`/instructor/courses/${courseId}`)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                endIcon={loading && <CircularProgress size={20} />}
              >
                {moduleId ? "Update Module" : "Create Module"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ModuleForm;
