// // // // // import React from "react";
// // // // import {
// // // //   Box,
// // // //   Typography,
// // // //   styled,
// // // //   Avatar,
// // // //   Divider,
// // // //   List,
// // // //   ListItem,
// // // //   ListItemIcon,
// // // //   ListItemText,
// // // //   IconButton,
// // // //   Toolbar,
// // // //   useTheme,
// // // // } from "@mui/material";
// // // // import {
// // // //   Dashboard as DashboardIcon,
// // // //   School as CoursesIcon,
// // // //   People as StudentsIcon,
// // // //   BarChart as AnalyticsIcon,
// // // //   Settings as SettingsIcon,
// // // //   Quiz as QuizIcon,
// // // //   School as SchoolIcon,
// // // //   Add as AddIcon,
// // // //   Assignment as AssignmentIcon,
// // // //   Logout as LogoutIcon,
// // // //   Menu,
// // // //   ChevronLeft,
// // // // } from "@mui/icons-material";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import { useAuth } from "../../../contexts/AuthContext/AuthContext";

// // // // import { Drawer } from "@mui/material";
// // // // const drawerWidth = 240;
// // // // const collapsedWidth = 72;

// // // // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// // // //   width: drawerWidth,
// // // //   flexShrink: 0,
// // // //   whiteSpace: "nowrap",
// // // //   boxSizing: "border-box",
// // // //   "& .MuiDrawer-paper": {
// // // //     backgroundColor: "#f8fafc",
// // // //     backgroundImage: "linear-gradient(to bottom, #f8fafc 0%, #e6f0ff 100%)",
// // // //     borderRight: "1px solid rgba(145, 185, 255, 0.3)",
// // // //     transition: theme.transitions.create("width", {
// // // //       easing: theme.transitions.easing.sharp,
// // // //       duration: theme.transitions.duration.enteringScreen,
// // // //     }),
// // // //     overflowX: "hidden",
// // // //     top: "69px",
// // // //     width: drawerWidth,
// // // //     [theme.breakpoints.down("sm")]: {
// // // //       position: "absolute",
// // // //       height: "100%",
// // // //       zIndex: theme.zIndex.drawer + 1,
// // // //     },
// // // //   },
// // // //   "& .MuiDrawer-paperCollapsed": {
// // // //     transition: theme.transitions.create("width", {
// // // //       easing: theme.transitions.easing.sharp,
// // // //       duration: theme.transitions.duration.leavingScreen,
// // // //     }),
// // // //     overflowX: "hidden",
// // // //     top: "69px",
// // // //     height: "100%",
// // // //     width: collapsedWidth,
// // // //     [theme.breakpoints.down("sm")]: {
// // // //       width: 0,
// // // //     },
// // // //   },
// // // // }));

// // // // const InstructorSidebar = ({
// // // //   mobileOpen,
// // // //   handleDrawerToggle,
// // // //   collapsed,
// // // //   setCollapsed,
// // // //   isMobile,
// // // //   currentView,
// // // //   onViewChange,
// // // // }) => {
// // // //   const { logout, user } = useAuth();
// // // //   const theme = useTheme();
// // // //   const location = useLocation();

// // // //   const menuItems = [
// // // //     {
// // // //       text: "Dashboard",
// // // //       icon: <DashboardIcon color="primary" />,
// // // //       view: "dashboard",
// // // //       color: "primary.main",
// // // //     },
// // // //     {
// // // //       text: "My Courses",
// // // //       icon: <CoursesIcon color="secondary" />,
// // // //       view: "my-courses",
// // // //       color: "secondary.main",
// // // //     },
// // // //     {
// // // //       text: "Enrollment Stats",
// // // //       icon: <StudentsIcon sx={{ color: "#ff9800" }} />,
// // // //       view: "enrollment-stats",
// // // //       color: "#ff9800",
// // // //     },
// // // //     {
// // // //       text: "Assignments", // Fixed spelling
// // // //       icon: <AssignmentIcon sx={{ color: "#9c27b0" }} />,
// // // //       view: "assignments",
// // // //       color: "#9c27b0",
// // // //     },
// // // //     {
// // // //       text: "visualization",
// // // //       icon: <AnalyticsIcon sx={{ color: "#607d8b" }} />,
// // // //       view: "visualization",
// // // //       color: "#607d8b",
// // // //     },
// // // //     {
// // // //       text: "Quizzes", // Fixed spelling
// // // //       icon: <QuizIcon sx={{ color: "#3f51b5" }} />,
// // // //       view: "quizzes",
// // // //       color: "#3f51b5",
// // // //     },
// // // //     {
// // // //       text: "Settings",
// // // //       icon: <SettingsIcon sx={{ color: "#607d8b" }} />,
// // // //       view: "settings",
// // // //       color: "#607d8b",
// // // //     },
// // // //   ];

// // // //   const handleItemClick = (item) => {
// // // //     if (item.path) {
// // // //       // For items with external paths, use Link navigation
// // // //       return;
// // // //     } else if (item.view) {
// // // //       // For items with views, use the view change handler
// // // //       onViewChange(item.view);
// // // //       if (isMobile) handleDrawerToggle();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* Mobile Toggle Button */}
// // // //       {isMobile && (
// // // //         <Toolbar
// // // //           sx={{
// // // //             position: "fixed",
// // // //             top: "70px",
// // // //             left: 0,
// // // //             zIndex: theme.zIndex.drawer - 1,
// // // //             borderBottom: "1px solid rgba(145, 185, 255, 0.3)",
// // // //           }}
// // // //         >
// // // //           <IconButton
// // // //             color="primary"
// // // //             aria-label="open drawer"
// // // //             edge="start"
// // // //             onClick={handleDrawerToggle}
// // // //           >
// // // //             <Menu />
// // // //           </IconButton>
// // // //         </Toolbar>
// // // //       )}

