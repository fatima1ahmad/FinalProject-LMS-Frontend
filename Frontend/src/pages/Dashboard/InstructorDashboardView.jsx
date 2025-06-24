// // // // // InstructorDashboardView.js
// // // // import React, { useState, useEffect } from "react";
// // // // import {
// // // //   Box,
// // // //   Typography,
// // // //   Paper,
// // // //   Grid,
// // // //   Divider,
// // // //   Button,
// // // //   CircularProgress,
// // // //   TextField,
// // // //   InputAdornment,
// // // //   Card,
// // // //   CardContent,
// // // //   CardActions,
// // // //   IconButton,
// // // //   Tooltip,
// // // //   Chip,
// // // // } from "@mui/material";
// // // // import {
// // // //   Dashboard as DashboardIcon,
// // // //   School as CoursesIcon,
// // // //   People as StudentsIcon,
// // // //   Settings as SettingsIcon,
// // // //   School as SchoolIcon,
// // // //   Add as AddIcon,
// // // //   Search as SearchIcon,
// // // //   Edit as EditIcon,
// // // //   Delete as DeleteIcon,
// // // //   Visibility as VisibilityIcon,
// // // //   Category as CategoryIcon,
// // // //   MenuBook as MenuBookIcon,
// // // //   Class as ClassIcon,
// // // //   Star as StarIcon,
// // // // } from "@mui/icons-material";
// // // // import { useTheme } from "@mui/material/styles";
// // // // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // // // import InstructorService from "../../services/instructorService";

// // // // const InstructorDashboardView = () => {
// // // //   const theme = useTheme();
// // // //   const { user } = useAuth();
// // // //   const [courses, setCourses] = useState([]);
// // // //   const [loadingCourses, setLoadingCourses] = useState(true);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [stats, setStats] = useState({
// // // //     totalCourses: 0,
// // // //     approvedCourses: 0,
// // // //     pendingCourses: 0,
// // // //     rejectedCourses: 0,
// // // //   });

// // // //   useEffect(() => {
// // // //     const fetchCourses = async () => {
// // // //       try {
// // // //         setLoadingCourses(true);
// // // //         const data = await InstructorService.getCourses();
// // // //         setCourses(data);

// // // //         const approved = data.filter((c) => c.status === "approved").length;
// // // //         const pending = data.filter((c) => c.status === "pending").length;
// // // //         const rejected = data.filter((c) => c.status === "rejected").length;

// // // //         setStats({
// // // //           totalCourses: data.length,
// // // //           approvedCourses: approved,
// // // //           pendingCourses: pending,
// // // //           rejectedCourses: rejected,
// // // //         });
// // // //       } catch (error) {
// // // //         console.error("Failed to fetch courses:", error);
// // // //       } finally {
// // // //         setLoadingCourses(false);
// // // //       }
// // // //     };

// // // //     fetchCourses();
// // // //   }, []);

// // // //   const filteredCourses = courses.filter(
// // // //     (course) =>
// // // //       course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //       course.description.toLowerCase().includes(searchTerm.toLowerCase())
// // // //   );

// // // //   // ... rest of your dashboard component code
// // // //   // (Keep all the JSX from your original dashboard)

// // // //   return (
// // // //     <>
// // // //       {/* Main content header */}
// // // //       <Box mb={4}>
// // // //         <Box display="flex" alignItems="center" mb={1}>
// // // //           <Box>
// // // //             <Typography variant="h4" fontWeight="bold" gutterBottom>
// // // //               Welcome back, {user?.displayName || "Instructor"}!
// // // //             </Typography>
// // // //             <Box display="flex" alignItems="center">
// // // //               <StarIcon color="warning" fontSize="small" sx={{ mr: 0.5 }} />
// // // //               <Typography variant="body1" color="textSecondary">
// // // //                 Instructor since{" "}
// // // //                 {new Date(user?.metadata?.creationTime).getFullYear() || "2024"}
// // // //               </Typography>
// // // //             </Box>
// // // //           </Box>
// // // //         </Box>
// // // //         <Typography variant="body1" color="textSecondary">
// // // //           Here's what's happening with your courses today.
// // // //         </Typography>
// // // //       </Box>

// // // //       {/* Stats cards and other content */}
// // // //       {/* ... */}
// // // //     </>
// // // //   );
// // // // };

// // // // export default InstructorDashboardView;
// // // // InstructorDashboardView.js
// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   Box,
// // //   Typography,
// // //   Paper,
// // //   Grid,
// // //   Divider,
// // //   Button,
// // //   CircularProgress,
// // //   TextField,
// // //   InputAdornment,
// // //   Card,
// // //   CardContent,
// // //   CardActions,
// // //   IconButton,
// // //   Tooltip,
// // //   Chip,
// // // } from "@mui/material";
// // // import {
// // //   Dashboard as DashboardIcon,
// // //   School as CoursesIcon,
// // //   People as StudentsIcon,
// // //   Settings as SettingsIcon,
// // //   School as SchoolIcon,
// // //   Add as AddIcon,
// // //   Search as SearchIcon,
// // //   Edit as EditIcon,
// // //   Delete as DeleteIcon,
// // //   Visibility as VisibilityIcon,
// // //   Category as CategoryIcon,
// // //   MenuBook as MenuBookIcon,
// // //   Class as ClassIcon,
// // //   Star as StarIcon,
// // // } from "@mui/icons-material";
// // // import { useTheme } from "@mui/material/styles";
// // // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // // import InstructorService from "../../services/instructorService";

// // // const InstructorDashboardView = () => {
// // //   const theme = useTheme();
// // //   const { user } = useAuth();
// // //   const [courses, setCourses] = useState([]);
// // //   const [loadingCourses, setLoadingCourses] = useState(true);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [stats, setStats] = useState({
// // //     totalCourses: 0,
// // //     approvedCourses: 0,
// // //     pendingCourses: 0,
// // //     rejectedCourses: 0,
// // //   });

// // //   useEffect(() => {
// // //     const fetchCourses = async () => {
// // //       try {
// // //         setLoadingCourses(true);
// // //         const data = await InstructorService.getCourses();
// // //         setCourses(data);

// // //         const approved = data.filter((c) => c.status === "approved").length;
// // //         const pending = data.filter((c) => c.status === "pending").length;
// // //         const rejected = data.filter((c) => c.status === "rejected").length;

// // //         setStats({
// // //           totalCourses: data.length,
// // //           approvedCourses: approved,
// // //           pendingCourses: pending,
// // //           rejectedCourses: rejected,
// // //         });
// // //       } catch (error) {
// // //         console.error("Failed to fetch courses:", error);
// // //       } finally {
// // //         setLoadingCourses(false);
// // //       }
// // //     };

// // //     fetchCourses();
// // //   }, []);

// // //   const filteredCourses = courses.filter(
// // //     (course) =>
// // //       course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //       course.description.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   // ... rest of your dashboard component code
// // //   // (Keep all the JSX from your original dashboard)

// // //   return (
// // //     <>
// // //       {/* Main content header */}
// // //       <Box mb={4}>
// // //         <Box display="flex" alignItems="center" mb={1}>
// // //           <Box>
// // //             <Typography variant="h4" fontWeight="bold" gutterBottom>
// // //               Welcome back, {user?.displayName || "Instructor"}!
// // //             </Typography>
// // //             <Box display="flex" alignItems="center">
// // //               <StarIcon color="warning" fontSize="small" sx={{ mr: 0.5 }} />
// // //               <Typography variant="body1" color="textSecondary">
// // //                 Instructor since{" "}
// // //                 {new Date(user?.metadata?.creationTime).getFullYear() || "2024"}
// // //               </Typography>
// // //             </Box>
// // //           </Box>
// // //         </Box>
// // //         <Typography variant="body1" color="textSecondary">
// // //           Here's what's happening with your courses today.
// // //         </Typography>
// // //       </Box>

// // //       {/* Stats cards and other content */}
// // //       {/* ... */}
// // //     </>
// // //   );
// // // };

// // // export default InstructorDashboardView;
// // import React, { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Typography,
// //   Paper,
// //   Grid,
// //   styled,
// //   Divider,
// //   Button,
// //   CircularProgress,
// //   Dialog,
// //   IconButton,
// //   Tooltip,
// //   TextField,
// //   InputAdornment,
// //   Avatar,
// //   Badge,
// //   Chip,
// //   Accordion,
// //   AccordionSummary,
// //   AccordionDetails,
// //   Card,
// //   CardContent,
// //   CardActions,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions, //
// // } from "@mui/material";
// // import {
// //   Dashboard as DashboardIcon,
// //   School as CoursesIcon,
// //   People as StudentsIcon,
// //   BarChart as AnalyticsIcon,
// //   Message as MessagesIcon,
// //   Settings as SettingsIcon,
// //   School as SchoolIcon,
// //   Add as AddIcon,
// //   Search as SearchIcon,
// //   Edit as EditIcon,
// //   Delete as DeleteIcon,
// //   Visibility as VisibilityIcon,
// //   Schedule as ScheduleIcon,
// //   Assignment as AssignmentIcon,
// //   CheckCircle as CheckCircleIcon,
// //   ExpandMore as ExpandMoreIcon,
// //   VideoLibrary as VideoLibraryIcon,
// //   Article as ArticleIcon,
// //   Star as StarIcon,
// //   Bookmark as BookmarkIcon,
// //   MoreVert as MoreVertIcon,
// //   Category as CategoryIcon,
// //   MenuBook as MenuBookIcon,
// //   Class as ClassIcon,
// // } from "@mui/icons-material";
// // import PeopleIcon from "@mui/icons-material/People";

// // // import { DialogTitle } from "@mui/material";
// // // import { DialogContent } from "@mui/material";
// // import { useTheme } from "@mui/material/styles";
// // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // import InstructorService from "../../services/instructorService";
// // import { orange } from "@mui/material/colors";
// // import StatusChip from "../../pages/instructor/StatusChip";
// // import BarChartIcon from "@mui/icons-material/BarChart";

