// // import React from "react";
// // import {
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemIcon,
// //   ListItemText,
// //   Divider,
// //   Box,
// //   Typography,
// // } from "@mui/material";
// // import { School, Book, Assessment, Assignment } from "@mui/icons-material";
// // import { styled } from "@mui/system";

// // const drawerWidth = 280;

// // const StyledDrawer = styled(Drawer)(({ theme }) => ({
// //   width: drawerWidth,
// //   flexShrink: 0,
// //   "& .MuiDrawer-paper": {
// //     width: drawerWidth,
// //     boxSizing: "border-box",
// //     background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
// //     borderRight: "1px solid rgba(99, 102, 241, 0.08)",
// //     boxShadow: "4px 0 20px rgba(99, 102, 241, 0.05)",
// //   },
// // }));

// // const ModernListItem = styled(ListItem)(({ theme, selected }) => ({
// //   margin: "6px 16px",
// //   borderRadius: "12px",
// //   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //   position: "relative",
// //   overflow: "hidden",
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     left: 0,
// //     top: 0,
// //     height: "100%",
// //     width: selected ? "4px" : "0px",
// //     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// //     transition: "width 0.3s ease",
// //   },
// //   ...(selected
// //     ? {
// //         background:
// //           "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)",
// //         color: "#6366f1",
// //         boxShadow: "0 4px 12px rgba(99, 102, 241, 0.15)",
// //         transform: "translateX(4px)",
// //         "& .MuiListItemIcon-root": {
// //           color: "#6366f1",
// //         },
// //         "& .MuiListItemText-primary": {
// //           fontWeight: 600,
// //           color: "#6366f1",
// //         },
// //       }
// //     : {
// //         "&:hover": {
// //           background:
// //             "linear-gradient(135deg, rgba(99, 102, 241, 0.04) 0%, rgba(139, 92, 246, 0.03) 100%)",
// //           transform: "translateX(2px)",
// //           boxShadow: "0 2px 8px rgba(99, 102, 241, 0.08)",
// //         },
// //       }),
// // }));

// // const StudentSidebar = ({ activeTab, setActiveTab }) => {
// //   const menuItems = [
// //     { id: "all", label: "All Courses", icon: <School />, color: "#6366f1" },
// //     { id: "enrolled", label: "My Courses", icon: <Book />, color: "#8b5cf6" },
// //     {
// //       id: "progress",
// //       label: "My Progress",
// //       icon: <Assessment />,
// //       color: "#06b6d4",
// //     },
// //     {
// //       id: "assignments",
// //       label: "Assignments",
// //       icon: <Assignment />,
// //       color: "#10b981",
// //     },
// //   ];

// //   return (
// //     <StyledDrawer variant="permanent">
// //       <Box
// //         sx={{
// //           p: 3,
// //           background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// //           color: "white",
// //           textAlign: "center",
// //           position: "relative",
// //           overflow: "hidden",
// //           "&::before": {
// //             content: '""',
// //             position: "absolute",
// //             top: 0,
// //             left: 0,
// //             right: 0,
// //             bottom: 0,
// //             background:
// //               'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
// //             opacity: 0.3,
// //           },
// //         }}
// //       >
// //         <Typography
// //           variant="h5"
// //           sx={{
// //             fontWeight: 700,
// //             position: "relative",
// //             zIndex: 1,
// //             textShadow: "0 2px 4px rgba(0,0,0,0.1)",
// //           }}
// //         >
// //           Learning Hub
// //         </Typography>
// //         <Typography
// //           variant="body2"
// //           sx={{
// //             opacity: 0.9,
// //             mt: 0.5,
// //             position: "relative",
// //             zIndex: 1,
// //           }}
// //         >
// //           Student Portal
// //         </Typography>
// //       </Box>

// //       <Box sx={{ mt: 2 }}>
// //         <List sx={{ px: 0 }}>
// //           {menuItems.map((item) => (
// //             <ModernListItem
// //               key={item.id}
// //               button
// //               selected={activeTab === item.id}
// //               onClick={() => setActiveTab(item.id)}
// //             >
// //               <ListItemIcon
// //                 sx={{
// //                   minWidth: 48,
// //                   "& .MuiSvgIcon-root": {
// //                     fontSize: 22,
// //                     transition: "all 0.3s ease",
// //                   },
// //                 }}
// //               >
// //                 {item.icon}
// //               </ListItemIcon>
// //               <ListItemText
// //                 primary={item.label}
// //                 primaryTypographyProps={{
// //                   fontSize: "0.95rem",
// //                   fontWeight: activeTab === item.id ? 600 : 500,
// //                 }}
// //               />
// //             </ModernListItem>
// //           ))}
// //         </List>
// //       </Box>
// //     </StyledDrawer>
// //   );
// // };

// // export default StudentSidebar;
// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Box,
//   Typography,
// } from "@mui/material";
// import {
//   School,
//   Book,
//   Assessment,
//   Assignment,
//   Dashboard,
// } from "@mui/icons-material";
// import { styled } from "@mui/system";
// import QuizIcon from "@mui/icons-material";
// const drawerWidth = 280;

// const StyledDrawer = styled(Drawer)(({ theme }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   "& .MuiDrawer-paper": {
//     width: drawerWidth,
//     boxSizing: "border-box",
//     background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
//     borderRight: "1px solid rgba(99, 102, 241, 0.08)",
//     boxShadow: "4px 0 20px rgba(99, 102, 241, 0.05)",
//   },
// }));

