import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  Container,
  Paper,
  CircularProgress,
  Fade,
  Card,
  CardContent,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Google,
  School,
  TrendingUp,
  Security,
  Speed,
} from "@mui/icons-material";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, loginWithGoogle, loading, error, DEFAULT_REDIRECTS } =
    useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const theme = useTheme();

  // Handle OAuth errors from URL params
  const urlError = searchParams.get("error");

  useEffect(() => {
    if (location.state?.registrationSuccess) {
      alert(
        `Registration successful! Please login with ${location.state.email}`
      );
    }
  }, [location]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      const role = response.user?.role;
      const redirectPath = DEFAULT_REDIRECTS[role] || DEFAULT_REDIRECTS.student;
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  // Function to get error message based on error type
  const getErrorMessage = (errorType) => {
    switch (errorType) {
      case "oauth_error":
        return "Google authentication failed. Please try again.";
      case "oauth_failed":
        return "Google login failed. Please try again.";
      case "login_failed":
        return "Login process failed. Please try again.";
      case "callback_error":
        return "Authentication callback failed. Please try again.";
      case "missing_data":
        return "Missing authentication data. Please try again.";
      default:
        return "An error occurred during authentication.";
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        background: `linear-gradient(135deg, 
          #f3e5f5 0%, 
          #e1bee7 50%,
          #ce93d8 100%)`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, rgba(123, 31, 162, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(74, 20, 140, 0.1) 0%, transparent 50%)`,
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
          {/* Left Panel - Brand & Features */}
          <Box
            sx={{
              flex: 1,
              background: `linear-gradient(135deg, 
                #7b1fa2 0%, 
                #4a148c 100%)`,
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
              <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                  }}
                >
                  <School sx={{ fontSize: 32 }} />
                </Box>
                <Typography variant="h4" fontWeight="bold">
                  LearnHub
                </Typography>
              </Box>

              <Typography variant="h3" fontWeight="bold" mb={2}>
                Welcome Back!
              </Typography>
              <Typography variant="h6" mb={6} sx={{ opacity: 0.9 }}>
                Access your personalized learning dashboard and continue your
                educational journey.
              </Typography>

              <Box sx={{ space: 3 }}>
                {[
                  {
                    icon: <TrendingUp />,
                    title: "Track Progress",
                    desc: "Monitor your learning journey",
                  },
                  {
                    icon: <Security />,
                    title: "Secure Platform",
                    desc: "Your data is protected",
                  },
                  {
                    icon: <Speed />,
                    title: "Fast Learning",
                    desc: "Optimized for efficiency",
                  },
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      "&:last-child": { mb: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 1.5,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="600">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {feature.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Right Panel - Login Form */}
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
              <Typography variant="h4" fontWeight="bold" mb={1}>
                Sign In
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Enter your credentials to access your account
              </Typography>
            </Box>

            {/* Show OAuth errors */}
            {urlError && (
              <Fade in>
                <Alert
                  severity="error"
                  sx={{
                    mb: 3,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "error.light",
                  }}
                >
                  {getErrorMessage(urlError)}
                </Alert>
              </Fade>
            )}

            {/* Show regular login errors */}
            {error && (
              <Fade in>
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
              </Fade>
            )}

            {/* Google Login Button - Moved to top */}
            <Button
              fullWidth
              variant="outlined"
              size="large"
              startIcon={<Google />}
              onClick={handleGoogleLogin}
              disabled={loading}
              sx={{
                py: 1.5,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "0.875rem",
                borderRadius: 2,
                borderColor: "divider",
                color: "text.primary",
                mb: 3,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderColor: "text.primary",
                },
                "&:disabled": {
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                },
              }}
            >
              {loading ? "Signing in..." : "Continue with Google"}
            </Button>

            <Divider sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                or continue with email
              </Typography>
            </Divider>

            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email Address"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    placeholder="Enter your email"
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
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    placeholder="Enter your password"
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    size="large"
                  />
                )}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "primary.main",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" color="text.secondary">
                      Remember me
                    </Typography>
                  }
                />
                <Link
                  href="#"
                  variant="body2"
                  color="primary"
                  sx={{
                    textDecoration: "none",
                    fontWeight: 600,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot password?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  mb: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1rem",
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%)",
                  boxShadow: "0 4px 12px rgba(123, 31, 162, 0.3)",
                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(123, 31, 162, 0.4)",
                  },
                  "&:disabled": {
                    background: "rgba(123, 31, 162, 0.6)",
                  },
                }}
              >
                {loading ? (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircularProgress
                      size={20}
                      color="inherit"
                      sx={{ mr: 1 }}
                    />
                    Signing in...
                  </Box>
                ) : (
                  "Sign In"
                )}
              </Button>

              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                Don't have an account?{" "}
                <Link
                  href="/register"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginForm;
