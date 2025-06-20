// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Paper,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Button,
//   CircularProgress,
//   Alert,
//   Snackbar,
//   Card,
//   CardContent,
//   Avatar,
//   Chip,
//   IconButton,
//   useTheme,
//   alpha,
// } from "@mui/material";
// import {
//   Bar as BarChart,
//   Line as LineChart,
//   Pie as PieChart,
//   Doughnut as DoughnutChart,
// } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   LineElement,
//   ArcElement,
// } from "chart.js";
// import {
//   People as PeopleIcon,
//   School as SchoolIcon,
//   MenuBook as CourseIcon,
//   TrendingUp as TrendingUpIcon,
//   Download as DownloadIcon,
//   Refresh as RefreshIcon,
//   Analytics as AnalyticsIcon,
//   Speed as SpeedIcon,
// } from "@mui/icons-material";
// import ReportService from "../../../services/reportService";
// import { saveAs } from "file-saver";
// import adminService from "../../../services/adminService";

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   LineElement,
//   ArcElement
// );

// const DashboardDefaultContent = () => {
//   const theme = useTheme();

//   // Dashboard stats state
//   const [stats, setStats] = useState({
//     students: 0,
//     instructors: 0,
//     courses: 0,
//     loading: true,
//   });

//   const [chartData, setChartData] = useState([]);

//   // Report management state
//   const [timeRange, setTimeRange] = useState("monthly");
//   const [userActivityData, setUserActivityData] = useState(null);
//   const [coursePopularityData, setCoursePopularityData] = useState(null);
//   const [systemPerformanceData, setSystemPerformanceData] = useState(null);
//   const [reportLoading, setReportLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   // Modern color palette
//   const colors = {
//     primary: "#6366F1", // Indigo
//     secondary: "#EC4899", // Pink
//     success: "#10B981", // Emerald
//     warning: "#F59E0B", // Amber
//     info: "#3B82F6", // Blue
//     purple: "#8B5CF6", // Violet
//     teal: "#14B8A6", // Teal
//     orange: "#F97316", // Orange
//   };

//   // Fetch dashboard stats
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch users data
//         const users = await adminService.getAllUsers();

//         // Count students and instructors
//         const students = users.filter((user) => user.role === "student").length;
//         const instructors = users.filter(
//           (user) => user.role === "instructor"
//         ).length;

//         // Fetch courses data
//         const coursesResponse = await ReportService.fetchCoursePopularity();
//         const courses = coursesResponse.labels?.length || 0;

//         setStats({
//           students,
//           instructors,
//           courses,
//           loading: false,
//         });

//         // Prepare chart data
//         setChartData([
//           { name: "Students", count: students },
//           { name: "Instructors", count: instructors },
//           { name: "Courses", count: courses },
//         ]);
//       } catch (error) {
//         console.error("Failed to fetch dashboard data:", error);
//         setStats((prev) => ({ ...prev, loading: false }));
//       }
//     };

//     fetchData();
//   }, []);

//   // Fetch report data
//   useEffect(() => {
//     const loadReports = async () => {
//       try {
//         setReportLoading(true);
//         setError(null);
//         const [userActivity, coursePopularity, systemPerformance] =
//           await Promise.all([
//             ReportService.fetchUserActivity(timeRange),
//             ReportService.fetchCoursePopularity(),
//             ReportService.fetchSystemPerformance(),
//           ]);

//         setUserActivityData(userActivity);
//         setCoursePopularityData(coursePopularity);
//         setSystemPerformanceData(systemPerformance);
//       } catch (error) {
//         console.error("Error loading reports:", error);
//         setError("Failed to load reports. Please try again later.");
//       } finally {
//         setReportLoading(false);
//       }
//     };

//     loadReports();
//   }, [timeRange]);

//   const handleExport = async (reportType) => {
//     try {
//       setError(null);
//       const blob = await ReportService.exportReport(reportType, "pdf", {
//         timeRange,
//       });
//       saveAs(blob, `${reportType}_report.pdf`);
//       setSnackbarOpen(true);
//     } catch (err) {
//       console.error("Error exporting report:", err);
//       setError(err.message || "Failed to export report.");
//     }
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           usePointStyle: true,
//           padding: 20,
//           font: {
//             size: 12,
//             family: "'Inter', sans-serif",
//           },
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         titleColor: "#fff",
//         bodyColor: "#fff",
//         borderColor: colors.primary,
//         borderWidth: 1,
//         cornerRadius: 8,
//         displayColors: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             family: "'Inter', sans-serif",
//           },
//         },
//       },
//       y: {
//         grid: {
//           color: alpha("#000", 0.05),
//         },
//         ticks: {
//           font: {
//             family: "'Inter', sans-serif",
//           },
//         },
//       },
//     },
//   };

