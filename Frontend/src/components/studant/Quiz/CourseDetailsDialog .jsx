import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  Divider,
  IconButton,
  Paper,
  Avatar,
  LinearProgress,
  useTheme,
} from "@mui/material";
import {
  Close,
  School,
  PlayCircle,
  Bookmark,
  BookmarkBorder,
  CheckCircle,
  AccessTime,
  Star,
} from "@mui/icons-material";

const CourseDetailsDialog = ({ open, onClose, course }) => {
  const theme = useTheme();
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  if (!course) return null;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "beginner":
        return { color: "#10b981", bg: "rgba(16, 185, 129, 0.1)" };
      case "intermediate":
        return { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" };
      case "advanced":
        return { color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" };
      default:
        return { color: "#6366f1", bg: "rgba(99, 102, 241, 0.1)" };
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle sx={{ p: 0, position: "relative" }}>
        <Box
          sx={{
            height: 200,
            backgroundImage: `url(${
              course.thumbnail_url || "/default-course.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              onClick={() => setIsBookmarked(!isBookmarked)}
              sx={{
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                color: isBookmarked ? theme.palette.primary.main : "white",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              {isBookmarked ? <Bookmark /> : <BookmarkBorder />}
            </IconButton>
            <IconButton
              onClick={onClose}
              sx={{
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              right: 16,
              color: "white",
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              {course.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Chip
                label={course.difficulty || "Beginner"}
                size="small"
                sx={{
                  backgroundColor: getDifficultyColor(course.difficulty).bg,
                  color: getDifficultyColor(course.difficulty).color,
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<AccessTime fontSize="small" />}
                label={`${course.duration || 0}h`}
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 500,
                }}
              />
            </Box>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Course Description
            </Typography>
            <Typography variant="body1" paragraph>
              {course.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom fontWeight={600}>
              What You'll Learn
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3 }}>
              {course.learning_outcomes?.map((outcome, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Typography variant="body1">{outcome}</Typography>
                </Box>
              )) || (
                <Typography variant="body1" color="text.secondary">
                  No learning outcomes specified
                </Typography>
              )}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom fontWeight={600}>
              Course Content
            </Typography>
            <Box sx={{ mt: 2 }}>
              {course.modules?.map((module) => (
                <Paper key={module.id} sx={{ mb: 2, borderRadius: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: theme.palette.grey[100],
                      borderBottom: `1px solid ${theme.palette.grey[300]}`,
                      borderRadius: "8px 8px 0 0",
                    }}
                  >
                    <Typography fontWeight={600}>{module.title}</Typography>
                  </Box>
                  <Box sx={{ p: 0 }}>
                    {module.lessons?.map((lesson) => (
                      <Box
                        key={lesson.id}
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          borderBottom: `1px solid ${theme.palette.grey[200]}`,
                          "&:last-child": {
                            borderBottom: "none",
                          },
                        }}
                      >
                        <PlayCircle
                          sx={{
                            mr: 2,
                            color: theme.palette.grey[500],
                            fontSize: 20,
                          }}
                        />
                        <Typography variant="body2" sx={{ flexGrow: 1 }}>
                          {lesson.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ ml: 2 }}
                        >
                          {lesson.duration} min
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              )) || (
                <Typography variant="body1" color="text.secondary">
                  No modules available
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              p: 4,
              backgroundColor: theme.palette.grey[50],
              borderLeft: `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 20,
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Course Details
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Instructor
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={course.instructor?.avatar}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography fontWeight={500}>
                    {course.instructor?.name || "Unknown Instructor"}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Category
                </Typography>
                <Typography>{course.category || "Uncategorized"}</Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Rating
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Star sx={{ color: theme.palette.warning.main }} />
                  <Typography>
                    {course.rating || "0"} ({course.reviews_count || 0} reviews)
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Progress
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={course.progress || 0}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    mb: 1,
                  }}
                />
                <Typography variant="body2">
                  {Math.round(course.progress || 0)}% Complete
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<School />}
                sx={{
                  mt: 2,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                }}
              >
                {course.isEnrolled ? "Continue Learning" : "Enroll Now"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsDialog;
