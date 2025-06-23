// // import React from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import List from "@mui/material/List";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemIcon from "@mui/material/ListItemIcon";
// // import ListItemText from "@mui/material/ListItemText";
// // import Divider from "@mui/material/Divider";
// // import DashboardIcon from "@mui/icons-material/Dashboard";
// // import BookIcon from "@mui/icons-material/Book";
// // import PeopleIcon from "@mui/icons-material/People";
// // import SettingsIcon from "@mui/icons-material/Settings";
// // import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// // const InstructorSidebar = () => {
// //   const location = useLocation();

// //   const menuItems = [
// //     {
// //       text: "Dashboard",
// //       icon: <DashboardIcon />,
// //       path: "/instructor/dashboard",
// //     },
// //     {
// //       text: "Courses",
// //       icon: <BookIcon />,
// //       path: "/instructor/courses",
// //     },
// //     {
// //       text: "Students",
// //       icon: <PeopleIcon />,
// //       path: "/instructor/students",
// //     },
// //   ];

// //   const bottomMenuItems = [
// //     {
// //       text: "Settings",
// //       icon: <SettingsIcon />,
// //       path: "/instructor/settings",
// //     },
// //     {
// //       text: "Logout",
// //       icon: <ExitToAppIcon />,
// //       path: "/logout",
// //     },
// //   ];

// //   return (
// //     <div style={{ width: 250 }}>
// //       <List>
// //         {menuItems.map((item) => (
// //           <ListItem
// //             button
// //             key={item.text}
// //             component={Link}
// //             to={item.path}
// //             selected={location.pathname === item.path}
// //           >
// //             <ListItemIcon>{item.icon}</ListItemIcon>
// //             <ListItemText primary={item.text} />
// //           </ListItem>
// //         ))}
// //       </List>
// //       <Divider />
// //       <List>
// //         {bottomMenuItems.map((item) => (
// //           <ListItem
// //             button
// //             key={item.text}
// //             component={Link}
// //             to={item.path}
// //             selected={location.pathname === item.path}
// //           >
// //             <ListItemIcon>{item.icon}</ListItemIcon>
// //             <ListItemText primary={item.text} />
// //           </ListItem>
// //         ))}
// //       </List>
// //     </div>
// //   );
// // };

// // export default InstructorSidebar;
// import React from "react";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import BookIcon from "@mui/icons-material/Book";
// import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// const InstructorSidebar = ({
//   mobileOpen,
//   handleDrawerToggle,
//   collapsed,
//   isMobile,
//   currentView,
//   onViewChange,
// }) => {
//   const menuItems = [
//     {
//       text: "Dashboard",
//       icon: <DashboardIcon />,
//       view: "dashboard",
//     },
//     {
//       text: "Courses",
//       icon: <BookIcon />,
//       view: "courses",
//     },
//     {
//       text: "Students",
//       icon: <PeopleIcon />,
//       view: "students",
//     },
//   ];

//   const bottomMenuItems = [
//     {
//       text: "Settings",
//       icon: <SettingsIcon />,
//       view: "settings",
//     },
//     {
//       text: "Logout",
//       icon: <ExitToAppIcon />,
//       view: "logout",
//     },
//   ];

