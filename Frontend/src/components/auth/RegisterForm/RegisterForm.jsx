import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Alert,
  Link,
  CircularProgress,
  Box,
  Paper,
  Divider,
  Container,
  useTheme,
  alpha,
  InputAdornment,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
} from "@mui/material";
import {
  Google,
  Person,
  Email,
  Lock,
  CheckCircle,
  School,
  Groups,
  AutoStories,
  TrendingUp,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import api from "../../../api/index";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    window.location.href = "/api/auth/google";
  };

  const benefits = [
    {
      icon: <AutoStories sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Interactive Learning",
      description: "Engage with dynamic content and real-time feedback",
    },
    {
      icon: <Groups sx={{ fontSize: 40, color: "secondary.main" }} />,
      title: "Community Support",
      description: "Connect with peers and instructors worldwide",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "success.main" }} />,
      title: "Track Progress",
      description: "Monitor your achievements and learning milestones",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        background: `linear-gradient(135deg, 
          #f0f9ff 0%, 
          #e0f2fe 50%,
          #f3e5f5 100%)`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${alpha(
            theme.palette.primary.main,
            0.1
          )} 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${alpha(
            theme.palette.secondary.main,
            0.1
          )} 0%, transparent 50%)`,
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: 1200,
            minHeight: 700,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Left Panel - Registration Form */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "white",
              p: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                  }}
                >
                  <School sx={{ color: "primary.main", fontSize: 24 }} />
                </Box>
                <Typography variant="h5" fontWeight="bold" color="primary">
                 LearnHub
                </Typography>
              </Box>

              <Typography variant="h4" fontWeight="bold" mb={1}>
                Create Account
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Join thousands of learners worldwide and start your educational
                journey today
              </Typography>
            </Box>

            {error && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "error.light",
                }}
              >
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                size="large"
                placeholder="Enter your full name"
              />

              <TextField
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                size="large"
                placeholder="Enter your email"
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                value={formData.password}
                onChange={handleChange}
                required
                inputProps={{ minLength: 6 }}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                size="large"
                placeholder="Create a strong password"
              />

              <TextField
                label="Confirm Password"
                name="confirm_password"
                type="password"
                fullWidth
                value={formData.confirm_password}
                onChange={handleChange}
                required
                inputProps={{ minLength: 6 }}
                sx={{ mb: 4 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CheckCircle sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                size="large"
                placeholder="Confirm your password"
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                size="large"
                sx={{
                  mb: 3,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1rem",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Create Account"
                )}
              </Button>

              <Divider sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  or continue with
                </Typography>
              </Divider>

              <Button
                fullWidth
                variant="outlined"
                onClick={handleGoogleRegister}
                size="large"
                startIcon={<Google />}
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.875rem",
                  borderRadius: 2,
                  borderColor: "divider",
                  color: "text.primary",
                  mb: 4,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    borderColor: "text.primary",
                  },
                }}
              >
                Sign up with Google
              </Button>

              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                Already have an account?{" "}
                <Link
                  href="/login"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Sign in
                </Link>
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
                textAlign="center"
                display="block"
                sx={{ mt: 3, opacity: 0.7 }}
              >
                By creating an account, you agree to our Terms of Service and
                Privacy Policy
              </Typography>
            </Box>
          </Box>

          {/* Right Panel - Benefits & Features */}
          <Box
            sx={{
              flex: 1,
              background: `linear-gradient(135deg, 
                ${theme.palette.primary.main} 0%, 
                ${theme.palette.primary.dark} 100%)`,
              color: "white",
              p: 6,
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.1,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography variant="h3" fontWeight="bold" mb={2}>
                Start Learning Today
              </Typography>
              <Typography variant="h6" mb={6} sx={{ opacity: 0.9 }}>
                Join our community of learners and unlock your potential with
                our comprehensive learning management system.
              </Typography>

              <Box sx={{ space: 4 }}>
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      "&:last-child": { mb: 0 },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 3,
                            flexShrink: 0,
                          }}
                        >
                          {benefit.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight="600"
                            mb={1}
                            color="white"
                          >
                            {benefit.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ opacity: 0.9, lineHeight: 1.6 }}
                            color="white"
                          >
                            {benefit.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              <Box
                sx={{
                  mt: 6,
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Typography variant="h6" fontWeight="600" mb={2}>
                  🎉 Special Launch Offer
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Get premium access for free during your first month. No credit
                  card required!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterForm;
