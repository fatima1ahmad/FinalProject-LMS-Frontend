// // // // import React, { useState } from "react";
// // // // import {
// // // //   Drawer,
// // // //   List,
// // // //   ListItem,
// // // //   ListItemIcon,
// // // //   ListItemText,
// // // //   Divider,
// // // //   useTheme,
// // // //   useMediaQuery,
// // // //   Avatar,
// // // //   Box,
// // // //   Typography,
// // // //   IconButton,
// // // //   Toolbar,
// // // //   styled,
// // // // } from "@mui/material";
// // // // import {
// // // //   Dashboard as DashboardIcon,
// // // //   People as PeopleIcon,
// // // //   School as SchoolIcon,
// // // //   BarChart as BarChartIcon,
// // // //   Settings as SettingsIcon,
// // // //   ExitToApp as LogoutIcon,
// // // //   Class as ClassIcon,
// // // //   Menu,
// // // //   ChevronLeft,
// // // // } from "@mui/icons-material";
// // // // import { useAuth } from "../../../contexts/AuthContext/AuthContext";

// // // // // Modern colorful icons
// // // // const menuItems = [
// // // //   {
// // // //     text: "Dashboard",
// // // //     icon: <DashboardIcon color="primary" />,
// // // //     tab: "dashboard",
// // // //     color: "primary.main",
// // // //   },
// // // //   {
// // // //     text: "User Management",
// // // //     icon: <PeopleIcon color="secondary" />,
// // // //     tab: "users",
// // // //     color: "secondary.main",
// // // //   },
// // // //   {
// // // //     text: "Course Management",
// // // //     icon: <SchoolIcon sx={{ color: "#4caf50" }} />,
// // // //     tab: "courses",
// // // //     color: "#4caf50",
// // // //   },
// // // //   {
// // // //     text: "Category Management",
// // // //     icon: <ClassIcon sx={{ color: "#ff9800" }} />,
// // // //     tab: "categories",
// // // //     color: "#ff9800",
// // // //   },
// // // //   {
// // // //     text: "Reports",
// // // //     icon: <BarChartIcon sx={{ color: "#9c27b0" }} />,
// // // //     tab: "reports",
// // // //     color: "#9c27b0",
// // // //   },
// // // //   {
// // // //     text: "Settings",
// // // //     icon: <SettingsIcon sx={{ color: "#607d8b" }} />,
// // // //     tab: "settings",
// // // //     color: "#607d8b",
// // // //   },
// // // // ];

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
// // // //     width: drawerWidth,
// // // //     [theme.breakpoints.down("sm")]: {
// // // //       position: "absolute",
// // // //       zIndex: theme.zIndex.drawer + 1,
// // // //     },
// // // //   },
// // // //   "& .MuiDrawer-paperCollapsed": {
// // // //     transition: theme.transitions.create("width", {
// // // //       easing: theme.transitions.easing.sharp,
// // // //       duration: theme.transitions.duration.leavingScreen,
// // // //     }),
// // // //     overflowX: "hidden",
// // // //     width: collapsedWidth,
// // // //     [theme.breakpoints.down("sm")]: {
// // // //       width: 0,
// // // //     },
// // // //   },
// // // // }));

// // // // const AdminSidebar = ({ activeTab, setActiveTab }) => {
// // // //   const theme = useTheme();
// // // //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
// // // //   const { logout, user } = useAuth();
// // // //   const [collapsed, setCollapsed] = useState(false);
// // // //   const [mobileOpen, setMobileOpen] = useState(false);

// // // //   const handleDrawerToggle = () => {
// // // //     if (isMobile) {
// // // //       setMobileOpen(!mobileOpen);
// // // //     } else {
// // // //       setCollapsed(!collapsed);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* Mobile Toggle Button */}
// // // //       {isMobile && (
// // // //         <Toolbar
// // // //           sx={{
// // // //             position: "fixed",
// // // //             top: 0,
// // // //             left: 0,
// // // //             zIndex: theme.zIndex.drawer - 1,
// // // //             bgcolor: "background.paper",
// // // //             borderBottom: "1px solid rgba(145, 185, 255, 0.3)",
// // // //           }}
// // // //         >
// // // //           <IconButton
// // // //             color="primary"
// // // //             aria-label="open drawer"
// // // //             edge="start"
// // // //             onClick={handleDrawerToggle}
// // // //             sx={{ mr: 2 }}
// // // //           >
// // // //             <Menu />
// // // //           </IconButton>
// // // //           <Typography variant="h6" noWrap>
// // // //             Admin Panel
// // // //           </Typography>
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
// // // //               p: 1,
// // // //               borderBottom: "1px solid rgba(145, 185, 255, 0.3)",
// // // //             }}
// // // //           >
// // // //             <IconButton onClick={handleDrawerToggle}>
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
// // // //               {user?.name?.charAt(0) || "A"}
// // // //             </Avatar>
// // // //             <Box>
// // // //               <Typography variant="subtitle1" fontWeight={500} noWrap>
// // // //                 {user?.name || "Admin"}
// // // //               </Typography>
// // // //               <Typography variant="body2" color="text.secondary" noWrap>
// // // //                 Administrator
// // // //               </Typography>
// // // //             </Box>
// // // //           </Box>
// // // //         )}

