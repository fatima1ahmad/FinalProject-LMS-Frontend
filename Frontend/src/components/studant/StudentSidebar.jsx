// // // // // // import React from "react";
// // // // // // import {
// // // // // //   Drawer,
// // // // // //   List,
// // // // // //   ListItem,
// // // // // //   ListItemIcon,
// // // // // //   ListItemText,
// // // // // //   Divider,
// // // // // //   Box,
// // // // // //   Typography,
// // // // // // } from "@mui/material";
// // // // // // import { School, Book, Assessment, Assignment } from "@mui/icons-material";
// // // // // // import { styled } from "@mui/system";

// // // // // // const drawerWidth = 280;

// // // // // // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// // // // // //   width: drawerWidth,
// // // // // //   flexShrink: 0,
// // // // // //   "& .MuiDrawer-paper": {
// // // // // //     width: drawerWidth,
// // // // // //     boxSizing: "border-box",
// // // // // //     background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
// // // // // //     borderRight: "1px solid rgba(99, 102, 241, 0.08)",
// // // // // //     boxShadow: "4px 0 20px rgba(99, 102, 241, 0.05)",
// // // // // //   },
// // // // // // }));

// // // // // // const ModernListItem = styled(ListItem)(({ theme, selected }) => ({
// // // // // //   margin: "6px 16px",
// // // // // //   borderRadius: "12px",
// // // // // //   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// // // // // //   position: "relative",
// // // // // //   overflow: "hidden",
// // // // // //   "&::before": {
// // // // // //     content: '""',
// // // // // //     position: "absolute",
// // // // // //     left: 0,
// // // // // //     top: 0,
// // // // // //     height: "100%",
// // // // // //     width: selected ? "4px" : "0px",
// // // // // //     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// // // // // //     transition: "width 0.3s ease",
// // // // // //   },
// // // // // //   ...(selected
// // // // // //     ? {
// // // // // //         background:
// // // // // //           "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)",
// // // // // //         color: "#6366f1",
// // // // // //         boxShadow: "0 4px 12px rgba(99, 102, 241, 0.15)",
// // // // // //         transform: "translateX(4px)",
// // // // // //         "& .MuiListItemIcon-root": {
// // // // // //           color: "#6366f1",
// // // // // //         },
// // // // // //         "& .MuiListItemText-primary": {
// // // // // //           fontWeight: 600,
// // // // // //           color: "#6366f1",
// // // // // //         },
// // // // // //       }
// // // // // //     : {
// // // // // //         "&:hover": {
// // // // // //           background:
// // // // // //             "linear-gradient(135deg, rgba(99, 102, 241, 0.04) 0%, rgba(139, 92, 246, 0.03) 100%)",
// // // // // //           transform: "translateX(2px)",
// // // // // //           boxShadow: "0 2px 8px rgba(99, 102, 241, 0.08)",
// // // // // //         },
// // // // // //       }),
// // // // // // }));

// // // // // // const StudentSidebar = ({ activeTab, setActiveTab }) => {
// // // // // //   const menuItems = [
// // // // // //     { id: "all", label: "All Courses", icon: <School />, color: "#6366f1" },
// // // // // //     { id: "enrolled", label: "My Courses", icon: <Book />, color: "#8b5cf6" },
// // // // // //     {
// // // // // //       id: "progress",
// // // // // //       label: "My Progress",
// // // // // //       icon: <Assessment />,
// // // // // //       color: "#06b6d4",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "assignments",
// // // // // //       label: "Assignments",
// // // // // //       icon: <Assignment />,
// // // // // //       color: "#10b981",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <StyledDrawer variant="permanent">
// // // // // //       <Box
// // // // // //         sx={{
// // // // // //           p: 3,
// // // // // //           background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// // // // // //           color: "white",
// // // // // //           textAlign: "center",
// // // // // //           position: "relative",
// // // // // //           overflow: "hidden",
// // // // // //           "&::before": {
// // // // // //             content: '""',
// // // // // //             position: "absolute",
// // // // // //             top: 0,
// // // // // //             left: 0,
// // // // // //             right: 0,
// // // // // //             bottom: 0,
// // // // // //             background:
// // // // // //               'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
// // // // // //             opacity: 0.3,
// // // // // //           },
// // // // // //         }}
// // // // // //       >
// // // // // //         <Typography
// // // // // //           variant="h5"
// // // // // //           sx={{
// // // // // //             fontWeight: 700,
// // // // // //             position: "relative",
// // // // // //             zIndex: 1,
// // // // // //             textShadow: "0 2px 4px rgba(0,0,0,0.1)",
// // // // // //           }}
// // // // // //         >
// // // // // //           Learning Hub
// // // // // //         </Typography>
// // // // // //         <Typography
// // // // // //           variant="body2"
// // // // // //           sx={{
// // // // // //             opacity: 0.9,
// // // // // //             mt: 0.5,
// // // // // //             position: "relative",
// // // // // //             zIndex: 1,
// // // // // //           }}
// // // // // //         >
// // // // // //           Student Portal
// // // // // //         </Typography>
// // // // // //       </Box>

// // // // // //       <Box sx={{ mt: 2 }}>
// // // // // //         <List sx={{ px: 0 }}>
// // // // // //           {menuItems.map((item) => (
// // // // // //             <ModernListItem
// // // // // //               key={item.id}
// // // // // //               button
// // // // // //               selected={activeTab === item.id}
// // // // // //               onClick={() => setActiveTab(item.id)}
// // // // // //             >
// // // // // //               <ListItemIcon
// // // // // //                 sx={{
// // // // // //                   minWidth: 48,
// // // // // //                   "& .MuiSvgIcon-root": {
// // // // // //                     fontSize: 22,
// // // // // //                     transition: "all 0.3s ease",
// // // // // //                   },
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {item.icon}
// // // // // //               </ListItemIcon>
// // // // // //               <ListItemText
// // // // // //                 primary={item.label}
// // // // // //                 primaryTypographyProps={{
// // // // // //                   fontSize: "0.95rem",
// // // // // //                   fontWeight: activeTab === item.id ? 600 : 500,
// // // // // //                 }}
// // // // // //               />
// // // // // //             </ModernListItem>
// // // // // //           ))}
// // // // // //         </List>
// // // // // //       </Box>
// // // // // //     </StyledDrawer>
// // // // // //   );
// // // // // // };

// // // // // // export default StudentSidebar;
// // // // // import React from "react";
// // // // // import {
// // // // //   Drawer,
// // // // //   List,
// // // // //   ListItem,
// // // // //   ListItemIcon,
// // // // //   ListItemText,
// // // // //   Divider,
// // // // //   Box,
// // // // //   Typography,
// // // // // } from "@mui/material";
// // // // // import {
// // // // //   School,
// // // // //   Book,
// // // // //   Assessment,
// // // // //   Assignment,
// // // // //   Dashboard,
// // // // // } from "@mui/icons-material";
// // // // // import { styled } from "@mui/system";
// // // // // import QuizIcon from "@mui/icons-material";
// // // // // const drawerWidth = 280;

// // // // // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// // // // //   width: drawerWidth,
// // // // //   flexShrink: 0,
// // // // //   "& .MuiDrawer-paper": {
// // // // //     width: drawerWidth,
// // // // //     boxSizing: "border-box",
// // // // //     background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
// // // // //     borderRight: "1px solid rgba(99, 102, 241, 0.08)",
// // // // //     boxShadow: "4px 0 20px rgba(99, 102, 241, 0.05)",
// // // // //   },
// // // // // }));

// // // // // const ModernListItem = styled(ListItem)(({ theme, selected }) => ({
// // // // //   margin: "6px 16px",
// // // // //   borderRadius: "12px",
// // // // //   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// // // // //   position: "relative",
// // // // //   overflow: "hidden",
// // // // //   "&::before": {
// // // // //     content: '""',
// // // // //     position: "absolute",
// // // // //     left: 0,
// // // // //     top: 0,
// // // // //     height: "100%",
// // // // //     width: selected ? "4px" : "0px",
// // // // //     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// // // // //     transition: "width 0.3s ease",
// // // // //   },
// // // // //   ...(selected
// // // // //     ? {
// // // // //         background:
// // // // //           "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)",
// // // // //         color: "#6366f1",
// // // // //         boxShadow: "0 4px 12px rgba(99, 102, 241, 0.15)",
// // // // //         transform: "translateX(4px)",
// // // // //         "& .MuiListItemIcon-root": {
// // // // //           color: "#6366f1",
// // // // //         },
// // // // //         "& .MuiListItemText-primary": {
// // // // //           fontWeight: 600,
// // // // //           color: "#6366f1",
// // // // //         },
// // // // //       }
// // // // //     : {
// // // // //         "&:hover": {
// // // // //           background:
// // // // //             "linear-gradient(135deg, rgba(99, 102, 241, 0.04) 0%, rgba(139, 92, 246, 0.03) 100%)",
// // // // //           transform: "translateX(2px)",
// // // // //           boxShadow: "0 2px 8px rgba(99, 102, 241, 0.08)",
// // // // //         },
// // // // //       }),
// // // // // }));

// // // // // const StudentSidebar = ({ activeTab, setActiveTab }) => {
// // // // //   const menuItems = [
// // // // //     {
// // // // //       id: "dashboard",
// // // // //       label: "Dashboard",
// // // // //       icon: <Dashboard />,
// // // // //       color: "#6366f1",
// // // // //     },
// // // // //     { id: "all", label: "All Courses", icon: <School />, color: "#6366f1" },
// // // // //     { id: "enrolled", label: "My Courses", icon: <Book />, color: "#8b5cf6" },
// // // // //     {
// // // // //       id: "progress",
// // // // //       label: "My Progress",
// // // // //       icon: <Assessment />,
// // // // //       color: "#06b6d4",
// // // // //     },
// // // // //     {
// // // // //       id: "assignments",
// // // // //       label: "Assignments",
// // // // //       icon: <Assignment />,
// // // // //       color: "#10b981",
// // // // //     },
// // // // //     {
// // // // //       id: "quizzes",
// // // // //       label: "Quizzes",
// // // // //       icon: <QuizIcon />, // Make sure to
// // // // //       color: "#f59e0b",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <StyledDrawer variant="permanent">
// // // // //       <Box
// // // // //         sx={{
// // // // //           p: 3,
// // // // //           background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// // // // //           color: "white",
// // // // //           textAlign: "center",
// // // // //           position: "relative",
// // // // //           overflow: "hidden",
// // // // //           "&::before": {
// // // // //             content: '""',
// // // // //             position: "absolute",
// // // // //             top: 0,
// // // // //             left: 0,
// // // // //             right: 0,
// // // // //             bottom: 0,
// // // // //             background:
// // // // //               'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
// // // // //             opacity: 0.3,
// // // // //           },
// // // // //         }}
// // // // //       >
// // // // //         <Typography
// // // // //           variant="h5"
// // // // //           sx={{
// // // // //             fontWeight: 700,
// // // // //             position: "relative",
// // // // //             zIndex: 1,
// // // // //             textShadow: "0 2px 4px rgba(0,0,0,0.1)",
// // // // //           }}
// // // // //         >
// // // // //           Learning Hub
// // // // //         </Typography>
// // // // //         <Typography
// // // // //           variant="body2"
// // // // //           sx={{
// // // // //             opacity: 0.9,
// // // // //             mt: 0.5,
// // // // //             position: "relative",
// // // // //             zIndex: 1,
// // // // //           }}
// // // // //         >
// // // // //           Student Portal
// // // // //         </Typography>
// // // // //       </Box>

// // // // //       <Box sx={{ mt: 2 }}>
// // // // //         <List sx={{ px: 0 }}>
// // // // //           {menuItems.map((item) => (
// // // // //             <ModernListItem
// // // // //               key={item.id}
// // // // //               button
// // // // //               selected={activeTab === item.id}
// // // // //               onClick={() => setActiveTab(item.id)}
// // // // //             >
// // // // //               <ListItemIcon
// // // // //                 sx={{
// // // // //                   minWidth: 48,
// // // // //                   "& .MuiSvgIcon-root": {
// // // // //                     fontSize: 22,
// // // // //                     transition: "all 0.3s ease",
// // // // //                   },
// // // // //                 }}
// // // // //               >
// // // // //                 {item.icon}
// // // // //               </ListItemIcon>
// // // // //               <ListItemText
// // // // //                 primary={item.label}
// // // // //                 primaryTypographyProps={{
// // // // //                   fontSize: "0.95rem",
// // // // //                   fontWeight: activeTab === item.id ? 600 : 500,
// // // // //                 }}
// // // // //               />
// // // // //             </ModernListItem>
// // // // //           ))}
// // // // //         </List>
// // // // //       </Box>
// // // // //     </StyledDrawer>
// // // // //   );
// // // // // };

// // // // // export default StudentSidebar;
// // // // import React from "react";
// // // // import {
// // // //   Drawer,
// // // //   List,
// // // //   ListItem,
// // // //   ListItemIcon,
// // // //   ListItemText,
// // // //   Divider,
// // // //   Box,
// // // //   Typography,
// // // // } from "@mui/material";
// // // // import {
// // // //   School,
// // // //   Book,
// // // //   Assessment,
// // // //   Assignment,
// // // //   Dashboard,
// // // //   Quiz as QuizIcon,
// // // // } from "@mui/icons-material";
// // // // import { styled } from "@mui/system";

// // // // const drawerWidth = 280;

// // // // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// // // //   width: drawerWidth,
// // // //   flexShrink: 0,
// // // //   "& .MuiDrawer-paper": {
// // // //     width: drawerWidth,
// // // //     boxSizing: "border-box",
// // // //     background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
// // // //     borderRight: "1px solid rgba(99, 102, 241, 0.08)",
// // // //     boxShadow: "4px 0 20px rgba(99, 102, 241, 0.05)",
// // // //   },
// // // // }));