// // // //       <StyledDrawer
// // // //         variant={isMobile ? "temporary" : "permanent"}
// // // //         anchor="left"
// // // //         open={isMobile ? mobileOpen : true}
// // // //         onClose={handleDrawerToggle}
// // // //         ModalProps={{
// // // //           keepMounted: true,
// // // //         }}
// // // //         PaperProps={{
// // // //           className: collapsed ? "MuiDrawer-paperCollapsed" : "",
// // // //         }}
// // // //       >
// // // //         {/* Collapse Button */}
// // // //         {!isMobile && (
// // // //           <Box
// // // //             sx={{
// // // //               display: "flex",
// // // //               justifyContent: "flex-end",
// // // //               borderBottom: "1px solid rgba(145, 185, 255, 0.3)",
// // // //             }}
// // // //           >
// // // //             <IconButton onClick={() => setCollapsed(!collapsed)}>
// // // //               {collapsed ? (
// // // //                 <Menu color="primary" />
// // // //               ) : (
// // // //                 <ChevronLeft color="primary" />
// // // //               )}
// // // //             </IconButton>
// // // //           </Box>
// // // //         )}

// // // //         {/* User Profile (hidden when collapsed) */}
// // // //         {!collapsed && (
// // // //           <Box
// // // //             sx={{
// // // //               p: 2,
// // // //               display: "flex",
// // // //               alignItems: "center",
// // // //               gap: 2,
// // // //               borderBottom: "1px solid rgba(145, 185, 255, 0.3)",
// // // //             }}
// // // //           >
// // // //             <Avatar
// // // //               sx={{
// // // //                 bgcolor: "primary.light",
// // // //                 color: "primary.dark",
// // // //                 width: 48,
// // // //                 height: 48,
// // // //               }}
// // // //             >
// // // //               {user?.name?.charAt(0) || "I"}
// // // //             </Avatar>
// // // //             <Box>
// // // //               <Typography variant="subtitle1" fontWeight={500} noWrap>
// // // //                 {user?.name || "Instructor"}
// // // //               </Typography>
// // // //               <Typography variant="body2" color="text.secondary" noWrap>
// // // //                 Instructor
// // // //               </Typography>
// // // //             </Box>
// // // //           </Box>
// // // //         )}

// // // //         {/* Menu Items */}
// // // //         <List sx={{ p: 1 }}>
// // // //           {menuItems.map((item) => {
// // // //             const isSelected = item.view
// // // //               ? currentView === item.view
// // // //               : location.pathname === item.path;

// // // //             return (
// // // //               <ListItem
// // // //                 key={item.text}
// // // //                 component={item.path ? Link : "div"}
// // // //                 to={item.path || undefined}
// // // //                 selected={isSelected}
// // // //                 onClick={() => handleItemClick(item)}
// // // //                 sx={{
// // // //                   borderRadius: 1,
// // // //                   mb: 0.5,
// // // //                   minHeight: 48,
// // // //                   justifyContent: collapsed ? "center" : "flex-start",
// // // //                   cursor: "pointer",
// // // //                   "&.Mui-selected": {
// // // //                     backgroundColor: "primary.50",
// // // //                     "&:hover": {
// // // //                       backgroundColor: "primary.50",
// // // //                     },
// // // //                   },
// // // //                   "&:hover": {
// // // //                     backgroundColor: "primary.100",
// // // //                   },
// // // //                 }}
// // // //               >
// // // //                 <ListItemIcon
// // // //                   sx={{
// // // //                     minWidth: 0,
// // // //                     mr: collapsed ? 0 : 2,
// // // //                     justifyContent: "center",
// // // //                     color: isSelected ? item.color : "text.secondary",
// // // //                   }}
// // // //                 >
// // // //                   {item.icon}
// // // //                 </ListItemIcon>
// // // //                 {!collapsed && (
// // // //                   <ListItemText
// // // //                     primary={item.text}
// // // //                     primaryTypographyProps={{
// // // //                       fontWeight: isSelected ? 600 : 400,
// // // //                       color: isSelected ? "primary.dark" : "text.primary",
// // // //                       fontSize: "0.9rem",
// // // //                     }}
// // // //                   />
// // // //                 )}
// // // //               </ListItem>
// // // //             );
// // // //           })}
// // // //         </List>

// // // //         {/* Logout Button */}
// // // //         <Divider sx={{ borderColor: "rgba(145, 185, 255, 0.3)" }} />
// // // //         <List sx={{ p: 1 }}>
// // // //           <ListItem
// // // //             onClick={logout}
// // // //             sx={{
// // // //               borderRadius: 1,
// // // //               minHeight: 48,
// // // //               justifyContent: collapsed ? "center" : "flex-start",
// // // //               cursor: "pointer",
// // // //               "&:hover": {
// // // //                 backgroundColor: "error.50",
// // // //               },
// // // //             }}
// // // //           >
// // // //             <ListItemIcon
// // // //               sx={{
// // // //                 minWidth: 0,
// // // //                 mr: collapsed ? 0 : 2,
// // // //                 justifyContent: "center",
// // // //                 color: "error.main",
// // // //               }}
// // // //             >
// // // //               <LogoutIcon />
// // // //             </ListItemIcon>
// // // //             {!collapsed && (
// // // //               <ListItemText
// // // //                 primary="Logout"
// // // //                 primaryTypographyProps={{
// // // //                   color: "error.main",
// // // //                   fontWeight: 500,
// // // //                 }}
// // // //               />
// // // //             )}
// // // //           </ListItem>
// // // //         </List>
// // // //       </StyledDrawer>
// // // //     </>
// // // //   );
// // // // };