// // // //         {/* Menu Items */}
// // // //         <List sx={{ p: 1 }}>
// // // //           {menuItems.map((item) => (
// // // //             <ListItem
// // // //               button
// // // //               key={item.text}
// // // //               selected={activeTab === item.tab}
// // // //               onClick={() => {
// // // //                 setActiveTab(item.tab);
// // // //                 if (isMobile) setMobileOpen(false);
// // // //               }}
// // // //               sx={{
// // // //                 borderRadius: 1,
// // // //                 mb: 0.5,
// // // //                 minHeight: 48,
// // // //                 justifyContent: collapsed ? "center" : "flex-start",
// // // //                 "&.Mui-selected": {
// // // //                   backgroundColor: "primary.50",
// // // //                   "&:hover": {
// // // //                     backgroundColor: "primary.50",
// // // //                   },
// // // //                 },
// // // //                 "&:hover": {
// // // //                   backgroundColor: "primary.100",
// // // //                 },
// // // //               }}
// // // //             >
// // // //               <ListItemIcon
// // // //                 sx={{
// // // //                   minWidth: 0,
// // // //                   mr: collapsed ? 0 : 2,
// // // //                   justifyContent: "center",
// // // //                   color: activeTab === item.tab ? item.color : "text.secondary",
// // // //                 }}
// // // //               >
// // // //                 {item.icon}
// // // //               </ListItemIcon>
// // // //               {!collapsed && (
// // // //                 <ListItemText
// // // //                   primary={item.text}
// // // //                   primaryTypographyProps={{
// // // //                     fontWeight: activeTab === item.tab ? 600 : 400,
// // // //                     color:
// // // //                       activeTab === item.tab ? "primary.dark" : "text.primary",
// // // //                     fontSize: "0.9rem",
// // // //                   }}
// // // //                 />
// // // //               )}
// // // //             </ListItem>
// // // //           ))}
// // // //         </List>

// // // //         {/* Logout Button */}
// // // //         <Divider sx={{ borderColor: "rgba(145, 185, 255, 0.3)" }} />
// // // //         <List sx={{ p: 1 }}>
// // // //           <ListItem
// // // //             button
// // // //             onClick={logout}
// // // //             sx={{
// // // //               borderRadius: 1,
// // // //               minHeight: 48,
// // // //               justifyContent: collapsed ? "center" : "flex-start",
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

// // // // export default AdminSidebar;
// // // import React, { useState } from "react";
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
// // //   alpha,
// // //   Tooltip,
// // // } from "@mui/material";
// // // import {
// // //   Dashboard as DashboardIcon,
// // //   People as PeopleIcon,
// // //   School as SchoolIcon,
// // //   BarChart as BarChartIcon,
// // //   Settings as SettingsIcon,
// // //   ExitToApp as LogoutIcon,
// // //   Class as ClassIcon,
// // //   Menu,
// // //   ChevronLeft,
// // //   TrendingUp,
// // //   Groups,
// // //   BookOnline,
// // //   Category,
// // //   Assessment,
// // //   AdminPanelSettings,
// // // } from "@mui/icons-material";
// // // import { useAuth } from "../../../contexts/AuthContext/AuthContext";