// // // Styled components
// // const StatsCard = styled(Paper)(({ theme }) => ({
// //   padding: theme.spacing(3),
// //   borderRadius: theme.shape.borderRadius * 2,
// //   boxShadow: theme.shadows[2],
// //   transition: "all 0.3s ease",
// //   background:
// //     theme.palette.mode === "light"
// //       ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`
// //       : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[900]} 100%)`,
// //   border: `1px solid ${theme.palette.divider}`,
// //   position: "relative",
// //   overflow: "hidden",
// //   "&:before": {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     width: "4px",
// //     height: "100%",
// //     background: theme.palette.primary.main,
// //   },
// //   "&:hover": {
// //     transform: "translateY(-5px)",
// //     boxShadow: theme.shadows[8],
// //   },
// // }));

// // const CourseCard = styled(Paper)(({ theme }) => ({
// //   padding: theme.spacing(2.5),
// //   marginBottom: theme.spacing(2),
// //   borderRadius: theme.shape.borderRadius * 2,
// //   boxShadow: theme.shadows[1],
// //   transition: "all 0.3s ease",
// //   border: `1px solid ${theme.palette.divider}`,
// //   position: "relative",
// //   overflow: "hidden",
// //   "&:hover": {
// //     transform: "translateY(-5px)",
// //     boxShadow: theme.shadows[6],
// //     borderColor: theme.palette.primary.main,
// //     "& .course-actions": {
// //       opacity: 1,
// //       transform: "translateY(0)",
// //     },
// //   },
// //   "& .course-actions": {
// //     position: "absolute",
// //     top: theme.spacing(1),
// //     right: theme.spacing(1),
// //     opacity: 0,
// //     transform: "translateY(-10px)",
// //     transition: "all 0.3s ease",
// //     display: "flex",
// //     gap: theme.spacing(0.5),
// //     backgroundColor: theme.palette.background.paper,
// //     borderRadius: theme.shape.borderRadius,
// //     padding: theme.spacing(0.5),
// //     boxShadow: theme.shadows[2],
// //   },
// // }));

// // const SearchInput = styled(TextField)(({ theme }) => ({
// //   "& .MuiOutlinedInput-root": {
// //     borderRadius: theme.shape.borderRadius * 2,
// //     backgroundColor: theme.palette.background.paper,
// //     "& fieldset": {
// //       borderColor: theme.palette.divider,
// //     },
// //     "&:hover fieldset": {
// //       borderColor: theme.palette.primary.light,
// //     },
// //     "&.Mui-focused fieldset": {
// //       borderColor: theme.palette.primary.main,
// //       borderWidth: 1,
// //     },
// //   },
// // }));

// // const InstructorDashboardView = ({ onCreateCourse, onEditCourse }) => {
// //   const theme = useTheme();
// //   const { user } = useAuth();
// //   const [courses, setCourses] = useState([]);
// //   const [loadingCourses, setLoadingCourses] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [stats, setStats] = useState({
// //     totalCourses: 0,
// //     approvedCourses: 0,
// //     pendingCourses: 0,
// //     rejectedCourses: 0,
// //   });
// //   const [selectedCourse, setSelectedCourse] = useState(null);
// //   const [modules, setModules] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [dialogOpen, setDialogOpen] = useState(false);
// //   const [loadingDetails, setLoadingDetails] = useState(false);
// //   const [assignmentDialogOpen, setAssignmentDialogOpen] = useState(false);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         setLoadingCourses(true);
// //         const data = await InstructorService.getCourses();
// //         setCourses(data);

// //         const approved = data.filter((c) => c.status === "approved").length;
// //         const pending = data.filter((c) => c.status === "pending").length;
// //         const rejected = data.filter((c) => c.status === "rejected").length;

// //         setStats({
// //           totalCourses: data.length,
// //           approvedCourses: approved,
// //           pendingCourses: pending,
// //           rejectedCourses: rejected,
// //         });
// //       } catch (error) {
// //         console.error("Failed to fetch courses:", error);
// //       } finally {
// //         setLoadingCourses(false);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   const filteredCourses = courses.filter(
// //     (course) =>
// //       course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       course.description.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const handleViewCourse = (course) => {
// //     setSelectedCourse(course);
// //     setDialogOpen(true);
// //     fetchCourseDetails(course.id);
// //   };

// //   const fetchCourseDetails = async (courseId) => {
// //     try {
// //       setLoadingDetails(true);
// //       const modules = await InstructorService.getCourseModules(courseId);
// //       setModules(modules);
// //     } catch (error) {
// //       console.error("Failed to fetch course details:", error);
// //     } finally {
// //       setLoadingDetails(false);
// //     }
// //   };

// //   const handleDeleteCourse = async (courseId) => {
// //     if (window.confirm("Are you sure you want to delete this course?")) {
// //       try {
// //         await InstructorService.deleteCourse(courseId);
// //         setCourses(courses.filter((course) => course.id !== courseId));
// //         setStats({
// //           ...stats,
// //           totalCourses: stats.totalCourses - 1,
// //         });
// //       } catch (error) {
// //         console.error("Failed to delete course:", error);
// //       }
// //     }
// //   };

// //   const handleCloseDialog = () => {
// //     setDialogOpen(false);
// //     setSelectedCourse(null);
// //     setModules([]);
// //   };

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "published":
// //         return "success";
// //       case "draft":
// //         return "warning";
// //       case "pending":
// //         return "info";
// //       default:
// //         return "default";
// //     }
// //   };

// //   const getStatusIcon = (status) => {
// //     switch (status) {
// //       case "published":
// //         return <CheckCircleIcon fontSize="small" />;
// //       case "draft":
// //         return <EditIcon fontSize="small" />;
// //       case "pending":
// //         return <ScheduleIcon fontSize="small" />;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Main content header */}
// //       <Box mb={4}>
// //         <Box display="flex" alignItems="center" mb={1}>
// //           <Box>
// //             <Typography variant="h4" fontWeight="bold" gutterBottom>
// //               Welcome back, {user?.displayName || "Instructor"}!
// //             </Typography>
// //             <Box display="flex" alignItems="center">
// //               <StarIcon color="warning" fontSize="small" sx={{ mr: 0.5 }} />
// //               <Typography variant="body1" color="textSecondary">
// //                 Instructor since{" "}
// //                 {new Date(user?.metadata?.creationTime).getFullYear() || "2024"}
// //               </Typography>
// //             </Box>
// //           </Box>
// //         </Box>
// //         <Typography variant="body1" color="textSecondary">
// //           Here's what's happening with your courses today.
// //         </Typography>
// //       </Box>

// //       {/* Stats cards */}
// //       <Grid container spacing={3} mb={4}>
// //         {[
// //           {
// //             title: "Total Courses",
// //             value: stats.totalCourses,
// //             icon: <CoursesIcon fontSize="medium" />,
// //             color: theme.palette.primary.main,
// //             trend: "up",
// //           },
// //           {
// //             title: "Approved Courses",
// //             value: stats.approvedCourses,
// //             icon: <SchoolIcon fontSize="medium" />,
// //             color: theme.palette.success.main,
// //             trend: "up",
// //           },
// //           {
// //             title: "Pending Approval",
// //             value: stats.pendingCourses,
// //             icon: <ScheduleIcon fontSize="medium" />,
// //             color: theme.palette.warning.main,
// //             trend: "neutral",
// //           },
// //           {
// //             title: "Rejected Courses",
// //             value: stats.rejectedCourses,
// //             icon: <DeleteIcon fontSize="medium" />,
// //             color: theme.palette.error.main,
// //             trend: "down",
// //           },
// //         ].map((stat) => (
// //           <Grid item xs={12} sm={6} md={3} key={stat.title}>
// //             <StatsCard>
// //               <Box
// //                 display="flex"
// //                 justifyContent="space-between"
// //                 alignItems="center"
// //               >
// //                 <Box>
// //                   <Typography
// //                     variant="body2"
// //                     color="textSecondary"
// //                     gutterBottom
// //                     sx={{
// //                       textTransform: "uppercase",
// //                       fontWeight: 500,
// //                       letterSpacing: 0.5,
// //                     }}
// //                   >
// //                     {stat.title}
// //                   </Typography>
// //                   <Typography variant="h3" fontWeight="bold" color={stat.color}>
// //                     {stat.value}
// //                   </Typography>
// //                   <Chip
// //                     label={`5% ${
// //                       stat.trend === "up"
// //                         ? "↑"
// //                         : stat.trend === "down"
// //                         ? "↓"
// //                         : "→"
// //                     }`}
// //                     size="small"
// //                     sx={{
// //                       mt: 1,
// //                       backgroundColor: `${stat.color}20`,
// //                       color: stat.color,
// //                       fontWeight: 600,
// //                     }}
// //                   />
// //                 </Box>
// //                 <Box
// //                   sx={{
// //                     p: 1,
// //                     borderRadius: "55%",
// //                     backgroundColor: `${stat.color}10`,
// //                     color: stat.color,
// //                     border: `1px solid ${stat.color}30`,
// //                   }}
// //                 >
// //                   {stat.icon}
// //                 </Box>
// //               </Box>
// //             </StatsCard>
// //           </Grid>
// //         ))}
// //       </Grid>

// //       {/* Courses section */}
// //       <Box mb={4}>
// //         <Box
// //           display="flex"
// //           justifyContent="space-between"
// //           alignItems="center"
// //           mb={3}
// //           sx={{
// //             backgroundColor: theme.palette.background.paper,
// //             p: 3,
// //             borderRadius: theme.shape.borderRadius * 0.3,
// //             border: `1px solid ${theme.palette.divider}`,
// //           }}
// //         >
// //           <Box>
// //             <Typography variant="h5" fontWeight="bold">
// //               My Courses
// //             </Typography>
// //             <Typography variant="body2" color="textSecondary">
// //               Manage and create new courses
// //             </Typography>
// //           </Box>
// //           <Box display="flex" gap={2}>
// //             <Button
// //               variant="contained"
// //               startIcon={<AddIcon />}
// //               onClick={onCreateCourse}
// //               sx={{
// //                 borderRadius: theme.shape.borderRadius * 2,
// //                 textTransform: "none",
// //                 boxShadow: "none",
// //                 px: 3,
// //                 "&:hover": {
// //                   boxShadow: theme.shadows[4],
// //                 },
// //               }}
// //             >
// //               Create Course
// //             </Button>
// //             <Button
// //               variant="outlined"
// //               startIcon={<AssignmentIcon />}
// //               onClick={() => setAssignmentDialogOpen(true)}
// //               sx={{
// //                 borderRadius: theme.shape.borderRadius * 2,
// //                 textTransform: "none",
// //                 px: 3,
// //                 borderWidth: 2,
// //                 "&:hover": {
// //                   borderWidth: 2,
// //                 },
// //               }}
// //             >
// //               New Assignment
// //             </Button>
// //           </Box>
// //         </Box>

