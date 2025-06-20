import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useThemeMode } from "../../contexts/ThemeContext";
import { getInitials } from "../../utils/stringUtils";
import AboutPage from "../../pages/AboutPage/AboutPage";
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
} from "@mui/icons-material";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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

  const heroBackground = "url('/images/hero-bg.jpg')";

  const features = [
    {
      icon: <MenuBook sx={{ fontSize: 40 }} />,
      title: "Interactive Courses",
      description: "Engage with multimedia content.",
    },
    {
      icon: <Assignment sx={{ fontSize: 40 }} />,
      title: "Smart Assignments",
      description: "AI-powered grading.",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: "Progress Analytics",
      description: "Track and optimize your performance.",
    },
    {
      icon: <Groups sx={{ fontSize: 40 }} />,
      title: "Community Learning",
      description: "Collaborate with peers in study groups.",
    },
  ];

  const courses = [
    {
      title: "Introduction to Programming",
      instructor: "Dr. Sarah Johnson",
      students: 1250,
      rating: 4.8,
      category: "Computer Science",
    },
    {
      title: "Data Science Fundamentals",
      instructor: "Prof. Michael Chen",
      students: 980,
      rating: 4.7,
      category: "Data Science",
    },
    {
      title: "Digital Marketing Masterclass",
      instructor: "Alex Rodriguez",
      students: 750,
      rating: 4.9,
      category: "Business",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Students" },
    { value: "500+", label: "Courses Available" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "50+", label: "Expert Instructors" },
  ];

  const testimonials = [
    {
      quote: "This platform transformed my career. The courses are top-notch!",
      author: "Sarah Johnson",
      role: "Software Developer",
    },
    {
      quote: "The best investment I've made in my professional development.",
      author: "Michael Chen",
      role: "Data Scientist",
    },
    {
      quote:
        "Exceptional learning experience with a strong practical outcomes.",
      author: "Alex Rodriguez",
      role: "Marketing Specialist",
    },
    {
      quote: "I gained real-world skills that helped me. Highly recommended!",
      author: "Ahmed Al-Fayez",
      role: "Data Analyst",
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
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper" }}>
      {/* Modern Gradient Header */}
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: scrolled
            ? alpha(theme.palette.background.paper, 0.8)
            : "transparent",
          backgroundImage: scrolled
            ? `linear-gradient(135deg, ${alpha(
                theme.palette.primary.main,
                0.9
              )} 0%, ${alpha(theme.palette.secondary.main, 0.9)} 100%)`
            : "none",
          transition: "all 0.3s ease",
          color: scrolled ? "white" : "text.primary",
          py: scrolled ? 0 : 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Slide direction="right" in={!scrolled} mountOnEnter unmountOnExit>
              <Stack direction="row" alignItems="center" spacing={1}>
                <School
                  sx={{
                    color: scrolled ? "white" : "primary.main",
                    fontSize: 32,
                  }}
                />
                <Typography variant="h6" fontWeight={700}>
                  LearnHub
                </Typography>
              </Stack>
            </Slide>

            <Fade in={scrolled}>
              <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <School sx={{ color: "white", fontSize: 32 }} />
                  <Typography variant="h6" fontWeight={700}>
                    LearnHub
                  </Typography>
                </Stack>
              </Box>
            </Fade>

            <Box sx={{ flexGrow: 1 }} />

            {isAuthenticated ? (
              <>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <IconButton
                    onClick={toggleColorMode}
                    color={scrolled ? "inherit" : "default"}
                  >
                    {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>

                  {scrolled && (
                    <Chip
                      label={user?.role}
                      color="primary"
                      variant="outlined"
                      sx={{
                        fontWeight: 600,
                        backgroundColor: "white",
                        color: theme.palette.primary.main,
                      }}
                    />
                  )}
                  <IconButton onClick={handleClick}>
                    <Avatar
                      sx={{
                        bgcolor: scrolled ? "white" : "primary.main",
                        color: scrolled ? theme.palette.primary.main : "white",
                        width: 40,
                        height: 40,
                        fontWeight: 600,
                      }}
                    >
                      {getInitials(user?.name || user?.email)}
                    </Avatar>
                  </IconButton>
                </Stack>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    elevation: 3,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
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
              </>
            ) : (
              <Stack direction="row" spacing={2} alignItems="center">
                <IconButton
                  onClick={toggleColorMode}
                  color={scrolled ? "inherit" : "default"}
                >
                  {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>

                <Button
                  variant={scrolled ? "outlined" : "text"}
                  sx={{
                    color: scrolled ? "white" : "inherit",
                    borderColor: scrolled ? "white" : "inherit",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
                <Button
                  variant={scrolled ? "contained" : "contained"}
                  sx={{
                    backgroundColor: scrolled ? "white" : "primary.main",
                    color: scrolled ? "primary.main" : "white",
                    "&:hover": {
                      backgroundColor: scrolled
                        ? alpha(theme.palette.common.white, 0.9)
                        : "primary.dark",
                    },
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

      {/* Hero Section - Gradient Background */}
      <Box
        sx={{
          backgroundImage: heroBackground,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          pt: 20,
          pb: 15,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(25,118,210,0.8) 0%, rgba(156,39,176,0.8) 100%)",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            fontWeight="bold"
            gutterBottom
            sx={{
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.5px",
            }}
          >
            Advance Your Skills with Our LMS
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              mb: 6,
              maxWidth: 800,
              mx: "auto",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Learn from industry experts and join a community of passionate
            learners
          </Typography>
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
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              background: "white",
              color: "primary.main",
              "&:hover": {
                background: alpha(theme.palette.common.white, 0.9),
              },
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            {isAuthenticated ? "Continue Learning" : "Start Learning Free"}
          </Button>
        </Container>
      </Box>

      {/* Stats Section - Light Coral */}
      <Box sx={{ py: 8, bgcolor: alpha("#FFD6D6", 0.2) }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="primary.main"
                    gutterBottom
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section - Light Blue */}
      <Box sx={{ py: 10, bgcolor: alpha("#E3F2FD", 0.4) }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            Why Choose Our Platform
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 8 }}
          >
            We provide everything you need to succeed in your learning journey
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} xl={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: 3,
                    border: "none",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                    bgcolor: "background.paper",
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: "center",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        color: "primary.main",
                        mb: 3,
                        width: 80,
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Popular Courses - Light Green */}
      <Box sx={{ py: 10, bgcolor: alpha("#E8F5E9", 0.4) }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Popular Courses
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 8 }}
          >
            Explore our most enrolled courses
          </Typography>

          <Grid container spacing={5}>
            {courses.map((course, index) => (
              <Grid item xs={12} md={4} lg={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                    bgcolor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      height: 180,
                      position: "relative",
                      overflow: "hidden",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "40%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        backgroundImage: "url(/images/course-placeholder.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        zIndex: 1,
                      }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<PlayCircle />}
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.common.white,
                            0.9
                          ),
                          color: "primary.main",
                          "&:hover": {
                            backgroundColor: "white",
                          },
                        }}
                      >
                        Preview
                      </Button>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={course.category}
                      size="small"
                      sx={{ mb: 2 }}
                      color="primary"
                    />
                    <Typography variant="h6" gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      Instructor: {course.instructor}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="body2">
                        ⭐ {course.rating}
                      </Typography>
                      <Typography variant="body2">
                        👥 {course.students}+ students
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" sx={{ mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate("/courses")}
              sx={{
                px: 4,
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              View All Courses
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section - Light Yellow */}
      <Box sx={{ py: 10, bgcolor: alpha("#FFF9C4", 0.3) }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            What Our Students Say
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 8 }}
          >
            Hear from our successful learners
          </Typography>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} xl={6} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                    bgcolor: "background.paper",
                    boxShadow: 3,
                    borderRadius: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, fontStyle: "italic" }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Box sx={{ mt: "auto" }}>
                      <Typography fontWeight="bold">
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action - Light Purple */}
      <Box sx={{ py: 10, bgcolor: alpha("#F3E5F5", 0.4) }}>
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              p: 6,
              borderRadius: 4,
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(156,39,176,0.1) 100%)",
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Ready to Start Learning?
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Join thousands of students advancing their careers with our
              courses
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={
                isAuthenticated
                  ? () => navigate(`/${user.role}/dashboard`)
                  : () => navigate("/register")
              }
              sx={{ px: 6, py: 1.5 }}
            >
              {isAuthenticated ? "Go to Dashboard" : "Enroll Now"}
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Footer - Light Grey */}
      <Box
        component="footer"
        sx={{
          bgcolor: alpha("#ECEFF1", 0.5),
          color: "text.primary",
          py: 8,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 3 }}
              >
                <School sx={{ color: "primary.main", fontSize: 32 }} />
                <Typography variant="h6" fontWeight={700}>
                  LearnHub
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                The next-generation learning platform for modern education.
              </Typography>
            </Grid>
            {/* Footer links */}
            {["Product", "Resources", "Company", "Legal"].map((section) => (
              <Grid item xs={6} md={2} key={section}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                  {section}
                </Typography>
                <Stack spacing={1}>
                  {(["Product", "Resources"].includes(section)
                    ? ["Features", "Pricing", "Courses", "Demo"]
                    : section === "Company"
                    ? ["About Us", "Careers", "Contact", "Partners"]
                    : ["Privacy", "Terms", "Security", "Cookies"]
                  ).map((item) => (
                    <Typography
                      key={item}
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 6 }} />
          <Typography variant="body2" color="text.secondary" textAlign="center">
            © {new Date().getFullYear()} LearnHub. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