//   if (stats.loading) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           background: `linear-gradient(135deg, ${alpha(
//             colors.primary,
//             0.1
//           )} 0%, ${alpha(colors.secondary, 0.1)} 100%)`,
//         }}
//       >
//         <Box sx={{ textAlign: "center" }}>
//           <CircularProgress size={60} sx={{ color: colors.primary, mb: 2 }} />
//           <Typography variant="h6" color="text.secondary">
//             Loading Dashboard...
//           </Typography>
//         </Box>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: `linear-gradient(135deg, ${alpha(
//           colors.primary,
//           0.02
//         )} 0%, ${alpha(colors.secondary, 0.02)} 100%)`,
//         pb: 4,
//       }}
//     >
//       {/* Header Section */}
//       <Box
//         sx={{
//           background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
//           color: "white",
//           py: 6,
//           px: 3,
//           borderRadius: "0 0 24px 24px",
//           mb: 4,
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
//               'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="36" cy="12" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//           },
//         }}
//       >
//         <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Box>
//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontWeight: 700,
//                   mb: 1,
//                   background:
//                     "linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.8) 90%)",
//                   backgroundClip: "text",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 Admin Dashboard
//               </Typography>
//               <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
//                 Welcome back! Here's what's happening with your platform today.
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <IconButton
//                 sx={{
//                   bgcolor: alpha("#fff", 0.1),
//                   color: "white",
//                   "&:hover": { bgcolor: alpha("#fff", 0.2) },
//                 }}
//                 onClick={() => window.location.reload()}
//               >
//                 <RefreshIcon />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   bgcolor: alpha("#fff", 0.1),
//                   color: "white",
//                   "&:hover": { bgcolor: alpha("#fff", 0.2) },
//                 }}
//               >
//                 <AnalyticsIcon />
//               </IconButton>
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       <Container maxWidth="lg">
//         {/* Enhanced Stats Cards */}
//         <Grid
//           container
//           spacing={3}
//           sx={{ mb: 6, display: "flex", justifyContent: "center" }}
//         >
//           <Grid item xs={12} sm={6} lg={4}>
//             <Card
//               elevation={0}
//               sx={{
//                 background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.purple} 100%)`,
//                 color: "white",
//                 borderRadius: 3,
//                 position: "relative",
//                 overflow: "hidden",
//                 "&::before": {
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   right: 0,
//                   width: "100px",
//                   height: "100px",
//                   background:
//                     "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
//                   transform: "translate(30px, -30px)",
//                 },
//               }}
//             >
//               <CardContent sx={{ p: 3, position: "relative", zIndex: 1 }}>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                   <Avatar
//                     sx={{
//                       bgcolor: alpha("#fff", 0.2),
//                       color: "white",
//                       width: 56,
//                       height: 56,
//                       mr: 2,
//                     }}
//                   >
//                     <PeopleIcon sx={{ fontSize: 28 }} />
//                   </Avatar>
//                   <Box>
//                     <Typography
//                       variant="body2"
//                       sx={{ opacity: 0.8, fontSize: "0.875rem" }}
//                     >
//                       Total Students
//                     </Typography>
//                     <Typography
//                       variant="h4"
//                       sx={{ fontWeight: 700, lineHeight: 1 }}
//                     >
//                       {stats.students.toLocaleString()}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
//                   <Typography variant="body2" sx={{ opacity: 0.8 }}>
//                     Active learners
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} lg={4}>
//             <Card
//               elevation={0}
//               sx={{
//                 background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.orange} 100%)`,
//                 color: "white",
//                 borderRadius: 3,
//                 position: "relative",
//                 overflow: "hidden",
//                 "&::before": {
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   right: 0,
//                   width: "100px",
//                   height: "100px",
//                   background:
//                     "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
//                   transform: "translate(30px, -30px)",
//                 },
//               }}
//             >
//               <CardContent sx={{ p: 3, position: "relative", zIndex: 1 }}>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                   <Avatar
//                     sx={{
//                       bgcolor: alpha("#fff", 0.2),
//                       color: "white",
//                       width: 56,
//                       height: 56,
//                       mr: 2,
//                     }}
//                   >
//                     <SchoolIcon sx={{ fontSize: 28 }} />
//                   </Avatar>
//                   <Box>
//                     <Typography
//                       variant="body2"
//                       sx={{ opacity: 0.8, fontSize: "0.875rem" }}
//                     >
//                       Total Instructors
//                     </Typography>
//                     <Typography
//                       variant="h4"
//                       sx={{ fontWeight: 700, lineHeight: 1 }}
//                     >
//                       {stats.instructors.toLocaleString()}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
//                   <Typography variant="body2" sx={{ opacity: 0.8 }}>
//                     Expert educators
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} lg={4}>
//             <Card
//               elevation={0}
//               sx={{
//                 background: `linear-gradient(135deg, ${colors.success} 0%, ${colors.teal} 100%)`,
//                 color: "white",
//                 borderRadius: 3,
//                 position: "relative",
//                 overflow: "hidden",
//                 "&::before": {
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   right: 0,
//                   width: "100px",
//                   height: "100px",
//                   background:
//                     "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
//                   transform: "translate(30px, -30px)",
//                 },
//               }}
//             >
//               <CardContent sx={{ p: 3, position: "relative", zIndex: 1 }}>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                   <Avatar
//                     sx={{
//                       bgcolor: alpha("#fff", 0.2),
//                       color: "white",
//                       width: 56,
//                       height: 56,
//                       mr: 2,
//                     }}
//                   >
//                     <CourseIcon sx={{ fontSize: 28 }} />
//                   </Avatar>
//                   <Box>
//                     <Typography
//                       variant="body2"
//                       sx={{ opacity: 0.8, fontSize: "0.875rem" }}
//                     >
//                       Total Courses
//                     </Typography>
//                     <Typography
//                       variant="h4"
//                       sx={{ fontWeight: 700, lineHeight: 1 }}
//                     >
//                       {stats.courses.toLocaleString()}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
//                   <Typography variant="body2" sx={{ opacity: 0.8 }}>
//                     Learning paths
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         {/* Enhanced System Overview Chart */}
//         <Card
//           elevation={0}
//           sx={{
//             mb: 6,
//             borderRadius: 3,
//             border: "1px solid",
//             borderColor: alpha("#000", 0.08),
//             background: "#fff",
//           }}
//         >
//           <CardContent sx={{ p: 4 }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 mb: 3,
//               }}
//             >
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
//                   System Overview
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Platform statistics and growth metrics
//                 </Typography>
//               </Box>
//               <Chip
//                 label="Live Data"
//                 color="success"
//                 variant="outlined"
//                 sx={{ borderRadius: 2 }}
//               />
//             </Box>
//             <Box sx={{ height: 350 }}>
//               {chartData.length > 0 ? (
//                 <BarChart
//                   options={{
//                     ...chartOptions,
//                     plugins: {
//                       ...chartOptions.plugins,
//                       title: {
//                         display: false,
//                       },
//                     },
//                   }}
//                   data={{
//                     labels: chartData.map((item) => item.name),
//                     datasets: [
//                       {
//                         label: "Count",
//                         data: chartData.map((item) => item.count),
//                         backgroundColor: [
//                           alpha(colors.primary, 0.8),
//                           alpha(colors.secondary, 0.8),
//                           alpha(colors.success, 0.8),
//                         ],
//                         borderColor: [
//                           colors.primary,
//                           colors.secondary,
//                           colors.success,
//                         ],
//                         borderWidth: 2,
//                         borderRadius: 8,
//                         borderSkipped: false,
//                       },
//                     ],
//                   }}
//                 />
//               ) : (
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "100%",
//                   }}
//                 >
//                   <CircularProgress sx={{ color: colors.primary }} />
//                 </Box>
//               )}
//             </Box>
//           </CardContent>
//         </Card>

