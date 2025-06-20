// // src/layouts/InstructorLayout.jsx
// import React from "react";
// import { Outlet } from "react-router-dom";
// import { Box } from "@mui/material";
// import InstructorNavbar from "../components/instructor/InstructorNavbar ";
// import InstructorSidebar from "../components/instructor/InstructorSidebar";

// const InstructorLayout = () => {
//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh" }}>
//       <InstructorSidebar />
//       <Box sx={{ flexGrow: 1 }}>
//         <InstructorNavbar />
//         <Box component="main" sx={{ p: 3 }}>
//           <Outlet />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default InstructorLayout;
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import InstructorNavbar from "../components/instructor/InstructorNavbar ";
import InstructorSidebar from "../components/instructor/InstructorSidebar";

const InstructorLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <InstructorNavbar handleDrawerToggle={handleDrawerToggle} />
      <InstructorSidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 250px)` },
        }}
      >
        <Toolbar /> {/* This creates space under the app bar */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default InstructorLayout;
