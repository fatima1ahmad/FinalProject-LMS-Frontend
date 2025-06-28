import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
  IconButton,
  Toolbar,
  styled,
  Tooltip,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Groups as GroupsIcon,
  BookOnline as BookOnlineIcon,
  Category as CategoryIcon,
  TrendingUp as TrendingUpIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
  Menu,
  ChevronLeft,
} from "@mui/icons-material";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    tab: "dashboard",
    color: "#6366f1",
    bgColor: "rgba(99, 102, 241, 0.1)",
  },
  {
    text: "User Management",
    icon: <GroupsIcon />,
    tab: "users",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.1)",
  },
  {
    text: "Course Management",
    icon: <BookOnlineIcon />,
    tab: "courses",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    text: "Category Management",
    icon: <CategoryIcon />,
    tab: "categories",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.1)",
  },
  {
    text: "Reports",
    icon: <TrendingUpIcon />,
    tab: "reports",
    color: "#ef4444",
    bgColor: "rgba(239, 68, 68, 0.1)",
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    tab: "settings",
    color: "#64748b",
    bgColor: "rgba(100, 116, 139, 0.1)",
  },
];

const drawerWidth = 240;
const collapsedWidth = 72;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.background.default,
    backgroundImage:
      theme.palette.mode === "light"
        ? "linear-gradient(195deg, rgba(240, 245, 255, 0.8), rgba(255, 255, 255, 1))"
        : "linear-gradient(195deg, rgba(20, 30, 50, 0.8), rgba(30, 41, 59, 1))",
    borderRight: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create(["width", "transform"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
    overflowX: "hidden",
    top: "69px",
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      height: "100%",
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: theme.shadows[16],
    },
  },
  "& .MuiDrawer-paperCollapsed": {
    width: collapsedWidth,
    [theme.breakpoints.down("sm")]: {
      width: 0,
    },
  },
}));

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      {isMobile && (
        <Toolbar
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: theme.zIndex.drawer - 1,
            borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
            background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              color: "#6366f1",
              backgroundColor: "rgba(99, 102, 241, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(99, 102, 241, 0.12)",
              },
            }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{
              ml: 2,
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Admin Panel
          </Typography>
        </Toolbar>
      )}

      <StyledDrawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          className: collapsed ? "MuiDrawer-paperCollapsed" : "",
        }}
      >
        {/* Collapse Button */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
              p: 1.5,
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: "#6366f1",
                backgroundColor: "rgba(99, 102, 241, 0.08)",
                "&:hover": {
                  backgroundColor: "rgba(99, 102, 241, 0.12)",
                  transform: "scale(1.05)",
                },
                transition: "all 0.2s ease",
              }}
            >
              {collapsed ? <Menu /> : <ChevronLeft />}
            </IconButton>
          </Box>
        )}

        {/* Menu Items */}
        <List sx={{ p: 2.5, pt: 3, flexGrow: 1 }}>
          {menuItems.map((item, index) => {
            const isSelected = activeTab === item.tab;

            return (
              <Tooltip
                key={item.text}
                title={collapsed ? item.text : ""}
                placement="right"
              >
                <ListItem
                  button
                  selected={isSelected}
                  onClick={() => {
                    setActiveTab(item.tab);
                    if (isMobile) setMobileOpen(false);
                  }}
                  sx={{
                    borderRadius: 3,
                    mb: 1.5,
                    minHeight: 54,
                    justifyContent: collapsed ? "center" : "flex-start",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "4px",
                      background: `linear-gradient(180deg, ${item.color} 0%, ${item.color}80 100%)`,
                      transform: isSelected ? "scaleY(1)" : "scaleY(0)",
                      transformOrigin: "center",
                      transition: "transform 0.3s ease",
                      borderRadius: "0 4px 4px 0",
                    },
                    "&.Mui-selected": {
                      backgroundColor: `${item.color}10`,
                      backdropFilter: "blur(10px)",
                      boxShadow: `0 4px 20px ${item.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.5)`,
                      "&:hover": {
                        backgroundColor: `${item.color}15`,
                        transform: "translateX(6px) scale(1.02)",
                      },
                    },
                    "&:hover": {
                      backgroundColor: isSelected
                        ? `${item.color}15`
                        : "rgba(99, 102, 241, 0.08)",
                      transform: isSelected
                        ? "translateX(6px) scale(1.02)"
                        : "translateX(4px)",
                      boxShadow: isSelected
                        ? `0 6px 24px ${item.color}25, inset 0 1px 0 rgba(255, 255, 255, 0.6)`
                        : "0 4px 16px rgba(99, 102, 241, 0.1)",
                    },
                    // Staggered animation delay
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: collapsed ? 0 : 3,
                      justifyContent: "center",
                      color: isSelected ? item.color : "#64748b",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "& .MuiSvgIcon-root": {
                        fontSize: "1.5rem",
                        filter: isSelected
                          ? `drop-shadow(0 2px 4px ${item.color}40)`
                          : "none",
                        transform: isSelected ? "scale(1.1)" : "scale(1)",
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: isSelected ? 700 : 600,
                        color: isSelected ? "#1e293b" : "#475569",
                        fontSize: "0.95rem",
                        letterSpacing: "0.01em",
                        transition: "all 0.2s ease",
                      }}
                    />
                  )}
                </ListItem>
              </Tooltip>
            );
          })}
        </List>

        {/* Logout Button */}
        <Box sx={{ mt: "auto" }}>
          <Divider
            sx={{
              borderColor: "rgba(99, 102, 241, 0.12)",
              mx: 2,
              "&::before, &::after": {
                borderColor: "rgba(99, 102, 241, 0.12)",
              },
            }}
          />
          <List sx={{ p: 2.5, pb: 3 }}>
            <Tooltip title={collapsed ? "Logout" : ""} placement="right">
              <ListItem
                button
                onClick={logout}
                sx={{
                  borderRadius: 3,
                  minHeight: 54,
                  justifyContent: collapsed ? "center" : "flex-start",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.1) 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                    transform: "translateX(4px) scale(1.02)",
                    boxShadow:
                      "0 6px 20px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                    borderColor: "rgba(239, 68, 68, 0.3)",
                    "&::before": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: collapsed ? 0 : 3,
                    justifyContent: "center",
                    color: "#ef4444",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "& .MuiSvgIcon-root": {
                      fontSize: "1.5rem",
                      filter: "drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3))",
                    },
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                {!collapsed && (
                  <ListItemText
                    primary="Logout"
                    primaryTypographyProps={{
                      color: "#ef4444",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      letterSpacing: "0.01em",
                    }}
                  />
                )}
              </ListItem>
            </Tooltip>
          </List>
        </Box>
      </StyledDrawer>
    </>
  );
};

export default AdminSidebar;