//         {/* Enhanced Reports Section */}
//         <Card
//           elevation={0}
//           sx={{
//             borderRadius: 3,
//             border: "1px solid",
//             borderColor: alpha("#000", 0.08),
//             background: "#fff",
//           }}
//         >
//           <CardContent sx={{ p: 4 }}>
//             {/* Reports Header */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "flex-start",
//                 mb: 4,
//               }}
//             >
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
//                   Analytics & Reports
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ mb: 3 }}
//                 >
//                   Comprehensive insights into platform performance and user
//                   engagement
//                 </Typography>

//                 <FormControl size="small" sx={{ minWidth: 200 }}>
//                   <InputLabel id="time-range-label">Time Range</InputLabel>
//                   <Select
//                     labelId="time-range-label"
//                     value={timeRange}
//                     label="Time Range"
//                     onChange={(e) => setTimeRange(e.target.value)}
//                     sx={{ borderRadius: 2 }}
//                   >
//                     <MenuItem value="daily">Daily</MenuItem>
//                     <MenuItem value="weekly">Weekly</MenuItem>
//                     <MenuItem value="monthly">Monthly</MenuItem>
//                     <MenuItem value="yearly">Yearly</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box>

//               <Box sx={{ display: "flex", gap: 2 }}>
//                 <Button
//                   variant="outlined"
//                   startIcon={<DownloadIcon />}
//                   onClick={() => handleExport("user_activity")}
//                   disabled={!userActivityData}
//                   sx={{
//                     borderRadius: 2,
//                     borderColor: colors.primary,
//                     color: colors.primary,
//                     "&:hover": {
//                       borderColor: colors.primary,
//                       bgcolor: alpha(colors.primary, 0.04),
//                     },
//                   }}
//                 >
//                   Export User Activity
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   startIcon={<DownloadIcon />}
//                   onClick={() => handleExport("course_popularity")}
//                   disabled={!coursePopularityData}
//                   sx={{
//                     borderRadius: 2,
//                     borderColor: colors.secondary,
//                     color: colors.secondary,
//                     "&:hover": {
//                       borderColor: colors.secondary,
//                       bgcolor: alpha(colors.secondary, 0.04),
//                     },
//                   }}
//                 >
//                   Export Course Data
//                 </Button>
//               </Box>
//             </Box>