// const ModernListItem = styled(ListItem)(({ theme, selected }) => ({
//   margin: "6px 16px",
//   borderRadius: "12px",
//   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//   position: "relative",
//   overflow: "hidden",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     left: 0,
//     top: 0,
//     height: "100%",
//     width: selected ? "4px" : "0px",
//     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//     transition: "width 0.3s ease",
//   },
//   ...(selected
//     ? {
//         background:
//           "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)",
//         color: "#6366f1",
//         boxShadow: "0 4px 12px rgba(99, 102, 241, 0.15)",
//         transform: "translateX(4px)",
//         "& .MuiListItemIcon-root": {
//           color: "#6366f1",
//         },
//         "& .MuiListItemText-primary": {
//           fontWeight: 600,
//           color: "#6366f1",
//         },
//       }
//     : {
//         "&:hover": {
//           background:
//             "linear-gradient(135deg, rgba(99, 102, 241, 0.04) 0%, rgba(139, 92, 246, 0.03) 100%)",
//           transform: "translateX(2px)",
//           boxShadow: "0 2px 8px rgba(99, 102, 241, 0.08)",
//         },
//       }),
// }));

// const StudentSidebar = ({ activeTab, setActiveTab }) => {
//   const menuItems = [
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       icon: <Dashboard />,
//       color: "#6366f1",
//     },
//     { id: "all", label: "All Courses", icon: <School />, color: "#6366f1" },
//     { id: "enrolled", label: "My Courses", icon: <Book />, color: "#8b5cf6" },
//     {
//       id: "progress",
//       label: "My Progress",
//       icon: <Assessment />,
//       color: "#06b6d4",
//     },
//     {
//       id: "assignments",
//       label: "Assignments",
//       icon: <Assignment />,
//       color: "#10b981",
//     },
//     {
//       id: "quizzes",
//       label: "Quizzes",
//       icon: <QuizIcon />, // Make sure to
//       color: "#f59e0b",
//     },
//   ];

//   return (
//     <StyledDrawer variant="permanent">
//       <Box
//         sx={{
//           p: 3,
//           background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//           color: "white",
//           textAlign: "center",
//           position: "relative",
//           overflow: "hidden",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background:
//               'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
//             opacity: 0.3,
//           },
//         }}
//       >
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 700,
//             position: "relative",
//             zIndex: 1,
//             textShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           Learning Hub
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{
//             opacity: 0.9,
//             mt: 0.5,
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           Student Portal
//         </Typography>
//       </Box>

//       <Box sx={{ mt: 2 }}>
//         <List sx={{ px: 0 }}>
//           {menuItems.map((item) => (
//             <ModernListItem
//               key={item.id}
//               button
//               selected={activeTab === item.id}
//               onClick={() => setActiveTab(item.id)}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 48,
//                   "& .MuiSvgIcon-root": {
//                     fontSize: 22,
//                     transition: "all 0.3s ease",
//                   },
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText
//                 primary={item.label}
//                 primaryTypographyProps={{
//                   fontSize: "0.95rem",
//                   fontWeight: activeTab === item.id ? 600 : 500,
//                 }}
//               />
//             </ModernListItem>
//           ))}
//         </List>
//       </Box>
//     </StyledDrawer>
//   );
// };

// export default StudentSidebar;
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import {
  School,
  Book,
  Assessment,
  Assignment,
  Dashboard,
  Quiz as QuizIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";

const drawerWidth = 280;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
    borderRight: "1px solid rgba(99, 102, 241, 0.08)",
    boxShadow: "4px 0 20px rgba(99, 102, 241, 0.05)",
  },
}));

const ModernListItem = styled(ListItem)(({ theme, selected }) => ({
  margin: "6px 16px",
  borderRadius: "12px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: selected ? "4px" : "0px",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    transition: "width 0.3s ease",
  },
  ...(selected
    ? {
        background:
          "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)",
        color: "#6366f1",
        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.15)",
        transform: "translateX(4px)",
        "& .MuiListItemIcon-root": {
          color: "#6366f1",
        },
        "& .MuiListItemText-primary": {
          fontWeight: 600,
          color: "#6366f1",
        },
      }
    : {
        "&:hover": {
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.04) 0%, rgba(139, 92, 246, 0.03) 100%)",
          transform: "translateX(2px)",
          boxShadow: "0 2px 8px rgba(99, 102, 241, 0.08)",
        },
      }),
}));

const StudentSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Dashboard />,
      color: "#6366f1",
    },
    { id: "all", label: "All Courses", icon: <School />, color: "#6366f1" },
    { id: "enrolled", label: "My Courses", icon: <Book />, color: "#8b5cf6" },
    {
      id: "progress",
      label: "My Progress",
      icon: <Assessment />,
      color: "#06b6d4",
    },
    {
      id: "assignments",
      label: "Assignments",
      icon: <Assignment />,
      color: "#10b981",
    },
    {
      id: "quizzes",
      label: "Quizzes",
      icon: <QuizIcon />,
      color: "#f59e0b",
    },
  ];

  return (
    <StyledDrawer variant="permanent">
      <Box
        sx={{
          p: 3,
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          color: "white",
          textAlign: "center",
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
              'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
            opacity: 0.3,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            position: "relative",
            zIndex: 1,
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Learning Hub
        </Typography>
        <Typography
          variant="body2"
          sx={{
            opacity: 0.9,
            mt: 0.5,
            position: "relative",
            zIndex: 1,
          }}
        >
          Student Portal
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <List sx={{ px: 0 }}>
          {menuItems.map((item) => (
            <ModernListItem
              key={item.id}
              button
              selected={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 48,
                  "& .MuiSvgIcon-root": {
                    fontSize: 22,
                    transition: "all 0.3s ease",
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "0.95rem",
                  fontWeight: activeTab === item.id ? 600 : 500,
                }}
              />
            </ModernListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};

export default StudentSidebar;
