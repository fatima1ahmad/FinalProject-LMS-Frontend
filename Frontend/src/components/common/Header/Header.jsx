// // // import React from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { useAuth } from "../../../contexts/AuthContext/AuthContext";
// // // import {
// // //   Box,
// // //   Typography,
// // //   Button,
// // //   Chip,
// // //   AppBar,
// // //   Toolbar,
// // //   IconButton,
// // //   Stack,
// // //   useTheme,
// // //   Avatar,
// // // } from "@mui/material";
// // // import {
// // //   School,
// // //   Person,
// // //   AdminPanelSettings,
// // //   Logout,
// // //   MenuBook,
// // // } from "@mui/icons-material";
// // // import styles from "./Header.module.css";

// // // const Header = () => {
// // //   const navigate = useNavigate();
// // //   const { user, logout, isAuthenticated } = useAuth();
// // //   const theme = useTheme();

// // //   const handleLogout = async () => {
// // //     await logout();
// // //     navigate("/login");
// // //   };

// // //   const getRoleInfo = (role) => {
// // //     switch (role) {
// // //       case "admin":
// // //         return {
// // //           icon: <AdminPanelSettings />,
// // //           label: "Administrator",
// // //           color: "error",
// // //         };
// // //       case "instructor":
// // //         return { icon: <Person />, label: "Instructor", color: "warning" };
// // //       case "student":
// // //         return { icon: <School />, label: "Student", color: "primary" };
// // //       default:
// // //         return { icon: <Person />, label: "User", color: "default" };
// // //     }
// // //   };

// // //   return (
// // //     <AppBar position="static" className={styles.appBar} elevation={1}>
// // //       <Toolbar className={styles.toolbar}>
// // //         <Stack
// // //           direction="row"
// // //           alignItems="center"
// // //           spacing={1}
// // //           onClick={() => navigate("/")}
// // //           sx={{ cursor: "pointer" }}
// // //         >
// // //           <MenuBook className={styles.logoIcon} />
// // //           <Typography variant="h5" className={styles.logoText}>
// // //             <span className={styles.edu}>Edu</span>
// // //             <span className={styles.flex}>Flex</span>
// // //           </Typography>
// // //         </Stack>

// // //         <Box sx={{ flexGrow: 1 }} />

// // //         {isAuthenticated ? (
// // //           <Stack direction="row" alignItems="center" spacing={2}>
// // //             <Chip
// // //               icon={getRoleInfo(user?.role).icon}
// // //               label={getRoleInfo(user?.role).label}
// // //               color={getRoleInfo(user?.role).color}
// // //               variant="outlined"
// // //               className={styles.roleChip}
// // //             />
// // //             <Avatar
// // //               sx={{
// // //                 bgcolor: theme.palette.secondary.main,
// // //                 width: 40,
// // //                 height: 40,
// // //                 fontWeight: 600,
// // //               }}
// // //             >
// // //               {user?.name?.charAt(0) || user?.email?.charAt(0)}
// // //             </Avatar>
// // //             <IconButton onClick={handleLogout} className={styles.logoutButton}>
// // //               <Logout />
// // //             </IconButton>
// // //           </Stack>
// // //         ) : (
// // //           <Stack direction="row" spacing={2}>
// // //             <Button
// // //               variant="text"
// // //               onClick={() => navigate("/login")}
// // //               className={styles.signInButton}
// // //             >
// // //               Sign In
// // //             </Button>
// // //             <Button
// // //               variant="contained"
// // //               onClick={() => navigate("/register")}
// // //               className={styles.getStartedButton}
// // //             >
// // //               Get Started
// // //             </Button>
// // //           </Stack>
// // //         )}
// // //       </Toolbar>
// // //     </AppBar>
// // //   );
// // // };

// // // export default Header;

// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../../../contexts/AuthContext/AuthContext";
// // import {
// //   Box,
// //   Typography,
// //   Button,
// //   Chip,
// //   AppBar,
// //   Toolbar,
// //   IconButton,
// //   Stack,
// //   useTheme,
// //   Avatar,
// //   Badge,
// //   Divider,
// //   alpha,
// // } from "@mui/material";
// // import {
// //   School,
// //   Person,
// //   AdminPanelSettings,
// //   Logout,
// //   MenuBook,
// //   Notifications,
// //   Settings,
// // } from "@mui/icons-material";

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const { user, logout, isAuthenticated } = useAuth();
// //   const theme = useTheme();

// //   const handleLogout = async () => {
// //     await logout();
// //     navigate("/login");
// //   };

// //   const getRoleInfo = (role) => {
// //     switch (role) {
// //       case "admin":
// //         return {
// //           icon: <AdminPanelSettings />,
// //           label: "Administrator",
// //           color: "error",
// //         };
// //       case "instructor":
// //         return { icon: <Person />, label: "Instructor", color: "warning" };
// //       case "student":
// //         return { icon: <School />, label: "Student", color: "primary" };
// //       default:
// //         return { icon: <Person />, label: "User", color: "default" };
// //     }
// //   };

// //   return (
// //     <AppBar
// //       position="static"
// //       elevation={0}
// //       sx={{
// //         backgroundColor: "#ffffff",
// //         borderBottom: "1px solid rgba(145, 185, 255, 0.15)",
// //         color: "#1a1a1a",
// //         backdropFilter: "blur(10px)",
// //         boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
// //       }}
// //     >
// //       <Toolbar
// //         sx={{
// //           minHeight: { xs: 64, sm: 70 },
// //           px: { xs: 2, sm: 3 },
// //           justifyContent: "space-between",
// //         }}
// //       >
// //         {/* Logo Section - Enhanced with gradient and modern styling */}
// //         <Stack
// //           direction="row"
// //           alignItems="center"
// //           spacing={1.5}
// //           onClick={() => navigate("/")}
// //           sx={{
// //             cursor: "pointer",
// //             transition: "transform 0.2s ease",
// //             "&:hover": {
// //               transform: "scale(1.02)",
// //             },
// //           }}
// //         >
// //           <Box
// //             sx={{
// //               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //               borderRadius: "12px",
// //               p: 1,
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
// //             }}
// //           >
// //             <MenuBook sx={{ color: "white", fontSize: 24 }} />
// //           </Box>
// //           <Typography
// //             variant="h5"
// //             sx={{
// //               fontWeight: 700,
// //               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //               backgroundClip: "text",
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //               letterSpacing: "-0.5px",
// //             }}
// //           >
// //             EduFlex
// //           </Typography>
// //           <Chip
// //             label="Admin"
// //             size="small"
// //             sx={{
// //               backgroundColor: alpha(theme.palette.primary.main, 0.1),
// //               color: theme.palette.primary.main,
// //               fontWeight: 600,
// //               fontSize: "0.75rem",
// //               height: 24,
// //               "& .MuiChip-label": {
// //                 px: 1,
// //               },
// //             }}
// //           />
// //         </Stack>

// //         {/* Right Section - Enhanced with modern buttons and layout */}
// //         {isAuthenticated ? (
// //           <Stack direction="row" alignItems="center" spacing={2}>
// //             {/* Role Chip - Enhanced styling */}
// //             <Chip
// //               icon={getRoleInfo(user?.role).icon}
// //               label={getRoleInfo(user?.role).label}
// //               color={getRoleInfo(user?.role).color}
// //               variant="outlined"
// //               sx={{
// //                 backgroundColor: alpha(theme.palette.error.main, 0.05),
// //                 borderColor: alpha(theme.palette.error.main, 0.2),
// //                 color: theme.palette.error.main,
// //                 fontWeight: 600,
// //                 borderRadius: "20px",
// //                 "& .MuiChip-icon": {
// //                   color: theme.palette.error.main,
// //                 },
// //                 display: { xs: "none", sm: "flex" },
// //                 transition: "all 0.2s ease",
// //                 "&:hover": {
// //                   backgroundColor: alpha(theme.palette.error.main, 0.1),
// //                   transform: "translateY(-1px)",
// //                 },
// //               }}
// //             />