// // // // const ModernListItem = styled(ListItem)(({ theme, selected }) => ({
// // // //   margin: "6px 16px",
// // // //   borderRadius: "12px",
// // // //   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// // // //   position: "relative",
// // // //   overflow: "hidden",
// // // //   "&::before": {
// // // //     content: '""',
// // // //     position: "absolute",
// // // //     left: 0,
// // // //     top: 0,
// // // //     height: "100%",
// // // //     width: selected ? "4px" : "0px",
// // // //     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// // // //     transition: "width 0.3s ease",
// // // //   },
// // // //   ...(selected
// // // //     ? {
// // // //         background:
// // // //           "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)",
// // // //         color: "#6366f1",
// // // //         boxShadow: "0 4px 12px rgba(99, 102, 241, 0.15)",
// // // //         transform: "translateX(4px)",
// // // //         "& .MuiListItemIcon-root": {
// // // //           color: "#6366f1",
// // // //         },
// // // //         "& .MuiListItemText-primary": {
// // // //           fontWeight: 600,
// // // //           color: "#6366f1",
// // // //         },
// // // //       }
// // // //     : {
// // // //         "&:hover": {
// // // //           background:
// // // //             "linear-gradient(135deg, rgba(99, 102, 241, 0.04) 0%, rgba(139, 92, 246, 0.03) 100%)",
// // // //           transform: "translateX(2px)",
// // // //           boxShadow: "0 2px 8px rgba(99, 102, 241, 0.08)",
// // // //         },
// // // //       }),
// // // // }));

// // // // const StudentSidebar = ({ activeTab, setActiveTab }) => {
// // // //   const menuItems = [
// // // //     {
// // // //       id: "dashboard",
// // // //       label: "Dashboard",
// // // //       icon: <Dashboard />,
// // // //       color: "#6366f1",
// // // //     },
// // // //     { id: "all", label: "All Courses", icon: <School />, color: "#6366f1" },
// // // //     { id: "enrolled", label: "My Courses", icon: <Book />, color: "#8b5cf6" },
// // // //     {
// // // //       id: "progress",
// // // //       label: "My Progress",
// // // //       icon: <Assessment />,
// // // //       color: "#06b6d4",
// // // //     },
// // // //     {
// // // //       id: "assignments",
// // // //       label: "Assignments",
// // // //       icon: <Assignment />,
// // // //       color: "#10b981",
// // // //     },
// // // //     {
// // // //       id: "quizzes",
// // // //       label: "Quizzes",
// // // //       icon: <QuizIcon />,
// // // //       color: "#f59e0b",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <StyledDrawer variant="permanent">
// // // //       <Box
// // // //         sx={{
// // // //           p: 3,
// // // //           background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// // // //           color: "white",
// // // //           textAlign: "center",
// // // //           position: "relative",
// // // //           overflow: "hidden",
// // // //           "&::before": {
// // // //             content: '""',
// // // //             position: "absolute",
// // // //             top: 0,
// // // //             left: 0,
// // // //             right: 0,
// // // //             bottom: 0,
// // // //             background:
// // // //               'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
// // // //             opacity: 0.3,
// // // //           },
// // // //         }}
// // // //       >
// // // //         <Typography
// // // //           variant="h5"
// // // //           sx={{
// // // //             fontWeight: 700,
// // // //             position: "relative",
// // // //             zIndex: 1,
// // // //             textShadow: "0 2px 4px rgba(0,0,0,0.1)",
// // // //           }}
// // // //         >
// // // //           Learning Hub
// // // //         </Typography>
// // // //         <Typography
// // // //           variant="body2"
// // // //           sx={{
// // // //             opacity: 0.9,
// // // //             mt: 0.5,
// // // //             position: "relative",
// // // //             zIndex: 1,
// // // //           }}
// // // //         >
// // // //           Student Portal
// // // //         </Typography>
// // // //       </Box>

// // // //       <Box sx={{ mt: 2 }}>
// // // //         <List sx={{ px: 0 }}>
// // // //           {menuItems.map((item) => (
// // // //             <ModernListItem
// // // //               key={item.id}
// // // //               button
// // // //               selected={activeTab === item.id}
// // // //               onClick={() => setActiveTab(item.id)}
// // // //             >
// // // //               <ListItemIcon
// // // //                 sx={{
// // // //                   minWidth: 48,
// // // //                   "& .MuiSvgIcon-root": {
// // // //                     fontSize: 22,
// // // //                     transition: "all 0.3s ease",
// // // //                   },
// // // //                 }}
// // // //               >
// // // //                 {item.icon}
// // // //               </ListItemIcon>
// // // //               <ListItemText
// // // //                 primary={item.label}
// // // //                 primaryTypographyProps={{
// // // //                   fontSize: "0.95rem",
// // // //                   fontWeight: activeTab === item.id ? 600 : 500,
// // // //                 }}
// // // //               />
// // // //             </ModernListItem>
// // // //           ))}
// // // //         </List>
// // // //       </Box>
// // // //     </StyledDrawer>
// // // //   );
// // // // };

// // // // export default StudentSidebar;

// // // import { useState } from "react";
// // // import {
// // //   Drawer,
// // //   List,
// // //   ListItem,
// // //   ListItemIcon,
// // //   ListItemText,
// // //   Divider,
// // //   useTheme,
// // //   useMediaQuery,
// // //   Avatar,
// // //   Box,
// // //   Typography,
// // //   IconButton,
// // //   Toolbar,
// // //   styled,
// // // } from "@mui/material";
// // // import {
// // //   Dashboard as DashboardIcon,
// // //   School as AllCoursesIcon,
// // //   Book as MyCoursesIcon,
// // //   Assessment as ProgressIcon,
// // //   Assignment as AssignmentsIcon,
// // //   Settings as SettingsIcon,
// // //   ExitToApp as LogoutIcon,
// // //   Quiz as QuizIcon,
// // //   Menu,
// // //   ChevronLeft,
// // // } from "@mui/icons-material";
// // // import { useAuth } from "../../contexts/AuthContext/AuthContext";

// // // const menuItems = [
// // //   { text: "Dashboard", icon: <DashboardIcon />, tab: "dashboard" },
// // //   { text: "All Courses", icon: <AllCoursesIcon />, tab: "all" },
// // //   { text: "My Courses", icon: <MyCoursesIcon />, tab: "enrolled" },
// // //   { text: "My Progress", icon: <ProgressIcon />, tab: "progress" },
// // //   { text: "Assignments", icon: <AssignmentsIcon />, tab: "assignments" },
// // //   { text: "Quizzes", icon: <QuizIcon />, tab: "quizzes" },
// // //   { text: "Settings", icon: <SettingsIcon />, tab: "settings" },
// // // ];

// // // const drawerWidth = 240;
// // // const collapsedWidth = 72;

// // // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// // //   width: drawerWidth,
// // //   flexShrink: 0,
// // //   whiteSpace: "nowrap",
// // //   boxSizing: "border-box",
// // //   "& .MuiDrawer-paper": {
// // //     backgroundColor: theme.palette.background.paper,
// // //     borderRight: `1px solid ${theme.palette.divider}`,
// // //     transition: theme.transitions.create("width", {
// // //       easing: theme.transitions.easing.sharp,
// // //       duration: theme.transitions.duration.enteringScreen,
// // //     }),
// // //     overflowX: "hidden",
// // //     top: "64px",
// // //     width: drawerWidth,
// // //     [theme.breakpoints.down("sm")]: {
// // //       position: "absolute",
// // //       height: "100%",
// // //       zIndex: theme.zIndex.drawer + 1,
// // //     },
// // //   },
// // //   "& .MuiDrawer-paperCollapsed": {
// // //     transition: theme.transitions.create("width", {
// // //       easing: theme.transitions.easing.sharp,
// // //       duration: theme.transitions.duration.leavingScreen,
// // //     }),
// // //     overflowX: "hidden",
// // //     top: "64px",
// // //     height: "100%",
// // //     width: collapsedWidth,
// // //     [theme.breakpoints.down("sm")]: {
// // //       width: 0,
// // //     },
// // //   },
// // // }));

// // // const StudentSidebar = ({ activeTab, setActiveTab }) => {
// // //   const theme = useTheme();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
// // //   const { logout, user } = useAuth();
// // //   const [collapsed, setCollapsed] = useState(false);
// // //   const [mobileOpen, setMobileOpen] = useState(false);

// // //   const handleDrawerToggle = () => {
// // //     if (isMobile) {
// // //       setMobileOpen(!mobileOpen);
// // //     } else {
// // //       setCollapsed(!collapsed);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       {/* Mobile Toggle Button */}
// // //       {isMobile && (
// // //         <Toolbar
// // //           sx={{
// // //             position: "fixed",
// // //             top: 0,
// // //             left: 0,
// // //             zIndex: theme.zIndex.drawer - 1,
// // //             bgcolor: "background.paper",
// // //             borderBottom: `1px solid ${theme.palette.divider}`,
// // //             height: "64px",
// // //           }}
// // //         >
// // //           <IconButton
// // //             color="inherit"
// // //             aria-label="open drawer"
// // //             edge="start"
// // //             onClick={handleDrawerToggle}
// // //           >
// // //             <Menu />
// // //           </IconButton>
// // //         </Toolbar>
// // //       )}

// // //       <StyledDrawer
// // //         variant={isMobile ? "temporary" : "permanent"}
// // //         anchor="left"
// // //         open={isMobile ? mobileOpen : true}
// // //         onClose={handleDrawerToggle}
// // //         ModalProps={{
// // //           keepMounted: true,
// // //         }}
// // //         PaperProps={{
// // //           className: collapsed ? "MuiDrawer-paperCollapsed" : "",
// // //         }}
// // //       >
// // //         {/* Collapse Button */}
// // //         {!isMobile && (
// // //           <Box
// // //             sx={{
// // //               display: "flex",
// // //               justifyContent: "flex-end",
// // //               p: 1,
// // //               borderBottom: `1px solid ${theme.palette.divider}`,
// // //             }}
// // //           >
// // //             <IconButton onClick={handleDrawerToggle} size="small">
// // //               {collapsed ? <Menu /> : <ChevronLeft />}
// // //             </IconButton>
// // //           </Box>
// // //         )}

// // //         {/* User Profile (hidden when collapsed) */}
// // //         {!collapsed && (
// // //           <Box
// // //             sx={{
// // //               p: 2,
// // //               display: "flex",
// // //               alignItems: "center",
// // //               gap: 2,
// // //               borderBottom: `1px solid ${theme.palette.divider}`,
// // //             }}
// // //           >
// // //             <Avatar
// // //               sx={{
// // //                 bgcolor: "primary.main",
// // //                 color: "primary.contrastText",
// // //                 width: 40,
// // //                 height: 40,
// // //               }}
// // //             >
// // //               {user?.name?.charAt(0) || "S"}
// // //             </Avatar>
// // //             <Box sx={{ overflow: "hidden" }}>
// // //               <Typography variant="subtitle2" noWrap>
// // //                 {user?.name || "Student"}
// // //               </Typography>
// // //               <Typography variant="caption" color="text.secondary" noWrap>
// // //                 Student Account
// // //               </Typography>
// // //             </Box>
// // //           </Box>
// // //         )}

// // //         {/* Menu Items */}
// // //         <List sx={{ p: 1 }}>
// // //           {menuItems.map((item) => (
// // //             <ListItem
// // //               button
// // //               key={item.text}
// // //               selected={activeTab === item.tab}
// // //               onClick={() => {
// // //                 setActiveTab(item.tab);
// // //                 if (isMobile) setMobileOpen(false);
// // //               }}
// // //               sx={{
// // //                 borderRadius: 1,
// // //                 mb: 0.5,
// // //                 minHeight: 40,
// // //                 justifyContent: collapsed ? "center" : "flex-start",
// // //                 "&.Mui-selected": {
// // //                   bgcolor: "action.selected",
// // //                 },
// // //                 "&:hover": {
// // //                   bgcolor: "action.hover",
// // //                 },
// // //               }}
// // //             >
// // //               <ListItemIcon
// // //                 sx={{
// // //                   minWidth: 0,
// // //                   mr: collapsed ? 0 : 2,
// // //                   justifyContent: "center",
// // //                   color: activeTab === item.tab ? "primary.main" : "inherit",
// // //                 }}
// // //               >
// // //                 {item.icon}
// // //               </ListItemIcon>
// // //               {!collapsed && (
// // //                 <ListItemText
// // //                   primary={item.text}
// // //                   primaryTypographyProps={{
// // //                     variant: "body2",
// // //                     fontWeight: activeTab === item.tab ? 600 : 400,
// // //                   }}
// // //                 />
// // //               )}
// // //             </ListItem>
// // //           ))}
// // //         </List>

// // //         {/* Logout Button */}
// // //         <Divider />
// // //         <List sx={{ p: 1 }}>
// // //           <ListItem
// // //             button
// // //             onClick={logout}
// // //             sx={{
// // //               borderRadius: 1,
// // //               minHeight: 40,
// // //               justifyContent: collapsed ? "center" : "flex-start",
// // //               "&:hover": {
// // //                 bgcolor: "error.light",
// // //               },
// // //             }}
// // //           >
// // //             <ListItemIcon
// // //               sx={{
// // //                 minWidth: 0,
// // //                 mr: collapsed ? 0 : 2,
// // //                 justifyContent: "center",
// // //                 color: "error.main",
// // //               }}
// // //             >
// // //               <LogoutIcon />
// // //             </ListItemIcon>
// // //             {!collapsed && (
// // //               <ListItemText
// // //                 primary="Logout"
// // //                 primaryTypographyProps={{
// // //                   variant: "body2",
// // //                   color: "error.main",
// // //                   fontWeight: 500,
// // //                 }}
// // //               />
// // //             )}
// // //           </ListItem>
// // //         </List>
// // //       </StyledDrawer>
// // //     </>
// // //   );
// // // };

