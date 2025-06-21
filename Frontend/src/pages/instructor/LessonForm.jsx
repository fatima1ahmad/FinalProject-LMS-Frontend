import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import InstructorService from "../../services/instructorService";

const contentTypes = [
  { value: "video", label: "Video" },
  { value: "article", label: "Article" },
  { value: "quiz", label: "Quiz" },
  { value: "document", label: "Document (PDF/Word)" },
];

const LessonForm = () => {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [lessonData, setLessonData] = useState({
    title: "",
    content_type: "video",
    content_url: "",
    duration: 10,
    order: 1,
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (lessonId) {
      const fetchLesson = async () => {
        try {
          setLoading(true);
          const response = await InstructorService.getLessonsByModule(moduleId);
          const lesson = response.data.find((l) => l._id === lessonId);
          if (lesson) {
            setLessonData({
              title: lesson.title,
              content_type: lesson.content_type,
              content_url: lesson.content_url,
              duration: lesson.duration,
              order: lesson.order,
            });
          }
        } catch (error) {
          console.error("Failed to fetch lesson:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchLesson();
    }
  }, [lessonId, moduleId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLessonData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // رفع الملف عبر API (تأكد أن السيرفر يدعم ملفات الفيديو والوثائق)
      const response = await InstructorService.uploadFile(formData);

      setLessonData((prev) => ({
        ...prev,
        content_url: response.secure_url,
      }));

      setErrors((prev) => ({ ...prev, content_url: null }));
    } catch (error) {
      console.error("File upload error:", error);
      setErrors((prev) => ({
        ...prev,
        content_url: "Failed to upload file",
      }));
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!lessonData.title) newErrors.title = "Title is required";
    if (!lessonData.content_url) newErrors.content_url = "Content is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      if (lessonId) {
        await InstructorService.updateLesson(lessonId, lessonData);
      } else {
        await InstructorService.createLesson({
          ...lessonData,
          module_id: moduleId,
        });
      }
      navigate(`/instructor/modules/${moduleId}`);
    } catch (error) {
      console.error("Error saving lesson:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        {lessonId ? "Edit Lesson" : "Create New Lesson"}
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Title */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Lesson Title"
              name="title"
              value={lessonData.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
              required
              disabled={loading}
            />
          </Grid>

          {/* Content Type */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth disabled={loading}>
              <InputLabel>Content Type</InputLabel>
              <Select
                name="content_type"
                value={lessonData.content_type}
                onChange={handleChange}
                label="Content Type"
              >
                {contentTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Duration */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Duration (minutes)"
              name="duration"
              type="number"
              value={lessonData.duration}
              onChange={handleChange}
              inputProps={{ min: 1 }}
              disabled={loading}
            />
          </Grid>

          {/* Content Input */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Lesson Content
            </Typography>

            {/* فيديو */}
            {lessonData.content_type === "video" && (
              <>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  disabled={loading}
                  style={{ marginBottom: 12 }}
                />
                {errors.content_url && (
                  <Typography color="error" variant="body2" mb={1}>
                    {errors.content_url}
                  </Typography>
                )}
                {lessonData.content_url && (
                  <Box mt={2}>
                    <video
                      controls
                      src={lessonData.content_url}
                      style={{ maxWidth: "100%", maxHeight: 300 }}
                    />
                  </Box>
                )}
              </>
            )}

            {/* وثائق PDF / Word */}
            {lessonData.content_type === "document" && (
              <>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  onChange={handleFileChange}
                  disabled={loading}
                  style={{ marginBottom: 12 }}
                />
                {errors.content_url && (
                  <Typography color="error" variant="body2" mb={1}>
                    {errors.content_url}
                  </Typography>
                )}
                {lessonData.content_url && (
                  <Box mt={2}>
                    <Typography>
                      <a
                        href={lessonData.content_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        عرض الملف المرفوع
                      </a>
                    </Typography>
                  </Box>
                )}
              </>
            )}

            {/* مقال نصي */}
            {lessonData.content_type === "article" && (
              <TextField
                fullWidth
                label="Article Content"
                name="content_url"
                value={lessonData.content_url}
                onChange={handleChange}
                multiline
                rows={8}
                error={!!errors.content_url}
                helperText={errors.content_url}
                required
                disabled={loading}
              />
            )}

            {/* اختبار (غير مفعّل حاليا) */}
            {lessonData.content_type === "quiz" && (
              <Typography variant="body2" color="textSecondary">
                Quiz content management not implemented yet.
              </Typography>
            )}
          </Grid>

          {/* Buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="outlined"
                onClick={() => navigate(`/instructor/modules/${moduleId}`)}
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
                {lessonId ? "Update Lesson" : "Create Lesson"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default LessonForm;