// //         <Box mb={3}>
// //           <SearchInput
// //             fullWidth
// //             placeholder="Search courses by title or description..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <SearchIcon color="action" />
// //                 </InputAdornment>
// //               ),
// //               sx: {
// //                 maxWidth: 500,
// //               },
// //             }}
// //           />
// //         </Box>

// //         {loadingCourses ? (
// //           <Box display="flex" justifyContent="center" my={4}>
// //             <CircularProgress />
// //           </Box>
// //         ) : filteredCourses.length === 0 ? (
// //           <Paper
// //             sx={{
// //               p: 4,
// //               textAlign: "center",
// //               backgroundColor: theme.palette.background.paper,
// //               border: `1px dashed ${theme.palette.divider}`,
// //             }}
// //           >
// //             <Box
// //               sx={{
// //                 width: 80,
// //                 height: 80,
// //                 mx: "auto",
// //                 mb: 2,
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 backgroundColor: `${theme.palette.primary.light}20`,
// //                 borderRadius: "50%",
// //                 color: theme.palette.primary.main,
// //               }}
// //             >
// //               <SchoolIcon fontSize="large" />
// //             </Box>
// //             <Typography variant="h6" gutterBottom>
// //               {searchTerm ? "No courses found" : "No courses created yet"}
// //             </Typography>
// //             <Typography variant="body1" color="textSecondary" mb={3}>
// //               {searchTerm
// //                 ? "Try adjusting your search query"
// //                 : "Get started by creating your first course"}
// //             </Typography>
// //             <Button
// //               variant="contained"
// //               startIcon={<AddIcon />}
// //               onClick={onCreateCourse}
// //               sx={{
// //                 borderRadius: theme.shape.borderRadius * 2,
// //                 px: 3,
// //               }}
// //             >
// //               Create Your First Course
// //             </Button>
// //           </Paper>
// //         ) : (
// //           <Grid container spacing={3}>
// //             {filteredCourses.map((course) => (
// //               <Grid item xs={12} sm={6} xl={4} key={course._id || course.id}>
// //                 <Card
// //                   sx={{
// //                     height: "100%",
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     transition: "all 0.3s ease",
// //                     borderRadius: 3,
// //                     border: `1px solid ${theme.palette.divider}`,
// //                     boxShadow: "none",
// //                     "&:hover": {
// //                       transform: "translateY(-8px)",
// //                       boxShadow: theme.shadows[6],
// //                       borderColor: theme.palette.primary.main,
// //                     },
// //                   }}
// //                 >
// //                   <Box
// //                     sx={{
// //                       height: 140,
// //                       position: "relative",
// //                       overflow: "hidden",
// //                     }}
// //                   >
// //                     {course.thumbnail ? (
// //                       <Box
// //                         component="img"
// //                         src={course.thumbnail}
// //                         alt={course.title}
// //                         sx={{
// //                           width: "100%",
// //                           height: "100%",
// //                           objectFit: "cover",
// //                         }}
// //                       />
// //                     ) : (
// //                       <Box
// //                         sx={{
// //                           width: "100%",
// //                           height: "100%",
// //                           display: "flex",
// //                           alignItems: "center",
// //                           justifyContent: "center",
// //                           background:
// //                             theme.palette.mode === "light"
// //                               ? "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)"
// //                               : "linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)",
// //                         }}
// //                       >
// //                         <SchoolIcon
// //                           sx={{
// //                             fontSize: 60,
// //                             color: theme.palette.primary.main,
// //                           }}
// //                         />
// //                       </Box>
// //                     )}
// //                     <Box
// //                       sx={{
// //                         position: "absolute",
// //                         top: 16,
// //                         right: 16,
// //                       }}
// //                     >
// //                       <Chip
// //                         icon={getStatusIcon(course.status)}
// //                         label={course.status}
// //                         color={getStatusColor(course.status)}
// //                         size="small"
// //                         sx={{
// //                           fontWeight: 600,
// //                           textTransform: "capitalize",
// //                           borderRadius: 1,
// //                         }}
// //                       />
// //                     </Box>
// //                   </Box>

// //                   <CardContent sx={{ flexGrow: 1 }}>
// //                     <Typography
// //                       variant="h6"
// //                       component="h3"
// //                       gutterBottom
// //                       sx={{ fontWeight: 600 }}
// //                     >
// //                       {course.title}
// //                     </Typography>

// //                     <Typography
// //                       variant="body2"
// //                       color="text.secondary"
// //                       mb={2}
// //                       sx={{
// //                         display: "-webkit-box",
// //                         WebkitLineClamp: 3,
// //                         WebkitBoxOrient: "vertical",
// //                         overflow: "hidden",
// //                       }}
// //                     >
// //                       {course.description?.substring(0, 150) ||
// //                         "No description available."}
// //                       {course.description?.length > 150 && "..."}
// //                     </Typography>

// //                     <Divider sx={{ my: 2 }} />

// //                     <Grid container spacing={1} mb={1}>
// //                       <Grid item xs={6}>
// //                         <Box display="flex" alignItems="center">
// //                           <CategoryIcon
// //                             fontSize="small"
// //                             color="action"
// //                             sx={{ mr: 1 }}
// //                           />
// //                           <Typography variant="body2" color="text.secondary">
// //                             {categories.find(
// //                               (c) => c._id === course.category_id
// //                             )?.name || "Uncategorized"}
// //                           </Typography>
// //                         </Box>
// //                       </Grid>
// //                       <Grid item xs={6}>
// //                         <Box display="flex" alignItems="center">
// //                           <MenuBookIcon
// //                             fontSize="small"
// //                             color="action"
// //                             sx={{ mr: 1 }}
// //                           />
// //                           <Typography variant="body2" color="text.secondary">
// //                             {course.modules?.length || 0} Modules
// //                           </Typography>
// //                         </Box>
// //                       </Grid>
// //                       <Grid item xs={6}>
// //                         <Box display="flex" alignItems="center">
// //                           <ClassIcon
// //                             fontSize="small"
// //                             color="action"
// //                             sx={{ mr: 1 }}
// //                           />
// //                           <Typography variant="body2" color="text.secondary">
// //                             {course.modules?.reduce(
// //                               (acc, module) =>
// //                                 acc + (module.lessons?.length || 0),
// //                               0
// //                             )}{" "}
// //                             Lessons
// //                           </Typography>
// //                         </Box>
// //                       </Grid>
// //                       <Grid item xs={6}>
// //                         <Box display="flex" alignItems="center">
// //                           <StarIcon
// //                             fontSize="small"
// //                             color="action"
// //                             sx={{ mr: 1 }}
// //                           />
// //                           <Typography variant="body2" color="text.secondary">
// //                             4.8 (24)
// //                           </Typography>
// //                         </Box>
// //                       </Grid>
// //                     </Grid>
// //                   </CardContent>

// //                   <CardActions
// //                     sx={{
// //                       justifyContent: "space-between",
// //                       p: 2,
// //                       borderTop: `1px solid ${theme.palette.divider}`,
// //                     }}
// //                   >
// //                     <Button
// //                       variant="outlined"
// //                       size="small"
// //                       startIcon={<VisibilityIcon />}
// //                       onClick={() => handleViewCourse(course)}
// //                       sx={{
// //                         borderRadius: 2,
// //                         px: 2,
// //                       }}
// //                     >
// //                       View
// //                     </Button>
// //                     <Box>
// //                       <Tooltip title="Edit Course">
// //                         <IconButton
// //                           onClick={() => onEditCourse(course)}
// //                           size="small"
// //                           sx={{
// //                             color: orange[600],
// //                             "&:hover": {
// //                               bgcolor: `${orange[50]} !important`,
// //                             },
// //                           }}
// //                         >
// //                           <EditIcon fontSize="small" />
// //                         </IconButton>
// //                       </Tooltip>
// //                       <Tooltip title="Delete Course">
// //                         <IconButton
// //                           onClick={() => handleDeleteCourse(course.id)}
// //                           size="small"
// //                           sx={{
// //                             color: "error.main",
// //                             ml: 1,
// //                             "&:hover": {
// //                               bgcolor: "rgba(244, 67, 54, 0.08) !important",
// //                             },
// //                           }}
// //                         >
// //                           <DeleteIcon fontSize="small" />
// //                         </IconButton>
// //                       </Tooltip>
// //                     </Box>
// //                   </CardActions>
// //                 </Card>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         )}
// //       </Box>

// //       {/* Course Details Dialog */}
// //       <Dialog
// //         open={dialogOpen}
// //         onClose={handleCloseDialog}
// //         fullWidth
// //         maxWidth="md"
// //         PaperProps={{
// //           sx: {
// //             borderRadius: theme.shape.borderRadius * 0.2,
// //             minHeight: "70vh",
// //             background: theme.palette.background.paper,
// //             border: `1px solid ${theme.palette.divider}`,
// //           },
// //         }}
// //       >
// //         {loadingDetails ? (
// //           <Box
// //             display="flex"
// //             justifyContent="center"
// //             alignItems="center"
// //             height="60vh"
// //           >
// //             <CircularProgress size={60} />
// //           </Box>
// //         ) : (
// //           <>
// //             <DialogTitle
// //               sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
// //             >
// //               <Box
// //                 display="flex"
// //                 justifyContent="space-between"
// //                 alignItems="center"
// //               >
// //                 <Box display="flex" alignItems="center">
// //                   <Avatar
// //                     variant="rounded"
// //                     sx={{
// //                       width: 48,
// //                       height: 48,
// //                       mr: 2,
// //                       backgroundColor: `${theme.palette.primary.light}20`,
// //                       color: theme.palette.primary.main,
// //                     }}
// //                   >
// //                     <SchoolIcon />
// //                   </Avatar>
// //                   <Box>
// //                     <Typography variant="h5" fontWeight="bold">
// //                       {selectedCourse?.title}
// //                     </Typography>
// //                     <Typography variant="body2" color="textSecondary">
// //                       Course ID: {selectedCourse?.id}
// //                     </Typography>
// //                   </Box>
// //                 </Box>
// //                 <StatusChip status={selectedCourse?.status} />
// //               </Box>
// //             </DialogTitle>
// //             <DialogContent dividers>
// //               <Typography variant="body1" paragraph>
// //                 {selectedCourse?.description}
// //               </Typography>