//             {error && (
//               <Alert
//                 severity="error"
//                 sx={{
//                   mb: 3,
//                   borderRadius: 2,
//                   "& .MuiAlert-icon": {
//                     color: "#d32f2f",
//                   },
//                 }}
//               >
//                 {error}
//               </Alert>
//             )}

//             {reportLoading ? (
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: "400px",
//                 }}
//               >
//                 <Box sx={{ textAlign: "center" }}>
//                   <CircularProgress
//                     size={60}
//                     sx={{ color: colors.primary, mb: 2 }}
//                   />
//                   <Typography variant="h6" color="text.secondary">
//                     Loading Analytics...
//                   </Typography>
//                 </Box>
//               </Box>
//             ) : (
//               <Grid
//                 container
//                 spacing={4}
//                 sx={{ display: "flex", flexDirection: "column" }}
//               >
//                 {/* User Activity Chart */}
//                 <Grid item>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 3,
//                       height: 450,
//                       borderRadius: 3,
//                       border: "1px solid",
//                       borderColor: alpha("#000", 0.06),
//                       background: `linear-gradient(135deg, ${alpha(
//                         colors.info,
//                         0.02
//                       )} 0%, ${alpha(colors.teal, 0.02)} 100%)`,
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                       <SpeedIcon sx={{ color: colors.info, mr: 1 }} />
//                       <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                         User Activity Trends
//                       </Typography>
//                     </Box>
//                     <Box sx={{ height: 350 }}>
//                       {userActivityData ? (
//                         <LineChart
//                           options={{
//                             ...chartOptions,
//                             plugins: {
//                               ...chartOptions.plugins,
//                               title: { display: false },
//                             },
//                           }}
//                           data={{
//                             labels: userActivityData.labels,
//                             datasets: [
//                               {
//                                 label: "Active Users",
//                                 data: userActivityData.activeUsers,
//                                 borderColor: colors.info,
//                                 backgroundColor: alpha(colors.info, 0.1),
//                                 borderWidth: 3,
//                                 fill: true,
//                                 tension: 0.4,
//                                 pointBackgroundColor: colors.info,
//                                 pointBorderColor: "#fff",
//                                 pointBorderWidth: 2,
//                                 pointRadius: 6,
//                               },
//                               {
//                                 label: "New Signups",
//                                 data: userActivityData.newSignups,
//                                 borderColor: colors.teal,
//                                 backgroundColor: alpha(colors.teal, 0.1),
//                                 borderWidth: 3,
//                                 fill: true,
//                                 tension: 0.4,
//                                 pointBackgroundColor: colors.teal,
//                                 pointBorderColor: "#fff",
//                                 pointBorderWidth: 2,
//                                 pointRadius: 6,
//                               },
//                             ],
//                           }}
//                         />
//                       ) : (
//                         <Box
//                           sx={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             height: "100%",
//                           }}
//                         >
//                           <Typography variant="body1" color="text.secondary">
//                             No user activity data available
//                           </Typography>
//                         </Box>
//                       )}
//                     </Box>
//                   </Paper>
//                 </Grid>