// //             {/* Notifications - New modern button */}
// //             <IconButton
// //               sx={{
// //                 backgroundColor: alpha(theme.palette.primary.main, 0.08),
// //                 color: theme.palette.primary.main,
// //                 width: 44,
// //                 height: 44,
// //                 transition: "all 0.2s ease",
// //                 "&:hover": {
// //                   backgroundColor: alpha(theme.palette.primary.main, 0.15),
// //                   transform: "translateY(-1px)",
// //                 },
// //               }}
// //             >
// //               <Badge badgeContent={3} color="error">
// //                 <Notifications fontSize="small" />
// //               </Badge>
// //             </IconButton>

// //             {/* Settings - New modern button */}
// //             <IconButton
// //               sx={{
// //                 backgroundColor: alpha(theme.palette.primary.main, 0.08),
// //                 color: theme.palette.primary.main,
// //                 width: 44,
// //                 height: 44,
// //                 transition: "all 0.2s ease",
// //                 "&:hover": {
// //                   backgroundColor: alpha(theme.palette.primary.main, 0.15),
// //                   transform: "translateY(-1px)",
// //                 },
// //                 display: { xs: "none", sm: "flex" },
// //               }}
// //             >
// //               <Settings fontSize="small" />
// //             </IconButton>

// //             <Divider
// //               orientation="vertical"
// //               flexItem
// //               sx={{
// //                 mx: 1,
// //                 display: { xs: "none", sm: "block" },
// //                 borderColor: alpha(theme.palette.primary.main, 0.1),
// //               }}
// //             />

// //             {/* User Avatar - Enhanced with gradient */}
// //             <Avatar
// //               sx={{
// //                 background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //                 width: 44,
// //                 height: 44,
// //                 fontWeight: 700,
// //                 fontSize: "1.1rem",
// //                 boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
// //                 border: "2px solid rgba(255, 255, 255, 0.8)",
// //                 cursor: "pointer",
// //                 transition: "all 0.2s ease",
// //                 "&:hover": {
// //                   transform: "scale(1.05)",
// //                   boxShadow: "0 6px 16px rgba(102, 126, 234, 0.4)",
// //                 },
// //               }}
// //             >
// //               {user?.name?.charAt(0) || user?.email?.charAt(0)}
// //             </Avatar>

// //             {/* User Info - New desktop display */}
// //             <Stack
// //               direction="column"
// //               spacing={0}
// //               sx={{
// //                 display: { xs: "none", md: "flex" },
// //                 alignItems: "flex-start",
// //               }}
// //             >
// //               <Typography
// //                 variant="body2"
// //                 sx={{
// //                   fontWeight: 600,
// //                   color: "#1a1a1a",
// //                   lineHeight: 1.2,
// //                 }}
// //               >
// //                 {user?.name || "Admin User"}
// //               </Typography>
// //               <Typography
// //                 variant="caption"
// //                 sx={{
// //                   color: theme.palette.text.secondary,
// //                   lineHeight: 1.2,
// //                 }}
// //               >
// //                 {user?.email}
// //               </Typography>
// //             </Stack>