// // // // export default InstructorSidebar;
// // // // import React from "react";
// // // import {
// // //   Box,
// // //   Typography,
// // //   styled,
// // //   Avatar,
// // //   Divider,
// // //   List,
// // //   ListItem,
// // //   ListItemIcon,
// // //   ListItemText,
// // //   IconButton,
// // //   Toolbar,
// // //   useTheme,
// // // } from "@mui/material";
// // // import {
// // //   GridViewRounded as DashboardIcon,
// // //   AutoStoriesRounded as CoursesIcon,
// // //   TrendingUpRounded as StudentsIcon,
// // //   BarChartRounded as AnalyticsIcon,
// // //   TuneRounded as SettingsIcon,
// // //   QuizRounded as QuizIcon,
// // //   AssignmentTurnedInRounded as AssignmentIcon,
// // //   LogoutRounded as LogoutIcon,
// // //   MenuRounded as Menu,
// // //   ChevronLeftRounded as ChevronLeft,
// // // } from "@mui/icons-material";
// // // import { Link, useLocation } from "react-router-dom";
// // // import { useAuth } from "../../../contexts/AuthContext/AuthContext";

// // // import { Drawer } from "@mui/material";
// // // const drawerWidth = 240;
// // // const collapsedWidth = 72;

// // // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// // //   width: drawerWidth,
// // //   flexShrink: 0,
// // //   whiteSpace: "nowrap",
// // //   boxSizing: "border-box",
// // //   "& .MuiDrawer-paper": {
// // //     background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
// // //     borderRight: "1px solid rgba(99, 102, 241, 0.08)",
// // //     boxShadow: "0 1px 20px rgba(99, 102, 241, 0.04)",
// // //     transition: theme.transitions.create("width", {
// // //       easing: theme.transitions.easing.sharp,
// // //       duration: theme.transitions.duration.enteringScreen,
// // //     }),
// // //     overflowX: "hidden",
// // //     top: "69px",
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
// // //     top: "69px",
// // //     height: "100%",
// // //     width: collapsedWidth,
// // //     [theme.breakpoints.down("sm")]: {
// // //       width: 0,
// // //     },
// // //   },
// // // }));

// // // const InstructorSidebar = ({
// // //   mobileOpen,
// // //   handleDrawerToggle,
// // //   collapsed,
// // //   setCollapsed,
// // //   isMobile,
// // //   currentView,
// // //   onViewChange,
// // // }) => {
// // //   const { logout, user } = useAuth();
// // //   const theme = useTheme();
// // //   const location = useLocation();

// // //   const menuItems = [
// // //     {
// // //       text: "Dashboard",
// // //       icon: <DashboardIcon />,
// // //       view: "dashboard",
// // //       color: "#6366f1",
// // //       bgColor: "rgba(99, 102, 241, 0.1)",
// // //     },
// // //     {
// // //       text: "My Courses",
// // //       icon: <CoursesIcon />,
// // //       view: "my-courses",
// // //       color: "#8b5cf6",
// // //       bgColor: "rgba(139, 92, 246, 0.1)",
// // //     },
// // //     {
// // //       text: "Enrollment Stats",
// // //       icon: <StudentsIcon />,
// // //       view: "enrollment-stats",
// // //       color: "#f59e0b",
// // //       bgColor: "rgba(245, 158, 11, 0.1)",
// // //     },
// // //     {
// // //       text: "Assignments",
// // //       icon: <AssignmentIcon />,
// // //       view: "assignments",
// // //       color: "#10b981",
// // //       bgColor: "rgba(16, 185, 129, 0.1)",
// // //     },
// // //     {
// // //       text: "visualization",
// // //       icon: <AnalyticsIcon />,
// // //       view: "visualization",
// // //       color: "#3b82f6",
// // //       bgColor: "rgba(59, 130, 246, 0.1)",
// // //     },
// // //     {
// // //       text: "Quizzes",
// // //       icon: <QuizIcon />,
// // //       view: "quizzes",
// // //       color: "#ef4444",
// // //       bgColor: "rgba(239, 68, 68, 0.1)",
// // //     },
// // //     {
// // //       text: "Settings",
// // //       icon: <SettingsIcon />,
// // //       view: "settings",
// // //       color: "#64748b",
// // //       bgColor: "rgba(100, 116, 139, 0.1)",
// // //     },
// // //   ];

// // //   const handleItemClick = (item) => {
// // //     if (item.path) {
// // //       // For items with external paths, use Link navigation
// // //       return;
// // //     } else if (item.view) {
// // //       // For items with views, use the view change handler
// // //       onViewChange(item.view);
// // //       if (isMobile) handleDrawerToggle();
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       {/* Mobile Toggle Button */}
// // //       {isMobile && (
// // //         <Toolbar
// // //           sx={{
// // //             position: "fixed",
// // //             top: "70px",
// // //             left: 0,
// // //             zIndex: theme.zIndex.drawer - 1,
// // //             borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
// // //             background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
// // //           }}
// // //         >
// // //           <IconButton
// // //             aria-label="open drawer"
// // //             edge="start"
// // //             onClick={handleDrawerToggle}
// // //             sx={{
// // //               color: "#6366f1",
// // //               backgroundColor: "rgba(99, 102, 241, 0.08)",
// // //               "&:hover": {
// // //                 backgroundColor: "rgba(99, 102, 241, 0.12)",
// // //               },
// // //             }}
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
// // //               borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
// // //               p: 1,
// // //             }}
// // //           >
// // //             <IconButton
// // //               onClick={() => setCollapsed(!collapsed)}
// // //               sx={{
// // //                 color: "#6366f1",
// // //                 backgroundColor: "rgba(99, 102, 241, 0.08)",
// // //                 "&:hover": {
// // //                   backgroundColor: "rgba(99, 102, 241, 0.12)",
// // //                   transform: "scale(1.05)",
// // //                 },
// // //                 transition: "all 0.2s ease",
// // //               }}
// // //             >
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
// // //               borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
// // //             }}
// // //           >
// // //             <Avatar
// // //               sx={{
// // //                 background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// // //                 color: "white",
// // //                 width: 48,
// // //                 height: 48,
// // //                 fontWeight: 700,
// // //                 boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
// // //                 border: "3px solid rgba(255, 255, 255, 0.9)",
// // //               }}
// // //             >
// // //               {user?.name?.charAt(0) || "I"}
// // //             </Avatar>
// // //             <Box>
// // //               <Typography
// // //                 variant="subtitle1"
// // //                 fontWeight={600}
// // //                 noWrap
// // //                 sx={{ color: "#1e293b" }}
// // //               >
// // //                 {user?.name || "Instructor"}
// // //               </Typography>
// // //               <Typography
// // //                 variant="body2"
// // //                 noWrap
// // //                 sx={{ color: "#64748b", fontWeight: 500 }}
// // //               >
// // //                 Instructor
// // //               </Typography>
// // //             </Box>
// // //           </Box>
// // //         )}