// //               <Box display="flex" gap={2} mb={3}>
// //                 <Chip
// //                   icon={<PeopleIcon fontSize="small" />}
// //                   label={`${Math.floor(Math.random() * 100) + 20} Students`}
// //                   variant="outlined"
// //                 />
// //                 <Chip
// //                   icon={<AssignmentIcon fontSize="small" />}
// //                   label={`${Math.floor(Math.random() * 10) + 1} Assignments`}
// //                   variant="outlined"
// //                 />
// //                 <Chip
// //                   icon={<BarChartIcon fontSize="small" />}
// //                   label={`${Math.floor(Math.random() * 100)}% Completion`}
// //                   variant="outlined"
// //                   color="success"
// //                 />
// //               </Box>

// //               <Typography variant="h6" fontWeight="bold" mt={3} mb={2}>
// //                 Course Modules
// //               </Typography>

// //               {modules.length === 0 ? (
// //                 <Paper
// //                   sx={{
// //                     p: 3,
// //                     textAlign: "center",
// //                     borderRadius: theme.shape.borderRadius,
// //                     backgroundColor: theme.palette.background.default,
// //                   }}
// //                 >
// //                   <Typography variant="body2" color="textSecondary">
// //                     No modules added yet
// //                   </Typography>
// //                   <Button
// //                     variant="outlined"
// //                     startIcon={<AddIcon />}
// //                     sx={{ mt: 2 }}
// //                   >
// //                     Add Module
// //                   </Button>
// //                 </Paper>
// //               ) : (
// //                 modules.map((module) => (
// //                   <Accordion
// //                     key={module.id}
// //                     sx={{
// //                       mb: 1,
// //                       borderRadius: theme.shape.borderRadius,
// //                       "&:before": {
// //                         display: "none",
// //                       },
// //                     }}
// //                   >
// //                     <AccordionSummary
// //                       expandIcon={<ExpandMoreIcon />}
// //                       sx={{
// //                         backgroundColor: theme.palette.background.default,
// //                         borderRadius: theme.shape.borderRadius,
// //                       }}
// //                     >
// //                       <Box display="flex" alignItems="center" width="100%">
// //                         <Box
// //                           sx={{
// //                             width: 36,
// //                             height: 36,
// //                             mr: 2,
// //                             display: "flex",
// //                             alignItems: "center",
// //                             justifyContent: "center",
// //                             backgroundColor: `${theme.palette.secondary.light}20`,
// //                             borderRadius: "50%",
// //                             color: theme.palette.secondary.main,
// //                           }}
// //                         >
// //                           {module.lessons.length > 0 ? (
// //                             <VideoLibraryIcon fontSize="small" />
// //                           ) : (
// //                             <ArticleIcon fontSize="small" />
// //                           )}
// //                         </Box>
// //                         <Typography fontWeight={600}>{module.title}</Typography>
// //                         <Box flexGrow={1} />
// //                         <Chip
// //                           label={`${module.lessons.length} Lessons`}
// //                           size="small"
// //                           variant="outlined"
// //                         />
// //                       </Box>
// //                     </AccordionSummary>
// //                     <AccordionDetails
// //                       sx={{
// //                         backgroundColor: theme.palette.background.paper,
// //                         borderTop: `1px solid ${theme.palette.divider}`,
// //                       }}
// //                     >
// //                       <Typography variant="body2" color="textSecondary" mb={2}>
// //                         {module.description}
// //                       </Typography>

// //                       {module.lessons.length === 0 ? (
// //                         <Typography variant="body2" color="textSecondary">
// //                           No lessons added yet
// //                         </Typography>
// //                       ) : (
// //                         <Box>
// //                           <Typography
// //                             variant="subtitle2"
// //                             fontWeight={600}
// //                             mb={1}
// //                           >
// //                             Lessons:
// //                           </Typography>
// //                           {module.lessons.map((lesson) => (
// //                             <Box
// //                               key={lesson.id}
// //                               display="flex"
// //                               alignItems="center"
// //                               mb={1}
// //                               px={2}
// //                               py={1}
// //                               sx={{
// //                                 borderRadius: theme.shape.borderRadius,
// //                                 backgroundColor:
// //                                   theme.palette.background.default,
// //                                 "&:hover": {
// //                                   backgroundColor: theme.palette.action.hover,
// //                                 },
// //                               }}
// //                             >
// //                               {lesson.type === "video" ? (
// //                                 <VideoLibraryIcon
// //                                   color="primary"
// //                                   fontSize="small"
// //                                   sx={{ mr: 2 }}
// //                                 />
// //                               ) : (
// //                                 <ArticleIcon
// //                                   color="secondary"
// //                                   fontSize="small"
// //                                   sx={{ mr: 2 }}
// //                                 />
// //                               )}
// //                               <Box flexGrow={1}>
// //                                 <Typography variant="body2">
// //                                   {lesson.title}
// //                                 </Typography>
// //                                 <Typography
// //                                   variant="caption"
// //                                   color="textSecondary"
// //                                 >
// //                                   {lesson.duration || "10 min"}
// //                                 </Typography>
// //                               </Box>
// //                               <IconButton size="small">
// //                                 <MoreVertIcon fontSize="small" />
// //                               </IconButton>
// //                             </Box>
// //                           ))}
// //                         </Box>
// //                       )}
// //                     </AccordionDetails>
// //                   </Accordion>
// //                 ))
// //               )}
// //             </DialogContent>
// //             <DialogActions
// //               sx={{ borderTop: `1px solid ${theme.palette.divider}`, p: 2 }}
// //             >
// //               <Button
// //                 onClick={handleCloseDialog}
// //                 variant="outlined"
// //                 sx={{ borderRadius: theme.shape.borderRadius * 2 }}
// //               >
// //                 Close
// //               </Button>
// //               <Button
// //                 variant="contained"
// //                 sx={{ borderRadius: theme.shape.borderRadius * 2 }}
// //               >
// //                 Edit Course
// //               </Button>
// //             </DialogActions>
// //           </>
// //         )}
// //       </Dialog>
// //     </>
// //   );
// // };

// // export default InstructorDashboardView;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Grid,
//   styled,
//   Divider,
//   Button,
//   CircularProgress,
//   Dialog,
//   IconButton,
//   Tooltip,
//   TextField,
//   InputAdornment,
//   Avatar,
//   Badge,
//   Chip,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Card,
//   CardContent,
//   CardActions,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import {
//   Dashboard as DashboardIcon,
//   School as CoursesIcon,
//   People as StudentsIcon,
//   BarChart as AnalyticsIcon,
//   Message as MessagesIcon,
//   Settings as SettingsIcon,
//   School as SchoolIcon,
//   Add as AddIcon,
//   Search as SearchIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Visibility as VisibilityIcon,
//   Schedule as ScheduleIcon,
//   Assignment as AssignmentIcon,
//   CheckCircle as CheckCircleIcon,
//   ExpandMore as ExpandMoreIcon,
//   VideoLibrary as VideoLibraryIcon,
//   Article as ArticleIcon,
//   Star as StarIcon,
//   Bookmark as BookmarkIcon,
//   MoreVert as MoreVertIcon,
//   Category as CategoryIcon,
//   MenuBook as MenuBookIcon,
//   Class as ClassIcon,
// } from "@mui/icons-material";
// import { CardMedia } from "@mui/material";

// import PeopleIcon from "@mui/icons-material/People";
// import { useTheme } from "@mui/material/styles";
// import { useAuth } from "../../contexts/AuthContext/AuthContext";
// import InstructorService from "../../services/instructorService";
// import { orange } from "@mui/material/colors";
// import StatusChip from "../../pages/instructor/StatusChip";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import CreateAssignmentDialog from "../../components/assignmnet/CreatAssignmentDialog";

// // Styled components
// const StatsCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   borderRadius: theme.shape.borderRadius * 2,
//   boxShadow: theme.shadows[2],
//   transition: "all 0.3s ease",
//   background:
//     theme.palette.mode === "light"
//       ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`
//       : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[900]} 100%)`,
//   border: `1px solid ${theme.palette.divider}`,
//   position: "relative",
//   overflow: "hidden",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "4px",
//     height: "100%",
//     background: theme.palette.primary.main,
//   },
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: theme.shadows[8],
//   },
// }));

// const CourseCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2.5),
//   marginBottom: theme.spacing(2),
//   borderRadius: theme.shape.borderRadius * 2,
//   boxShadow: theme.shadows[1],
//   transition: "all 0.3s ease",
//   border: `1px solid ${theme.palette.divider}`,
//   position: "relative",
//   overflow: "hidden",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: theme.shadows[6],
//     borderColor: theme.palette.primary.main,
//     "& .course-actions": {
//       opacity: 1,
//       transform: "translateY(0)",
//     },
//   },
//   "& .course-actions": {
//     position: "absolute",
//     top: theme.spacing(1),
//     right: theme.spacing(1),
//     opacity: 0,
//     transform: "translateY(-10px)",
//     transition: "all 0.3s ease",
//     display: "flex",
//     gap: theme.spacing(0.5),
//     backgroundColor: theme.palette.background.paper,
//     borderRadius: theme.shape.borderRadius,
//     padding: theme.spacing(0.5),
//     boxShadow: theme.shadows[2],
//   },
// }));

// const SearchInput = styled(TextField)(({ theme }) => ({
//   "& .MuiOutlinedInput-root": {
//     borderRadius: theme.shape.borderRadius * 2,
//     backgroundColor: theme.palette.background.paper,
//     "& fieldset": {
//       borderColor: theme.palette.divider,
//     },
//     "&:hover fieldset": {
//       borderColor: theme.palette.primary.light,
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: theme.palette.primary.main,
//       borderWidth: 1,
//     },
//   },
// }));

