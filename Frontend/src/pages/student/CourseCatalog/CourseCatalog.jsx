import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  Pagination,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search, Star, People, Schedule } from "@mui/icons-material";

const CourseCatalog = () => {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "Jane Smith",
      thumbnail: "/assets/images/react-course.jpg",
      rating: 4.7,
      students: 1245,
      duration: "12 hours",
      category: "Programming",
    },
    // More courses...
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" gutterBottom>
          Course Catalog
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search courses..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />
        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <Chip label="All Categories" color="primary" />
          <Chip label="Programming" />
          <Chip label="Design" />
          <Chip label="Business" />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.thumbnail}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  By {course.instructor}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <Star color="warning" fontSize="small" />
                  <Typography variant="body2">{course.rating}</Typography>
                  <People fontSize="small" sx={{ ml: 1 }} />
                  <Typography variant="body2">{course.students}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Schedule fontSize="small" />
                  <Typography variant="body2">{course.duration}</Typography>
                </Box>
                <Chip label={course.category} size="small" sx={{ mt: 1 }} />
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" fullWidth>
                  Enroll Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination count={10} color="primary" />
      </Box>
    </Container>
  );
};

export default CourseCatalog;