// // //         {/* Menu Items */}
// // //         <List sx={{ p: 1 }}>
// // //           {menuItems.map((item) => {
// // //             const isSelected = item.view
// // //               ? currentView === item.view
// // //               : location.pathname === item.path;

// // //             return (
// // //               <ListItem
// // //                 key={item.text}
// // //                 component={item.path ? Link : "div"}
// // //                 to={item.path || undefined}
// // //                 selected={isSelected}
// // //                 onClick={() => handleItemClick(item)}
// // //                 sx={{
// // //                   borderRadius: 2,
// // //                   mb: 0.5,
// // //                   minHeight: 48,
// // //                   justifyContent: collapsed ? "center" : "flex-start",
// // //                   cursor: "pointer",
// // //                   transition: "all 0.2s ease",
// // //                   "&.Mui-selected": {
// // //                     backgroundColor: item.bgColor,
// // //                     "&:hover": {
// // //                       backgroundColor: item.bgColor,
// // //                       transform: "translateX(4px)",
// // //                     },
// // //                   },
// // //                   "&:hover": {
// // //                     backgroundColor: isSelected
// // //                       ? item.bgColor
// // //                       : "rgba(99, 102, 241, 0.05)",
// // //                     transform: "translateX(2px)",
// // //                   },
// // //                 }}
// // //               >
// // //                 <ListItemIcon
// // //                   sx={{
// // //                     minWidth: 0,
// // //                     mr: collapsed ? 0 : 2,
// // //                     justifyContent: "center",
// // //                     color: isSelected ? item.color : "#64748b",
// // //                     transition: "all 0.2s ease",
// // //                     "& .MuiSvgIcon-root": {
// // //                       fontSize: "1.4rem",
// // //                     },
// // //                   }}
// // //                 >
// // //                   {item.icon}
// // //                 </ListItemIcon>
// // //                 {!collapsed && (
// // //                   <ListItemText
// // //                     primary={item.text}
// // //                     primaryTypographyProps={{
// // //                       fontWeight: isSelected ? 600 : 500,
// // //                       color: isSelected ? "#1e293b" : "#475569",
// // //                       fontSize: "0.9rem",
// // //                     }}
// // //                   />
// // //                 )}
// // //               </ListItem>
// // //             );
// // //           })}
// // //         </List>

// // //         {/* Logout Button */}
// // //         <Divider sx={{ borderColor: "rgba(99, 102, 241, 0.08)" }} />
// // //         <List sx={{ p: 1 }}>
// // //           <ListItem
// // //             onClick={logout}
// // //             sx={{
// // //               borderRadius: 2,
// // //               minHeight: 48,
// // //               justifyContent: collapsed ? "center" : "flex-start",
// // //               cursor: "pointer",
// // //               transition: "all 0.2s ease",
// // //               "&:hover": {
// // //                 backgroundColor: "rgba(239, 68, 68, 0.1)",
// // //                 transform: "translateX(2px)",
// // //               },
// // //             }}
// // //           >
// // //             <ListItemIcon
// // //               sx={{
// // //                 minWidth: 0,
// // //                 mr: collapsed ? 0 : 2,
// // //                 justifyContent: "center",
// // //                 color: "#ef4444",
// // //                 "& .MuiSvgIcon-root": {
// // //                   fontSize: "1.4rem",
// // //                 },
// // //               }}
// // //             >
// // //               <LogoutIcon />
// // //             </ListItemIcon>
// // //             {!collapsed && (
// // //               <ListItemText
// // //                 primary="Logout"
// // //                 primaryTypographyProps={{
// // //                   color: "#ef4444",
// // //                   fontWeight: 600,
// // //                   fontSize: "0.9rem",
// // //                 }}
// // //               />
// // //             )}
// // //           </ListItem>
// // //         </List>
// // //       </StyledDrawer>
// // //     </>
// // //   );
// // // };

// // // export default InstructorSidebar;
// // // import React from "react";
// // import {
// //   Box,
// //   Typography,
// //   styled,
// //   Avatar,
// //   Divider,
// //   List,
// //   ListItem,
// //   ListItemIcon,
// //   ListItemText,
// //   IconButton,
// //   Toolbar,
// //   useTheme,
// // } from "@mui/material";
// // import {
// //   GridViewRounded as DashboardIcon,
// //   AutoStoriesRounded as CoursesIcon,
// //   TrendingUpRounded as StudentsIcon,
// //   BarChartRounded as AnalyticsIcon,
// //   TuneRounded as SettingsIcon,
// //   QuizRounded as QuizIcon,
// //   AssignmentTurnedInRounded as AssignmentIcon,
// //   LogoutRounded as LogoutIcon,
// //   MenuRounded as Menu,
// //   ChevronLeftRounded as ChevronLeft,
// // } from "@mui/icons-material";
// // import { Link, useLocation } from "react-router-dom";
// // import { useAuth } from "../../../contexts/AuthContext/AuthContext";