// // // export default StudentSidebar;
// // import { useState } from "react";
// // import {
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemIcon,
// //   ListItemText,
// //   Divider,
// //   useTheme,
// //   useMediaQuery,
// //   Avatar,
// //   Box,
// //   Typography,
// //   IconButton,
// //   Toolbar,
// //   styled,
// // } from "@mui/material";
// // import {
// //   Dashboard as DashboardIcon,
// //   School as AllCoursesIcon,
// //   Book as MyCoursesIcon,
// //   Assessment as ProgressIcon,
// //   Assignment as AssignmentsIcon,
// //   Settings as SettingsIcon,
// //   ExitToApp as LogoutIcon,
// //   Quiz as QuizIcon,
// //   Menu,
// //   ChevronLeft,
// // } from "@mui/icons-material";
// // import { useAuth } from "../../contexts/AuthContext/AuthContext";

// // const menuItems = [
// //   { text: "Dashboard", icon: <DashboardIcon />, tab: "dashboard" },
// //   { text: "All Courses", icon: <AllCoursesIcon />, tab: "all" },
// //   { text: "My Courses", icon: <MyCoursesIcon />, tab: "enrolled" },
// //   { text: "My Progress", icon: <ProgressIcon />, tab: "progress" },
// //   { text: "Assignments", icon: <AssignmentsIcon />, tab: "assignments" },
// //   { text: "Quizzes", icon: <QuizIcon />, tab: "quizzes" },
// //   { text: "Settings", icon: <SettingsIcon />, tab: "settings" },
// // ];

// // const drawerWidth = 280;
// // const collapsedWidth = 72;

// // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// //   width: drawerWidth,
// //   flexShrink: 0,
// //   whiteSpace: "nowrap",
// //   boxSizing: "border-box",
// //   "& .MuiDrawer-paper": {
// //     background: "rgba(255, 255, 255, 0.95)",
// //     backdropFilter: "blur(20px)",
// //     borderRight: "1px solid rgba(255, 255, 255, 0.2)",
// //     borderRadius: "0 24px 0 0",
// //     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
// //     transition: theme.transitions.create("width", {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //     overflowX: "hidden",
// //     top: "69px",
// //     width: drawerWidth,
// //     position: "relative",
// //     "&::before": {
// //       content: '""',
// //       position: "absolute",
// //       inset: 0,
// //       background:
// //         "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
// //       borderRadius: "0 24px 0 0",
// //       pointerEvents: "none",
// //     },
// //     "& > *": {
// //       position: "relative",
// //       zIndex: 1,
// //     },
// //     [theme.breakpoints.down("sm")]: {
// //       position: "absolute",
// //       height: "100%",
// //       zIndex: theme.zIndex.drawer + 1,
// //       borderRadius: 0,
// //       "&::before": {
// //         borderRadius: 0,
// //       },
// //     },
// //   },
// //   "& .MuiDrawer-paperCollapsed": {
// //     transition: theme.transitions.create("width", {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     overflowX: "hidden",
// //     top: "69px",
// //     height: "100%",
// //     width: collapsedWidth,
// //     [theme.breakpoints.down("sm")]: {
// //       width: 0,
// //     },
// //   },
// // }));

// // const UserProfileCard = styled(Box)(({ theme }) => ({
// //   padding: theme.spacing(3),
// //   marginBottom: theme.spacing(2),
// //   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //   borderRadius: 20,
// //   color: "white",
// //   position: "relative",
// //   overflow: "hidden",
// //   boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
// //   margin: theme.spacing(2),
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     background: `
// //       radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
// //       radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
// //     `,
// //     pointerEvents: "none",
// //   },
// //   "& > *": {
// //     position: "relative",
// //     zIndex: 1,
// //   },
// // }));

// // const ModernListItem = styled(ListItem)(({ theme }) => ({
// //   borderRadius: 16,
// //   margin: "4px 16px",
// //   padding: "12px 16px",
// //   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //   "&:hover": {
// //     backgroundColor: "rgba(102, 126, 234, 0.1)",
// //     transform: "translateX(4px)",
// //   },
// //   "&.Mui-selected": {
// //     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //     color: "white",
// //     boxShadow: "0 4px 16px rgba(102, 126, 234, 0.4)",
// //     "&:hover": {
// //       background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //       transform: "translateX(4px)",
// //     },
// //     "& .MuiListItemIcon-root": {
// //       color: "white",
// //     },
// //     "& .MuiListItemText-primary": {
// //       color: "white",
// //       fontWeight: 600,
// //     },
// //   },
// // }));

// // const LogoutButton = styled(ListItem)(({ theme }) => ({
// //   borderRadius: 16,
// //   margin: "4px 16px",
// //   padding: "12px 16px",
// //   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //   "&:hover": {
// //     backgroundColor: "rgba(244, 67, 54, 0.1)",
// //     transform: "translateX(4px)",
// //     "& .MuiListItemIcon-root": {
// //       color: theme.palette.error.main,
// //     },
// //     "& .MuiListItemText-primary": {
// //       color: theme.palette.error.main,
// //     },
// //   },
// // }));

// // const CollapseButton = styled(IconButton)(({ theme }) => ({
// //   position: "absolute",
// //   top: 16,
// //   right: 16,
// //   background: "rgba(255, 255, 255, 0.9)",
// //   backdropFilter: "blur(10px)",
// //   border: "1px solid rgba(255, 255, 255, 0.3)",
// //   boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
// //   zIndex: 2,
// //   "&:hover": {
// //     background: "rgba(255, 255, 255, 1)",
// //     transform: "scale(1.1)",
// //   },
// // }));

// // const StudentSidebar = ({ activeTab, setActiveTab }) => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
// //   const { logout, user } = useAuth();
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [mobileOpen, setMobileOpen] = useState(false);

// //   const handleDrawerToggle = () => {
// //     if (isMobile) {
// //       setMobileOpen(!mobileOpen);
// //     } else {
// //       setCollapsed(!collapsed);
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Mobile Toggle Button */}
// //       {isMobile && (
// //         <Toolbar
// //           sx={{
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             zIndex: theme.zIndex.drawer - 1,
// //             background: "rgba(255, 255, 255, 0.95)",
// //             backdropFilter: "blur(20px)",
// //             borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
// //             height: "64px",
// //           }}
// //         >
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             edge="start"
// //             onClick={handleDrawerToggle}
// //             sx={{
// //               background: "rgba(102, 126, 234, 0.1)",
// //               "&:hover": {
// //                 background: "rgba(102, 126, 234, 0.2)",
// //               },
// //             }}
// //           >
// //             <Menu />
// //           </IconButton>
// //         </Toolbar>
// //       )}

// //       <StyledDrawer
// //         variant={isMobile ? "temporary" : "permanent"}
// //         anchor="left"
// //         open={isMobile ? mobileOpen : true}
// //         onClose={handleDrawerToggle}
// //         ModalProps={{
// //           keepMounted: true,
// //         }}
// //         PaperProps={{
// //           className: collapsed ? "MuiDrawer-paperCollapsed" : "",
// //         }}
// //       >
// //         {/* Collapse Button */}
// //         {!isMobile && (
// //           <CollapseButton onClick={handleDrawerToggle} size="small">
// //             {collapsed ? <Menu /> : <ChevronLeft />}
// //           </CollapseButton>
// //         )}