// const InstructorDashboardView = ({ onCreateCourse, onEditCourse }) => {
//   const theme = useTheme();
//   const { user } = useAuth();
//   const [courses, setCourses] = useState([]);
//   const [loadingCourses, setLoadingCourses] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [stats, setStats] = useState({
//     totalCourses: 0,
//     approvedCourses: 0,
//     pendingCourses: 0,
//     rejectedCourses: 0,
//   });
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [modules, setModules] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [loadingDetails, setLoadingDetails] = useState(false);
//   const [assignmentDialogOpen, setAssignmentDialogOpen] = useState(false);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         setLoadingCourses(true);
//         const data = await InstructorService.getCourses();
//         setCourses(data);

//         const approved = data.filter((c) => c.status === "approved").length;
//         const pending = data.filter((c) => c.status === "pending").length;
//         const rejected = data.filter((c) => c.status === "rejected").length;

//         setStats({
//           totalCourses: data.length,
//           approvedCourses: approved,
//           pendingCourses: pending,
//           rejectedCourses: rejected,
//         });
//       } catch (error) {
//         console.error("Failed to fetch courses:", error);
//       } finally {
//         setLoadingCourses(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const filteredCourses = courses.filter(
//     (course) =>
//       course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleViewCourse = (course) => {
//     setSelectedCourse(course);
//     setDialogOpen(true);
//     fetchCourseDetails(course.id);
//   };

//   const fetchCourseDetails = async (courseId) => {
//     try {
//       setLoadingDetails(true);
//       const modules = await InstructorService.getCourseModules(courseId);
//       setModules(modules);
//     } catch (error) {
//       console.error("Failed to fetch course details:", error);
//     } finally {
//       setLoadingDetails(false);
//     }
//   };

//   const handleDeleteCourse = async (courseId) => {
//     if (window.confirm("Are you sure you want to delete this course?")) {
//       try {
//         await InstructorService.deleteCourse(courseId);
//         setCourses(courses.filter((course) => course.id !== courseId));
//         setStats({
//           ...stats,
//           totalCourses: stats.totalCourses - 1,
//         });
//       } catch (error) {
//         console.error("Failed to delete course:", error);
//       }
//     }
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedCourse(null);
//     setModules([]);
//   };

//   const handleAssignmentCreated = (assignment) => {
//     // You can add any logic here to handle the newly created assignment
//     console.log("New assignment created:", assignment);
//     // Optionally show a success message or refresh data
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "published":
//         return "success";
//       case "draft":
//         return "warning";
//       case "pending":
//         return "info";
//       default:
//         return "default";
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "published":
//         return <CheckCircleIcon fontSize="small" />;
//       case "draft":
//         return <EditIcon fontSize="small" />;
//       case "pending":
//         return <ScheduleIcon fontSize="small" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       {/* Main content header */}
//       <Box mb={4}>
//         <Box display="flex" alignItems="center" mb={1}>
//           <Box>
//             <Typography variant="h4" fontWeight="bold" gutterBottom>
//               Welcome back, {user?.displayName || "Instructor"}!
//             </Typography>
//             <Box display="flex" alignItems="center">
//               <StarIcon color="warning" fontSize="small" sx={{ mr: 0.5 }} />
//               <Typography variant="body1" color="textSecondary">
//                 Instructor since{" "}
//                 {new Date(user?.metadata?.creationTime).getFullYear() || "2024"}
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//         <Typography variant="body1" color="textSecondary">
//           Here's what's happening with your courses today.
//         </Typography>
//       </Box>

//       {/* Stats cards */}
//       <Grid container spacing={3} mb={4}>
//         {[
//           {
//             title: "Total Courses",
//             value: stats.totalCourses,
//             icon: <CoursesIcon fontSize="medium" />,
//             color: theme.palette.primary.main,
//             trend: "up",
//           },
//           {
//             title: "Approved Courses",
//             value: stats.approvedCourses,
//             icon: <SchoolIcon fontSize="medium" />,
//             color: theme.palette.success.main,
//             trend: "up",
//           },
//           {
//             title: "Pending Approval",
//             value: stats.pendingCourses,
//             icon: <ScheduleIcon fontSize="medium" />,
//             color: theme.palette.warning.main,
//             trend: "neutral",
//           },
//           {
//             title: "Rejected Courses",
//             value: stats.rejectedCourses,
//             icon: <DeleteIcon fontSize="medium" />,
//             color: theme.palette.error.main,
//             trend: "down",
//           },
//         ].map((stat) => (
//           <Grid item xs={12} sm={6} md={3} key={stat.title}>
//             <StatsCard>
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//               >
//                 <Box>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     gutterBottom
//                     sx={{
//                       textTransform: "uppercase",
//                       fontWeight: 500,
//                       letterSpacing: 0.5,
//                     }}
//                   >
//                     {stat.title}
//                   </Typography>
//                   <Typography variant="h3" fontWeight="bold" color={stat.color}>
//                     {stat.value}
//                   </Typography>
//                   <Chip
//                     label={`5% ${
//                       stat.trend === "up"
//                         ? "↑"
//                         : stat.trend === "down"
//                         ? "↓"
//                         : "→"
//                     }`}
//                     size="small"
//                     sx={{
//                       mt: 1,
//                       backgroundColor: `${stat.color}20`,
//                       color: stat.color,
//                       fontWeight: 600,
//                     }}
//                   />
//                 </Box>
//                 <Box
//                   sx={{
//                     p: 1,
//                     borderRadius: "55%",
//                     backgroundColor: `${stat.color}10`,
//                     color: stat.color,
//                     border: `1px solid ${stat.color}30`,
//                   }}
//                 >
//                   {stat.icon}
//                 </Box>
//               </Box>
//             </StatsCard>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Courses section */}
//       <Box mb={4}>
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           mb={3}
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             p: 3,
//             borderRadius: theme.shape.borderRadius * 0.3,
//             border: `1px solid ${theme.palette.divider}`,
//           }}
//         >
//           <Box>
//             <Typography variant="h5" fontWeight="bold">
//               My Courses
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Manage and create new courses
//             </Typography>
//           </Box>
//           <Box display="flex" gap={2}>
//             <Button
//               variant="contained"
//               startIcon={<AddIcon />}
//               onClick={onCreateCourse}
//               sx={{
//                 borderRadius: theme.shape.borderRadius * 2,
//                 textTransform: "none",
//                 boxShadow: "none",
//                 px: 3,
//                 "&:hover": {
//                   boxShadow: theme.shadows[4],
//                 },
//               }}
//             >
//               Create Course
//             </Button>
//             <Button
//               variant="outlined"
//               startIcon={<AssignmentIcon />}
//               onClick={() => setAssignmentDialogOpen(true)}
//               sx={{
//                 borderRadius: theme.shape.borderRadius * 2,
//                 textTransform: "none",
//                 px: 3,
//                 borderWidth: 2,
//                 "&:hover": {
//                   borderWidth: 2,
//                 },
//               }}
//             >
//               New Assignment
//             </Button>
//           </Box>
//         </Box>

//         <Box mb={3}>
//           <SearchInput
//             fullWidth
//             placeholder="Search courses by title or description..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon color="action" />
//                 </InputAdornment>
//               ),
//               sx: {
//                 maxWidth: 500,
//               },
//             }}
//           />
//         </Box>

//         {loadingCourses ? (
//           <Box display="flex" justifyContent="center" my={4}>
//             <CircularProgress />
//           </Box>
//         ) : filteredCourses.length === 0 ? (
//           <Paper
//             sx={{
//               p: 4,
//               textAlign: "center",
//               backgroundColor: theme.palette.background.paper,
//               border: `1px dashed ${theme.palette.divider}`,
//             }}
//           >
//             <Box
//               sx={{
//                 width: 80,
//                 height: 80,
//                 mx: "auto",
//                 mb: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundColor: `${theme.palette.primary.light}20`,
//                 borderRadius: "50%",
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <SchoolIcon fontSize="large" />
//             </Box>
//             <Typography variant="h6" gutterBottom>
//               {searchTerm ? "No courses found" : "No courses created yet"}
//             </Typography>
//             <Typography variant="body1" color="textSecondary" mb={3}>
//               {searchTerm
//                 ? "Try adjusting your search query"
//                 : "Get started by creating your first course"}
//             </Typography>
//             <Button
//               variant="contained"
//               startIcon={<AddIcon />}
//               onClick={onCreateCourse}
//               sx={{
//                 borderRadius: theme.shape.borderRadius * 2,
//                 px: 3,
//               }}
//             >
//               Create Your First Course
//             </Button>
//           </Paper>
//         ) : (
//           <Grid container spacing={3}>
//             {filteredCourses.map((course) => (
//               <Grid item xs={12} sm={6} xl={4} key={course._id || course.id}>
//                 <Card
//                   sx={{
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                     transition: "all 0.3s ease",
//                     borderRadius: 3,
//                     border: `1px solid ${theme.palette.divider}`,
//                     boxShadow: "none",
//                     "&:hover": {
//                       transform: "translateY(-8px)",
//                       boxShadow: theme.shadows[6],
//                       borderColor: theme.palette.primary.main,
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       height: 140,
//                       position: "relative",
//                       overflow: "hidden",
//                     }}
//                   >
//                     {course.thumbnail_url ? (
//                       <CardMedia
//                         component="img"
//                         image={course.thumbnail_url}
//                         alt="Course thumbnail"
//                         sx={{
//                           borderRadius: 2,
//                           height: 200,
//                           objectFit: "cover",
//                           mb: 2,
//                         }}
//                       />
//                     ) : (
//                       <Box
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           background:
//                             theme.palette.mode === "light"
//                               ? "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)"
//                               : "linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)",
//                         }}
//                       >
//                         <SchoolIcon
//                           sx={{
//                             fontSize: 60,
//                             color: theme.palette.primary.main,
//                           }}
//                         />
//                       </Box>
//                     )}
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 16,
//                         right: 16,
//                       }}
//                     >
//                       <Chip
//                         icon={getStatusIcon(course.status)}
//                         label={course.status}
//                         color={getStatusColor(course.status)}
//                         size="small"
//                         sx={{
//                           fontWeight: 600,
//                           textTransform: "capitalize",
//                           borderRadius: 1,
//                         }}
//                       />
//                     </Box>
//                   </Box>