// // // // Modern colorful icons with updated design
// // // const menuItems = [
// // //   {
// // //     text: "Dashboard",
// // //     icon: <DashboardIcon />,
// // //     tab: "dashboard",
// // //     color: "#667eea",
// // //     bgColor: "rgba(102, 126, 234, 0.1)",
// // //   },
// // //   {
// // //     text: "User Management",
// // //     icon: <Groups />,
// // //     tab: "users",
// // //     color: "#f093fb",
// // //     bgColor: "rgba(240, 147, 251, 0.1)",
// // //   },
// // //   {
// // //     text: "Course Management",
// // //     icon: <BookOnline />,
// // //     tab: "courses",
// // //     color: "#4facfe",
// // //     bgColor: "rgba(79, 172, 254, 0.1)",
// // //   },
// // //   {
// // //     text: "Category Management",
// // //     icon: <Category />,
// // //     tab: "categories",
// // //     color: "#43e97b",
// // //     bgColor: "rgba(67, 233, 123, 0.1)",
// // //   },
// // //   {
// // //     text: "Reports",
// // //     icon: <TrendingUp />,
// // //     tab: "reports",
// // //     color: "#fa709a",
// // //     bgColor: "rgba(250, 112, 154, 0.1)",
// // //   },
// // //   {
// // //     text: "Settings",
// // //     icon: <SettingsIcon />,
// // //     tab: "settings",
// // //     color: "#ffecd2",
// // //     bgColor: "rgba(255, 236, 210, 0.1)",
// // //   },
// // // ];

// // // const drawerWidth = 280;
// // // const collapsedWidth = 72;

// // // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// // //   width: drawerWidth,
// // //   flexShrink: 0,
// // //   whiteSpace: "nowrap",
// // //   boxSizing: "border-box",
// // //   "& .MuiDrawer-paper": {
// // //     backgroundColor: "#ffffff",
// // //     backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)",
// // //     borderRight: "1px solid rgba(145, 185, 255, 0.15)",
// // //     transition: theme.transitions.create("width", {
// // //       easing: theme.transitions.easing.sharp,
// // //       duration: theme.transitions.duration.enteringScreen,
// // //     }),
// // //     overflowX: "hidden",
// // //     width: drawerWidth,
// // //     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
// // //     [theme.breakpoints.down("sm")]: {
// // //       position: "absolute",
// // //       zIndex: theme.zIndex.drawer + 1,
// // //     },
// // //   },
// // //   "& .MuiDrawer-paperCollapsed": {
// // //     transition: theme.transitions.create("width", {
// // //       easing: theme.transitions.easing.sharp,
// // //       duration: theme.transitions.duration.leavingScreen,
// // //     }),
// // //     overflowX: "hidden",
// // //     width: collapsedWidth,
// // //     [theme.breakpoints.down("sm")]: {
// // //       width: 0,
// // //     },
// // //   },
// // // }));

// // // const AdminSidebar = ({ activeTab, setActiveTab }) => {
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
// // //             borderBottom: "1px solid rgba(145, 185, 255, 0.15)",
// // //             boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
// // //           }}
// // //         >
// // //           <IconButton
// // //             color="primary"
// // //             aria-label="open drawer"
// // //             edge="start"
// // //             onClick={handleDrawerToggle}
// // //             sx={{
// // //               mr: 2,
// // //               backgroundColor: alpha(theme.palette.primary.main, 0.08),
// // //               "&:hover": {
// // //                 backgroundColor: alpha(theme.palette.primary.main, 0.15),
// // //               },
// // //             }}
// // //           >
// // //             <Menu />
// // //           </IconButton>
// // //           <Typography variant="h6" noWrap sx={{ fontWeight: 600 }}>
// // //             Admin Panel
// // //           </Typography>
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
// // //         {/* Header with Collapse Button */}
// // //         {!isMobile && (
// // //           <Box
// // //             sx={{
// // //               display: "flex",
// // //               justifyContent: collapsed ? "center" : "space-between",
// // //               alignItems: "center",
// // //               p: 2,
// // //               borderBottom: "1px solid rgba(145, 185, 255, 0.15)",
// // //               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// // //               color: "white",
// // //               minHeight: 70,
// // //             }}
// // //           >
// // //             {!collapsed && (
// // //               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
// // //                 <AdminPanelSettings sx={{ fontSize: 24 }} />
// // //                 <Typography variant="h6" sx={{ fontWeight: 700 }}>
// // //                   Admin Panel
// // //                 </Typography>
// // //               </Box>
// // //             )}
// // //             <IconButton
// // //               onClick={handleDrawerToggle}
// // //               sx={{
// // //                 color: "white",
// // //                 backgroundColor: "rgba(255, 255, 255, 0.1)",
// // //                 "&:hover": {
// // //                   backgroundColor: "rgba(255, 255, 255, 0.2)",
// // //                 },
// // //               }}
// // //             >
// // //               {collapsed ? <Menu /> : <ChevronLeft />}
// // //             </IconButton>
// // //           </Box>
// // //         )}