//   return (
//     <div style={{ width: collapsed ? 72 : 250 }}>
//       <List>
//         {menuItems.map((item) => (
//           <ListItem
//             button
//             key={item.text}
//             selected={currentView === item.view}
//             onClick={() => onViewChange(item.view)}
//           >
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             {!collapsed && <ListItemText primary={item.text} />}
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {bottomMenuItems.map((item) => (
//           <ListItem
//             button
//             key={item.text}
//             selected={currentView === item.view}
//             onClick={() => onViewChange(item.view)}
//           >
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             {!collapsed && <ListItemText primary={item.text} />}
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// // export default InstructorSidebar;
// import React from "react";
// import {
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Box,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import {
//   Dashboard as DashboardIcon,
//   Book as BookIcon,
//   Add as AddIcon,
//   People as PeopleIcon,
//   BarChart as BarChartIcon,
//   Assignment as AssignmentIcon,
//   Visibility as VisibilityIcon,
//   Quiz as QuizIcon,
//   Settings as SettingsIcon,
//   ExitToApp as ExitToAppIcon,
//   School as SchoolIcon,
// } from "@mui/icons-material";

// const InstructorSidebar = ({
//   mobileOpen,
//   handleDrawerToggle,
//   collapsed,
//   isMobile,
//   currentView,
//   onViewChange,
// }) => {
//   const theme = useTheme();

//   const menuItems = [
//     {
//       text: "Dashboard",
//       icon: <DashboardIcon />,
//       view: "dashboard",
//     },
//     {
//       text: "My Courses",
//       icon: <BookIcon />,
//       view: "my-courses",
//     },
//     {
//       text: "Create Course",
//       icon: <AddIcon />,
//       view: "create-course",
//     },

//     {
//       text: "Assignments",
//       icon: <AssignmentIcon />,
//       view: "AssignmentsList",
//     },
//     {
//       text: "Visualization",
//       icon: <VisibilityIcon />,
//       view: "visualization",
//     },
//     {
//       text: "Quizzes",
//       icon: <QuizIcon />,
//       view: "quizzes",
//     },
//   ];

//   const bottomMenuItems = [
//     {
//       text: "Settings",
//       icon: <SettingsIcon />,
//       view: "settings",
//     },
//     {
//       text: "Logout",
//       icon: <ExitToAppIcon />,
//       view: "logout",
//     },
//   ];

//   const handleItemClick = (view) => {
//     if (view === "logout") {
//       // Handle logout logic here
//       console.log("Logout clicked");
//       // You can add your logout logic here
//       return;
//     }
//     onViewChange(view);
//   };

//   const renderListItem = (item, isSelected) => (
//     <ListItem
//       button
//       key={item.text}
//       selected={isSelected}
//       onClick={() => handleItemClick(item.view)}
//       sx={{
//         minHeight: 48,
//         justifyContent: collapsed ? "center" : "initial",
//         px: 2.5,
//         py: 1,
//         mb: 0.5,
//         mx: 1,
//         borderRadius: 2,
//         transition: "all 0.2s ease-in-out",
//         "&.Mui-selected": {
//           backgroundColor: `${theme.palette.primary.main}15`,
//           color: theme.palette.primary.main,
//           "& .MuiListItemIcon-root": {
//             color: theme.palette.primary.main,
//           },
//           "&:hover": {
//             backgroundColor: `${theme.palette.primary.main}25`,
//           },
//         },
//         "&:hover": {
//           backgroundColor: theme.palette.action.hover,
//           transform: "translateX(4px)",
//         },
//       }}
//     >
//       <ListItemIcon
//         sx={{
//           minWidth: 0,
//           mr: collapsed ? "auto" : 3,
//           justifyContent: "center",
//           color: isSelected ? theme.palette.primary.main : "inherit",
//         }}
//       >
//         {item.icon}
//       </ListItemIcon>
//       {!collapsed && (
//         <ListItemText
//           primary={item.text}
//           sx={{
//             "& .MuiListItemText-primary": {
//               fontSize: "0.95rem",
//               fontWeight: isSelected ? 600 : 400,
//             },
//           }}
//         />
//       )}
//     </ListItem>
//   );

//   return (
//     <Box
//       sx={{
//         width: collapsed ? 72 : 250,
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: theme.palette.background.paper,
//         borderRight: `1px solid ${theme.palette.divider}`,
//       }}
//     >
//       {/* Logo/Brand Section */}
//       {!collapsed && (
//         <Box sx={{ p: 2, textAlign: "center" }}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               mb: 1,
//             }}
//           >
//             <SchoolIcon
//               sx={{ color: theme.palette.primary.main, fontSize: 32, mr: 1 }}
//             />
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: "bold",
//                 color: theme.palette.primary.main,
//               }}
//             >
//               EduPortal
//             </Typography>
//           </Box>
//           <Typography variant="caption" color="textSecondary">
//             Instructor Dashboard
//           </Typography>
//         </Box>
//       )}

//       {/* Main Menu Items */}
//       <Box sx={{ flexGrow: 1, py: 1 }}>
//         <List disablePadding>
//           {menuItems.map((item) =>
//             renderListItem(item, currentView === item.view)
//           )}
//         </List>
//       </Box>

//       <Divider sx={{ mx: 2 }} />

//       {/* Bottom Menu Items */}
//       <Box sx={{ py: 1 }}>
//         <List disablePadding>
//           {bottomMenuItems.map((item) =>
//             renderListItem(item, currentView === item.view)
//           )}
//         </List>
//       </Box>
//     </Box>
//   );
// };

// export default InstructorSidebar;
