// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Avatar,
//   Box,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { deepOrange } from "@mui/material/colors";

// const InstructorNavbar = ({ handleDrawerToggle }) => {
//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         width: { sm: `calc(100% - 250px)` },
//         ml: { sm: `250px` },
//       }}
//     >
//       <Toolbar>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//           sx={{ mr: 2, display: { sm: "none" } }}
//         >
//           <MenuIcon />
//         </IconButton>

//         <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
//           Instructor Dashboard
//         </Typography>

//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <IconButton color="inherit">
//             <NotificationsIcon />
//           </IconButton>

//           <IconButton sx={{ p: 0, ml: 2 }}>
//             <Avatar sx={{ bgcolor: deepOrange[500] }}>I</Avatar>
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default InstructorNavbar;