// // import { Drawer } from "@mui/material";
// // const drawerWidth = 240;
// // const collapsedWidth = 72;

// // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// //   width: drawerWidth,
// //   flexShrink: 0,
// //   whiteSpace: "nowrap",
// //   boxSizing: "border-box",
// //   "& .MuiDrawer-paper": {
// //     background: "linear-gradient(145deg, #ffffff 0%, #f8faff 40%, #f1f5ff 100%)",
// //     borderRight: "1px solid rgba(99, 102, 241, 0.12)",
// //     boxShadow: "0 8px 32px rgba(99, 102, 241, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
// //     backdropFilter: "blur(20px)",
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
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       bottom: 0,
// //       background: "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
// //       pointerEvents: "none",
// //     },
// //     [theme.breakpoints.down("sm")]: {
// //       position: "absolute",
// //       height: "100%",
// //       zIndex: theme.zIndex.drawer + 1,
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

// // const InstructorSidebar = ({
// //   mobileOpen,
// //   handleDrawerToggle,
// //   collapsed,
// //   setCollapsed,
// //   isMobile,
// //   currentView,
// //   onViewChange,
// // }) => {
// //   const { logout, user } = useAuth();
// //   const theme = useTheme();
// //   const location = useLocation();

// //   const menuItems = [
// //     {
// //       text: "Dashboard",
// //       icon: <DashboardIcon />,
// //       view: "dashboard",
// //       color: "#6366f1",
// //       bgColor: "rgba(99, 102, 241, 0.1)",
// //     },
// //     {
// //       text: "My Courses",
// //       icon: <CoursesIcon />,
// //       view: "my-courses",
// //       color: "#8b5cf6",
// //       bgColor: "rgba(139, 92, 246, 0.1)",
// //     },
// //     {
// //       text: "Enrollment Stats",
// //       icon: <StudentsIcon />,
// //       view: "enrollment-stats",
// //       color: "#f59e0b",
// //       bgColor: "rgba(245, 158, 11, 0.1)",
// //     },
// //     {
// //       text: "Assignments",
// //       icon: <AssignmentIcon />,
// //       view: "assignments",
// //       color: "#10b981",
// //       bgColor: "rgba(16, 185, 129, 0.1)",
// //     },
// //     {
// //       text: "visualization",
// //       icon: <AnalyticsIcon />,
// //       view: "visualization",
// //       color: "#3b82f6",
// //       bgColor: "rgba(59, 130, 246, 0.1)",
// //     },
// //     {
// //       text: "Quizzes",
// //       icon: <QuizIcon />,
// //       view: "quizzes",
// //       color: "#ef4444",
// //       bgColor: "rgba(239, 68, 68, 0.1)",
// //     },
// //     {
// //       text: "Settings",
// //       icon: <SettingsIcon />,
// //       view: "settings",
// //       color: "#64748b",
// //       bgColor: "rgba(100, 116, 139, 0.1)",
// //     },
// //   ];

// //   const handleItemClick = (item) => {
// //     if (item.path) {
// //       // For items with external paths, use Link navigation
// //       return;
// //     } else if (item.view) {
// //       // For items with views, use the view change handler
// //       onViewChange(item.view);
// //       if (isMobile) handleDrawerToggle();
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Mobile Toggle Button */}
// //       {isMobile && (
// //         <Toolbar
// //           sx={{
// //             position: "fixed",
// //             top: "70px",
// //             left: 0,
// //             zIndex: theme.zIndex.drawer - 1,
// //             borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
// //             background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
// //           }}
// //         >
// //           <IconButton
// //             aria-label="open drawer"
// //             edge="start"
// //             onClick={handleDrawerToggle}
// //             sx={{
// //               color: "#6366f1",
// //               backgroundColor: "rgba(99, 102, 241, 0.08)",
// //               "&:hover": {
// //                 backgroundColor: "rgba(99, 102, 241, 0.12)",
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
// //           <Box
// //             sx={{
// //               display: "flex",
// //               justifyContent: "flex-end",
// //               borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
// //               p: 1,
// //             }}
// //           >
// //             <IconButton
// //               onClick={() => setCollapsed(!collapsed)}
// //               sx={{
// //                 color: "#6366f1",
// //                 backgroundColor: "rgba(99, 102, 241, 0.08)",
// //                 "&:hover": {
// //                   backgroundColor: "rgba(99, 102, 241, 0.12)",
// //                   transform: "scale(1.05)",
// //                 },
// //                 transition: "all 0.2s ease",
// //               }}
// //             >
// //               {collapsed ? <Menu /> : <ChevronLeft />}
// //             </IconButton>
// //           </Box>
// //         )}