// //             {/* Logout Button - Enhanced styling */}
// //             <IconButton
// //               onClick={handleLogout}
// //               sx={{
// //                 backgroundColor: alpha(theme.palette.error.main, 0.08),
// //                 color: theme.palette.error.main,
// //                 width: 44,
// //                 height: 44,
// //                 transition: "all 0.2s ease",
// //                 "&:hover": {
// //                   backgroundColor: alpha(theme.palette.error.main, 0.15),
// //                   transform: "translateY(-1px)",
// //                 },
// //               }}
// //             >
// //               <Logout fontSize="small" />
// //             </IconButton>
// //           </Stack>
// //         ) : (
// //           <Stack direction="row" spacing={2}>
// //             {/* Sign In Button - Enhanced */}
// //             <Button
// //               variant="text"
// //               onClick={() => navigate("/login")}
// //               sx={{
// //                 color: theme.palette.primary.main,
// //                 fontWeight: 600,
// //                 textTransform: "none",
// //                 px: 3,
// //                 py: 1,
// //                 borderRadius: "12px",
// //                 transition: "all 0.2s ease",
// //                 "&:hover": {
// //                   backgroundColor: alpha(theme.palette.primary.main, 0.08),
// //                   transform: "translateY(-1px)",
// //                 },
// //               }}
// //             >
// //               Sign In
// //             </Button>
// //             {/* Get Started Button - Enhanced with gradient */}
// //             <Button
// //               variant="contained"
// //               onClick={() => navigate("/register")}
// //               sx={{
// //                 background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //                 color: "white",
// //                 fontWeight: 600,
// //                 textTransform: "none",
// //                 px: 3,
// //                 py: 1,
// //                 borderRadius: "12px",
// //                 boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
// //                 transition: "all 0.2s ease",
// //                 "&:hover": {
// //                   transform: "translateY(-2px)",
// //                   boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
// //                   background:
// //                     "linear-gradient(135deg, #5a6fd8 0%, #6a4c93 100%)",
// //                 },
// //               }}
// //             >
// //               Get Started
// //             </Button>
// //           </Stack>
// //         )}
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../contexts/AuthContext/AuthContext";
// import {
//   Box,
//   Typography,
//   Button,
//   Chip,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Stack,
//   useTheme,
//   Avatar,
//   Divider,
//   alpha,
// } from "@mui/material";
// import {
//   School,
//   Person,
//   AdminPanelSettings,
//   Logout,
//   MenuBook,
// } from "@mui/icons-material";

// const Header = () => {
//   const navigate = useNavigate();
//   const { user, logout, isAuthenticated } = useAuth();
//   const theme = useTheme();

//   const handleLogout = async () => {
//     await logout();
//     navigate("/login");
//   };

//   const getRoleInfo = (role) => {
//     switch (role) {
//       case "admin":
//         return {
//           icon: <AdminPanelSettings />,
//           label: "Administrator",
//           color: "error",
//         };
//       case "instructor":
//         return { icon: <Person />, label: "Instructor", color: "warning" };
//       case "student":
//         return { icon: <School />, label: "Student", color: "primary" };
//       default:
//         return { icon: <Person />, label: "User", color: "default" };
//     }
//   };

//   return (
//     <AppBar
//       position="static"
//       elevation={0}
//       sx={{
//         backgroundColor: "#ffffff",
//         borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
//         color: "#1a1a1a",
//       }}
//     >
//       <Toolbar
//         sx={{
//           minHeight: { xs: 64, sm: 70 },
//           px: { xs: 2, sm: 3 },
//           justifyContent: "space-between",
//         }}
//       >
//         {/* Logo Section */}
//         <Stack
//           direction="row"
//           alignItems="center"
//           spacing={1.5}
//           onClick={() => navigate("/")}
//           sx={{
//             cursor: "pointer",
//             transition: "transform 0.2s ease",
//             "&:hover": {
//               transform: "scale(1.02)",
//             },
//           }}
//         >
//           <Box
//             sx={{
//               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//               borderRadius: "12px",
//               p: 1,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <MenuBook sx={{ color: "white", fontSize: 24 }} />
//           </Box>
//           <Typography
//             variant="h5"
//             sx={{
//               fontWeight: 700,
//               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             EduFlex
//           </Typography>
//         </Stack>

//         {/* Right Section */}
//         {isAuthenticated ? (
//           <Stack direction="row" alignItems="center" spacing={2}>
//             {/* Role Chip */}
//             <Chip
//               icon={getRoleInfo(user?.role).icon}
//               label={getRoleInfo(user?.role).label}
//               color={getRoleInfo(user?.role).color}
//               variant="outlined"
//               sx={{
//                 backgroundColor: alpha(theme.palette.primary.main, 0.05),
//                 borderColor: alpha(theme.palette.primary.main, 0.2),
//                 color: theme.palette.primary.main,
//                 fontWeight: 600,
//                 borderRadius: "20px",
//                 "& .MuiChip-icon": {
//                   color: theme.palette.primary.main,
//                 },
//                 display: { xs: "none", sm: "flex" },
//               }}
//             />