// //         {/* User Profile Card (hidden when collapsed) */}
// //         {!collapsed && (
// //           <UserProfileCard>
// //             <Box display="flex" alignItems="center" gap={2}>
// //               <Avatar
// //                 sx={{
// //                   width: 50,
// //                   height: 50,
// //                   background: "rgba(255, 255, 255, 0.2)",
// //                   backdropFilter: "blur(10px)",
// //                   border: "2px solid rgba(255, 255, 255, 0.3)",
// //                   fontSize: "1.5rem",
// //                   fontWeight: 700,
// //                 }}
// //               >
// //                 {user?.name?.charAt(0) || "S"}
// //               </Avatar>
// //               <Box flex={1}>
// //                 <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
// //                   {user?.name || "Student"}
// //                 </Typography>
// //                 <Typography
// //                   variant="body2"
// //                   sx={{
// //                     color: "rgba(255, 255, 255, 0.8)",
// //                     fontWeight: 500,
// //                   }}
// //                 >
// //                   Student Account
// //                 </Typography>
// //               </Box>
// //             </Box>
// //           </UserProfileCard>
// //         )}

// //         {/* Menu Items */}
// //         <List sx={{ pt: collapsed ? 8 : 2, px: 1 }}>
// //           {menuItems.map((item) => (
// //             <ModernListItem
// //               button
// //               key={item.text}
// //               selected={activeTab === item.tab}
// //               onClick={() => {
// //                 setActiveTab(item.tab);
// //                 if (isMobile) setMobileOpen(false);
// //               }}
// //               sx={{
// //                 justifyContent: collapsed ? "center" : "flex-start",
// //                 minHeight: 48,
// //               }}
// //             >
// //               <ListItemIcon
// //                 sx={{
// //                   minWidth: 0,
// //                   mr: collapsed ? 0 : 2,
// //                   justifyContent: "center",
// //                   color: activeTab === item.tab ? "white" : "#667eea",
// //                 }}
// //               >
// //                 {item.icon}
// //               </ListItemIcon>
// //               {!collapsed && (
// //                 <ListItemText
// //                   primary={item.text}
// //                   primaryTypographyProps={{
// //                     variant: "body2",
// //                     fontWeight: activeTab === item.tab ? 600 : 500,
// //                   }}
// //                 />
// //               )}
// //             </ModernListItem>
// //           ))}
// //         </List>

// //         {/* Logout Button */}
// //         <Box sx={{ mt: "auto", pb: 2 }}>
// //           <Divider sx={{ mx: 2, mb: 2, opacity: 0.3 }} />
// //           <List sx={{ px: 1 }}>
// //             <LogoutButton
// //               button
// //               onClick={logout}
// //               sx={{
// //                 justifyContent: collapsed ? "center" : "flex-start",
// //                 minHeight: 48,
// //               }}
// //             >
// //               <ListItemIcon
// //                 sx={{
// //                   minWidth: 0,
// //                   mr: collapsed ? 0 : 2,
// //                   justifyContent: "center",
// //                   color: theme.palette.error.main,
// //                 }}
// //               >
// //                 <LogoutIcon />
// //               </ListItemIcon>
// //               {!collapsed && (
// //                 <ListItemText
// //                   primary="Logout"
// //                   primaryTypographyProps={{
// //                     variant: "body2",
// //                     color: "error.main",
// //                     fontWeight: 600,
// //                   }}
// //                 />
// //               )}
// //             </LogoutButton>
// //           </List>
// //         </Box>
// //       </StyledDrawer>
// //     </>
// //   );
// // };

// // export default StudentSidebar;
// import { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   useTheme,
//   useMediaQuery,
//   Avatar,
//   Box,
//   Typography,
//   IconButton,
//   Toolbar,
//   styled,
// } from "@mui/material";
// import {
//   GridViewRounded as DashboardIcon,
//   AutoStoriesRounded as AllCoursesIcon,
//   Book as MyCoursesIcon,
//   TrendingUpRounded as ProgressIcon,
//   AssignmentTurnedInRounded as AssignmentsIcon,
//   TuneRounded as SettingsIcon,
//   LogoutRounded as LogoutIcon,
//   QuizRounded as QuizIcon,
//   MenuRounded as Menu,
//   ChevronLeftRounded as ChevronLeft,
// } from "@mui/icons-material";
// import { useAuth } from "../../contexts/AuthContext/AuthContext";

// const menuItems = [
//   {
//     text: "Dashboard",
//     icon: <DashboardIcon />,
//     tab: "dashboard",
//     color: "#6366f1",
//     bgColor: "rgba(99, 102, 241, 0.1)",
//   },
//   {
//     text: "All Courses",
//     icon: <AllCoursesIcon />,
//     tab: "all",
//     color: "#8b5cf6",
//     bgColor: "rgba(139, 92, 246, 0.1)",
//   },
//   {
//     text: "My Courses",
//     icon: <MyCoursesIcon />,
//     tab: "enrolled",
//     color: "#f59e0b",
//     bgColor: "rgba(245, 158, 11, 0.1)",
//   },
//   {
//     text: "My Progress",
//     icon: <ProgressIcon />,
//     tab: "progress",
//     color: "#10b981",
//     bgColor: "rgba(16, 185, 129, 0.1)",
//   },
//   {
//     text: "Assignments",
//     icon: <AssignmentsIcon />,
//     tab: "assignments",
//     color: "#3b82f6",
//     bgColor: "rgba(59, 130, 246, 0.1)",
//   },
//   {
//     text: "Quizzes",
//     icon: <QuizIcon />,
//     tab: "quizzes",
//     color: "#ef4444",
//     bgColor: "rgba(239, 68, 68, 0.1)",
//   },
//   {
//     text: "Settings",
//     icon: <SettingsIcon />,
//     tab: "settings",
//     color: "#64748b",
//     bgColor: "rgba(100, 116, 139, 0.1)",
//   },
// ];

// const drawerWidth = 240;
// const collapsedWidth = 72;

// const StyledDrawer = styled(Drawer)(({ theme }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   // "& .MuiDrawer-paper": {
//   //   background:
//   //     "linear-gradient(145deg, #ffffff 0%, #f8faff 40%, #f1f5ff 100%)",
//   //   borderRight: "1px solid rgba(99, 102, 241, 0.12)",
//   //   boxShadow:
//   //     "0 8px 32px rgba(99, 102, 241, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
//   //   backdropFilter: "blur(20px)",
//   //   transition: theme.transitions.create("width", {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.enteringScreen,
//   //   }),
//   //   overflowX: "hidden",
//   //   top: "69px",
//   //   width: drawerWidth,
//   //   position: "relative",
//   //   "&::before": {
//   //     content: '""',
//   //     position: "absolute",
//   //     top: 0,
//   //     left: 0,
//   //     right: 0,
//   //     bottom: 0,
//   //     background:
//   //       "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
//   //     pointerEvents: "none",
//   //   },
//   //   [theme.breakpoints.down("sm")]: {
//   //     position: "absolute",
//   //     height: "100%",
//   //     zIndex: theme.zIndex.drawer + 1,
//   //   },
//   // },
//   // "& .MuiDrawer-paperCollapsed": {
//   //   transition: theme.transitions.create("width", {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.leavingScreen,
//   //   }),
//   //   overflowX: "hidden",
//   //   top: "69px",
//   //   height: "100%",
//   //   width: collapsedWidth,
//   //   [theme.breakpoints.down("sm")]: {
//   //     width: 0,
//   //   },
//   // },

