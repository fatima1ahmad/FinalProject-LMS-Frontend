// src/components/courses/NewCourseDialog.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem,
} from "@mui/material";

const NewCourseDialog = ({ open, onClose, onSubmit }) => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category_id: "",
    thumbnail_url: "",
    duration: "",
  });

  const categories = [
    { id: 1, name: "Programming" },
    { id: 2, name: "Design" },
    { id: 3, name: "Business" },
    { id: 4, name: "Marketing" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(courseData);
    setCourseData({
      title: "",
      description: "",
      category_id: "",
      thumbnail_url: "",
      duration: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create New Course</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Course Title"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={courseData.description}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Category"
              name="category_id"
              value={courseData.category_id}
              onChange={handleChange}
              required
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Duration (hours)"
              name="duration"
              type="number"
              value={courseData.duration}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Thumbnail URL"
              name="thumbnail_url"
              value={courseData.thumbnail_url}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Create Course
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewCourseDialog;
