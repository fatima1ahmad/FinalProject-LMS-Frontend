import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useThemeMode } from "../../contexts/ThemeContext";
// import AllCoursesPage from "../../components/assignmnet";f
import { getInitials } from "../../utils/stringUtils";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  Avatar,
  Chip,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  ListItemIcon,
  alpha,
  Slide,
  Fade,
  CardMedia,
} from "@mui/material";
import {
  School,
  MenuBook,
  TrendingUp,
  Groups,
  Assignment,
  PlayCircle,
  ArrowForward,
  RocketLaunch,
  BarChart,
  VerifiedUser,
  Forum,
  Logout,
  AccountCircle,
  Dashboard,
  Brightness4,
  Brightness7,
  CheckCircle,
  Star,
  Psychology,
  Speed,
  Security,
} from "@mui/icons-material";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const { toggleColorMode, mode } = useThemeMode();

  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Psychology sx={{ fontSize: 48 }} />,
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths powered by advanced AI algorithms to optimize your educational journey.",
      color: "#4CAF50",
    },
    {
      icon: <Speed sx={{ fontSize: 48 }} />,
      title: "Real-Time Progress",
      description:
        "Track your learning progress with detailed analytics and performance insights in real-time.",
      color: "#2196F3",
    },
    {
      icon: <Groups sx={{ fontSize: 48 }} />,
      title: "Collaborative Learning",
      description:
        "Join study groups, participate in discussions, and learn together with peers worldwide.",
      color: "#FF9800",
    },
    {
      icon: <Security sx={{ fontSize: 48 }} />,
      title: "Certified Courses",
      description:
        "Earn industry-recognized certificates upon successful completion of our professional courses.",
      color: "#9C27B0",
    },
  ];

  const courses = [
    {
      title: "Full Stack Web Development",
      instructor: "Dr. Sarah Johnson",
      students: 2450,
      rating: 4.9,
      category: "Programming",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&auto=format",
    },
    {
      title: "Data Science & Machine Learning",
      instructor: "Prof. Michael Chen",
      students: 1850,
      rating: 4.8,
      category: "Data Science",
      duration: "16 weeks",
      level: "Advanced",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
    },
    {
      title: "Digital Marketing Mastery",
      instructor: "Alex Rodriguez",
      students: 3200,
      rating: 4.7,
      category: "Marketing",
      duration: "8 weeks",
      level: "Beginner",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
    },
  ];

  const stats = [
    { value: "25K+", label: "Active Students", icon: <Groups /> },
    { value: "800+", label: "Expert Courses", icon: <MenuBook /> },
    // { value: "98%", label: "Success Rate", icon: <TrendingUp /> },
    // { value: "150+", label: "Industry Partners", icon: <VerifiedUser /> },
  ];

  const testimonials = [
    {
      quote:
        "LearnHub transformed my career trajectory. The quality of courses and instructors is exceptional.",
      author: "Sarah Mitchell",
      role: "Senior Software Engineer at Google",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c87f?w=100&h=100&fit=crop&auto=format",
      rating: 5,
    },
    {
      quote:
        "The AI-powered learning paths helped me focus on exactly what I needed to advance my skills.",
      author: "David Kim",
      role: "Data Scientist at Microsoft",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
      rating: 5,
    },
    {
      quote:
        "Best investment I've made in my professional development. The community aspect is incredible.",
      author: "Maria Rodriguez",
      role: "Marketing Director at Adobe",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
      rating: 5,
    },
    {
      quote:
        "The practical approach and real-world projects gave me confidence to switch careers successfully.",
      author: "Ahmed Al-Fayez",
      role: "Product Manager at Amazon",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format",
      rating: 5,
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.default" }}>
      {/* Modern Navigation Header */}
      <AppBar
        position="fixed"
        elevation={scrolled ? 8 : 0}
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: scrolled
            ? alpha(theme.palette.background.paper, 0.95)
            : "transparent",
          borderBottom: scrolled
            ? `1px solid ${theme.palette.divider}`
            : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 80 } }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: 2,
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <School sx={{ color: "white", fontSize: 28 }} />
              </Box>
              <Typography
                variant="h5"
                fontWeight={800}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.5px",
                }}
              >
                LearnHub
              </Typography>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            {isAuthenticated ? (
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton
                  onClick={toggleColorMode}
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    "&:hover": {
                      bgcolor: alpha(theme.palette.primary.main, 0.2),
                    },
                  }}
                >
                  {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>

                <Chip
                  label={user?.role}
                  color="primary"
                  variant="filled"
                  sx={{
                    fontWeight: 600,
                    textTransform: "capitalize",
                    display: { xs: "none", sm: "flex" },
                  }}
                />

                <IconButton onClick={handleClick}>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 44,
                      height: 44,
                      fontWeight: 700,
                      border: 2,
                      borderColor: "primary.main",
                    }}
                  >
                    {getInitials(user?.name || user?.email)}
                  </Avatar>
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    elevation: 16,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 8px 32px rgba(0,0,0,0.12))",
                      mt: 1.5,
                      borderRadius: 3,
                      minWidth: 200,
                      bgcolor: "background.paper",
                      border: `1px solid ${theme.palette.divider}`,
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate(`/${user.role}/dashboard`);
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <Dashboard fontSize="small" />
                    </ListItemIcon>
                    Dashboard
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Stack>
            ) : (
              <Stack direction="row" spacing={2} alignItems="center">
                <IconButton
                  onClick={toggleColorMode}
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    "&:hover": {
                      bgcolor: alpha(theme.palette.primary.main, 0.2),
                    },
                  }}
                >
                  {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>

                <Button
                  variant="text"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    px: 3,
                  }}
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    boxShadow: `0 8px 32px ${alpha(
                      theme.palette.primary.main,
                      0.3
                    )}`,
                  }}
                  onClick={() => navigate("/register")}
                >
                  Get Started
                </Button>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* Hero Section with Split Layout */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{ minHeight: { md: "80vh" } }}
          >
            <Grid item xs={12} lg={6}>
              <Box sx={{ pr: { lg: 4 } }}>
                <Chip
                  label="🚀 #1 Learning Platform"
                  color="primary"
                  variant="outlined"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    py: 2,
                    px: 3,
                    borderRadius: 6,
                  }}
                />

                <Typography
                  variant={isMobile ? "h3" : "h1"}
                  fontWeight={800}
                  sx={{
                    mb: 3,
                    lineHeight: 1.2,
                    letterSpacing: "-1px",
                    background: `linear-gradient(135deg, ${
                      theme.palette.text.primary
                    }, ${alpha(theme.palette.text.primary, 0.7)})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Master New Skills with{" "}
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    LearnHub
                  </Box>
                </Typography>

                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  color="text.secondary"
                  sx={{
                    mb: 5,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    maxWidth: 600,
                  }}
                >
                  Transform your career with our AI-powered learning management
                  system. Join thousands of professionals who've accelerated
                  their growth with expert-led courses, interactive projects,
                  and personalized learning paths.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  sx={{ mb: 6 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<RocketLaunch />}
                    onClick={
                      isAuthenticated
                        ? () => navigate(`/${user.role}/dashboard`)
                        : () => navigate("/register")
                    }
                    sx={{
                      px: 6,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      textTransform: "none",
                      borderRadius: 4,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      boxShadow: `0 12px 40px ${alpha(
                        theme.palette.primary.main,
                        0.4
                      )}`,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: `0 16px 48px ${alpha(
                          theme.palette.primary.main,
                          0.5
                        )}`,
                      },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {isAuthenticated
                      ? "Continue Learning"
                      : "Start Learning Free"}
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayCircle />}
                    sx={{
                      px: 6,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: 4,
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>

                <Stack direction="row" spacing={4} sx={{ pt: 2 }}>
                  {[].map((item, index) => (
                    <Stack
                      key={index}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      {item.icon}
                      <Typography variant="body2" fontWeight={500}>
                        {item.text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 600,
                    height: { xs: 400, md: 500 },
                    borderRadius: 6,
                    overflow: "hidden",
                    boxShadow: `0 24px 80px ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                    transform:
                      "perspective(1000px) rotateY(-10deg) rotateX(5deg)",
                    transition: "transform 0.6s ease",
                    "&:hover": {
                      transform:
                        "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
                    },
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format"
                    alt="Students learning together"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    }}
                  />
                </Box>

                {/* Floating Elements */}
                <Paper
                  elevation={12}
                  sx={{
                    position: "absolute",
                    top: { xs: 20, md: 40 },
                    right: { xs: -10, md: -30 },
                    p: 3,
                    borderRadius: 4,
                    bgcolor: "background.paper",
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        bgcolor: alpha(theme.palette.success.main, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TrendingUp color="success" />
                    </Box>
                    <Box>
                      {/* <Typography variant="h6" fontWeight={700}>
                        98%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Success Rate
                      </Typography> */}
                    </Box>
                  </Stack>
                </Paper>

                <Paper
                  elevation={12}
                  sx={{
                    position: "absolute",
                    bottom: { xs: 20, md: 40 },
                    left: { xs: -10, md: -30 },
                    p: 3,
                    borderRadius: 4,
                    bgcolor: "background.paper",
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Groups color="primary" />
                    </Box>
                    <Box>
                      {/* <Typography variant="h6" fontWeight={700}>
                        25K+
                      </Typography> */}
                      {/* <Typography variant="body2" color="text.secondary">
                        Active Students
                      </Typography> */}
                    </Box>
                  </Stack>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: alpha(theme.palette.primary.main, 0.02),
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    bgcolor: "background.paper",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 16px 48px ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      color: "primary.main",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {React.cloneElement(stat.icon, { sx: { fontSize: 40 } })}
                  </Box>
                  <Typography
                    variant="h3"
                    fontWeight={800}
                    color="primary.main"
                    gutterBottom
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h3" fontWeight={800} gutterBottom>
              Why Choose LearnHub?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              We provide cutting-edge learning solutions designed for the modern
              professional
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 4,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: `0 20px 60px ${alpha(feature.color, 0.15)}`,
                      borderColor: feature.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        bgcolor: alpha(feature.color, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      {React.cloneElement(feature.icon, {
                        sx: { color: feature.color, fontSize: 48 },
                      })}
                    </Box>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      // Popular Courses Section
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: alpha(theme.palette.secondary.main, 0.02),
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h3" fontWeight={800} gutterBottom>
              Featured Courses
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Explore our top courses to kickstart your learning journey
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {courses
              .sort(() => 0.5 - Math.random()) // Randomize the courses
              .slice(0, 3) // Take only 3 courses
              .map((course, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 4,
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 20px 60px ${alpha(
                          theme.palette.primary.main,
                          0.15
                        )}`,
                      },
                    }}
                    onClick={() => navigate(`/courses`)} // Navigate to courses page
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={course.image}
                      alt={course.title}
                      sx={{
                        transition: "transform 0.4s ease",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        <Chip
                          label={course.category}
                          size="small"
                          color="primary"
                        />
                        <Chip
                          label={course.level}
                          size="small"
                          variant="outlined"
                        />
                      </Stack>

                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {course.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        by {course.instructor}
                      </Typography>

                      <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <Star sx={{ fontSize: 16, color: "#FFD700" }} />
                          <Typography variant="body2" fontWeight={600}>
                            {course.rating}
                          </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                          {course.students.toLocaleString()} students
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {course.duration}
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          color="primary.main"
                        >
                          {course.price}
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ borderRadius: 2 }}
                          onClick={() => navigate(`/courses`)} // Navigate to courses page
                        >
                          View Course
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>

          <Box textAlign="center" sx={{ mt: 6 }}>
            {/* <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                px: 6,
                py: 2,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            > */}

            <Button
              variant="contained"
              component={Link}
              to="/courses"
              size="large"
              sx={{
                bgcolor: "primary",
                "&:hover": { bgcolor: "primary.main" },
              }}
            >
              View All Courses
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h3" fontWeight={800} gutterBottom>
              Success Stories
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Hear from professionals who transformed their careers with
              LearnHub
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    p: 4,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 16px 48px ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                    },
                  }}
                >
                  <Stack spacing={3} sx={{ height: "100%" }}>
                    <Stack direction="row" spacing={1}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} sx={{ fontSize: 20, color: "#FFD700" }} />
                      ))}
                    </Stack>

                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        lineHeight: 1.6,
                        fontSize: "1.1rem",
                        flexGrow: 1,
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {testimonial.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Call to Action Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: alpha(theme.palette.primary.main, 0.02),
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 6, md: 8 },
              borderRadius: 6,
              textAlign: "center",
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.main,
                0.05
              )}, ${alpha(theme.palette.secondary.main, 0.05)})`,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography variant="h3" fontWeight={800} gutterBottom>
              Ready to Transform Your Career?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: 500, mx: "auto" }}
            >
              Join thousands of professionals who've accelerated their growth
              with LearnHub's comprehensive learning platform
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<RocketLaunch />}
                onClick={
                  isAuthenticated
                    ? () => navigate(`/${user.role}/dashboard`)
                    : () => navigate("/register")
                }
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  boxShadow: `0 12px 40px ${alpha(
                    theme.palette.primary.main,
                    0.4
                  )}`,
                }}
              >
                {isAuthenticated ? "Go to Dashboard" : "Start Free Trial"}
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircle />}
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 4,
                  borderWidth: 2,
                  "&:hover": { borderWidth: 2 },
                }}
              >
                Schedule Demo
              </Button>
            </Stack>

            <Typography variant="body2" color="text.secondary">
              No credit card required • 14-day free trial • Cancel anytime
            </Typography>
          </Paper>
        </Container>
      </Box>
      {/* Modern Footer */}
      {/* <Box
        component="footer"
        sx={{
          bgcolor: theme.palette.mode === "dark" ? "grey.900" : "grey.50",
          pt: { xs: 8, md: 12 },
          pb: 4,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <School sx={{ color: "white", fontSize: 28 }} />
                </Box>
                <Typography variant="h5" fontWeight={800}>
                  LearnHub
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                Empowering professionals worldwide with cutting-edge learning
                experiences. Transform your career with our AI-powered platform.
              </Typography>
              <Stack direction="row" spacing={2}>
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                  (social) => (
                    <IconButton
                      key={social}
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.2),
                        },
                      }}
                    >
                      <Typography variant="body2">{social[0]}</Typography>
                    </IconButton>
                  )
                )}
              </Stack>
            </Grid>

            {[
              {
                title: "Platform",
                links: [
                  "Courses",
                  "Instructors",
                  "Pricing",
                  "Enterprise",
                  "Mobile App",
                ],
              },
              {
                title: "Resources",
                links: [
                  "Help Center",
                  "Blog",
                  "Webinars",
                  "Case Studies",
                  "Community",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Partners", "Contact"],
              },
            ].map((section) => (
              <Grid item xs={6} md={2} key={section.title}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                  {section.title}
                </Typography>
                <Stack spacing={2}>
                  {section.links.map((link) => (
                    <Typography
                      key={link}
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "primary.main",
                        },
                        transition: "color 0.2s ease",
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} LearnHub. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={4}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <Typography
                    key={link}
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      cursor: "pointer",
                      "&:hover": { color: "primary.main" },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link}
                  </Typography>
                )
              )}
            </Stack>
          </Stack>
        </Container>
      </Box> */}
    </Box>
  );
};

export default HomePage;