//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography
//                       variant="h6"
//                       component="h3"
//                       gutterBottom
//                       sx={{ fontWeight: 600 }}
//                     >
//                       {course.title}
//                     </Typography>

//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       mb={2}
//                       sx={{
//                         display: "-webkit-box",
//                         WebkitLineClamp: 3,
//                         WebkitBoxOrient: "vertical",
//                         overflow: "hidden",
//                       }}
//                     >
//                       {course.description?.substring(0, 150) ||
//                         "No description available."}
//                       {course.description?.length > 150 && "..."}
//                     </Typography>

//                     <Divider sx={{ my: 2 }} />

//                     <Grid container spacing={1} mb={1}>
//                       <Grid item xs={6}>
//                         <Box display="flex" alignItems="center">
//                           <CategoryIcon
//                             fontSize="small"
//                             color="action"
//                             sx={{ mr: 1 }}
//                           />
//                           <Typography variant="body2" color="text.secondary">
//                             {categories.find(
//                               (c) => c._id === course.category_id
//                             )?.name || "Uncategorized"}
//                           </Typography>
//                         </Box>
//                       </Grid>
//                       <Grid item xs={6}>
//                         <Box display="flex" alignItems="center">
//                           <MenuBookIcon
//                             fontSize="small"
//                             color="action"
//                             sx={{ mr: 1 }}
//                           />
//                           <Typography variant="body2" color="text.secondary">
//                             {course.modules?.length || 0} Modules
//                           </Typography>
//                         </Box>
//                       </Grid>
//                       <Grid item xs={6}>
//                         <Box display="flex" alignItems="center">
//                           <ClassIcon
//                             fontSize="small"
//                             color="action"
//                             sx={{ mr: 1 }}
//                           />
//                           <Typography variant="body2" color="text.secondary">
//                             {course.modules?.reduce(
//                               (acc, module) =>
//                                 acc + (module.lessons?.length || 0),
//                               0
//                             )}{" "}
//                             Lessons
//                           </Typography>
//                         </Box>
//                       </Grid>
//                       <Grid item xs={6}>
//                         <Box display="flex" alignItems="center">
//                           <StarIcon
//                             fontSize="small"
//                             color="action"
//                             sx={{ mr: 1 }}
//                           />
//                           <Typography variant="body2" color="text.secondary">
//                             4.8 (24)
//                           </Typography>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   </CardContent>

//                   <CardActions
//                     sx={{
//                       justifyContent: "space-between",
//                       p: 2,
//                       borderTop: `1px solid ${theme.palette.divider}`,
//                     }}
//                   >
//                     <Button
//                       variant="outlined"
//                       size="small"
//                       startIcon={<VisibilityIcon />}
//                       onClick={() => handleViewCourse(course)}
//                       sx={{
//                         borderRadius: 2,
//                         px: 2,
//                       }}
//                     >
//                       View
//                     </Button>
//                     <Box>
//                       <Tooltip title="Edit Course">
//                         <IconButton
//                           onClick={() => onEditCourse(course)}
//                           size="small"
//                           sx={{
//                             color: orange[600],
//                             "&:hover": {
//                               bgcolor: `${orange[50]} !important`,
//                             },
//                           }}
//                         >
//                           <EditIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip>
//                       <Tooltip title="Delete Course">
//                         <IconButton
//                           onClick={() => handleDeleteCourse(course.id)}
//                           size="small"
//                           sx={{
//                             color: "error.main",
//                             ml: 1,
//                             "&:hover": {
//                               bgcolor: "rgba(244, 67, 54, 0.08) !important",
//                             },
//                           }}
//                         >
//                           <DeleteIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip>
//                     </Box>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>

//       {/* Course Details Dialog */}
//       <Dialog
//         open={dialogOpen}
//         onClose={handleCloseDialog}
//         fullWidth
//         maxWidth="md"
//         PaperProps={{
//           sx: {
//             borderRadius: theme.shape.borderRadius * 0.2,
//             minHeight: "70vh",
//             background: theme.palette.background.paper,
//             border: `1px solid ${theme.palette.divider}`,
//           },
//         }}
//       >
//         {loadingDetails ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             height="60vh"
//           >
//             <CircularProgress size={60} />
//           </Box>
//         ) : (
//           <>
//             <DialogTitle
//               sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
//             >
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//               >
//                 <Box display="flex" alignItems="center">
//                   <Avatar
//                     variant="rounded"
//                     sx={{
//                       width: 48,
//                       height: 48,
//                       mr: 2,
//                       backgroundColor: `${theme.palette.primary.light}20`,
//                       color: theme.palette.primary.main,
//                     }}
//                   >
//                     <SchoolIcon />
//                   </Avatar>
//                   <Box>
//                     <Typography variant="h5" fontWeight="bold">
//                       {selectedCourse?.title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Course ID: {selectedCourse?.id}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <StatusChip status={selectedCourse?.status} />
//               </Box>
//             </DialogTitle>
//             <DialogContent dividers>
//               <Typography variant="body1" paragraph>
//                 {selectedCourse?.description}
//               </Typography>

//               <Box display="flex" gap={2} mb={3}>
//                 <Chip
//                   icon={<PeopleIcon fontSize="small" />}
//                   label={`${Math.floor(Math.random() * 100) + 20} Students`}
//                   variant="outlined"
//                 />
//                 <Chip
//                   icon={<AssignmentIcon fontSize="small" />}
//                   label={`${Math.floor(Math.random() * 10) + 1} Assignments`}
//                   variant="outlined"
//                 />
//                 <Chip
//                   icon={<BarChartIcon fontSize="small" />}
//                   label={`${Math.floor(Math.random() * 100)}% Completion`}
//                   variant="outlined"
//                   color="success"
//                 />
//               </Box>

//               <Typography variant="h6" fontWeight="bold" mt={3} mb={2}>
//                 Course Modules
//               </Typography>

//               {modules.length === 0 ? (
//                 <Paper
//                   sx={{
//                     p: 3,
//                     textAlign: "center",
//                     borderRadius: theme.shape.borderRadius,
//                     backgroundColor: theme.palette.background.default,
//                   }}
//                 >
//                   <Typography variant="body2" color="textSecondary">
//                     No modules added yet
//                   </Typography>
//                   <Button
//                     variant="outlined"
//                     startIcon={<AddIcon />}
//                     sx={{ mt: 2 }}
//                   >
//                     Add Module
//                   </Button>
//                 </Paper>
//               ) : (
//                 modules.map((module) => (
//                   <Accordion
//                     key={module.id}
//                     sx={{
//                       mb: 1,
//                       borderRadius: theme.shape.borderRadius,
//                       "&:before": {
//                         display: "none",
//                       },
//                     }}
//                   >
//                     <AccordionSummary
//                       expandIcon={<ExpandMoreIcon />}
//                       sx={{
//                         backgroundColor: theme.palette.background.default,
//                         borderRadius: theme.shape.borderRadius,
//                       }}
//                     >
//                       <Box display="flex" alignItems="center" width="100%">
//                         <Box
//                           sx={{
//                             width: 36,
//                             height: 36,
//                             mr: 2,
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             backgroundColor: `${theme.palette.secondary.light}20`,
//                             borderRadius: "50%",
//                             color: theme.palette.secondary.main,
//                           }}
//                         >
//                           {module.lessons.length > 0 ? (
//                             <VideoLibraryIcon fontSize="small" />
//                           ) : (
//                             <ArticleIcon fontSize="small" />
//                           )}
//                         </Box>
//                         <Typography fontWeight={600}>{module.title}</Typography>
//                         <Box flexGrow={1} />
//                         <Chip
//                           label={`${module.lessons.length} Lessons`}
//                           size="small"
//                           variant="outlined"
//                         />
//                       </Box>
//                     </AccordionSummary>
//                     <AccordionDetails
//                       sx={{
//                         backgroundColor: theme.palette.background.paper,
//                         borderTop: `1px solid ${theme.palette.divider}`,
//                       }}
//                     >
//                       <Typography variant="body2" color="textSecondary" mb={2}>
//                         {module.description}
//                       </Typography>

//                       {module.lessons.length === 0 ? (
//                         <Typography variant="body2" color="textSecondary">
//                           No lessons added yet
//                         </Typography>
//                       ) : (
//                         <Box>
//                           <Typography
//                             variant="subtitle2"
//                             fontWeight={600}
//                             mb={1}
//                           >
//                             Lessons:
//                           </Typography>
//                           {module.lessons.map((lesson) => (
//                             <Box
//                               key={lesson.id}
//                               display="flex"
//                               alignItems="center"
//                               mb={1}
//                               px={2}
//                               py={1}
//                               sx={{
//                                 borderRadius: theme.shape.borderRadius,
//                                 backgroundColor:
//                                   theme.palette.background.default,
//                                 "&:hover": {
//                                   backgroundColor: theme.palette.action.hover,
//                                 },
//                               }}
//                             >
//                               {lesson.type === "video" ? (
//                                 <VideoLibraryIcon
//                                   color="primary"
//                                   fontSize="small"
//                                   sx={{ mr: 2 }}
//                                 />
//                               ) : (
//                                 <ArticleIcon
//                                   color="secondary"
//                                   fontSize="small"
//                                   sx={{ mr: 2 }}
//                                 />
//                               )}
//                               <Box flexGrow={1}>
//                                 <Typography variant="body2">
//                                   {lesson.title}
//                                 </Typography>
//                                 <Typography
//                                   variant="caption"
//                                   color="textSecondary"
//                                 >
//                                   {lesson.duration || "10 min"}
//                                 </Typography>
//                               </Box>
//                               <IconButton size="small">
//                                 <MoreVertIcon fontSize="small" />
//                               </IconButton>
//                             </Box>
//                           ))}
//                         </Box>
//                       )}
//                     </AccordionDetails>
//                   </Accordion>
//                 ))
//               )}
//             </DialogContent>
//             <DialogActions
//               sx={{ borderTop: `1px solid ${theme.palette.divider}`, p: 2 }}
//             >
//               <Button
//                 onClick={handleCloseDialog}
//                 variant="outlined"
//                 sx={{ borderRadius: theme.shape.borderRadius * 2 }}
//               >
//                 Close
//               </Button>
//               <Button
//                 variant="contained"
//                 sx={{ borderRadius: theme.shape.borderRadius * 2 }}
//               >
//                 Edit Course
//               </Button>
//             </DialogActions>
//           </>
//         )}
//       </Dialog>

