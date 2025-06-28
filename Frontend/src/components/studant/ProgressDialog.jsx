import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  LinearProgress,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import EnrollmentService from "../../services/EnrollemtServices";
import { progressDialogStyles } from "../../theme/studentStyle";

const ProgressContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const ProgressDialog = ({ open, onClose, course }) => {
  const { user } = useAuth();
  const [state, setState] = useState({
    progress: null,
    loading: false,
    error: null,
    enrollmentId: null,
  });

  useEffect(() => {
    const fetchProgress = async () => {
      if (!open || !course?.enrollmentId || !user?.id) return;

      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        // نطلب بيانات التقدم حسب enrollmentId وليس course.id
        const progressData = await EnrollmentService.getCourseProgressDetails(
          course.enrollmentId
        );

        setState({
          progress: {
            modules: progressData.modules || [],
            overallProgress: progressData.overallProgress || 0,
            completedLessons: progressData.completedLessons || [],
          },
          enrollmentId: progressData.enrollmentId,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          progress: null,
          enrollmentId: null,
          loading: false,
          error: error.message || "Failed to load progress data",
        });
      }
    };

    fetchProgress();
  }, [open, course, user]);
  const handleMarkComplete = async (lessonId) => {
    try {
      const response = await EnrollmentService.markLessonCompleted(lessonId);
      setState((prev) => ({
        ...prev,
        progress: {
          ...prev.progress,
          completedLessons: [
            ...prev.progress.completedLessons,
            { lesson_id: lessonId },
          ],
          modules: prev.progress.modules.map((module) => ({
            ...module,
            lessons: module.lessons.map((lesson) =>
              lesson.id === lessonId
                ? { ...lesson, is_completed: true }
                : lesson
            ),
          })),
          overallProgress: response.progress,
        },
      }));
    } catch (error) {
      console.error("Completion error:", error);
    }
  };

  // دالة لمساعدة في التحقق هل درس مكتمل
  const isLessonCompleted = (lessonId) => {
    return state.progress?.completedLessons.some(
      (l) => l.lesson_id === lessonId
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={progressDialogStyles.title}>
        {course?.title} Progress
      </DialogTitle>

      <DialogContent dividers>
        {state.loading ? (
          <Box sx={progressDialogStyles.loadingContainer}>
            <CircularProgress size={60} />
          </Box>
        ) : state.error ? (
          <Alert severity="error" sx={{ my: 2 }}>
            {state.error}
          </Alert>
        ) : state.progress ? (
          <ProgressContainer>
            <Box>
              <Typography variant="h6" gutterBottom>
                Overall Progress
              </Typography>
              <LinearProgress
                variant="determinate"
                value={state.progress.overallProgress}
                sx={{ height: 10, borderRadius: 5 }}
              />
              <Typography sx={{ mt: 1 }}>
                {state.progress.overallProgress}% Complete
              </Typography>
            </Box>

            {/* قائمة Modules والدروس */}
            {state.progress.modules.map((module) => (
              <Box key={module.id}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Module: {module.title}
                </Typography>
                <List dense>
                  {module.lessons.map((lesson) => (
                    <ListItem
                      key={lesson.id}
                      secondaryAction={
                        !isLessonCompleted(lesson.id) && (
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleMarkComplete(lesson.id)}
                          >
                            Mark Complete
                          </Button>
                        )
                      }
                    >
                      <ListItemText
                        primary={lesson.title}
                        secondary={`Duration: ${lesson.duration} min`}
                      />
                      {isLessonCompleted(lesson.id) && (
                        <Chip label="Completed" color="success" />
                      )}
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ my: 2 }} />
              </Box>
            ))}
          </ProgressContainer>
        ) : (
          <Typography>No progress data available</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProgressDialog;