//             <Divider
//               orientation="vertical"
//               flexItem
//               sx={{
//                 mx: 1,
//                 display: { xs: "none", sm: "block" },
//                 borderColor: alpha(theme.palette.primary.main, 0.1),
//               }}
//             />

//             {/* User Info */}
//             <Stack
//               direction="row"
//               alignItems="center"
//               spacing={2}
//               sx={{
//                 display: "flex",
//                 alignItems: "flex-start",
//               }}
//             >
//               <Avatar
//                 sx={{
//                   background:
//                     "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                   width: 40,
//                   height: 40,
//                   fontWeight: 700,
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                 }}
//               >
//                 {user?.name?.charAt(0) || user?.email?.charAt(0)}
//               </Avatar>

//               <Stack
//                 direction="column"
//                 spacing={0}
//                 sx={{
//                   display: { xs: "none", md: "flex" },
//                 }}
//               >
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontWeight: 600,
//                     color: "#1a1a1a",
//                   }}
//                 >
//                   {user?.name || "Admin User"}
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     color: theme.palette.text.secondary,
//                   }}
//                 >
//                   {user?.email}
//                 </Typography>
//               </Stack>
//             </Stack>

//             {/* Logout Button */}
//             <IconButton
//               onClick={handleLogout}
//               sx={{
//                 backgroundColor: alpha(theme.palette.error.main, 0.08),
//                 color: theme.palette.error.main,
//                 width: 40,
//                 height: 40,
//                 "&:hover": {
//                   backgroundColor: alpha(theme.palette.error.main, 0.15),
//                 },
//               }}
//             >
//               <Logout fontSize="small" />
//             </IconButton>
//           </Stack>
//         ) : (
//           <Stack direction="row" spacing={2}>
//             <Button
//               variant="text"
//               onClick={() => navigate("/login")}
//               sx={{
//                 color: theme.palette.primary.main,
//                 fontWeight: 600,
//                 textTransform: "none",
//                 px: 3,
//                 borderRadius: "8px",
//               }}
//             >
//               Sign In
//             </Button>
//             <Button
//               variant="contained"
//               onClick={() => navigate("/register")}
//               sx={{
//                 background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                 color: "white",
//                 fontWeight: 600,
//                 textTransform: "none",
//                 px: 3,
//                 borderRadius: "8px",
//               }}
//             >
//               Get Started
//             </Button>
//           </Stack>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
// Header Component
import React from "react";
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
} from "@mui/material";
import {
  School,
  Person,
  AdminPanelSettings,
  Logout,
  MenuBook,
  NotificationsNone,
} from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const theme = useTheme();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
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
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
        borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
        color: "#1e293b",
        backdropFilter: "blur(10px)",
        boxShadow: "0 1px 20px rgba(99, 102, 241, 0.04)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 70, sm: 80 },
          px: { xs: 2, sm: 4 },
          justifyContent: "space-between",
        }}
      >
        {/* Logo Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
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
              EduFlex
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
              }}
            >
              Learning Management System
            </Typography>
          </Box>
        </Stack>

        {/* Right Section */}
        {isAuthenticated ? (
          <Stack direction="row" alignItems="center" spacing={3}>
            {/* Notifications */}
            <IconButton
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
              sx={{
                backgroundColor: getRoleInfo(user?.role).bgColor,
                color: getRoleInfo(user?.role).color,
                fontWeight: 600,
                borderRadius: "24px",
                height: 36,
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
                display: { xs: "none", sm: "block" },
                borderColor: "rgba(99, 102, 241, 0.12)",
                height: 40,
              }}
            />

            {/* User Info */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar
                sx={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  width: 48,
                  height: 48,
                  fontWeight: 700,
                  fontSize: "1.1rem",
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

              <Stack
                direction="column"
                spacing={0}
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Typography
                  variant="body1"
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
              </Stack>
            </Stack>

            {/* Logout Button */}
            <IconButton
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
        ) : (
          <Stack direction="row" spacing={2}>
            <Button
              variant="text"
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
