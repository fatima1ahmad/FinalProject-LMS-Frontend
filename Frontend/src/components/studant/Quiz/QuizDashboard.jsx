import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Alert,
  Chip,
  Grid,
  Paper,
  Avatar,
  LinearProgress,
  Badge,
} from "@mui/material";
import {
  Quiz as QuizIcon,
  CheckCircle,
  Cancel,
  EmojiEvents,
  AssignmentTurnedIn,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import QuizService from "../../../services/QuizeService";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[8],
  },
  borderRadius: "12px",
  borderLeft: "4px solid",
  borderLeftColor: theme.palette.primary.main,
}));

const QuizDashboard = ({ selectedLessonId }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizDetails, setQuizDetails] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch quizzes by lesson ID
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        const quizzes = await QuizService.getQuizzesByLesson(selectedLessonId);
        console.log("Fetched Quizzes:", quizzes); // Debug log

        setQuizzes(quizzes);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        setError("Failed to load quizzes.");
      } finally {
        setLoading(false);
      }
    };

    if (selectedLessonId) {
      fetchQuizzes();
    }
  }, [selectedLessonId]);

  const handleQuizSelect = async (quiz) => {
    try {
      setLoading(true);
      setSelectedQuiz(quiz);
      setActiveStep(1);

      // Check if user already submitted this quiz
      const existingSubmission = await QuizService.checkQuizSubmission(quiz.id);
      if (existingSubmission) {
        setSubmission(existingSubmission);
        setActiveStep(2);
        return;
      }

      // Get quiz details with questions
      const data = await QuizService.getQuizWithQuestions(quiz.id);
      setQuizDetails(data);

      // Initialize empty answers
      const initialAnswers = {};
      data.questions.forEach((q) => {
        initialAnswers[q.id] = null;
      });
      setAnswers(initialAnswers);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmitQuiz = async () => {
    try {
      setLoading(true);
      const result = await QuizService.submitQuiz(selectedQuiz.id, answers);
      setSubmission(result);
      setActiveStep(2);

      // Refresh quizzes list to update completion status
      const updatedQuizzes = await QuizService.getQuizzesByLesson(
        selectedLessonId
      );
      setQuizzes(updatedQuizzes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToQuizzes = () => {
    setSelectedQuiz(null);
    setQuizDetails(null);
    setAnswers({});
    setSubmission(null);
    setActiveStep(0);
  };

  const calculateScore = () => {
    if (!submission || !quizDetails) return 0;

    let correctCount = 0;
    quizDetails.questions.forEach((question) => {
      if (submission.answers[question.id] === question.correct_answer) {
        correctCount++;
      }
    });

    return Math.round((correctCount / quizDetails.questions.length) * 100);
  };

  const steps = ["Select Quiz", "Take Quiz", "Results"];

  return (
    <Box sx={{ p: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {activeStep === 0 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Available Quizzes
          </Typography>

          {quizzes.length === 0 && !loading && (
            <Alert severity="info">No quizzes available for this lesson.</Alert>
          )}

          <Grid container spacing={3}>
            {quizzes.map((quiz) => (
              <Grid item xs={12} sm={6} md={4} key={quiz.id}>
                <StyledCard>
                  <CardActionArea onClick={() => handleQuizSelect(quiz)}>
                    <CardContent>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <QuizIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6" component="div">
                          {quiz.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        Max Score: {quiz.max_score}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Chip
                          label={
                            quiz.submission_id ? "Completed" : "Not Attempted"
                          }
                          color={quiz.submission_id ? "success" : "warning"}
                          size="small"
                        />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {activeStep === 1 && quizDetails && (
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h5">{quizDetails.quiz.title}</Typography>
            <Button variant="outlined" onClick={handleBackToQuizzes}>
              Back to Quizzes
            </Button>
          </Box>

          {quizDetails.questions.map((question, index) => (
            <Paper key={question.id} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Question {index + 1}: {question.question_text}
              </Typography>
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <RadioGroup
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    handleAnswerChange(question.id, e.target.value)
                  }
                >
                  {question.options.map((option, i) => (
                    <FormControlLabel
                      key={i}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Paper>
          ))}

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Button
              variant="contained"
              onClick={handleSubmitQuiz}
              disabled={
                loading ||
                Object.values(answers).some((a) => a === null) ||
                Object.values(answers).length === 0
              }
              endIcon={<AssignmentTurnedIn />}
            >
              {loading ? "Submitting..." : "Submit Quiz"}
            </Button>
          </Box>
        </Box>
      )}

      {activeStep === 2 && submission && (
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h4" gutterBottom>
              Quiz Results: {selectedQuiz.title}
            </Typography>
            <Button variant="outlined" onClick={handleBackToQuizzes}>
              Back to Quizzes
            </Button>
          </Box>

          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 2,
                bgcolor: calculateScore() >= 70 ? "success.main" : "error.main",
              }}
            >
              <Typography variant="h2">{calculateScore()}%</Typography>
            </Avatar>
            <Typography variant="h5" gutterBottom>
              {calculateScore() >= 70 ? "Congratulations!" : "Keep Practicing!"}
            </Typography>
            <Typography color="text.secondary">
              You scored {calculateScore()}% on this quiz
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Detailed Results:
          </Typography>
          {quizDetails.questions.map((question, index) => {
            const userAnswer = submission.answers[question.id];
            const isCorrect = userAnswer === question.correct_answer;

            return (
              <Paper key={question.id} sx={{ p: 3, mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                    Question {index + 1}: {question.question_text}
                  </Typography>
                  {isCorrect ? (
                    <CheckCircle color="success" />
                  ) : (
                    <Cancel color="error" />
                  )}
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Your answer: {userAnswer || "Not answered"}
                </Typography>
                {!isCorrect && (
                  <Typography variant="body2" color="text.secondary">
                    Correct answer: {question.correct_answer}
                  </Typography>
                )}
              </Paper>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default QuizDashboard;