//       {/* Assignment Dialog */}
//       <CreateAssignmentDialog
//         open={assignmentDialogOpen}
//         onClose={() => setAssignmentDialogOpen(false)}
//         onAssignmentCreated={handleAssignmentCreated}
//       />
//     </>
//   );
// };

// export default InstructorDashboardView;
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  styled,
  Divider,
  Button,
  CircularProgress,
  Dialog,
  IconButton,
  Tooltip,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardActions,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Fade,
  Grow,
  Container,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  School as CoursesIcon,
  People as StudentsIcon,
  BarChart as AnalyticsIcon,
  Message as MessagesIcon,
  Settings as SettingsIcon,
  School as SchoolIcon,
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  Schedule as ScheduleIcon,
  Assignment as AssignmentIcon,
  CheckCircle as CheckCircleIcon,
  ExpandMore as ExpandMoreIcon,
  VideoLibrary as VideoLibraryIcon,
  Article as ArticleIcon,
  Star as StarIcon,
  Bookmark as BookmarkIcon,
  MoreVert as MoreVertIcon,
  Category as CategoryIcon,
  MenuBook as MenuBookIcon,
  Class as ClassIcon,
} from "@mui/icons-material";
import { CardMedia } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import InstructorService from "../../services/instructorService";
import { orange } from "@mui/material/colors";
import StatusChip from "../../pages/instructor/StatusChip";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreateAssignmentDialog from "../../components/assignmnet/CreatAssignmentDialog";