//                 {/* Course Popularity Chart */}
//                 <Grid item>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 3,
//                       height: 450,
//                       borderRadius: 3,
//                       border: "1px solid",
//                       borderColor: alpha("#000", 0.06),
//                       background: `linear-gradient(135deg, ${alpha(
//                         colors.secondary,
//                         0.02
//                       )} 0%, ${alpha(colors.purple, 0.02)} 100%)`,
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                       <CourseIcon sx={{ color: colors.secondary, mr: 1 }} />
//                       <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                         Course Popularity
//                       </Typography>
//                     </Box>
//                     <Box sx={{ height: 350 }}>
//                       {coursePopularityData ? (
//                         <DoughnutChart
//                           options={{
//                             ...chartOptions,
//                             plugins: {
//                               ...chartOptions.plugins,
//                               title: { display: false },
//                             },
//                             cutout: "60%",
//                           }}
//                           data={{
//                             labels: coursePopularityData.labels,
//                             datasets: [
//                               {
//                                 label: "Enrollments",
//                                 data: coursePopularityData.enrollments,
//                                 backgroundColor: [
//                                   alpha(colors.secondary, 0.8),
//                                   alpha(colors.purple, 0.8),
//                                   alpha(colors.info, 0.8),
//                                   alpha(colors.teal, 0.8),
//                                   alpha(colors.orange, 0.8),
//                                 ],
//                                 borderColor: [
//                                   colors.secondary,
//                                   colors.purple,
//                                   colors.info,
//                                   colors.teal,
//                                   colors.orange,
//                                 ],
//                                 borderWidth: 2,
//                               },
//                             ],
//                           }}
//                         />
//                       ) : (
//                         <Box
//                           sx={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             height: "100%",
//                           }}
//                         >
//                           <Typography variant="body1" color="text.secondary">
//                             No course popularity data available
//                           </Typography>
//                         </Box>
//                       )}
//                     </Box>
//                   </Paper>
//                 </Grid>