//   "& .MuiDrawer-paper": {
//     backgroundColor: theme.palette.background.default,
//     backgroundImage:
//       theme.palette.mode === "light"
//         ? "linear-gradient(195deg, rgba(240, 245, 255, 0.8), rgba(255, 255, 255, 1))"
//         : "linear-gradient(195deg, rgba(20, 30, 50, 0.8), rgba(30, 41, 59, 1))",
//     borderRight: `1px solid ${theme.palette.divider}`,
//     transition: theme.transitions.create(["width", "transform"], {
//       easing: theme.transitions.easing.easeInOut,
//       duration: theme.transitions.duration.standard,
//     }),
//     overflowX: "hidden",
//     top: "69px",
//     width: drawerWidth,
//     [theme.breakpoints.down("sm")]: {
//       position: "relative",
//       height: "100%",
//       zIndex: theme.zIndex.drawer + 1,
//       boxShadow: theme.shadows[16],
//     },
//   },
//   "& .MuiDrawer-paperCollapsed": {
//     width: collapsedWidth,
//     [theme.breakpoints.down("sm")]: {
//       width: 0,
//     },
//   },
// }));

// const StudentSidebar = ({ activeTab, setActiveTab }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const { logout, user } = useAuth();
//   const [collapsed, setCollapsed] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     if (isMobile) {
//       setMobileOpen(!mobileOpen);
//     } else {
//       setCollapsed(!collapsed);
//     }
//   };

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       {isMobile && (
//         <Toolbar
//           sx={{
//             position: "fixed",
//             top: "70px",
//             left: 0,
//             zIndex: theme.zIndex.drawer - 1,
//             borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
//             background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
//           }}
//         >
//           <IconButton
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{
//               color: "#6366f1",
//               backgroundColor: "rgba(99, 102, 241, 0.08)",
//               "&:hover": {
//                 backgroundColor: "rgba(99, 102, 241, 0.12)",
//               },
//             }}
//           >
//             <Menu />
//           </IconButton>
//         </Toolbar>
//       )}

//       <StyledDrawer
//         variant={isMobile ? "temporary" : "permanent"}
//         anchor="left"
//         open={isMobile ? mobileOpen : true}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         PaperProps={{
//           className: collapsed ? "MuiDrawer-paperCollapsed" : "",
//         }}
//       >
//         {/* Collapse Button */}
//         {!isMobile && (
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
//               p: 1.5,
//               background:
//                 "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
//             }}
//           >
//             <IconButton
//               onClick={() => setCollapsed(!collapsed)}
//               sx={{
//                 color: "#6366f1",
//                 backgroundColor: "rgba(99, 102, 241, 0.08)",
//                 "&:hover": {
//                   backgroundColor: "rgba(99, 102, 241, 0.12)",
//                   transform: "scale(1.05)",
//                 },
//                 transition: "all 0.2s ease",
//               }}
//             >
//               {collapsed ? <Menu /> : <ChevronLeft />}
//             </IconButton>
//           </Box>
//         )}

//         {/* Welcome Section (only when not collapsed) */}
//         {!collapsed && (
//           <Box
//             sx={{
//               px: 3,
//               py: 2.5,
//               borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
//               position: "relative",
//               background:
//                 "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: "3px",
//                 background:
//                   "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
//               },
//             }}
//           >
//             <Box display="flex" alignItems="center" gap={2}>
//               <Avatar
//                 sx={{
//                   width: 50,
//                   height: 50,
//                   background:
//                     "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//                   color: "white",
//                   fontSize: "1.5rem",
//                   fontWeight: 700,
//                 }}
//               >
//                 {user?.name?.charAt(0) || "S"}
//               </Avatar>
//               <Box flex={1}>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: "#1e293b",
//                     fontWeight: 800,
//                     fontSize: "1.1rem",
//                     background:
//                       "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//                     backgroundClip: "text",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     letterSpacing: "0.02em",
//                   }}
//                 >
//                   {user?.name || "Student"}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "#64748b",
//                     fontSize: "0.85rem",
//                     fontWeight: 500,
//                   }}
//                 >
//                   Student Account
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         )}

//         {/* Menu Items */}
//         <List sx={{ p: 2.5, pt: 3, flexGrow: 1 }}>
//           {menuItems.map((item, index) => (
//             <ListItem
//               key={item.text}
//               selected={activeTab === item.tab}
//               onClick={() => {
//                 setActiveTab(item.tab);
//                 if (isMobile) setMobileOpen(false);
//               }}
//               sx={{
//                 borderRadius: 3,
//                 mb: 1.5,
//                 minHeight: 54,
//                 justifyContent: collapsed ? "center" : "flex-start",
//                 cursor: "pointer",
//                 position: "relative",
//                 overflow: "hidden",
//                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&::before": {
//                   content: '""',
//                   position: "absolute",
//                   left: 0,
//                   top: 0,
//                   bottom: 0,
//                   width: "4px",
//                   background: `linear-gradient(180deg, ${item.color} 0%, ${item.color}80 100%)`,
//                   transform: activeTab === item.tab ? "scaleY(1)" : "scaleY(0)",
//                   transformOrigin: "center",
//                   transition: "transform 0.3s ease",
//                   borderRadius: "0 4px 4px 0",
//                 },
//                 "&.Mui-selected": {
//                   backgroundColor: `${item.color}10`,
//                   backdropFilter: "blur(10px)",
//                   boxShadow: `0 4px 20px ${item.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.5)`,
//                   "&:hover": {
//                     backgroundColor: `${item.color}15`,
//                     transform: "translateX(6px) scale(1.02)",
//                   },
//                 },
//                 "&:hover": {
//                   backgroundColor:
//                     activeTab === item.tab
//                       ? `${item.color}15`
//                       : "rgba(99, 102, 241, 0.08)",
//                   transform:
//                     activeTab === item.tab
//                       ? "translateX(6px) scale(1.02)"
//                       : "translateX(4px)",
//                   boxShadow:
//                     activeTab === item.tab
//                       ? `0 6px 24px ${item.color}25, inset 0 1px 0 rgba(255, 255, 255, 0.6)`
//                       : "0 4px 16px rgba(99, 102, 241, 0.1)",
//                 },
//                 animationDelay: `${index * 50}ms`,
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: collapsed ? 0 : 3,
//                   justifyContent: "center",
//                   color: activeTab === item.tab ? item.color : "#64748b",
//                   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                   "& .MuiSvgIcon-root": {
//                     fontSize: "1.5rem",
//                     filter:
//                       activeTab === item.tab
//                         ? `drop-shadow(0 2px 4px ${item.color}40)`
//                         : "none",
//                     transform:
//                       activeTab === item.tab ? "scale(1.1)" : "scale(1)",
//                   },
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               {!collapsed && (
//                 <ListItemText
//                   primary={item.text}
//                   primaryTypographyProps={{
//                     fontWeight: activeTab === item.tab ? 700 : 600,
//                     color: activeTab === item.tab ? "#1e293b" : "#475569",
//                     fontSize: "0.95rem",
//                     letterSpacing: "0.01em",
//                     transition: "all 0.2s ease",
//                   }}
//                 />
//               )}
//             </ListItem>
//           ))}
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ mt: "auto" }}>
//           <Divider
//             sx={{
//               borderColor: "rgba(99, 102, 241, 0.12)",
//               mx: 2,
//               "&::before, &::after": {
//                 borderColor: "rgba(99, 102, 241, 0.12)",
//               },
//             }}
//           />
//           <List sx={{ p: 2.5, pb: 3 }}>
//             <ListItem
//               onClick={logout}
//               sx={{
//                 borderRadius: 3,
//                 minHeight: 54,
//                 justifyContent: collapsed ? "center" : "flex-start",
//                 cursor: "pointer",
//                 position: "relative",
//                 overflow: "hidden",
//                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 border: "1px solid rgba(239, 68, 68, 0.2)",
//                 "&::before": {
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background:
//                     "linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.1) 100%)",
//                   opacity: 0,
//                   transition: "opacity 0.3s ease",
//                 },
//                 "&:hover": {
//                   backgroundColor: "rgba(239, 68, 68, 0.08)",
//                   transform: "translateX(4px) scale(1.02)",
//                   boxShadow:
//                     "0 6px 20px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
//                   borderColor: "rgba(239, 68, 68, 0.3)",
//                   "&::before": {
//                     opacity: 1,
//                   },
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: collapsed ? 0 : 3,
//                   justifyContent: "center",
//                   color: "#ef4444",
//                   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                   "& .MuiSvgIcon-root": {
//                     fontSize: "1.5rem",
//                     filter: "drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3))",
//                   },
//                 }}
//               >
//                 <LogoutIcon />
//               </ListItemIcon>
//               {!collapsed && (
//                 <ListItemText
//                   primary="Logout"
//                   primaryTypographyProps={{
//                     color: "#ef4444",
//                     fontWeight: 700,
//                     fontSize: "0.95rem",
//                     letterSpacing: "0.01em",
//                   }}
//                 />
//               )}
//             </ListItem>
//           </List>
//         </Box>
//       </StyledDrawer>
//     </>
//   );
// };

// export default StudentSidebar;
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Avatar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  styled,
} from "@mui/material";
import {
  GridViewRounded as DashboardIcon,
  AutoStoriesRounded as AllCoursesIcon,
  Book as MyCoursesIcon,
  TrendingUpRounded as ProgressIcon,
  AssignmentTurnedInRounded as AssignmentsIcon,
  TuneRounded as SettingsIcon,
  LogoutRounded as LogoutIcon,
  QuizRounded as QuizIcon,
  MenuRounded as Menu,
  ChevronLeftRounded as ChevronLeft,
} from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    tab: "dashboard",
    color: "#6366f1",
    bgColor: "rgba(99, 102, 241, 0.1)",
  },
  {
    text: "All Courses",
    icon: <AllCoursesIcon />,
    tab: "all",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.1)",
  },
  {
    text: "My Courses",
    icon: <MyCoursesIcon />,
    tab: "enrolled",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.1)",
  },
  {
    text: "My Progress",
    icon: <ProgressIcon />,
    tab: "progress",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    text: "Assignments",
    icon: <AssignmentsIcon />,
    tab: "assignments",
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    text: "Quizzes",
    icon: <QuizIcon />,
    tab: "quizzes",
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
    overflowY: "hidden", // Remove vertical scroll
    top: "69px",
    width: drawerWidth,
    height: "calc(100vh - 69px)", // Set fixed height
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

const StudentSidebar = ({ activeTab, setActiveTab }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { logout, user } = useAuth();
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
      {/* Mobile Toggle Button */}
      {isMobile && (
        <Toolbar
          sx={{
            position: "fixed",
            top: "70px",
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
              onClick={() => setCollapsed(!collapsed)}
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

        {/* Welcome Section (only when not collapsed) */}
        {!collapsed && (
          <Box
            sx={{
              px: 3,
              py: 2.5,
              borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
              position: "relative",
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background:
                  "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
              },
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                {user?.name?.charAt(0) || "S"}
              </Avatar>
              <Box flex={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1e293b",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.02em",
                  }}
                >
                  {user?.name || "Student"}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  Student Account
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* Menu Items */}
        <List sx={{ p: 2, pt: 2, flexGrow: 1 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={item.text}
              selected={activeTab === item.tab}
              onClick={() => {
                setActiveTab(item.tab);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                borderRadius: 3,
                mb: 1, // Reduced margin between items
                minHeight: 48, // Slightly reduced height
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
                  transform: activeTab === item.tab ? "scaleY(1)" : "scaleY(0)",
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
                  backgroundColor:
                    activeTab === item.tab
                      ? `${item.color}15`
                      : "rgba(99, 102, 241, 0.08)",
                  transform:
                    activeTab === item.tab
                      ? "translateX(6px) scale(1.02)"
                      : "translateX(4px)",
                  boxShadow:
                    activeTab === item.tab
                      ? `0 6px 24px ${item.color}25, inset 0 1px 0 rgba(255, 255, 255, 0.6)`
                      : "0 4px 16px rgba(99, 102, 241, 0.1)",
                },
                animationDelay: `${index * 50}ms`,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 0 : 3,
                  justifyContent: "center",
                  color: activeTab === item.tab ? item.color : "#64748b",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "& .MuiSvgIcon-root": {
                    fontSize: "1.4rem", // Slightly smaller icons
                    filter:
                      activeTab === item.tab
                        ? `drop-shadow(0 2px 4px ${item.color}40)`
                        : "none",
                    transform:
                      activeTab === item.tab ? "scale(1.1)" : "scale(1)",
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: activeTab === item.tab ? 700 : 600,
                    color: activeTab === item.tab ? "#1e293b" : "#475569",
                    fontSize: "0.9rem", // Slightly smaller text
                    letterSpacing: "0.01em",
                    transition: "all 0.2s ease",
                  }}
                />
              )}
            </ListItem>
          ))}
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
          <List sx={{ p: 2, pb: 2 }}>
            <ListItem
              onClick={logout}
              sx={{
                borderRadius: 3,
                minHeight: 48, // Consistent with menu items
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
                    fontSize: "1.4rem", // Consistent with menu items
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
                    fontSize: "0.9rem", // Consistent with menu items
                    letterSpacing: "0.01em",
                  }}
                />
              )}
            </ListItem>
          </List>
        </Box>
      </StyledDrawer>
    </>
  );
};

export default StudentSidebar;