// // //         {/* User Profile */}
// // //         {!collapsed && (
// // //           <Box
// // //             sx={{
// // //               p: 3,
// // //               display: "flex",
// // //               alignItems: "center",
// // //               gap: 2,
// // //               borderBottom: "1px solid rgba(145, 185, 255, 0.15)",
// // //               background:
// // //                 "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
// // //             }}
// // //           >
// // //             <Avatar
// // //               sx={{
// // //                 background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// // //                 width: 52,
// // //                 height: 52,
// // //                 fontWeight: 700,
// // //                 fontSize: "1.2rem",
// // //                 boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
// // //               }}
// // //             >
// // //               {user?.name?.charAt(0) || "A"}
// // //             </Avatar>
// // //             <Box sx={{ flex: 1, minWidth: 0 }}>
// // //               <Typography
// // //                 variant="subtitle1"
// // //                 sx={{
// // //                   fontWeight: 600,
// // //                   color: "#1a1a1a",
// // //                   overflow: "hidden",
// // //                   textOverflow: "ellipsis",
// // //                   whiteSpace: "nowrap",
// // //                 }}
// // //               >
// // //                 {user?.name || "Admin User"}
// // //               </Typography>
// // //               <Typography
// // //                 variant="body2"
// // //                 sx={{
// // //                   color: theme.palette.text.secondary,
// // //                   overflow: "hidden",
// // //                   textOverflow: "ellipsis",
// // //                   whiteSpace: "nowrap",
// // //                 }}
// // //               >
// // //                 Administrator
// // //               </Typography>
// // //             </Box>
// // //           </Box>
// // //         )}

// // //         {/* Menu Items */}
// // //         <List sx={{ p: 2, flex: 1 }}>
// // //           {menuItems.map((item, index) => (
// // //             <Tooltip
// // //               key={item.text}
// // //               title={collapsed ? item.text : ""}
// // //               placement="right"
// // //               arrow
// // //             >
// // //               <ListItem
// // //                 button
// // //                 selected={activeTab === item.tab}
// // //                 onClick={() => {
// // //                   setActiveTab(item.tab);
// // //                   if (isMobile) setMobileOpen(false);
// // //                 }}
// // //                 sx={{
// // //                   borderRadius: 2,
// // //                   mb: 1,
// // //                   minHeight: 52,
// // //                   justifyContent: collapsed ? "center" : "flex-start",
// // //                   transition: "all 0.2s ease",
// // //                   "&.Mui-selected": {
// // //                     backgroundColor: item.bgColor,
// // //                     color: item.color,
// // //                     transform: "translateX(4px)",
// // //                     boxShadow: `0 4px 12px ${alpha(item.color, 0.2)}`,
// // //                     "&:hover": {
// // //                       backgroundColor: item.bgColor,
// // //                     },
// // //                     "& .MuiListItemIcon-root": {
// // //                       color: item.color,
// // //                     },
// // //                   },
// // //                   "&:hover": {
// // //                     backgroundColor: alpha(item.color, 0.05),
// // //                     transform: "translateX(2px)",
// // //                   },
// // //                 }}
// // //               >
// // //                 <ListItemIcon
// // //                   sx={{
// // //                     minWidth: 0,
// // //                     mr: collapsed ? 0 : 3,
// // //                     justifyContent: "center",
// // //                     color:
// // //                       activeTab === item.tab
// // //                         ? item.color
// // //                         : theme.palette.text.secondary,
// // //                     transition: "all 0.2s ease",
// // //                   }}
// // //                 >
// // //                   {item.icon}
// // //                 </ListItemIcon>
// // //                 {!collapsed && (
// // //                   <ListItemText
// // //                     primary={item.text}
// // //                     primaryTypographyProps={{
// // //                       fontWeight: activeTab === item.tab ? 600 : 500,
// // //                       color:
// // //                         activeTab === item.tab
// // //                           ? item.color
// // //                           : theme.palette.text.primary,
// // //                       fontSize: "0.95rem",
// // //                     }}
// // //                   />
// // //                 )}
// // //               </ListItem>
// // //             </Tooltip>
// // //           ))}
// // //         </List>