// //         {/* User Profile (hidden when collapsed) */}
// //         {!collapsed && (
// //           <Box
// //             sx={{
// //               p: 3,
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
// //               position: "relative",
// //               "&::before": {
// //                 content: '""',
// //                 position: "absolute",
// //                 top: 0,
// //                 left: 0,
// //                 right: 0,
// //                 height: "2px",
// //                 background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
// //               },
// //             }}
// //           >
// //             <Avatar
// //               sx={{
// //                 background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
// //                 color: "white",
// //                 width: 56,
// //                 height: 56,
// //                 fontWeight: 800,
// //                 fontSize: "1.5rem",
// //                 boxShadow: "0 8px 24px rgba(99, 102, 241, 0.4), 0 0 0 4px rgba(255, 255, 255, 0.9), 0 0 0 6px rgba(99, 102, 241, 0.1)",
// //                 border: "2px solid rgba(255, 255, 255, 1)",
// //                 cursor: "pointer",
// //                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //                 "&:hover": {
// //                   transform: "scale(1.1) rotate(5deg)",
// //                   boxShadow: "0 12px 32px rgba(99, 102, 241, 0.5), 0 0 0 4px rgba(255, 255, 255, 0.9), 0 0 0 8px rgba(99, 102, 241, 0.15)",
// //                 },
// //               }}
// //             >
// //               {user?.name?.charAt(0) || "I"}
// //             </Avatar>
// //           </Box>
// //         )}

// //         {/* Menu Items */}
// //         <List sx={{ p: 2, mt: 1 }}>
// //           {menuItems.map((item, index) => {
// //             const isSelected = item.view
// //               ? currentView === item.view
// //               : location.pathname === item.path;

// //             return (
// //               <ListItem
// //                 key={item.text}
// //                 component={item.path ? Link : "div"}
// //                 to={item.path || undefined}
// //                 selected={isSelected}
// //                 onClick={() => handleItemClick(item)}
// //                 sx={{
// //                   borderRadius: 3,
// //                   mb: 1,
// //                   minHeight: 52,
// //                   justifyContent: collapsed ? "center" : "flex-start",
// //                   cursor: "pointer",
// //                   position: "relative",
// //                   overflow: "hidden",
// //                   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //                   "&::before": {
// //                     content: '""',
// //                     position: "absolute",
// //                     left: 0,
// //                     top: 0,
// //                     bottom: 0,
// //                     width: "4px",
// //                     background: `linear-gradient(180deg, ${item.color} 0%, ${item.color}80 100%)`,
// //                     transform: isSelected ? "scaleY(1)" : "scaleY(0)",
// //                     transformOrigin: "center",
// //                     transition: "transform 0.3s ease",
// //                     borderRadius: "0 4px 4px 0",
// //                   },
// //                   "&.Mui-selected": {
// //                     backgroundColor: `${item.color}10`,
// //                     backdropFilter: "blur(10px)",
// //                     boxShadow: `0 4px 20px ${item.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.5)`,
// //                     "&:hover": {
// //                       backgroundColor: `${item.color}15`,
// //                       transform: "translateX(6px) scale(1.02)",
// //                     },
// //                   },
// //                   "&:hover": {
// //                     backgroundColor: isSelected ? `${item.color}15` : "rgba(99, 102, 241, 0.08)",
// //                     transform: isSelected ? "translateX(6px) scale(1.02)" : "translateX(4px)",
// //                     boxShadow: isSelected
// //                       ? `0 6px 24px ${item.color}25, inset 0 1px 0 rgba(255, 255, 255, 0.6)`
// //                       : "0 4px 16px rgba(99, 102, 241, 0.1)",
// //                   },
// //                   // Staggered animation delay
// //                   animationDelay: `${index * 50}ms`,
// //                 }}
// //               >
// //                 <ListItemIcon
// //                   sx={{
// //                     minWidth: 0,
// //                     mr: collapsed ? 0 : 3,
// //                     justifyContent: "center",
// //                     color: isSelected ? item.color : "#64748b",
// //                     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //                     "& .MuiSvgIcon-root": {
// //                       fontSize: "1.5rem",
// //                       filter: isSelected ? `drop-shadow(0 2px 4px ${item.color}40)` : "none",
// //                       transform: isSelected ? "scale(1.1)" : "scale(1)",
// //                     },
// //                   }}
// //                 >
// //                   {item.icon}
// //                 </ListItemIcon>
// //                 {!collapsed && (
// //                   <ListItemText
// //                     primary={item.text}
// //                     primaryTypographyProps={{
// //                       fontWeight: isSelected ? 700 : 600,
// //                       color: isSelected ? "#1e293b" : "#475569",
// //                       fontSize: "0.95rem",
// //                       letterSpacing: "0.01em",
// //                       transition: "all 0.2s ease",
// //                     }}
// //                   />
// //                 )}
// //               </ListItem>
// //             );
// //           })}
// //         </List>

// //         {/* Logout Button */}
// //         <Divider
// //           sx={{
// //             borderColor: "rgba(99, 102, 241, 0.12)",
// //             mx: 2,
// //             "&::before, &::after": {
// //               borderColor: "rgba(99, 102, 241, 0.12)",
// //             }
// //           }}
// //         />
// //         <List sx={{ p: 2 }}>
// //           <ListItem
// //             onClick={logout}
// //             sx={{
// //               borderRadius: 3,
// //               minHeight: 52,
// //               justifyContent: collapsed ? "center" : "flex-start",
// //               cursor: "pointer",
// //               position: "relative",
// //               overflow: "hidden",
// //               transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //               border: "1px solid rgba(239, 68, 68, 0.2)",
// //               "&::before": {
// //                 content: '""',
// //                 position: "absolute",
// //                 top: 0,
// //                 left: 0,
// //                 right: 0,
// //                 bottom: 0,
// //                 background: "linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.1) 100%)",
// //                 opacity: 0,
// //                 transition: "opacity 0.3s ease",
// //               },
// //               "&:hover": {
// //                 backgroundColor: "rgba(239, 68, 68, 0.08)",
// //                 transform: "translateX(4px) scale(1.02)",
// //                 boxShadow: "0 6px 20px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
// //                 borderColor: "rgba(239, 68, 68, 0.3)",
// //                 "&::before": {
// //                   opacity: 1,
// //                 },
// //               },
// //             }}
// //           >
// //             <ListItemIcon
// //               sx={{
// //                 minWidth: 0,
// //                 mr: collapsed ? 0 : 3,
// //                 justifyContent: "center",
// //                 color: "#ef4444",
// //                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //                 "& .MuiSvgIcon-root": {
// //                   fontSize: "1.5rem",
// //                   filter: "drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3))",
// //                 },
// //               }}
// //             >
// //               <LogoutIcon />
// //             </ListItemIcon>
// //             {!collapsed && (
// //               <ListItemText
// //                 primary="Logout"
// //                 primaryTypographyProps={{
// //                   color: "#ef4444",
// //                   fontWeight: 700,
// //                   fontSize: "0.95rem",
// //                   letterSpacing: "0.01em",
// //                 }}
// //               />
// //             )}
// //           </ListItem>
// //         </List>
// //       </StyledDrawer>
// //     </>
// //   );
// // };

