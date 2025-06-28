import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
  Avatar,
  useTheme,
  Tabs,
  Tab,
  Paper,
  Chip,
  LinearProgress,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  TrendingUpRounded,
  SchoolRounded,
  EmojiEventsRounded,
  AutoStoriesRounded,
  WavingHandRounded,
  SearchRounded,
} from "@mui/icons-material";
import CourseCard from "../../components/studant/CourseCard";
import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
import ProgressDialog from "../../components/studant/ProgressDialog";
import StudentSidebar from "../../components/studant/StudentSidebar";
import CourseService from "../../services/StudentService";
import EnrollmentService from "../../services/EnrollemtServices";
import Header from "../../components/common/Header/Header";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import InProgressCourses from "../../components/studant/Inprogress";
import AssignmentList from "../../components/studant//Assignment/AssignmentList";
import QuizDashboard from "./../../components/studant/Quiz/QuizDashboard";
import Settings from "../../components/common/Settings/Settings";

const motivationalQuotes = [
  "The expert in anything was once a beginner.",
  "Learning is a treasure that will follow its owner everywhere.",
  "Education is the most powerful weapon which you can use to change the world.",
];

const DashboardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "120vh",
  width: "100%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
    `,
    pointerEvents: "none",
  },
});

const ContentWrapper = styled(Box)({
  display: "flex",
  flex: 1,
  position: "relative",
  zIndex: 1,
});

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(10),
  width: "calc(100% - 280px)",
  minHeight: "calc(100vh - 69px)",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px 0 0 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
    borderRadius: "24px 0 0 0",
    pointerEvents: "none",
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}));

const WelcomeCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  borderRadius: 24,
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
    `,
    pointerEvents: "none",
  },
}));

const ModernTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: 16,
  padding: 8,
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    borderRadius: 12,
    margin: "0 4px",
    minHeight: 48,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textTransform: "capitalize",
    fontWeight: 600,
    "&.Mui-selected": {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      boxShadow: "0 4px 16px rgba(102, 126, 234, 0.4)",
    },
    "&:hover:not(.Mui-selected)": {
      backgroundColor: "rgba(102, 126, 234, 0.1)",
    },
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: theme.spacing(3),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: 60,
    height: 4,
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    borderRadius: 2,
  },
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: 12,
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    "& fieldset": {
      borderColor: "rgba(102, 126, 234, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(102, 126, 234, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#667eea",
    },
  },
  "& .MuiInputBase-input": {
    padding: "14px 14px",
  },
}));