// // //         {/* Logout Button */}
// // //         <Box sx={{ p: 2 }}>
// // //           <Divider
// // //             sx={{
// // //               borderColor: "rgba(145, 185, 255, 0.15)",
// // //               mb: 2,
// // //             }}
// // //           />
// // //           <Tooltip title={collapsed ? "Logout" : ""} placement="right" arrow>
// // //             <ListItem
// // //               button
// // //               onClick={logout}
// // //               sx={{
// // //                 borderRadius: 2,
// // //                 minHeight: 52,
// // //                 justifyContent: collapsed ? "center" : "flex-start",
// // //                 transition: "all 0.2s ease",
// // //                 "&:hover": {
// // //                   backgroundColor: alpha(theme.palette.error.main, 0.08),
// // //                   transform: "translateX(2px)",
// // //                   "& .MuiListItemIcon-root": {
// // //                     color: theme.palette.error.main,
// // //                   },
// // //                   "& .MuiListItemText-primary": {
// // //                     color: theme.palette.error.main,
// // //                   },
// // //                 },
// // //               }}
// // //             >
// // //               <ListItemIcon
// // //                 sx={{
// // //                   minWidth: 0,
// // //                   mr: collapsed ? 0 : 3,
// // //                   justifyContent: "center",
// // //                   color: theme.palette.text.secondary,
// // //                   transition: "all 0.2s ease",
// // //                 }}
// // //               >
// // //                 <LogoutIcon />
// // //               </ListItemIcon>
// // //               {!collapsed && (
// // //                 <ListItemText
// // //                   primary="Logout"
// // //                   primaryTypographyProps={{
// // //                     fontWeight: 500,
// // //                     fontSize: "0.95rem",
// // //                   }}
// // //                 />
// // //               )}
// // //             </ListItem>
// // //           </Tooltip>
// // //         </Box>
// // //       </StyledDrawer>
// // //     </>
// // //   );
// // // };

// // // export default AdminSidebar;
// // import React, { useState } from "react";
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
// //   alpha,
// //   Tooltip,
// // } from "@mui/material";
// // import {
// //   Dashboard as DashboardIcon,
// //   Groups as GroupsIcon,
// //   BookOnline as BookOnlineIcon,
// //   Category as CategoryIcon,
// //   TrendingUp as TrendingUpIcon,
// //   Settings as SettingsIcon,
// //   ExitToApp as LogoutIcon,
// //   Menu,
// //   ChevronLeft,
// //   AdminPanelSettings,
// // } from "@mui/icons-material";
// // import { useAuth } from "../../../contexts/AuthContext/AuthContext";

// // const menuItems = [
// //   {
// //     text: "Dashboard",
// //     icon: <DashboardIcon />,
// //     tab: "dashboard",
// //     color: "#667eea",
// //     bgColor: "rgba(102, 126, 234, 0.1)",
// //   },
// //   {
// //     text: "User Management",
// //     icon: <GroupsIcon />,
// //     tab: "users",
// //     color: "#764ba2",
// //     bgColor: "rgba(118, 75, 162, 0.1)",
// //   },
// //   {
// //     text: "Course Management",
// //     icon: <BookOnlineIcon />,
// //     tab: "courses",
// //     color: "#4facfe",
// //     bgColor: "rgba(79, 172, 254, 0.1)",
// //   },
// //   {
// //     text: "Category Management",
// //     icon: <CategoryIcon />,
// //     tab: "categories",
// //     color: "#43e97b",
// //     bgColor: "rgba(67, 233, 123, 0.1)",
// //   },
// //   {
// //     text: "Reports",
// //     icon: <TrendingUpIcon />,
// //     tab: "reports",
// //     color: "#fa709a",
// //     bgColor: "rgba(250, 112, 154, 0.1)",
// //   },
// //   {
// //     text: "Settings",
// //     icon: <SettingsIcon />,
// //     tab: "settings",
// //     color: "#ffa751",
// //     bgColor: "rgba(255, 167, 81, 0.1)",
// //   },
// // ];

// // const drawerWidth = 240;
// // const collapsedWidth = 72;

// // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// //   width: drawerWidth,
// //   flexShrink: 0,
// //   whiteSpace: "nowrap",
// //   boxSizing: "border-box",
// //   "& .MuiDrawer-paper": {
// //     backgroundColor: "#ffffff",
// //     borderRight: "1px solid rgba(0, 0, 0, 0.08)",
// //     transition: theme.transitions.create("width", {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //     overflowX: "hidden",
// //     width: drawerWidth,
// //     [theme.breakpoints.down("sm")]: {
// //       position: "absolute",
// //       zIndex: theme.zIndex.drawer + 1,
// //     },
// //   },
// //   "& .MuiDrawer-paperCollapsed": {
// //     transition: theme.transitions.create("width", {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     overflowX: "hidden",
// //     width: collapsedWidth,
// //     [theme.breakpoints.down("sm")]: {
// //       width: 0,
// //     },
// //   },
// // }));

