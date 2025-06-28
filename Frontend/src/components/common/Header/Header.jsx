import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import {
  Box,
  Typography,
  Button,
  Chip,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  useTheme,
  Avatar,
  Divider,
  alpha,
  Menu,
  MenuItem,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import {
  School,
  Person,
  AdminPanelSettings,
  Logout,
  MenuBook,
  NotificationsNone,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    handleMenuClose();
  };

  const getRoleInfo = (role) => {
    switch (role) {
      case "admin":
        return {
          icon: <AdminPanelSettings />,
          label: "Administrator",
          color: "#ef4444",
          bgColor: "rgba(239, 68, 68, 0.1)",
        };
      case "instructor":
        return {
          icon: <Person />,
          label: "Instructor",
          color: "#f59e0b",
          bgColor: "rgba(245, 158, 11, 0.1)",
        };
      case "student":
        return {
          icon: <School />,
          label: "Student",
          color: "#6366f1",
          bgColor: "rgba(99, 102, 241, 0.1)",
        };
      default:
        return {
          icon: <Person />,
          label: "User",
          color: "#64748b",
          bgColor: "rgba(100, 116, 139, 0.1)",
        };
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
        borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
        color: "#1e293b",
        backdropFilter: "blur(10px)",
        boxShadow: "0 1px 20px rgba(99, 102, 241, 0.04)",
      }}
    >
      <Toolbar sx={{ minHeight: 64, px: { xs: 2, md: 4 } }}>
        {/* Logo Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            flexGrow: 1,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              borderRadius: "16px",
              p: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(99, 102, 241, 0.25)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
              },
            }}
          >
            <MenuBook
              sx={{
                color: "white",
                fontSize: 28,
                position: "relative",
                zIndex: 1,
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              LearnHub
            </Typography>
          </Box>
        </Stack>

        {/* Right Section */}
        {isAuthenticated ? (
          <>
            {isSmallScreen ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{
                    color: "#6366f1",
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
                      mt: 1.5,
                      minWidth: 200,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={() => navigate("/profile")}>
                    <ListItemIcon>
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                          width: 24,
                          height: 24,
                          fontSize: "0.75rem",
                        }}
                      >
                        {user?.name?.charAt(0) || user?.email?.charAt(0)}
                      </Avatar>
                    </ListItemIcon>
                    <Typography variant="body2">
                      {user?.name || "User"}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <NotificationsNone fontSize="small" />
                    </ListItemIcon>
                    Notifications
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>{getRoleInfo(user?.role).icon}</ListItemIcon>
                    {getRoleInfo(user?.role).label}
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
              <Stack direction="row" alignItems="center" spacing={1}>
                {/* Notifications */}
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "rgba(99, 102, 241, 0.08)",
                    color: "#6366f1",
                    width: 44,
                    height: 44,
                    "&:hover": {
                      backgroundColor: "rgba(99, 102, 241, 0.12)",
                      transform: "scale(1.05)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  <NotificationsNone fontSize="small" />
                </IconButton>

                {/* Role Chip */}
                <Chip
                  icon={getRoleInfo(user?.role).icon}
                  label={getRoleInfo(user?.role).label}
                  size="small"
                  sx={{
                    backgroundColor: getRoleInfo(user?.role).bgColor,
                    color: getRoleInfo(user?.role).color,
                    fontWeight: 600,
                    borderRadius: "24px",
                    border: `1px solid ${alpha(
                      getRoleInfo(user?.role).color,
                      0.2
                    )}`,
                    "& .MuiChip-icon": {
                      color: getRoleInfo(user?.role).color,
                    },
                    display: { xs: "none", sm: "flex" },
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      boxShadow: `0 4px 12px ${alpha(
                        getRoleInfo(user?.role).color,
                        0.2
                      )}`,
                    },
                  }}
                />

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    mx: 1,
                    height: 24,
                    borderColor: "rgba(99, 102, 241, 0.12)",
                  }}
                />

                {/* User Info */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar
                    sx={{
                      background:
                        "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                      width: 32,
                      height: 32,
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                      border: "3px solid rgba(255, 255, 255, 0.9)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
                      },
                    }}
                  >
                    {user?.name?.charAt(0) || user?.email?.charAt(0)}
                  </Avatar>

                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "#1e293b",
                        lineHeight: 1.2,
                      }}
                    >
                      {user?.name || "Admin User"}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                      }}
                    >
                      {user?.email}
                    </Typography>
                  </Box>
                </Stack>

                {/* Logout Button */}
                <IconButton
                  size="small"
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                    color: "#ef4444",
                    width: 44,
                    height: 44,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(239, 68, 68, 0.12)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Logout fontSize="small" />
                </IconButton>
              </Stack>
            )}
          </>
        ) : (
          <Stack direction="row" spacing={1}>
            <Button
              variant="text"
              size="small"
              onClick={() => navigate("/login")}
              sx={{
                color: "#6366f1",
                fontWeight: 600,
                textTransform: "none",
                px: 3,
                py: 1,
                borderRadius: "12px",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(99, 102, 241, 0.08)",
                },
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate("/register")}
              sx={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                color: "white",
                fontWeight: 600,
                textTransform: "none",
                px: 4,
                py: 1,
                borderRadius: "12px",
                fontSize: "1rem",
                boxShadow: "0 4px 14px rgba(99, 102, 241, 0.3)",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Get Started
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