//                 {/* System Performance Chart */}
//                 <Grid item>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 3,
//                       borderRadius: 3,
//                       border: "1px solid",
//                       borderColor: alpha("#000", 0.06),
//                       background: `linear-gradient(135deg, ${alpha(
//                         colors.warning,
//                         0.02
//                       )} 0%, ${alpha(colors.success, 0.02)} 100%)`,
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                       <AnalyticsIcon sx={{ color: colors.warning, mr: 1 }} />
//                       <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                         System Performance Metrics
//                       </Typography>
//                     </Box>
//                     <Box sx={{ height: 350 }}>
//                       {systemPerformanceData ? (
//                         <BarChart
//                           options={{
//                             ...chartOptions,
//                             plugins: {
//                               ...chartOptions.plugins,
//                               title: { display: false },
//                             },
//                           }}
//                           data={{
//                             labels: systemPerformanceData.labels,
//                             datasets: [
//                               {
//                                 label: "Response Time (ms)",
//                                 data: systemPerformanceData.responseTimes,
//                                 backgroundColor: alpha(colors.warning, 0.8),
//                                 borderColor: colors.warning,
//                                 borderWidth: 2,
//                                 borderRadius: 6,
//                                 borderSkipped: false,
//                               },
//                               {
//                                 label: "Uptime (%)",
//                                 data: systemPerformanceData.uptimePercentages,
//                                 backgroundColor: alpha(colors.success, 0.8),
//                                 borderColor: colors.success,
//                                 borderWidth: 2,
//                                 borderRadius: 6,
//                                 borderSkipped: false,
//                               },
//                             ],
//                           }}
//                         />
//                       ) : (
//                         <Box
//                           sx={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             height: "100%",
//                           }}
//                         >
//                           <Typography variant="body1" color="text.secondary">
//                             No system performance data available
//                           </Typography>
//                         </Box>
//                       )}
//                     </Box>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             )}
//           </CardContent>
//         </Card>
//       </Container>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={() => setSnackbarOpen(false)}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//       >
//         <Alert
//           onClose={() => setSnackbarOpen(false)}
//           severity="success"
//           sx={{
//             width: "100%",
//             borderRadius: 2,
//             "& .MuiAlert-icon": {
//               color: colors.success,
//             },
//           }}
//         >
//           Report exported successfully!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default DashboardDefaultContent;
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  CircularProgress,
  Alert,
  Snackbar,
  Card,
  CardContent,
  Avatar,
  Chip,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Bar as BarChart,
  Line as LineChart,
  Pie as PieChart,
  Doughnut as DoughnutChart,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import {
  People as PeopleIcon,
  School as SchoolIcon,
  MenuBook as CourseIcon,
  TrendingUp as TrendingUpIcon,
  Download as DownloadIcon,
  Refresh as RefreshIcon,
  Analytics as AnalyticsIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";
import ReportService from "../../../services/reportService";
import { saveAs } from "file-saver";
import adminService from "../../../services/adminService";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const DashboardDefaultContent = () => {
  const theme = useTheme();

  // Dashboard stats state
  const [stats, setStats] = useState({
    students: 0,
    instructors: 0,
    courses: 0,
    loading: true,
  });

  const [chartData, setChartData] = useState([]);

  // Report management state
  const [timeRange, setTimeRange] = useState("monthly");
  const [userActivityData, setUserActivityData] = useState(null);
  const [coursePopularityData, setCoursePopularityData] = useState(null);
  const [systemPerformanceData, setSystemPerformanceData] = useState(null);
  const [reportLoading, setReportLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Modern professional color palette
  const colors = {
    primary: "#4e73df", // Soft blue
    secondary: "#1cc88a", // Green
    success: "#36b9cc", // Teal
    warning: "#f6c23e", // Yellow
    info: "#858796", // Gray
    purple: "#6f42c1", // Purple
    teal: "#20c9a6", // Bright teal
    orange: "#fd7e14", // Orange
    lightBg: "#f8f9fc", // Very light gray background
    cardBorder: "#e3e6f0", // Light border color
  };

  // Fetch dashboard stats
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users data
        const users = await adminService.getAllUsers();

        // Count students and instructors
        const students = users.filter((user) => user.role === "student").length;
        const instructors = users.filter(
          (user) => user.role === "instructor"
        ).length;

        // Fetch courses data
        const coursesResponse = await ReportService.fetchCoursePopularity();
        const courses = coursesResponse.labels?.length || 0;

        setStats({
          students,
          instructors,
          courses,
          loading: false,
        });

        // Prepare chart data
        setChartData([
          { name: "Students", count: students },
          { name: "Instructors", count: instructors },
          { name: "Courses", count: courses },
        ]);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);

  // Fetch report data
  useEffect(() => {
    const loadReports = async () => {
      try {
        setReportLoading(true);
        setError(null);
        const [userActivity, coursePopularity, systemPerformance] =
          await Promise.all([
            ReportService.fetchUserActivity(timeRange),
            ReportService.fetchCoursePopularity(),
            ReportService.fetchSystemPerformance(),
          ]);

        setUserActivityData(userActivity);
        setCoursePopularityData(coursePopularity);
        setSystemPerformanceData(systemPerformance);
      } catch (error) {
        console.error("Error loading reports:", error);
        setError("Failed to load reports. Please try again later.");
      } finally {
        setReportLoading(false);
      }
    };

    loadReports();
  }, [timeRange]);

  const handleExport = async (reportType) => {
    try {
      setError(null);
      const blob = await ReportService.exportReport(reportType, "pdf", {
        timeRange,
      });
      saveAs(blob, `${reportType}_report.pdf`);
      setSnackbarOpen(true);
    } catch (err) {
      console.error("Error exporting report:", err);
      setError(err.message || "Failed to export report.");
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          color: theme.palette.text.primary,
        },
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: colors.primary,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
          color: theme.palette.text.secondary,
        },
      },
      y: {
        grid: {
          color: alpha(theme.palette.text.secondary, 0.1),
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
          color: theme.palette.text.secondary,
        },
      },
    },
  };

  if (stats.loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: colors.lightBg,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress size={60} sx={{ color: colors.primary, mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            Loading Dashboard...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: colors.lightBg,
        pb: 4,
      }}
    >
      {/* Header Section - Simplified */}
      <Box
        sx={{
          backgroundColor: "white",
          py: 4,
          px: 3,
          borderBottom: `1px solid ${colors.cardBorder}`,
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: theme.palette.text.primary,
                }}
              >
                Dashboard Overview
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Monitor your platform's performance and key metrics
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<RefreshIcon />}
                onClick={() => window.location.reload()}
                sx={{
                  borderRadius: 2,
                  borderColor: colors.cardBorder,
                  color: theme.palette.text.secondary,
                }}
              >
                Refresh
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Stats Cards - Cleaner Design */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                border: `1px solid ${colors.cardBorder}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[2],
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: alpha(colors.primary, 0.1),
                      color: colors.primary,
                      width: 48,
                      height: 48,
                      mr: 2,
                    }}
                  >
                    <PeopleIcon />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      Total Students
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 600, lineHeight: 1.2 }}
                    >
                      {stats.students.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  <TrendingUpIcon
                    sx={{ fontSize: 14, mr: 0.5, color: colors.success }}
                  />
                  12% increase from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                border: `1px solid ${colors.cardBorder}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[2],
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: alpha(colors.secondary, 0.1),
                      color: colors.secondary,
                      width: 48,
                      height: 48,
                      mr: 2,
                    }}
                  >
                    <SchoolIcon />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      Total Instructors
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 600, lineHeight: 1.2 }}
                    >
                      {stats.instructors.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  <TrendingUpIcon
                    sx={{ fontSize: 14, mr: 0.5, color: colors.success }}
                  />
                  8% increase from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                border: `1px solid ${colors.cardBorder}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[2],
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: alpha(colors.warning, 0.1),
                      color: colors.warning,
                      width: 48,
                      height: 48,
                      mr: 2,
                    }}
                  >
                    <CourseIcon />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      Total Courses
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 600, lineHeight: 1.2 }}
                    >
                      {stats.courses.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  <TrendingUpIcon
                    sx={{ fontSize: 14, mr: 0.5, color: colors.success }}
                  />
                  15% increase from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* System Overview Chart - Cleaner Design */}
        <Card
          elevation={0}
          sx={{
            mb: 4,
            borderRadius: 2,
            border: `1px solid ${colors.cardBorder}`,
            backgroundColor: "white",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Platform Growth
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Overview of your platform's key metrics
                </Typography>
              </Box>
              <Chip
                label="Updated today"
                color="primary"
                size="small"
                variant="outlined"
                sx={{ borderRadius: 1 }}
              />
            </Box>
            <Box sx={{ height: 300 }}>
              {chartData.length > 0 ? (
                <BarChart
                  options={{
                    ...chartOptions,
                    plugins: {
                      ...chartOptions.plugins,
                      title: {
                        display: false,
                      },
                    },
                  }}
                  data={{
                    labels: chartData.map((item) => item.name),
                    datasets: [
                      {
                        label: "Count",
                        data: chartData.map((item) => item.count),
                        backgroundColor: [
                          alpha(colors.primary, 0.7),
                          alpha(colors.secondary, 0.7),
                          alpha(colors.warning, 0.7),
                        ],
                        borderColor: [
                          colors.primary,
                          colors.secondary,
                          colors.warning,
                        ],
                        borderWidth: 1,
                        borderRadius: 4,
                        borderSkipped: false,
                      },
                    ],
                  }}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <CircularProgress sx={{ color: colors.primary }} />
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>

        {/* Reports Section - Cleaner Design */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 2,
            border: `1px solid ${colors.cardBorder}`,
            backgroundColor: "white",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            {/* Reports Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 3,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Analytics Reports
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Detailed insights into platform performance
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <FormControl size="small" sx={{ minWidth: 180 }}>
                  <InputLabel id="time-range-label">Time Range</InputLabel>
                  <Select
                    labelId="time-range-label"
                    value={timeRange}
                    label="Time Range"
                    onChange={(e) => setTimeRange(e.target.value)}
                    sx={{ borderRadius: 1 }}
                  >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="yearly">Yearly</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  onClick={() => handleExport("user_activity")}
                  disabled={!userActivityData}
                  sx={{
                    borderRadius: 1,
                    backgroundColor: colors.primary,
                    "&:hover": {
                      backgroundColor: alpha(colors.primary, 0.9),
                    },
                  }}
                >
                  Export Data
                </Button>
              </Box>
            </Box>

            {error && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  borderRadius: 1,
                }}
                onClose={() => setError(null)}
              >
                {error}
              </Alert>
            )}

            {reportLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <CircularProgress
                    size={60}
                    sx={{ color: colors.primary, mb: 2 }}
                  />
                  <Typography variant="body1" color="text.secondary">
                    Loading Analytics...
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Grid container spacing={3}>
                {/* User Activity Chart */}
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      height: 350,
                      borderRadius: 2,
                      border: `1px solid ${colors.cardBorder}`,
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <SpeedIcon
                        sx={{
                          color: colors.primary,
                          mr: 1,
                          fontSize: "1.25rem",
                        }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        User Activity
                      </Typography>
                    </Box>
                    <Box sx={{ height: 280 }}>
                      {userActivityData ? (
                        <LineChart
                          options={{
                            ...chartOptions,
                            plugins: {
                              ...chartOptions.plugins,
                              title: { display: false },
                            },
                          }}
                          data={{
                            labels: userActivityData.labels,
                            datasets: [
                              {
                                label: "Active Users",
                                data: userActivityData.activeUsers,
                                borderColor: colors.primary,
                                backgroundColor: alpha(colors.primary, 0.05),
                                borderWidth: 2,
                                fill: true,
                                tension: 0.3,
                                pointBackgroundColor: colors.primary,
                                pointBorderColor: "#fff",
                                pointBorderWidth: 1,
                                pointRadius: 4,
                              },
                            ],
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <Typography variant="body1" color="text.secondary">
                            No user activity data
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </Grid>

                {/* Course Popularity Chart */}
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      height: 350,
                      borderRadius: 2,
                      border: `1px solid ${colors.cardBorder}`,
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <CourseIcon
                        sx={{
                          color: colors.secondary,
                          mr: 1,
                          fontSize: "1.25rem",
                        }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Course Popularity
                      </Typography>
                    </Box>
                    <Box sx={{ height: 280 }}>
                      {coursePopularityData ? (
                        <DoughnutChart
                          options={{
                            ...chartOptions,
                            plugins: {
                              ...chartOptions.plugins,
                              title: { display: false },
                            },
                            cutout: "70%",
                          }}
                          data={{
                            labels: coursePopularityData.labels,
                            datasets: [
                              {
                                label: "Enrollments",
                                data: coursePopularityData.enrollments,
                                backgroundColor: [
                                  alpha(colors.primary, 0.7),
                                  alpha(colors.secondary, 0.7),
                                  alpha(colors.warning, 0.7),
                                  alpha(colors.info, 0.7),
                                  alpha(colors.purple, 0.7),
                                ],
                                borderColor: [
                                  colors.primary,
                                  colors.secondary,
                                  colors.warning,
                                  colors.info,
                                  colors.purple,
                                ],
                                borderWidth: 1,
                              },
                            ],
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <Typography variant="body1" color="text.secondary">
                            No course data
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </Grid>

                {/* System Performance Chart */}
                <Grid item xs={12}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      height: 350,
                      borderRadius: 2,
                      border: `1px solid ${colors.cardBorder}`,
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <AnalyticsIcon
                        sx={{
                          color: colors.warning,
                          mr: 1,
                          fontSize: "1.25rem",
                        }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        System Performance
                      </Typography>
                    </Box>
                    <Box sx={{ height: 280 }}>
                      {systemPerformanceData ? (
                        <BarChart
                          options={{
                            ...chartOptions,
                            plugins: {
                              ...chartOptions.plugins,
                              title: { display: false },
                            },
                          }}
                          data={{
                            labels: systemPerformanceData.labels,
                            datasets: [
                              {
                                label: "Response Time (ms)",
                                data: systemPerformanceData.responseTimes,
                                backgroundColor: alpha(colors.warning, 0.7),
                                borderColor: colors.warning,
                                borderWidth: 1,
                                borderRadius: 4,
                                borderSkipped: false,
                              },
                              {
                                label: "Uptime (%)",
                                data: systemPerformanceData.uptimePercentages,
                                backgroundColor: alpha(colors.success, 0.7),
                                borderColor: colors.success,
                                borderWidth: 1,
                                borderRadius: 4,
                                borderSkipped: false,
                              },
                            ],
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <Typography variant="body1" color="text.secondary">
                            No performance data
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%", borderRadius: 1 }}
        >
          Report exported successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DashboardDefaultContent;