// // const AdminSidebar = ({ activeTab, setActiveTab }) => {
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
// //       {isMobile && (
// //         <Toolbar
// //           sx={{
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             zIndex: theme.zIndex.drawer - 1,
// //             bgcolor: "background.paper",
// //             borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
// //           }}
// //         >
// //           <IconButton
// //             color="primary"
// //             aria-label="open drawer"
// //             edge="start"
// //             onClick={handleDrawerToggle}
// //             sx={{ mr: 2 }}
// //           >
// //             <Menu />
// //           </IconButton>
// //           <Typography variant="h6" noWrap>
// //             Admin Panel
// //           </Typography>
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
// //         {!isMobile && (
// //           <Box
// //             sx={{
// //               display: "flex",
// //               justifyContent: "flex-end",
// //               p: 1,
// //               borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
// //             }}
// //           >
// //             <IconButton onClick={handleDrawerToggle}>
// //               {collapsed ? <Menu /> : <ChevronLeft />}
// //             </IconButton>
// //           </Box>
// //         )}

// //         {!collapsed && (
// //           <Box
// //             sx={{
// //               p: 2,
// //               display: "flex",
// //               alignItems: "center",
// //               gap: 2,
// //               borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
// //             }}
// //           >
// //             <Avatar
// //               sx={{
// //                 background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //                 color: "white",
// //                 width: 48,
// //                 height: 48,
// //               }}
// //             >
// //               {user?.name?.charAt(0) || "A"}
// //             </Avatar>
// //             <Box>
// //               <Typography variant="subtitle1" fontWeight={500} noWrap>
// //                 {user?.name || "Admin"}
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary" noWrap>
// //                 Administrator
// //               </Typography>
// //             </Box>
// //           </Box>
// //         )}

// //         <List sx={{ p: 1 }}>
// //           {menuItems.map((item) => (
// //             <Tooltip
// //               key={item.text}
// //               title={collapsed ? item.text : ""}
// //               placement="right"
// //             >
// //               <ListItem
// //                 button
// //                 key={item.text}
// //                 selected={activeTab === item.tab}
// //                 onClick={() => {
// //                   setActiveTab(item.tab);
// //                   if (isMobile) setMobileOpen(false);
// //                 }}
// //                 sx={{
// //                   borderRadius: 1,
// //                   mb: 0.5,
// //                   minHeight: 48,
// //                   justifyContent: collapsed ? "center" : "flex-start",
// //                   "&.Mui-selected": {
// //                     backgroundColor: item.bgColor,
// //                     "&:hover": {
// //                       backgroundColor: item.bgColor,
// //                     },
// //                   },
// //                   "&:hover": {
// //                     backgroundColor: alpha(theme.palette.primary.main, 0.08),
// //                   },
// //                 }}
// //               >
// //                 <ListItemIcon
// //                   sx={{
// //                     minWidth: 0,
// //                     mr: collapsed ? 0 : 2,
// //                     justifyContent: "center",
// //                     color:
// //                       activeTab === item.tab ? item.color : "text.secondary",
// //                   }}
// //                 >
// //                   {item.icon}
// //                 </ListItemIcon>
// //                 {!collapsed && (
// //                   <ListItemText
// //                     primary={item.text}
// //                     primaryTypographyProps={{
// //                       fontWeight: activeTab === item.tab ? 600 : 400,
// //                       color:
// //                         activeTab === item.tab ? item.color : "text.primary",
// //                     }}
// //                   />
// //                 )}
// //               </ListItem>
// //             </Tooltip>
// //           ))}
// //         </List>

