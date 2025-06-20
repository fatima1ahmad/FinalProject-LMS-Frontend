// src/components/instructor/ModuleList.js
import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Typography,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Reorder as ReorderIcon,
  VideoLibrary as LessonIcon,
  Assignment as AssignmentIcon,
  Quiz as QuizIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ModuleList = ({ modules, courseId, onUpdate }) => {
  const navigate = useNavigate();

  const handleEditModule = (moduleId) => {
    navigate(`/instructor/courses/${courseId}/modules/${moduleId}/edit`);
  };

  const handleDeleteModule = (moduleId) => {
    // Implement delete functionality
    console.log("Delete module", moduleId);
  };

  // const handleAddLesson = (moduleId) => {
  //   navigate(`/instructor/courses/${courseId}/modules/${moduleId}/lessons/new`);
  // };
  const handleAddLesson = (moduleId, e) => {
    e.preventDefault(); // إيقاف السلوك الافتراضي للزر

    if (!lessonForm.title) {
      showSnackbar("Lesson title is required", "error");
      return;
    }

    const newLesson = {
      ...lessonForm,
      id: `temp-${Date.now()}`,
    };

    setModules(
      modules.map((module) => {
        if (module.id === moduleId) {
          return {
            ...module,
            lessons: [...module.lessons, newLesson],
          };
        }
        return module;
      })
    );

    // إعادة تعيين النموذج دون إغلاقه
    setLessonForm({
      title: "",
      content_type: "video",
      content_url: "",
      duration: "",
      order: "",
    });

    // لا تقم بإعادة تعيين selectedModule هنا
  };

  if (modules.length === 0) {
    return (
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          No modules created yet
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() =>
            navigate(`/instructor/courses/${courseId}/modules/new`)
          }
        >
          Create First Module
        </Button>
      </Paper>
    );
  }

  return (
    <Box>
      {modules.map((module, index) => (
        <Accordion key={module.id} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <IconButton sx={{ mr: 1 }}>
                <ReorderIcon />
              </IconButton>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                {module.title}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditModule(module.id);
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteModule(module.id);
                  }}
                >
                  <DeleteIcon fontSize="small" color="error" />
                </IconButton>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" paragraph>
              {module.description || "No description provided"}
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="subtitle2">
                Content Items ({module.lessons?.length || 0})
              </Typography>
              <Button
                variant="outlined"
                startIcon={<Add />}
                onClick={(e) => handleAddLesson(selectedModule.id, e)} // تمرير الحدث
                disabled={!lessonForm.title}
              >
                Add Lesson
              </Button>
            </Box>

            {module.lessons && module.lessons.length > 0 ? (
              <List dense>
                {module.lessons.map((lesson) => (
                  <ListItem key={lesson.id} divider>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {lesson.type === "video" && (
                        <LessonIcon color="primary" sx={{ mr: 1 }} />
                      )}
                      {lesson.type === "assignment" && (
                        <AssignmentIcon color="secondary" sx={{ mr: 1 }} />
                      )}
                      {lesson.type === "quiz" && (
                        <QuizIcon color="warning" sx={{ mr: 1 }} />
                      )}
                      <ListItemText
                        primary={lesson.title}
                        secondary={lesson.type}
                      />
                    </Box>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="edit">
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon fontSize="small" color="error" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="text.secondary" align="center">
                No lessons in this module yet
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default ModuleList;