const StudentDashboard = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
  const [progressDialogOpen, setProgressDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
    useState(null);
  const [randomQuote] = useState(
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  );
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
          [
            CourseService.getAllCourses(),
            EnrollmentService.getUserEnrollments(),
          ]
        );

        const allCourses = Array.isArray(allCoursesResponse)
          ? allCoursesResponse
          : allCoursesResponse?.data || [];

        const userEnrollments = Array.isArray(userEnrollmentsResponse)
          ? userEnrollmentsResponse
          : userEnrollmentsResponse?.data || [];

        const uniqueCategories = [
          "all",
          ...new Set(allCourses.map((course) => course.category)),
        ];
        setCategories(uniqueCategories);

        setCourses(allCourses);
        setEnrolledCourses(userEnrollments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setCourses([]);
        setEnrolledCourses([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCourseForAssignments) {
      setActiveTab("assignments");
    }
  }, [selectedCourseForAssignments]);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setEnrollmentDialogOpen(true);
  };

  const handleViewProgress = (course) => {
    setSelectedCourse(course);
    setProgressDialogOpen(true);
  };

  const handleViewAssignments = (course) => {
    setSelectedCourseForAssignments(course);
  };

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem("access-token");
      if (!token) return;

      await EnrollmentService.enrollUser(selectedCourse.id);
      const updatedEnrollments = await EnrollmentService.getUserEnrollments();
      setEnrolledCourses(updatedEnrollments);
      setEnrollmentDialogOpen(false);
    } catch (error) {
      console.error("Error enrolling:", error);
    }
  };

  // Helper functions
  const enrolledCourseIds = enrolledCourses.map((enroll) => enroll.course_id);
  const enrolledCoursesCount = enrolledCourseIds.length;
  const completedCoursesCount = enrolledCourses.filter(
    (enrollment) => enrollment.isCompleted
  ).length;

  const getEnrolledCourses = () => {
    return courses
      .filter((course) => enrolledCourseIds.includes(course.id))
      .filter(
        (course) =>
          categoryFilter === "all" || course.category === categoryFilter
      )
      .filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  const getNotEnrolledCourses = () => {
    return courses
      .filter((course) => !enrolledCourseIds.includes(course.id))
      .filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  const renderCourses = () => {
    if (loading) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={8}
          sx={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: 4,
            backdropFilter: "blur(10px)",
          }}
        >
          <CircularProgress
            size={60}
            thickness={4}
            sx={{
              color: "#667eea",
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
        </Box>
      );
    }

    const coursesToShow =
      activeTab === "all" ? getNotEnrolledCourses() : getEnrolledCourses();

    if (coursesToShow.length === 0) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={8}
          sx={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: 4,
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h6" color="textSecondary">
            {searchQuery
              ? "No courses match your search"
              : "No courses available"}
          </Typography>
        </Box>
      );
    }

    return (
      <Grid container spacing={3}>
        {coursesToShow.map((course) => {
          const isEnrolled = enrolledCourseIds.includes(course.id);
          const enrollment = enrolledCourses.find(
            (enroll) => enroll.course_id === course.id
          );

          return (
            <Grid item size={{ xs: 12, md: 4 }} key={course.id}>
              <CourseCard
                course={{ ...course, enrollmentId: enrollment?.id || null }}
                isEnrolled={isEnrolled}
                onEnrollClick={activeTab === "all" ? handleEnrollClick : null}
                onViewProgressClick={handleViewProgress}
                onViewAssignmentsClick={handleViewAssignments}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            {/* Welcome Section */}
            <WelcomeCard sx={{ mb: 4, p: 4 }}>
              <Box
                display="flex"
                alignItems="center"
                gap={3}
                position="relative"
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    border: "3px solid rgba(255, 255, 255, 0.3)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {user?.name?.charAt(0) || "U"}
                </Avatar>
                <Box flex={1}>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <WavingHandRounded
                      sx={{ color: "#FFD700", fontSize: 28 }}
                    />
                    <Typography
                      variant="h4"
                      fontWeight={800}
                      sx={{ color: "white" }}
                    >
                      Welcome back, {user?.name || "Student"}!
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    "{randomQuote}"
                  </Typography>
                </Box>
              </Box>
            </WelcomeCard>

            {/* Search Bar */}
            <SearchBar
              fullWidth
              variant="outlined"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Courses Section */}
            <SectionTitle variant="h5">My Learning Journey</SectionTitle>

            {categories.length > 1 && (
              <ModernTabs
                value={categoryFilter}
                onChange={(e, newValue) => setCategoryFilter(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 4 }}
              >
                {categories.map((category) => (
                  <Tab
                    key={category}
                    label={category === "all" ? "All Categories" : category}
                    value={category}
                  />
                ))}
              </ModernTabs>
            )}

            {renderCourses()}
          </>
        );

      case "progress":
        return <InProgressCourses />;

      case "assignments":
        return (
          <AssignmentList
            courseId={selectedCourseForAssignments?.id}
            onBack={() => setActiveTab("enrolled")}
          />
        );

      case "quizzes":
        return <QuizDashboard />;

      case "all":
      case "enrolled":
        return (
          <>
            {/* Search Bar */}
            <SearchBar
              fullWidth
              variant="outlined"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <SectionTitle variant="h5">
              {activeTab === "all"
                ? "Discover New Courses"
                : "Continue Learning"}
            </SectionTitle>
            {renderCourses()}
          </>
        );
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <DashboardContainer>
      <Header />
      <ContentWrapper>
        <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainContent>
          <Container maxWidth="xl" sx={{ px: { xs: 0, md: 2 } }}>
            {renderTabContent()}
          </Container>
        </MainContent>
      </ContentWrapper>

      <EnrollmentDialog
        open={enrollmentDialogOpen}
        onClose={() => setEnrollmentDialogOpen(false)}
        course={selectedCourse}
        onEnroll={handleEnroll}
      />

      <ProgressDialog
        open={progressDialogOpen}
        onClose={() => setProgressDialogOpen(false)}
        course={selectedCourse}
      />
    </DashboardContainer>
  );
};

export default StudentDashboard;
