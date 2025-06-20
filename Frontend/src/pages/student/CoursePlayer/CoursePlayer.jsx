import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Chip,
  CircularProgress,
} from "@mui/material";
import {
  PlayCircle,
  CheckCircle,
  Assignment,
  Quiz,
  Download,
} from "@mui/icons-material";

const CoursePlayer = () => {
  const [activeLesson, setActiveLesson] = useState(0);
  const [progress] = useState(35);

  const modules = [
    {
      id: 1,
      title: "Getting Started",
      lessons: [
        {
          id: 1,
          title: "Introduction to React",
          duration: "12:45",
          completed: true,
        },
        {
          id: 2,
          title: "Setting Up Environment",
          duration: "8:30",
          completed: true,
        },
        {
          id: 3,
          title: "First Component",
          duration: "15:20",
          completed: false,
        },
      ],
    },
    // More modules...
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Sidebar */}
        <Grid item xs={12} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Course Content
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={40}
                  thickness={4}
                  sx={{ mr: 2 }}
                />
                <Typography>{progress}% complete</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <List>
                {modules.map((module) => (
                  <React.Fragment key={module.id}>
                    <ListItem>
                      <Typography variant="subtitle1">
                        {module.title}
                      </Typography>
                    </ListItem>
                    {module.lessons.map((lesson) => (
                      <ListItemButton
                        key={lesson.id}
                        selected={activeLesson === lesson.id}
                        onClick={() => setActiveLesson(lesson.id)}
                      >
                        <ListItemIcon>
                          {lesson.completed ? (
                            <CheckCircle color="success" />
                          ) : (
                            <PlayCircle color="primary" />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={lesson.title}
                          secondary={lesson.duration}
                        />
                      </ListItemButton>
                    ))}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <Download />
                  </ListItemIcon>
                  <ListItemText primary="Course Slides" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Assignment />
                  </ListItemIcon>
                  <ListItemText primary="Exercise Files" />
                </ListItemButton>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8} lg={9}>
          <Card>
            <Box sx={{ position: "relative", pt: "56.25%", bgcolor: "black" }}>
              {/* Video Player Placeholder */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Typography variant="h4">Video Player</Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Introduction to React
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <Chip label="Beginner" size="small" />
                <Chip label="12 minutes" size="small" />
              </Box>
              <Typography paragraph>
                This lesson will introduce you to the core concepts of React
                including components, props, and state.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" startIcon={<Assignment />}>
                  View Assignment
                </Button>
                <Button variant="contained" endIcon={<Quiz />}>
                  Take Quiz
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Discussion/Comments Section */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Discussion
              </Typography>
              {/* Discussion components would go here */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoursePlayer;