// Modern styled components
const ModernCard = ({ children, delay = 0, ...props }) => (
  <Grow in timeout={1000 + delay}>
    <Card
      sx={{
        background:
          "linear-gradient(145deg, #ffffff 0%, #f8faff 40%, #f1f5ff 100%)",
        borderRadius: 4,
        border: "1px solid rgba(99, 102, 241, 0.12)",
        boxShadow:
          "0 8px 32px rgba(99, 102, 241, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        },
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow:
            "0 16px 48px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
          borderColor: "rgba(99, 102, 241, 0.2)",
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Card>
  </Grow>
);

const ModernButton = ({
  children,
  variant = "contained",
  color = "#6366f1",
  ...props
}) => (
  <Button
    variant={variant}
    sx={{
      borderRadius: 3,
      px: 4,
      py: 1.5,
      fontWeight: 700,
      textTransform: "none",
      fontSize: "0.95rem",
      letterSpacing: "0.02em",
      background:
        variant === "contained"
          ? `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`
          : "transparent",
      border: variant === "outlined" ? `2px solid ${color}40` : "none",
      color: variant === "contained" ? "#ffffff" : color,
      boxShadow:
        variant === "contained"
          ? `0 4px 16px ${color}30, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
          : "none",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        transform: "translateY(-2px) scale(1.05)",
        boxShadow:
          variant === "contained"
            ? `0 8px 24px ${color}40, inset 0 1px 0 rgba(255, 255, 255, 0.3)`
            : `0 4px 16px ${color}20`,
        background:
          variant === "contained"
            ? `linear-gradient(135deg, ${color}ee 0%, ${color}cc 100%)`
            : `${color}08`,
      },
      ...props.sx,
    }}
    {...props}
  >
    {children}
  </Button>
);

const StatsCard = ({ title, value, icon, color, trend }) => {
  return (
    <ModernCard>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 3 }}
      >
        <Box>
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              letterSpacing: 0.5,
              color: "#64748b",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {value}
          </Typography>
          <Chip
            label={`5% ${trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}`}
            size="small"
            sx={{
              mt: 1,
              backgroundColor: `${color}10`,
              color: color,
              fontWeight: 600,
              border: `1px solid ${color}30`,
              borderRadius: 2,
            }}
          />
        </Box>
        <Box
          sx={{
            p: 1.5,
            borderRadius: "50%",
            backgroundColor: `${color}10`,
            color: color,
            border: `1px solid ${color}30`,
          }}
        >
          {icon}
        </Box>
      </Box>
    </ModernCard>
  );
};

const InstructorDashboardView = ({ onCreateCourse, onEditCourse }) => {
  const theme = useTheme();
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState({
    totalCourses: 0,
    approvedCourses: 0,
    pendingCourses: 0,
    rejectedCourses: 0,
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [assignmentDialogOpen, setAssignmentDialogOpen] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoadingCourses(true);
        const data = await InstructorService.getCourses();
        setCourses(data);

        const approved = data.filter((c) => c.status === "approved").length;
        const pending = data.filter((c) => c.status === "pending").length;
        const rejected = data.filter((c) => c.status === "rejected").length;

        setStats({
          totalCourses: data.length,
          approvedCourses: approved,
          pendingCourses: pending,
          rejectedCourses: rejected,
        });
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
    setDialogOpen(true);
    fetchCourseDetails(course.id);
  };

  const fetchCourseDetails = async (courseId) => {
    try {
      setLoadingDetails(true);
      const modules = await InstructorService.getCourseModules(courseId);
      setModules(modules);
    } catch (error) {
      console.error("Failed to fetch course details:", error);
    } finally {
      setLoadingDetails(false);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await InstructorService.deleteCourse(courseId);
        setCourses(courses.filter((course) => course.id !== courseId));
        setStats({
          ...stats,
          totalCourses: stats.totalCourses - 1,
        });
      } catch (error) {
        console.error("Failed to delete course:", error);
      }
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCourse(null);
    setModules([]);
  };

  const handleAssignmentCreated = (assignment) => {
    console.log("New assignment created:", assignment);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "success";
      case "draft":
        return "warning";
      case "pending":
        return "info";
      default:
        return "default";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "published":
        return <CheckCircleIcon fontSize="small" />;
      case "draft":
        return <EditIcon fontSize="small" />;
      case "pending":
        return <ScheduleIcon fontSize="small" />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Fade in timeout={800}>
        <Box>
          {/* Welcome Header */}
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)",
              borderRadius: 4,
              p: 3,
              mb: 3,
              border: "1px solid rgba(99, 102, 241, 0.12)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background:
                  "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
              },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 70%, #ec4899 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 0.5,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Welcome back,{" "}
                  {user?.displayName ||
                    user?.name ||
                    user?.email?.split("@")[0] ||
                    "Instructor"}
                  !
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#64748b",
                    fontWeight: 500,
                  }}
                >
                  Here's what's happening with your courses today.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <StarIcon
                  sx={{
                    color: "#f59e0b",
                    mr: 0.5,
                    fontSize: "1.2rem",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#64748b",
                    fontWeight: 500,
                  }}
                >
                  Instructor since{""}
                  {new Date(user?.metadata?.creationTime).getFullYear() ||
                    new Date(user?.createdAt).getFullYear() ||
                    "2025"}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Courses section */}
          <Box mb={4}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
              sx={{
                background:
                  "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
                borderRadius: 4,
                p: 3,
                border: "1px solid rgba(99, 102, 241, 0.12)",
              }}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  My Courses
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#64748b",
                    fontWeight: 500,
                  }}
                >
                  Manage and create new courses
                </Typography>
              </Box>
              <Box display="flex" gap={2}>
                <ModernButton
                  startIcon={<AddIcon />}
                  onClick={onCreateCourse}
                  sx={{ minWidth: 180 }}
                >
                  Create Course
                </ModernButton>
                <ModernButton
                  variant="outlined"
                  startIcon={<AssignmentIcon />}
                  onClick={() => setAssignmentDialogOpen(true)}
                  color="#6366f1"
                  sx={{ minWidth: 180 }}
                >
                  New Assignment
                </ModernButton>
              </Box>
            </Box>

            <Box mb={3}>
              <TextField
                fullWidth
                placeholder="Search courses by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                  sx: {
                    maxWidth: 500,
                    borderRadius: 3,
                    backgroundColor: theme.palette.background.paper,
                    "& fieldset": {
                      borderColor: "rgba(99, 102, 241, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(99, 102, 241, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6366f1",
                      borderWidth: 1,
                    },
                  },
                }}
              />
            </Box>

            {loadingCourses ? (
              <Box display="flex" justifyContent="center" my={4}>
                <CircularProgress
                  size={80}
                  sx={{
                    color: "#6366f1",
                    filter: "drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))",
                  }}
                />
              </Box>
            ) : filteredCourses.length === 0 ? (
              <ModernCard>
                <CardContent sx={{ textAlign: "center", py: 8 }}>
                  <SchoolIcon
                    sx={{
                      fontSize: 100,
                      color: "#6366f1",
                      mb: 3,
                      opacity: 0.8,
                    }}
                  />
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      mb: 2,
                    }}
                  >
                    {searchTerm ? "No courses found" : "No courses created yet"}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#64748b",
                      mb: 4,
                      maxWidth: 500,
                      mx: "auto",
                    }}
                  >
                    {searchTerm
                      ? "Try adjusting your search query"
                      : "Get started by creating your first course"}
                  </Typography>
                  <ModernButton
                    startIcon={<AddIcon />}
                    onClick={onCreateCourse}
                    sx={{ py: 2, px: 6 }}
                  >
                    Create Your First Course
                  </ModernButton>
                </CardContent>
              </ModernCard>
            ) : (
              <Grid container spacing={3}>
                {filteredCourses.map((course, index) => (
                  <Grid
                    item
                    size={{ xs: 12, md: 4 }}
                    key={course._id || course.id}
                  >
                    <ModernCard delay={index * 100}>
                      <Box
                        sx={{
                          height: 140,
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {course.thumbnail_url ? (
                          <CardMedia
                            component="img"
                            image={course.thumbnail_url}
                            alt="Course thumbnail"
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <Box
                            sx={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background:
                                "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
                            }}
                          >
                            <SchoolIcon
                              sx={{
                                fontSize: 60,
                                color: "#6366f1",
                              }}
                            />
                          </Box>
                        )}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                          }}
                        >
                          <Chip
                            icon={getStatusIcon(course.status)}
                            label={course.status}
                            color={getStatusColor(course.status)}
                            size="small"
                            sx={{
                              fontWeight: 600,
                              textTransform: "capitalize",
                              borderRadius: 2,
                            }}
                          />
                        </Box>
                      </Box>

                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          sx={{
                            fontWeight: 700,
                            color: "#1e293b",
                            lineHeight: 1.3,
                          }}
                        >
                          {course.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            color: "#64748b",
                            mb: 3,
                            lineHeight: 1.6,
                          }}
                        >
                          {course.description?.substring(0, 150) ||
                            "No description available."}
                          {course.description?.length > 150 && "..."}
                        </Typography>

                        <Divider sx={{ my: 2, borderColor: "#e2e8f0" }} />

                        <Grid container spacing={1} mb={1}>
                          <Grid item xs={6}>
                            <Box display="flex" alignItems="center">
                              <CategoryIcon
                                sx={{
                                  color: "#6366f1",
                                  fontSize: 20,
                                  mr: 1,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ color: "#475569", fontWeight: 500 }}
                              >
                                {categories.find(
                                  (c) => c._id === course.category_id
                                )?.name || "Uncategorized"}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box display="flex" alignItems="center">
                              <MenuBookIcon
                                sx={{
                                  color: "#6366f1",
                                  fontSize: 20,
                                  mr: 1,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ color: "#475569", fontWeight: 500 }}
                              >
                                {course.modules?.length || 0} Modules
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box display="flex" alignItems="center">
                              <ClassIcon
                                sx={{
                                  color: "#6366f1",
                                  fontSize: 20,
                                  mr: 1,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ color: "#475569", fontWeight: 500 }}
                              >
                                {course.modules?.reduce(
                                  (acc, module) =>
                                    acc + (module.lessons?.length || 0),
                                  0
                                )}{" "}
                                Lessons
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box display="flex" alignItems="center">
                              <StarIcon
                                sx={{
                                  color: "#6366f1",
                                  fontSize: 20,
                                  mr: 1,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ color: "#475569", fontWeight: 500 }}
                              >
                                4.8 (24)
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>

                      <CardActions
                        sx={{
                          justifyContent: "space-between",
                          p: 2,
                          borderTop: `1px solid ${theme.palette.divider}`,
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<VisibilityIcon />}
                          onClick={() => handleViewCourse(course)}
                          sx={{
                            borderRadius: 2,
                            px: 2,
                            border: "2px solid rgba(99, 102, 241, 0.3)",
                            color: "#6366f1",
                            fontWeight: 600,
                            "&:hover": {
                              borderColor: "#6366f1",
                              background: "rgba(99, 102, 241, 0.05)",
                            },
                          }}
                        >
                          View
                        </Button>
                        <Box>
                          <Tooltip title="Edit Course">
                            <IconButton
                              onClick={() => onEditCourse(course)}
                              size="small"
                              sx={{
                                color: orange[600],
                                "&:hover": {
                                  bgcolor: `${orange[50]} !important`,
                                },
                              }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete Course">
                            <IconButton
                              onClick={() => handleDeleteCourse(course.id)}
                              size="small"
                              sx={{
                                color: "#ef4444",
                                ml: 1,
                                "&:hover": {
                                  bgcolor: "rgba(239, 68, 68, 0.08) !important",
                                },
                              }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </CardActions>
                    </ModernCard>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>

          {/* Course Details Dialog */}
          <Dialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            fullWidth
            maxWidth="md"
            PaperProps={{
              sx: {
                borderRadius: 4,
                minHeight: "70vh",
                background: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
                border: "1px solid rgba(99, 102, 241, 0.12)",
                boxShadow:
                  "0 8px 32px rgba(99, 102, 241, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            {loadingDetails ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="60vh"
              >
                <CircularProgress
                  size={60}
                  sx={{
                    color: "#6366f1",
                    filter: "drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))",
                  }}
                />
              </Box>
            ) : (
              <>
                <DialogTitle
                  sx={{
                    borderBottom: "1px solid rgba(99, 102, 241, 0.12)",
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box display="flex" alignItems="center">
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 48,
                          height: 48,
                          mr: 2,
                          background:
                            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                          color: "white",
                        }}
                      >
                        <SchoolIcon />
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#1e293b",
                          }}
                        >
                          {selectedCourse?.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#64748b",
                            fontWeight: 500,
                          }}
                        >
                          Course ID: {selectedCourse?.id}
                        </Typography>
                      </Box>
                    </Box>
                    <StatusChip status={selectedCourse?.status} />
                  </Box>
                </DialogTitle>
                <DialogContent dividers>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: "#475569",
                    }}
                  >
                    {selectedCourse?.description}
                  </Typography>

                  <Box display="flex" gap={2} mb={3}>
                    <Chip
                      icon={<PeopleIcon fontSize="small" />}
                      label={`${Math.floor(Math.random() * 100) + 20} Students`}
                      variant="outlined"
                      sx={{
                        borderColor: "rgba(99, 102, 241, 0.3)",
                        color: "#475569",
                      }}
                    />
                    <Chip
                      icon={<AssignmentIcon fontSize="small" />}
                      label={`${
                        Math.floor(Math.random() * 10) + 1
                      } Assignments`}
                      variant="outlined"
                      sx={{
                        borderColor: "rgba(99, 102, 241, 0.3)",
                        color: "#475569",
                      }}
                    />
                    <Chip
                      icon={<BarChartIcon fontSize="small" />}
                      label={`${Math.floor(Math.random() * 100)}% Completion`}
                      variant="outlined"
                      sx={{
                        borderColor: "rgba(16, 185, 129, 0.3)",
                        color: "#047857",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      mt: 3,
                      mb: 2,
                    }}
                  >
                    Course Modules
                  </Typography>

                  {modules.length === 0 ? (
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: "center",
                        borderRadius: 2,
                        background: "rgba(99, 102, 241, 0.05)",
                        border: "1px dashed rgba(99, 102, 241, 0.3)",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#64748b",
                        }}
                      >
                        No modules added yet
                      </Typography>
                      <ModernButton
                        variant="outlined"
                        startIcon={<AddIcon />}
                        color="#6366f1"
                        sx={{ mt: 2 }}
                      >
                        Add Module
                      </ModernButton>
                    </Paper>
                  ) : (
                    modules.map((module) => (
                      <Accordion
                        key={module.id}
                        sx={{
                          mb: 1,
                          borderRadius: 2,
                          background: "rgba(99, 102, 241, 0.03)",
                          border: "1px solid rgba(99, 102, 241, 0.1)",
                          "&:before": {
                            display: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          sx={{
                            borderRadius: 2,
                          }}
                        >
                          <Box display="flex" alignItems="center" width="100%">
                            <Box
                              sx={{
                                width: 36,
                                height: 36,
                                mr: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                  "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
                                borderRadius: "50%",
                                color: "#6366f1",
                              }}
                            >
                              {module.lessons.length > 0 ? (
                                <VideoLibraryIcon fontSize="small" />
                              ) : (
                                <ArticleIcon fontSize="small" />
                              )}
                            </Box>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                color: "#1e293b",
                              }}
                            >
                              {module.title}
                            </Typography>
                            <Box flexGrow={1} />
                            <Chip
                              label={`${module.lessons.length} Lessons`}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: "rgba(99, 102, 241, 0.3)",
                                color: "#475569",
                              }}
                            />
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            borderTop: "1px solid rgba(99, 102, 241, 0.1)",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#64748b",
                              mb: 2,
                            }}
                          >
                            {module.description}
                          </Typography>

                          {module.lessons.length === 0 ? (
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#64748b",
                              }}
                            >
                              No lessons added yet
                            </Typography>
                          ) : (
                            <Box>
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  fontWeight: 600,
                                  color: "#1e293b",
                                  mb: 1,
                                }}
                              >
                                Lessons:
                              </Typography>
                              {module.lessons.map((lesson) => (
                                <Box
                                  key={lesson.id}
                                  display="flex"
                                  alignItems="center"
                                  mb={1}
                                  px={2}
                                  py={1}
                                  sx={{
                                    borderRadius: 2,
                                    background: "rgba(99, 102, 241, 0.03)",
                                    "&:hover": {
                                      background: "rgba(99, 102, 241, 0.08)",
                                    },
                                  }}
                                >
                                  {lesson.type === "video" ? (
                                    <VideoLibraryIcon
                                      sx={{
                                        color: "#6366f1",
                                        fontSize: 20,
                                        mr: 2,
                                      }}
                                    />
                                  ) : (
                                    <ArticleIcon
                                      sx={{
                                        color: "#8b5cf6",
                                        fontSize: 20,
                                        mr: 2,
                                      }}
                                    />
                                  )}
                                  <Box flexGrow={1}>
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: "#1e293b",
                                      }}
                                    >
                                      {lesson.title}
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        color: "#64748b",
                                      }}
                                    >
                                      {lesson.duration || "10 min"}
                                    </Typography>
                                  </Box>
                                  <IconButton size="small">
                                    <MoreVertIcon
                                      sx={{
                                        color: "#64748b",
                                        fontSize: 20,
                                      }}
                                    />
                                  </IconButton>
                                </Box>
                              ))}
                            </Box>
                          )}
                        </AccordionDetails>
                      </Accordion>
                    ))
                  )}
                </DialogContent>
                <DialogActions
                  sx={{
                    borderTop: "1px solid rgba(99, 102, 241, 0.12)",
                    p: 2,
                  }}
                >
                  <ModernButton
                    onClick={handleCloseDialog}
                    variant="outlined"
                    color="#6366f1"
                  >
                    Close
                  </ModernButton>
                  <ModernButton
                    variant="contained"
                    color="#6366f1"
                    onClick={() => onEditCourse(selectedCourse)}
                  >
                    Edit Course
                  </ModernButton>
                </DialogActions>
              </>
            )}
          </Dialog>

          {/* Assignment Dialog */}
          <CreateAssignmentDialog
            open={assignmentDialogOpen}
            onClose={() => setAssignmentDialogOpen(false)}
            onAssignmentCreated={handleAssignmentCreated}
          />
        </Box>
      </Fade>
    </Container>
  );
};

export default InstructorDashboardView;