// //         <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.08)" }} />
// //         <List sx={{ p: 1 }}>
// //           <Tooltip title={collapsed ? "Logout" : ""} placement="right">
// //             <ListItem
// //               button
// //               onClick={logout}
// //               sx={{
// //                 borderRadius: 1,
// //                 minHeight: 48,
// //                 justifyContent: collapsed ? "center" : "flex-start",
// //                 "&:hover": {
// //                   backgroundColor: alpha(theme.palette.error.main, 0.08),
// //                 },
// //               }}
// //             >
// //               <ListItemIcon
// //                 sx={{
// //                   minWidth: 0,
// //                   mr: collapsed ? 0 : 2,
// //                   justifyContent: "center",
// //                   color: "error.main",
// //                 }}
// //               >
// //                 <LogoutIcon />
// //               </ListItemIcon>
// //               {!collapsed && (
// //                 <ListItemText
// //                   primary="Logout"
// //                   primaryTypographyProps={{
// //                     color: "error.main",
// //                     fontWeight: 500,
// //                   }}
// //                 />
// //               )}
// //             </ListItem>
// //           </Tooltip>
// //         </List>
// //       </StyledDrawer>
// //     </>
// //   );
// // };

// // export default AdminSidebar;

// import React, { useState } from "react";
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
//   alpha,
//   Tooltip,
// } from "@mui/material";
// import {
//   Dashboard as DashboardIcon,
//   Groups as GroupsIcon,
//   BookOnline as BookOnlineIcon,
//   Category as CategoryIcon,
//   TrendingUp as TrendingUpIcon,
//   Settings as SettingsIcon,
//   ExitToApp as LogoutIcon,
//   Menu,
//   ChevronLeft,
//   AdminPanelSettings,
// } from "@mui/icons-material";
// import { useAuth } from "../../../contexts/AuthContext/AuthContext";

// const menuItems = [
//   {
//     text: "Dashboard",
//     icon: <DashboardIcon />,
//     tab: "dashboard",
//     color: "#6366f1",
//     bgColor: "rgba(99, 102, 241, 0.1)",
//   },
//   {
//     text: "User Management",
//     icon: <GroupsIcon />,
//     tab: "users",
//     color: "#8b5cf6",
//     bgColor: "rgba(139, 92, 246, 0.1)",
//   },
//   {
//     text: "Course Management",
//     icon: <BookOnlineIcon />,
//     tab: "courses",
//     color: "#10b981",
//     bgColor: "rgba(16, 185, 129, 0.1)",
//   },
//   {
//     text: "Category Management",
//     icon: <CategoryIcon />,
//     tab: "categories",
//     color: "#f59e0b",
//     bgColor: "rgba(245, 158, 11, 0.1)",
//   },
//   {
//     text: "Reports",
//     icon: <TrendingUpIcon />,
//     tab: "reports",
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

// const AdminSidebar = ({ activeTab, setActiveTab }) => {
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
//       {isMobile && (
//         <Toolbar
//           sx={{
//             position: "fixed",
//             top: 0,
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
//           <Typography
//             variant="h6"
//             noWrap
//             sx={{
//               ml: 2,
//               background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               fontWeight: 700,
//             }}
//           >
//             Admin Panel
//           </Typography>
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
//               onClick={handleDrawerToggle}
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

//         {/* Admin Profile Section */}
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
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 mb: 1,
//               }}
//             >
//               <Avatar
//                 sx={{
//                   background:
//                     "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//                   color: "white",
//                   width: 48,
//                   height: 48,
//                   boxShadow: "0 4px 16px rgba(99, 102, 241, 0.3)",
//                 }}
//               >
//                 <AdminPanelSettings />
//               </Avatar>
//               <Box>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{
//                     fontWeight: 700,
//                     color: "#1e293b",
//                     fontSize: "1rem",
//                   }}
//                   noWrap
//                 >
//                   {user?.name || "Admin"}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "#64748b",
//                     fontSize: "0.85rem",
//                     fontWeight: 500,
//                   }}
//                   noWrap
//                 >
//                   System Administrator
//                 </Typography>
//               </Box>
//             </Box>
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
//                 mt: 1,
//               }}
//             >
//               Control Panel
//             </Typography>
//           </Box>
//         )}

//         {/* Menu Items */}
//         <List sx={{ p: 2.5, pt: 3, flexGrow: 1 }}>
//           {menuItems.map((item, index) => {
//             const isSelected = activeTab === item.tab;