// // export default InstructorSidebar;
// // import React from "react";
// import {
//   Box,
//   Typography,
//   styled,
//   Avatar,
//   Divider,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Toolbar,
//   useTheme,
// } from "@mui/material";
// import {
//   GridViewRounded as DashboardIcon,
//   AutoStoriesRounded as CoursesIcon,
//   TrendingUpRounded as StudentsIcon,
//   BarChartRounded as AnalyticsIcon,
//   TuneRounded as SettingsIcon,
//   QuizRounded as QuizIcon,
//   AssignmentTurnedInRounded as AssignmentIcon,
//   LogoutRounded as LogoutIcon,
//   MenuRounded as Menu,
//   ChevronLeftRounded as ChevronLeft,
// } from "@mui/icons-material";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../../../contexts/AuthContext/AuthContext";

// import { Drawer } from "@mui/material";
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

// const InstructorSidebar = ({
//   mobileOpen,
//   handleDrawerToggle,
//   collapsed,
//   setCollapsed,
//   isMobile,
//   currentView,
//   onViewChange,
// }) => {
//   const { logout } = useAuth();
//   const theme = useTheme();
//   const location = useLocation();

//   const menuItems = [
//     {
//       text: "Dashboard",
//       icon: <DashboardIcon />,
//       view: "dashboard",
//       color: "#6366f1",
//       bgColor: "rgba(99, 102, 241, 0.1)",
//     },
//     {
//       text: "My Courses",
//       icon: <CoursesIcon />,
//       view: "my-courses",
//       color: "#8b5cf6",
//       bgColor: "rgba(139, 92, 246, 0.1)",
//     },
//     {
//       text: "Enrollment Stats",
//       icon: <StudentsIcon />,
//       view: "enrollment-stats",
//       color: "#f59e0b",
//       bgColor: "rgba(245, 158, 11, 0.1)",
//     },
//     {
//       text: "Assignments",
//       icon: <AssignmentIcon />,
//       view: "assignments",
//       color: "#10b981",
//       bgColor: "rgba(16, 185, 129, 0.1)",
//     },
//     {
//       text: "Visualization",
//       icon: <AnalyticsIcon />,
//       view: "visualization",
//       color: "#3b82f6",
//       bgColor: "rgba(59, 130, 246, 0.1)",
//     },
//     {
//       text: "Quizzes",
//       icon: <QuizIcon />,
//       view: "quizzes",
//       color: "#ef4444",
//       bgColor: "rgba(239, 68, 68, 0.1)",
//     },
//     {
//       text: "Settings",
//       icon: <SettingsIcon />,
//       view: "settings",
//       color: "#64748b",
//       bgColor: "rgba(100, 116, 139, 0.1)",
//     },
//   ];

//   const handleItemClick = (item) => {
//     if (item.path) {
//       // For items with external paths, use Link navigation
//       return;
//     } else if (item.view) {
//       // For items with views, use the view change handler
//       onViewChange(item.view);
//       if (isMobile) handleDrawerToggle();
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
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "#1e293b",
//                 fontWeight: 800,
//                 fontSize: "1.1rem",
//                 textAlign: "center",
//                 background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 letterSpacing: "0.02em",
//                 textTransform: "uppercase",
//               }}
//             >
//               Dashboard
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "#64748b",
//                 fontSize: "0.85rem",
//                 textAlign: "center",
//                 mt: 0.5,
//                 fontWeight: 500,
//               }}
//             >
//               Instructor Panel
//             </Typography>
//           </Box>
//         )}

//         {/* Menu Items */}
//         <List sx={{ p: 2.5, pt: 3, flexGrow: 1 }}>
//           {menuItems.map((item, index) => {
//             const isSelected = item.view
//               ? currentView === item.view
//               : location.pathname === item.path;