//             return (
//               <Tooltip
//                 key={item.text}
//                 title={collapsed ? item.text : ""}
//                 placement="right"
//               >
//                 <ListItem
//                   button
//                   selected={isSelected}
//                   onClick={() => {
//                     setActiveTab(item.tab);
//                     if (isMobile) setMobileOpen(false);
//                   }}
//                   sx={{
//                     borderRadius: 3,
//                     mb: 1.5,
//                     minHeight: 54,
//                     justifyContent: collapsed ? "center" : "flex-start",
//                     cursor: "pointer",
//                     position: "relative",
//                     overflow: "hidden",
//                     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                     "&::before": {
//                       content: '""',
//                       position: "absolute",
//                       left: 0,
//                       top: 0,
//                       bottom: 0,
//                       width: "4px",
//                       background: `linear-gradient(180deg, ${item.color} 0%, ${item.color}80 100%)`,
//                       transform: isSelected ? "scaleY(1)" : "scaleY(0)",
//                       transformOrigin: "center",
//                       transition: "transform 0.3s ease",
//                       borderRadius: "0 4px 4px 0",
//                     },
//                     "&.Mui-selected": {
//                       backgroundColor: `${item.color}10`,
//                       backdropFilter: "blur(10px)",
//                       boxShadow: `0 4px 20px ${item.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.5)`,
//                       "&:hover": {
//                         backgroundColor: `${item.color}15`,
//                         transform: "translateX(6px) scale(1.02)",
//                       },
//                     },
//                     "&:hover": {
//                       backgroundColor: isSelected
//                         ? `${item.color}15`
//                         : "rgba(99, 102, 241, 0.08)",
//                       transform: isSelected
//                         ? "translateX(6px) scale(1.02)"
//                         : "translateX(4px)",
//                       boxShadow: isSelected
//                         ? `0 6px 24px ${item.color}25, inset 0 1px 0 rgba(255, 255, 255, 0.6)`
//                         : "0 4px 16px rgba(99, 102, 241, 0.1)",
//                     },
//                     // Staggered animation delay
//                     animationDelay: `${index * 50}ms`,
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: collapsed ? 0 : 3,
//                       justifyContent: "center",
//                       color: isSelected ? item.color : "#64748b",
//                       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                       "& .MuiSvgIcon-root": {
//                         fontSize: "1.5rem",
//                         filter: isSelected
//                           ? `drop-shadow(0 2px 4px ${item.color}40)`
//                           : "none",
//                         transform: isSelected ? "scale(1.1)" : "scale(1)",
//                       },
//                     }}
//                   >
//                     {item.icon}
//                   </ListItemIcon>
//                   {!collapsed && (
//                     <ListItemText
//                       primary={item.text}
//                       primaryTypographyProps={{
//                         fontWeight: isSelected ? 700 : 600,
//                         color: isSelected ? "#1e293b" : "#475569",
//                         fontSize: "0.95rem",
//                         letterSpacing: "0.01em",
//                         transition: "all 0.2s ease",
//                       }}
//                     />
//                   )}
//                 </ListItem>
//               </Tooltip>
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
//             <Tooltip title={collapsed ? "Logout" : ""} placement="right">
//               <ListItem
//                 button
//                 onClick={logout}
//                 sx={{
//                   borderRadius: 3,
//                   minHeight: 54,
//                   justifyContent: collapsed ? "center" : "flex-start",
//                   cursor: "pointer",
//                   position: "relative",
//                   overflow: "hidden",
//                   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                   border: "1px solid rgba(239, 68, 68, 0.2)",
//                   "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     background:
//                       "linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.1) 100%)",
//                     opacity: 0,
//                     transition: "opacity 0.3s ease",
//                   },
//                   "&:hover": {
//                     backgroundColor: "rgba(239, 68, 68, 0.08)",
//                     transform: "translateX(4px) scale(1.02)",
//                     boxShadow:
//                       "0 6px 20px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
//                     borderColor: "rgba(239, 68, 68, 0.3)",
//                     "&::before": {
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: collapsed ? 0 : 3,
//                     justifyContent: "center",
//                     color: "#ef4444",
//                     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                     "& .MuiSvgIcon-root": {
//                       fontSize: "1.5rem",
//                       filter: "drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3))",
//                     },
//                   }}
//                 >
//                   <LogoutIcon />
//                 </ListItemIcon>
//                 {!collapsed && (
//                   <ListItemText
//                     primary="Logout"
//                     primaryTypographyProps={{
//                       color: "#ef4444",
//                       fontWeight: 700,
//                       fontSize: "0.95rem",
//                       letterSpacing: "0.01em",
//                     }}
//                   />
//                 )}
//               </ListItem>
//             </Tooltip>
//           </List>
//         </Box>
//       </StyledDrawer>
//     </>
//   );
// };

// export default AdminSidebar;
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