//             return (
//               <ListItem
//                 key={item.text}
//                 component={item.path ? Link : "div"}
//                 to={item.path || undefined}
//                 selected={isSelected}
//                 onClick={() => handleItemClick(item)}
//                 sx={{
//                   borderRadius: 3,
//                   mb: 1, // Reduced margin between items
//                   minHeight: 48, // Slightly reduced height
//                   justifyContent: collapsed ? "center" : "flex-start",
//                   cursor: "pointer",
//                   position: "relative",
//                   overflow: "hidden",
//                   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                   "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     left: 0,
//                     top: 0,
//                     bottom: 0,
//                     width: "4px",
//                     background: `linear-gradient(180deg, ${item.color} 0%, ${item.color}80 100%)`,
//                     transform: isSelected ? "scaleY(1)" : "scaleY(0)",
//                     transformOrigin: "center",
//                     transition: "transform 0.3s ease",
//                     borderRadius: "0 4px 4px 0",
//                   },
//                   "&.Mui-selected": {
//                     backgroundColor: `${item.color}10`,
//                     backdropFilter: "blur(10px)",
//                     boxShadow: `0 4px 20px ${item.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.5)`,
//                     "&:hover": {
//                       backgroundColor: `${item.color}15`,
//                       transform: "translateX(6px) scale(1.02)",
//                     },
//                   },
//                   "&:hover": {
//                     backgroundColor: isSelected
//                       ? `${item.color}15`
//                       : "rgba(99, 102, 241, 0.08)",
//                     transform: isSelected
//                       ? "translateX(6px) scale(1.02)"
//                       : "translateX(4px)",
//                     boxShadow: isSelected
//                       ? `0 6px 24px ${item.color}25, inset 0 1px 0 rgba(255, 255, 255, 0.6)`
//                       : "0 4px 16px rgba(99, 102, 241, 0.1)",
//                   },
//                   // Staggered animation delay
//                   animationDelay: `${index * 50}ms`,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: collapsed ? 0 : 3,
//                     justifyContent: "center",
//                     color: isSelected ? item.color : "#64748b",
//                     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                     "& .MuiSvgIcon-root": {
//                       fontSize: "1.4rem", // Slightly smaller icons
//                       filter: isSelected
//                         ? `drop-shadow(0 2px 4px ${item.color}40)`
//                         : "none",
//                       transform: isSelected ? "scale(1.1)" : "scale(1)",
//                     },
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 {!collapsed && (
//                   <ListItemText
//                     primary={item.text}
//                     primaryTypographyProps={{
//                       fontWeight: isSelected ? 700 : 600,
//                       color: isSelected ? "#1e293b" : "#475569",
//                       fontSize: "0.9rem", // Slightly smaller text
//                       letterSpacing: "0.01em",
//                       transition: "all 0.2s ease",
//                     }}
//                   />
//                 )}
//               </ListItem>
//             );
//           })}
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

// export default InstructorSidebar;
import {
  Box,
  Typography,
  styled,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import {
  GridViewRounded as DashboardIcon,
  AutoStoriesRounded as CoursesIcon,
  TrendingUpRounded as StudentsIcon,
  BarChartRounded as AnalyticsIcon,
  TuneRounded as SettingsIcon,
  QuizRounded as QuizIcon,
  AssignmentTurnedInRounded as AssignmentIcon,
  LogoutRounded as LogoutIcon,
  MenuRounded as Menu,
  ChevronLeftRounded as ChevronLeft,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";

import { Drawer } from "@mui/material";
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

const InstructorSidebar = ({
  mobileOpen,
  handleDrawerToggle,
  collapsed,
  setCollapsed,
  isMobile,
  currentView,
  onViewChange,
}) => {
  const { logout } = useAuth();
  const theme = useTheme();
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      view: "dashboard",
      color: "#6366f1",
      bgColor: "rgba(99, 102, 241, 0.1)",
    },
    {
      text: "My Courses",
      icon: <CoursesIcon />,
      view: "my-courses",
      color: "#8b5cf6",
      bgColor: "rgba(139, 92, 246, 0.1)",
    },
    {
      text: "Enrollment Stats",
      icon: <StudentsIcon />,
      view: "enrollment-stats",
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)",
    },
    {
      text: "Assignments",
      icon: <AssignmentIcon />,
      view: "assignments",
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
    },
    {
      text: "Visualization",
      icon: <AnalyticsIcon />,
      view: "visualization",
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)",
    },
    {
      text: "Quizzes",
      icon: <QuizIcon />,
      view: "quizzes",
      color: "#ef4444",
      bgColor: "rgba(239, 68, 68, 0.1)",
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      view: "settings",
      color: "#64748b",
      bgColor: "rgba(100, 116, 139, 0.1)",
    },
  ];

  const handleItemClick = (item) => {
    if (item.path) {
      // For items with external paths, use Link navigation
      return;
    } else if (item.view) {
      // For items with views, use the view change handler
      onViewChange(item.view);
      if (isMobile) handleDrawerToggle();
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
            <Typography
              variant="h6"
              sx={{
                color: "#1e293b",
                fontWeight: 800,
                fontSize: "1.1rem",
                textAlign: "center",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Dashboard
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#64748b",
                fontSize: "0.85rem",
                textAlign: "center",
                mt: 0.5,
                fontWeight: 500,
              }}
            >
              Instructor Panel
            </Typography>
          </Box>
        )}

        {/* Menu Items */}
        <List sx={{ p: 1.5, pt: 2, flexGrow: 1, overflow: "hidden" }}>
          {menuItems.map((item, index) => {
            const isSelected = item.view
              ? currentView === item.view
              : location.pathname === item.path;

            return (
              <ListItem
                key={item.text}
                component={item.path ? Link : "div"}
                to={item.path || undefined}
                selected={isSelected}
                onClick={() => handleItemClick(item)}
                sx={{
                  borderRadius: 3,
                  mb: 0.8, // Reduced spacing between items
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
                    mr: collapsed ? 0 : 2.5, // Slightly reduced margin
                    justifyContent: "center",
                    color: isSelected ? item.color : "#64748b",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "& .MuiSvgIcon-root": {
                      fontSize: "1.4rem", // Slightly smaller icons
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
                      fontSize: "0.9rem", // Slightly smaller text
                      letterSpacing: "0.01em",
                      transition: "all 0.2s ease",
                    }}
                  />
                )}
              </ListItem>
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
          <List sx={{ p: 1.5, pb: 2 }}>
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
                  mr: collapsed ? 0 : 2.5,
                  justifyContent: "center",
                  color: "#ef4444",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "& .MuiSvgIcon-root": {
                    fontSize: "1.4rem",
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
                    fontSize: "0.9rem",
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

export default InstructorSidebar;
