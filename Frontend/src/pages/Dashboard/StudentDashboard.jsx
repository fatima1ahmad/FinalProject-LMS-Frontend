// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import {
// // // // // // // // // // //   Box,
// // // // // // // // // // //   Container,
// // // // // // // // // // //   Typography,
// // // // // // // // // // //   Grid,
// // // // // // // // // // //   Button,
// // // // // // // // // // //   CircularProgress,
// // // // // // // // // // // } from "@mui/material";
// // // // // // // // // // // import { styled } from "@mui/system";
// // // // // // // // // // // import CourseCard from "../../components/studant/CourseCard";
// // // // // // // // // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // // // // // // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // // // // // // // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // // // // // // // // // import CourseService from "../../services/StudentService";
// // // // // // // // // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // // // // // // // // import { dashboardStyles } from "../../theme/studentStyle";
// // // // // // // // // // // import InProgressCourses from "../../components/studant/Inprogress";
// // // // // // // // // // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// // // // // // // // // // // import UserHeader from "../../components/common/Header/Header";
// // // // // // // // // // // const DashboardContainer = styled(Box)(({ theme }) => ({
// // // // // // // // // // //   display: "flex",
// // // // // // // // // // //   minHeight: "100vh",
// // // // // // // // // // //   backgroundColor: theme.palette.grey[50], // Very light grey background
// // // // // // // // // // // }));

// // // // // // // // // // // const MainContent = styled(Box)({
// // // // // // // // // // //   flexGrow: 1,
// // // // // // // // // // //   padding: "24px",
// // // // // // // // // // //   backgroundColor: "#f8fbff", // Very light blue background
// // // // // // // // // // // });

// // // // // // // // // // // const StudentDashboard = () => {
// // // // // // // // // // //   const [courses, setCourses] = useState([]);
// // // // // // // // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // // // // // // // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // // // // // // // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // // // // // // // // //   const [activeTab, setActiveTab] = useState("all");
// // // // // // // // // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // // // // // // // // //     useState(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         setLoading(true);
// // // // // // // // // // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // // // // // // // // // //           [
// // // // // // // // // // //             CourseService.getAllCourses(),
// // // // // // // // // // //             EnrollmentService.getUserEnrollments(),
// // // // // // // // // // //           ]
// // // // // // // // // // //         );

// // // // // // // // // // //         const allCourses = Array.isArray(allCoursesResponse)
// // // // // // // // // // //           ? allCoursesResponse
// // // // // // // // // // //           : allCoursesResponse?.data || [];

// // // // // // // // // // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // // // // // // // // // //           ? userEnrollmentsResponse
// // // // // // // // // // //           : userEnrollmentsResponse?.data || [];

// // // // // // // // // // //         setCourses(allCourses);
// // // // // // // // // // //         setEnrolledCourses(userEnrollments);
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //         setCourses([]);
// // // // // // // // // // //         setEnrolledCourses([]);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchData();
// // // // // // // // // // //   }, []);
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (selectedCourseForAssignments) {
// // // // // // // // // // //       console.log(
// // // // // // // // // // //         "✅ Switching to assignments tab for course:",
// // // // // // // // // // //         selectedCourseForAssignments
// // // // // // // // // // //       );
// // // // // // // // // // //       setActiveTab("assignments");
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [selectedCourseForAssignments]);

// // // // // // // // // // //   const handleEnrollClick = (course) => {
// // // // // // // // // // //     setSelectedCourse(course);
// // // // // // // // // // //     setEnrollmentDialogOpen(true);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleViewProgress = (course) => {
// // // // // // // // // // //     setSelectedCourse(course);
// // // // // // // // // // //     setProgressDialogOpen(true);
// // // // // // // // // // //   };
// // // // // // // // // // //   const handleViewAssignments = (course) => {
// // // // // // // // // // //     setSelectedCourseForAssignments(course);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleEnroll = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const token = localStorage.getItem("access-token");
// // // // // // // // // // //       if (!token) {
// // // // // // // // // // //         console.error("No authentication token found");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // // // // // // // // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // // // // // // // // // //       setEnrolledCourses(updatedEnrollments);
// // // // // // // // // // //       setEnrollmentDialogOpen(false);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error enrolling:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const filteredCourses =
// // // // // // // // // // //     activeTab === "enrolled"
// // // // // // // // // // //       ? (Array.isArray(courses) ? courses : []).filter((course) =>
// // // // // // // // // // //           (Array.isArray(enrolledCourses) ? enrolledCourses : []).some(
// // // // // // // // // // //             (enrollment) => enrollment.course_id === course.id
// // // // // // // // // // //           )
// // // // // // // // // // //         )
// // // // // // // // // // //       : Array.isArray(courses)
// // // // // // // // // // //       ? courses
// // // // // // // // // // //       : [];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <DashboardContainer>
// // // // // // // // // // //       <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

// // // // // // // // // // //       <MainContent>
// // // // // // // // // // //         <Container maxWidth="xl">
// // // // // // // // // // //           <Box
// // // // // // // // // // //             sx={{
// // // // // // // // // // //               ...dashboardStyles.header,
// // // // // // // // // // //               backgroundColor: "#e3f2fd", // Light blue header background
// // // // // // // // // // //               padding: "16px 24px",
// // // // // // // // // // //               borderRadius: "8px",
// // // // // // // // // // //               marginBottom: "24px",
// // // // // // // // // // //               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
// // // // // // // // // // //             }}
// // // // // // // // // // //           >
// // // // // // // // // // //             <Typography
// // // // // // // // // // //               variant="h4"
// // // // // // // // // // //               component="h1"
// // // // // // // // // // //               sx={{
// // // // // // // // // // //                 ...dashboardStyles.title,
// // // // // // // // // // //                 color: "#1976d2", // Primary blue color for title
// // // // // // // // // // //                 fontWeight: 600,
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               {activeTab === "all"
// // // // // // // // // // //                 ? "All Courses"
// // // // // // // // // // //                 : activeTab === "enrolled"
// // // // // // // // // // //                 ? "My Courses"
// // // // // // // // // // //                 : activeTab === "progress"
// // // // // // // // // // //                 ? "My Progress"
// // // // // // // // // // //                 : activeTab === "assignments"
// // // // // // // // // // //                 ? "My Assignments"
// // // // // // // // // // //                 : ""}
// // // // // // // // // // //             </Typography>
// // // // // // // // // // //           </Box>

// // // // // // // // // // //           {activeTab === "progress" ? (
// // // // // // // // // // //             <InProgressCourses />
// // // // // // // // // // //           ) : activeTab === "assignments" ? (
// // // // // // // // // // //             <AssignmentList
// // // // // // // // // // //               courseId={selectedCourseForAssignments?.id}
// // // // // // // // // // //               onBack={() => setActiveTab("enrolled")}
// // // // // // // // // // //             />
// // // // // // // // // // //           ) : loading ? (
// // // // // // // // // // //             <Box
// // // // // // // // // // //               sx={{
// // // // // // // // // // //                 ...dashboardStyles.loadingContainer,
// // // // // // // // // // //                 backgroundColor: "rgba(227, 242, 253, 0.5)", // Semi-transparent light blue
// // // // // // // // // // //                 borderRadius: "8px",
// // // // // // // // // // //                 padding: "40px",
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <CircularProgress sx={{ color: "#42a5f5" }} />{" "}
// // // // // // // // // // //               {/* Light blue progress */}
// // // // // // // // // // //             </Box>
// // // // // // // // // // //           ) : (
// // // // // // // // // // //             <Grid container spacing={4}>
// // // // // // // // // // //               {filteredCourses.length > 0 ? (
// // // // // // // // // // //                 filteredCourses.map((course) => {
// // // // // // // // // // //                   const enrollment = (
// // // // // // // // // // //                     Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // // // // // // //                   ).find((enroll) => enroll.course_id === course.id);

// // // // // // // // // // //                   const isEnrolled = !!enrollment;

// // // // // // // // // // //                   const courseWithEnrollment = {
// // // // // // // // // // //                     ...course,
// // // // // // // // // // //                     enrollmentId: enrollment?.id || null,
// // // // // // // // // // //                   };

// // // // // // // // // // //                   return (
// // // // // // // // // // //                     <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // // // // // //                       <CourseCard
// // // // // // // // // // //                         course={courseWithEnrollment}
// // // // // // // // // // //                         isEnrolled={isEnrolled}
// // // // // // // // // // //                         onEnrollClick={handleEnrollClick}
// // // // // // // // // // //                         onViewProgressClick={handleViewProgress}
// // // // // // // // // // //                         onViewAssignmentsClick={handleViewAssignments}
// // // // // // // // // // //                       />
// // // // // // // // // // //                     </Grid>
// // // // // // // // // // //                   );
// // // // // // // // // // //                 })
// // // // // // // // // // //               ) : (
// // // // // // // // // // //                 <Grid item xs={12}>
// // // // // // // // // // //                   <Box
// // // // // // // // // // //                     sx={{
// // // // // // // // // // //                       backgroundColor: "#e3f2fd",
// // // // // // // // // // //                       padding: "20px",
// // // // // // // // // // //                       borderRadius: "8px",
// // // // // // // // // // //                       textAlign: "center",
// // // // // // // // // // //                     }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Typography variant="body1" sx={{ color: "#1565c0" }}>
// // // // // // // // // // //                       No courses found
// // // // // // // // // // //                     </Typography>
// // // // // // // // // // //                   </Box>
// // // // // // // // // // //                 </Grid>
// // // // // // // // // // //               )}
// // // // // // // // // // //             </Grid>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </Container>
// // // // // // // // // // //       </MainContent>

// // // // // // // // // // //       <EnrollmentDialog
// // // // // // // // // // //         open={enrollmentDialogOpen}
// // // // // // // // // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // // // // // // // // //         course={selectedCourse}
// // // // // // // // // // //         onEnroll={handleEnroll}
// // // // // // // // // // //       />

// // // // // // // // // // //       <ProgressDialog
// // // // // // // // // // //         open={progressDialogOpen}
// // // // // // // // // // //         onClose={() => setProgressDialogOpen(false)}
// // // // // // // // // // //         course={selectedCourse}
// // // // // // // // // // //       />
// // // // // // // // // // //     </DashboardContainer>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default StudentDashboard;
// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import {
// // // // // // // // // // //   Box,
// // // // // // // // // // //   Container,
// // // // // // // // // // //   Typography,
// // // // // // // // // // //   Grid,
// // // // // // // // // // //   Button,
// // // // // // // // // // //   CircularProgress,
// // // // // // // // // // //   Card,
// // // // // // // // // // //   CardContent,
// // // // // // // // // // // } from "@mui/material";
// // // // // // // // // // // import { styled } from "@mui/system";
// // // // // // // // // // // import CourseCard from "../../components/studant/CourseCard";
// // // // // // // // // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // // // // // // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // // // // // // // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // // // // // // // // // import CourseService from "../../services/StudentService";
// // // // // // // // // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // // // // // // // // import { dashboardStyles } from "../../theme/studentStyle";
// // // // // // // // // // // import InProgressCourses from "../../components/studant/Inprogress";
// // // // // // // // // // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// // // // // // // // // // // import UserHeader from "../../components/common/Header/Header";

// // // // // // // // // // // const DashboardContainer = styled(Box)(({ theme }) => ({
// // // // // // // // // // //   display: "flex",
// // // // // // // // // // //   minHeight: "100vh",
// // // // // // // // // // //   backgroundColor: theme.palette.grey[50],
// // // // // // // // // // // }));

// // // // // // // // // // // const MainContent = styled(Box)({
// // // // // // // // // // //   flexGrow: 1,
// // // // // // // // // // //   padding: "24px",
// // // // // // // // // // //   backgroundColor: "#f8fbff",
// // // // // // // // // // // });

// // // // // // // // // // // const StudentDashboard = () => {
// // // // // // // // // // //   const [courses, setCourses] = useState([]);
// // // // // // // // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // // // // // // // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // // // // // // // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // // // // // // // // //   const [activeTab, setActiveTab] = useState("dashboard"); // تغيير القيمة الافتراضية إلى dashboard
// // // // // // // // // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // // // // // // // // //     useState(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         setLoading(true);
// // // // // // // // // // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // // // // // // // // // //           [
// // // // // // // // // // //             CourseService.getAllCourses(),
// // // // // // // // // // //             EnrollmentService.getUserEnrollments(),
// // // // // // // // // // //           ]
// // // // // // // // // // //         );

// // // // // // // // // // //         const allCourses = Array.isArray(allCoursesResponse)
// // // // // // // // // // //           ? allCoursesResponse
// // // // // // // // // // //           : allCoursesResponse?.data || [];

// // // // // // // // // // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // // // // // // // // // //           ? userEnrollmentsResponse
// // // // // // // // // // //           : userEnrollmentsResponse?.data || [];

// // // // // // // // // // //         setCourses(allCourses);
// // // // // // // // // // //         setEnrolledCourses(userEnrollments);
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //         setCourses([]);
// // // // // // // // // // //         setEnrolledCourses([]);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchData();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (selectedCourseForAssignments) {
// // // // // // // // // // //       console.log(
// // // // // // // // // // //         "✅ Switching to assignments tab for course:",
// // // // // // // // // // //         selectedCourseForAssignments
// // // // // // // // // // //       );
// // // // // // // // // // //       setActiveTab("assignments");
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [selectedCourseForAssignments]);

// // // // // // // // // // //   const handleEnrollClick = (course) => {
// // // // // // // // // // //     setSelectedCourse(course);
// // // // // // // // // // //     setEnrollmentDialogOpen(true);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleViewProgress = (course) => {
// // // // // // // // // // //     setSelectedCourse(course);
// // // // // // // // // // //     setProgressDialogOpen(true);
// // // // // // // // // // //   };
// // // // // // // // // // //   const handleViewAssignments = (course) => {
// // // // // // // // // // //     setSelectedCourseForAssignments(course);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleEnroll = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const token = localStorage.getItem("access-token");
// // // // // // // // // // //       if (!token) {
// // // // // // // // // // //         console.error("No authentication token found");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // // // // // // // // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // // // // // // // // // //       setEnrolledCourses(updatedEnrollments);
// // // // // // // // // // //       setEnrollmentDialogOpen(false);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error enrolling:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const filteredCourses =
// // // // // // // // // // //     activeTab === "enrolled"
// // // // // // // // // // //       ? (Array.isArray(courses) ? courses : []).filter((course) =>
// // // // // // // // // // //           (Array.isArray(enrolledCourses) ? enrolledCourses : []).some(
// // // // // // // // // // //             (enrollment) => enrollment.course_id === course.id
// // // // // // // // // // //           )
// // // // // // // // // // //         )
// // // // // // // // // // //       : Array.isArray(courses)
// // // // // // // // // // //       ? courses
// // // // // // // // // // //       : [];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <DashboardContainer>
// // // // // // // // // // //       <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

// // // // // // // // // // //       <MainContent>
// // // // // // // // // // //         <Container maxWidth="xl">
// // // // // // // // // // //           <Box
// // // // // // // // // // //             sx={{
// // // // // // // // // // //               ...dashboardStyles.header,
// // // // // // // // // // //               backgroundColor: "#e3f2fd",
// // // // // // // // // // //               padding: "16px 24px",
// // // // // // // // // // //               borderRadius: "8px",
// // // // // // // // // // //               marginBottom: "24px",
// // // // // // // // // // //               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
// // // // // // // // // // //             }}
// // // // // // // // // // //           >
// // // // // // // // // // //             <Typography
// // // // // // // // // // //               variant="h4"
// // // // // // // // // // //               component="h1"
// // // // // // // // // // //               sx={{
// // // // // // // // // // //                 ...dashboardStyles.title,
// // // // // // // // // // //                 color: "#1976d2",
// // // // // // // // // // //                 fontWeight: 600,
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               {activeTab === "dashboard"
// // // // // // // // // // //                 ? "Dashboard"
// // // // // // // // // // //                 : activeTab === "all"
// // // // // // // // // // //                 ? "All Courses"
// // // // // // // // // // //                 : activeTab === "enrolled"
// // // // // // // // // // //                 ? "My Courses"
// // // // // // // // // // //                 : activeTab === "progress"
// // // // // // // // // // //                 ? "My Progress"
// // // // // // // // // // //                 : activeTab === "assignments"
// // // // // // // // // // //                 ? "My Assignments"
// // // // // // // // // // //                 : ""}
// // // // // // // // // // //             </Typography>
// // // // // // // // // // //           </Box>

// // // // // // // // // // //           {activeTab === "dashboard" ? (
// // // // // // // // // // //             <Card
// // // // // // // // // // //               sx={{
// // // // // // // // // // //                 minHeight: 300,
// // // // // // // // // // //                 display: "flex",
// // // // // // // // // // //                 alignItems: "center",
// // // // // // // // // // //                 justifyContent: "center",
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <Typography
// // // // // // // // // // //                   variant="h4"
// // // // // // // // // // //                   component="div"
// // // // // // // // // // //                   sx={{ textAlign: "center" }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Hello
// // // // // // // // // // //                 </Typography>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           ) : activeTab === "progress" ? (
// // // // // // // // // // //             <InProgressCourses />
// // // // // // // // // // //           ) : activeTab === "assignments" ? (
// // // // // // // // // // //             <AssignmentList
// // // // // // // // // // //               courseId={selectedCourseForAssignments?.id}
// // // // // // // // // // //               onBack={() => setActiveTab("enrolled")}
// // // // // // // // // // //             />
// // // // // // // // // // //           ) : loading ? (
// // // // // // // // // // //             <Box
// // // // // // // // // // //               sx={{
// // // // // // // // // // //                 ...dashboardStyles.loadingContainer,
// // // // // // // // // // //                 backgroundColor: "rgba(227, 242, 253, 0.5)",
// // // // // // // // // // //                 borderRadius: "8px",
// // // // // // // // // // //                 padding: "40px",
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <CircularProgress sx={{ color: "#42a5f5" }} />
// // // // // // // // // // //             </Box>
// // // // // // // // // // //           ) : (
// // // // // // // // // // //             <Grid container spacing={4}>
// // // // // // // // // // //               {filteredCourses.length > 0 ? (
// // // // // // // // // // //                 filteredCourses.map((course) => {
// // // // // // // // // // //                   const enrollment = (
// // // // // // // // // // //                     Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // // // // // // //                   ).find((enroll) => enroll.course_id === course.id);

// // // // // // // // // // //                   const isEnrolled = !!enrollment;

// // // // // // // // // // //                   const courseWithEnrollment = {
// // // // // // // // // // //                     ...course,
// // // // // // // // // // //                     enrollmentId: enrollment?.id || null,
// // // // // // // // // // //                   };

// // // // // // // // // // //                   return (
// // // // // // // // // // //                     <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // // // // // //                       <CourseCard
// // // // // // // // // // //                         course={courseWithEnrollment}
// // // // // // // // // // //                         isEnrolled={isEnrolled}
// // // // // // // // // // //                         onEnrollClick={handleEnrollClick}
// // // // // // // // // // //                         onViewProgressClick={handleViewProgress}
// // // // // // // // // // //                         onViewAssignmentsClick={handleViewAssignments}
// // // // // // // // // // //                       />
// // // // // // // // // // //                     </Grid>
// // // // // // // // // // //                   );
// // // // // // // // // // //                 })
// // // // // // // // // // //               ) : (
// // // // // // // // // // //                 <Grid item xs={12}>
// // // // // // // // // // //                   <Box
// // // // // // // // // // //                     sx={{
// // // // // // // // // // //                       backgroundColor: "#e3f2fd",
// // // // // // // // // // //                       padding: "20px",
// // // // // // // // // // //                       borderRadius: "8px",
// // // // // // // // // // //                       textAlign: "center",
// // // // // // // // // // //                     }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Typography variant="body1" sx={{ color: "#1565c0" }}>
// // // // // // // // // // //                       No courses found
// // // // // // // // // // //                     </Typography>
// // // // // // // // // // //                   </Box>
// // // // // // // // // // //                 </Grid>
// // // // // // // // // // //               )}
// // // // // // // // // // //             </Grid>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </Container>
// // // // // // // // // // //       </MainContent>

// // // // // // // // // // //       <EnrollmentDialog
// // // // // // // // // // //         open={enrollmentDialogOpen}
// // // // // // // // // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // // // // // // // // //         course={selectedCourse}
// // // // // // // // // // //         onEnroll={handleEnroll}
// // // // // // // // // // //       />

// // // // // // // // // // //       <ProgressDialog
// // // // // // // // // // //         open={progressDialogOpen}
// // // // // // // // // // //         onClose={() => setProgressDialogOpen(false)}
// // // // // // // // // // //         course={selectedCourse}
// // // // // // // // // // //       />
// // // // // // // // // // //     </DashboardContainer>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default StudentDashboard;
// // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // import {
// // // // // // // // // //   Box,
// // // // // // // // // //   Container,
// // // // // // // // // //   Typography,
// // // // // // // // // //   Grid,
// // // // // // // // // //   Button,
// // // // // // // // // //   CircularProgress,
// // // // // // // // // //   Card,
// // // // // // // // // //   CardContent,
// // // // // // // // // // } from "@mui/material";
// // // // // // // // // // import { styled } from "@mui/system";
// // // // // // // // // // import CourseCard from "../../components/studant/CourseCard";
// // // // // // // // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // // // // // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // // // // // // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // // // // // // // // import CourseService from "../../services/StudentService";
// // // // // // // // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // // // // // // // import { dashboardStyles } from "../../theme/studentStyle";
// // // // // // // // // // import InProgressCourses from "../../components/studant/Inprogress";
// // // // // // // // // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// // // // // // // // // // import UserHeader from "../../components/common/Header/Header";

// // // // // // // // // // const DashboardContainer = styled(Box)(({ theme }) => ({
// // // // // // // // // //   display: "flex",
// // // // // // // // // //   minHeight: "100vh",
// // // // // // // // // //   backgroundColor: theme.palette.grey[50],
// // // // // // // // // // }));

// // // // // // // // // // const MainContent = styled(Box)({
// // // // // // // // // //   flexGrow: 1,
// // // // // // // // // //   padding: "24px",
// // // // // // // // // //   backgroundColor: "#f8fbff",
// // // // // // // // // // });

// // // // // // // // // // const StudentDashboard = () => {
// // // // // // // // // //   const [courses, setCourses] = useState([]);
// // // // // // // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // // // // // // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // // // // // // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // // // // // // // //   const [activeTab, setActiveTab] = useState("dashboard");
// // // // // // // // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // // // // // // // //     useState(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         setLoading(true);
// // // // // // // // // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // // // // // // // // //           [
// // // // // // // // // //             CourseService.getAllCourses(),
// // // // // // // // // //             EnrollmentService.getUserEnrollments(),
// // // // // // // // // //           ]
// // // // // // // // // //         );

// // // // // // // // // //         const allCourses = Array.isArray(allCoursesResponse)
// // // // // // // // // //           ? allCoursesResponse
// // // // // // // // // //           : allCoursesResponse?.data || [];

// // // // // // // // // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // // // // // // // // //           ? userEnrollmentsResponse
// // // // // // // // // //           : userEnrollmentsResponse?.data || [];

// // // // // // // // // //         setCourses(allCourses);
// // // // // // // // // //         setEnrolledCourses(userEnrollments);
// // // // // // // // // //         setLoading(false);
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // // //         setLoading(false);
// // // // // // // // // //         setCourses([]);
// // // // // // // // // //         setEnrolledCourses([]);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchData();
// // // // // // // // // //   }, []);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (selectedCourseForAssignments) {
// // // // // // // // // //       console.log(
// // // // // // // // // //         "✅ Switching to assignments tab for course:",
// // // // // // // // // //         selectedCourseForAssignments
// // // // // // // // // //       );
// // // // // // // // // //       setActiveTab("assignments");
// // // // // // // // // //     }
// // // // // // // // // //   }, [selectedCourseForAssignments]);

// // // // // // // // // //   const handleEnrollClick = (course) => {
// // // // // // // // // //     setSelectedCourse(course);
// // // // // // // // // //     setEnrollmentDialogOpen(true);
// // // // // // // // // //   };

// // // // // // // // // //   const handleViewProgress = (course) => {
// // // // // // // // // //     setSelectedCourse(course);
// // // // // // // // // //     setProgressDialogOpen(true);
// // // // // // // // // //   };
// // // // // // // // // //   const handleViewAssignments = (course) => {
// // // // // // // // // //     setSelectedCourseForAssignments(course);
// // // // // // // // // //   };

// // // // // // // // // //   const handleEnroll = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const token = localStorage.getItem("access-token");
// // // // // // // // // //       if (!token) {
// // // // // // // // // //         console.error("No authentication token found");
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // // // // // // // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // // // // // // // // //       setEnrolledCourses(updatedEnrollments);
// // // // // // // // // //       setEnrollmentDialogOpen(false);
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error enrolling:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const filteredCourses =
// // // // // // // // // //     activeTab === "enrolled"
// // // // // // // // // //       ? (Array.isArray(courses) ? courses : []).filter((course) =>
// // // // // // // // // //           (Array.isArray(enrolledCourses) ? enrolledCourses : []).some(
// // // // // // // // // //             (enrollment) => enrollment.course_id === course.id
// // // // // // // // // //           )
// // // // // // // // // //         )
// // // // // // // // // //       : Array.isArray(courses)
// // // // // // // // // //       ? courses
// // // // // // // // // //       : [];

// // // // // // // // // //   return (
// // // // // // // // // //     <DashboardContainer>
// // // // // // // // // //       <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

// // // // // // // // // //       <MainContent>
// // // // // // // // // //         <Container maxWidth="xl">
// // // // // // // // // //           <Box
// // // // // // // // // //             sx={{
// // // // // // // // // //               ...dashboardStyles.header,
// // // // // // // // // //               backgroundColor: "#e3f2fd",
// // // // // // // // // //               padding: "16px 24px",
// // // // // // // // // //               borderRadius: "8px",
// // // // // // // // // //               marginBottom: "24px",
// // // // // // // // // //               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <Typography
// // // // // // // // // //               variant="h4"
// // // // // // // // // //               component="h1"
// // // // // // // // // //               sx={{
// // // // // // // // // //                 ...dashboardStyles.title,
// // // // // // // // // //                 color: "#1976d2",
// // // // // // // // // //                 fontWeight: 600,
// // // // // // // // // //               }}
// // // // // // // // // //             >
// // // // // // // // // //               {activeTab === "dashboard"
// // // // // // // // // //                 ? "Dashboard"
// // // // // // // // // //                 : activeTab === "all"
// // // // // // // // // //                 ? "All Courses"
// // // // // // // // // //                 : activeTab === "enrolled"
// // // // // // // // // //                 ? "My Courses"
// // // // // // // // // //                 : activeTab === "progress"
// // // // // // // // // //                 ? "My Progress"
// // // // // // // // // //                 : activeTab === "assignments"
// // // // // // // // // //                 ? "My Assignments"
// // // // // // // // // //                 : ""}
// // // // // // // // // //             </Typography>
// // // // // // // // // //           </Box>

// // // // // // // // // //           {activeTab === "dashboard" ? (
// // // // // // // // // //             <Box>
// // // // // // // // // //               <Card sx={{ mb: 4, p: 3 }}>
// // // // // // // // // //                 <Typography
// // // // // // // // // //                   variant="h4"
// // // // // // // // // //                   component="div"
// // // // // // // // // //                   sx={{ textAlign: "center" }}
// // // // // // // // // //                 >
// // // // // // // // // //                   Welcome to Your Learning Dashboard
// // // // // // // // // //                 </Typography>
// // // // // // // // // //               </Card>

// // // // // // // // // //               {loading ? (
// // // // // // // // // //                 <Box
// // // // // // // // // //                   sx={{
// // // // // // // // // //                     ...dashboardStyles.loadingContainer,
// // // // // // // // // //                     backgroundColor: "rgba(227, 242, 253, 0.5)",
// // // // // // // // // //                     borderRadius: "8px",
// // // // // // // // // //                     padding: "40px",
// // // // // // // // // //                   }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <CircularProgress sx={{ color: "#42a5f5" }} />
// // // // // // // // // //                 </Box>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <Grid container spacing={4}>
// // // // // // // // // //                   {filteredCourses.length > 0 ? (
// // // // // // // // // //                     filteredCourses.map((course) => {
// // // // // // // // // //                       const enrollment = (
// // // // // // // // // //                         Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // // // // // //                       ).find((enroll) => enroll.course_id === course.id);

// // // // // // // // // //                       const isEnrolled = !!enrollment;

// // // // // // // // // //                       const courseWithEnrollment = {
// // // // // // // // // //                         ...course,
// // // // // // // // // //                         enrollmentId: enrollment?.id || null,
// // // // // // // // // //                       };

// // // // // // // // // //                       return (
// // // // // // // // // //                         <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // // // // //                           <CourseCard
// // // // // // // // // //                             course={courseWithEnrollment}
// // // // // // // // // //                             isEnrolled={isEnrolled}
// // // // // // // // // //                             onEnrollClick={handleEnrollClick}
// // // // // // // // // //                             onViewProgressClick={handleViewProgress}
// // // // // // // // // //                             onViewAssignmentsClick={handleViewAssignments}
// // // // // // // // // //                           />
// // // // // // // // // //                         </Grid>
// // // // // // // // // //                       );
// // // // // // // // // //                     })
// // // // // // // // // //                   ) : (
// // // // // // // // // //                     <Grid item xs={12}>
// // // // // // // // // //                       <Box
// // // // // // // // // //                         sx={{
// // // // // // // // // //                           backgroundColor: "#e3f2fd",
// // // // // // // // // //                           padding: "20px",
// // // // // // // // // //                           borderRadius: "8px",
// // // // // // // // // //                           textAlign: "center",
// // // // // // // // // //                         }}
// // // // // // // // // //                       >
// // // // // // // // // //                         <Typography variant="body1" sx={{ color: "#1565c0" }}>
// // // // // // // // // //                           No courses found
// // // // // // // // // //                         </Typography>
// // // // // // // // // //                       </Box>
// // // // // // // // // //                     </Grid>
// // // // // // // // // //                   )}
// // // // // // // // // //                 </Grid>
// // // // // // // // // //               )}
// // // // // // // // // //             </Box>
// // // // // // // // // //           ) : activeTab === "progress" ? (
// // // // // // // // // //             <InProgressCourses />
// // // // // // // // // //           ) : activeTab === "assignments" ? (
// // // // // // // // // //             <AssignmentList
// // // // // // // // // //               courseId={selectedCourseForAssignments?.id}
// // // // // // // // // //               onBack={() => setActiveTab("enrolled")}
// // // // // // // // // //             />
// // // // // // // // // //           ) : loading ? (
// // // // // // // // // //             <Box
// // // // // // // // // //               sx={{
// // // // // // // // // //                 ...dashboardStyles.loadingContainer,
// // // // // // // // // //                 backgroundColor: "rgba(227, 242, 253, 0.5)",
// // // // // // // // // //                 borderRadius: "8px",
// // // // // // // // // //                 padding: "40px",
// // // // // // // // // //               }}
// // // // // // // // // //             >
// // // // // // // // // //               <CircularProgress sx={{ color: "#42a5f5" }} />
// // // // // // // // // //             </Box>
// // // // // // // // // //           ) : (
// // // // // // // // // //             <Grid container spacing={4}>
// // // // // // // // // //               {filteredCourses.length > 0 ? (
// // // // // // // // // //                 filteredCourses.map((course) => {
// // // // // // // // // //                   const enrollment = (
// // // // // // // // // //                     Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // // // // // //                   ).find((enroll) => enroll.course_id === course.id);

// // // // // // // // // //                   const isEnrolled = !!enrollment;

// // // // // // // // // //                   const courseWithEnrollment = {
// // // // // // // // // //                     ...course,
// // // // // // // // // //                     enrollmentId: enrollment?.id || null,
// // // // // // // // // //                   };

// // // // // // // // // //                   return (
// // // // // // // // // //                     <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // // // // //                       <CourseCard
// // // // // // // // // //                         course={courseWithEnrollment}
// // // // // // // // // //                         isEnrolled={isEnrolled}
// // // // // // // // // //                         onEnrollClick={handleEnrollClick}
// // // // // // // // // //                         onViewProgressClick={handleViewProgress}
// // // // // // // // // //                         onViewAssignmentsClick={handleViewAssignments}
// // // // // // // // // //                       />
// // // // // // // // // //                     </Grid>
// // // // // // // // // //                   );
// // // // // // // // // //                 })
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <Grid item xs={12}>
// // // // // // // // // //                   <Box
// // // // // // // // // //                     sx={{
// // // // // // // // // //                       backgroundColor: "#e3f2fd",
// // // // // // // // // //                       padding: "20px",
// // // // // // // // // //                       borderRadius: "8px",
// // // // // // // // // //                       textAlign: "center",
// // // // // // // // // //                     }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <Typography variant="body1" sx={{ color: "#1565c0" }}>
// // // // // // // // // //                       No courses found
// // // // // // // // // //                     </Typography>
// // // // // // // // // //                   </Box>
// // // // // // // // // //                 </Grid>
// // // // // // // // // //               )}
// // // // // // // // // //             </Grid>
// // // // // // // // // //           )}
// // // // // // // // // //         </Container>
// // // // // // // // // //       </MainContent>

// // // // // // // // // //       <EnrollmentDialog
// // // // // // // // // //         open={enrollmentDialogOpen}
// // // // // // // // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // // // // // // // //         course={selectedCourse}
// // // // // // // // // //         onEnroll={handleEnroll}
// // // // // // // // // //       />

// // // // // // // // // //       <ProgressDialog
// // // // // // // // // //         open={progressDialogOpen}
// // // // // // // // // //         onClose={() => setProgressDialogOpen(false)}
// // // // // // // // // //         course={selectedCourse}
// // // // // // // // // //       />
// // // // // // // // // //     </DashboardContainer>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default StudentDashboard;
// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import {
// // // // // // // // //   Box,
// // // // // // // // //   Container,
// // // // // // // // //   Typography,
// // // // // // // // //   Grid,
// // // // // // // // //   CircularProgress,
// // // // // // // // //   Card,
// // // // // // // // //   CardContent,
// // // // // // // // //   Avatar,
// // // // // // // // //   useTheme,
// // // // // // // // // } from "@mui/material";
// // // // // // // // // import { styled } from "@mui/system";
// // // // // // // // // import CourseCard from "../../components/studant/CourseCard";
// // // // // // // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // // // // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // // // // // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // // // // // // // import CourseService from "../../services/StudentService";
// // // // // // // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // // // // // // import { dashboardStyles } from "../../theme/studentStyle";
// // // // // // // // // import InProgressCourses from "../../components/studant/Inprogress";
// // // // // // // // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// // // // // // // // // import Header from "../../components/common/Header/Header";
// // // // // // // // // import { useAuth } from "../../contexts/AuthContext/AuthContext";

// // // // // // // // // // Motivational quotes array
// // // // // // // // // const motivationalQuotes = [
// // // // // // // // //   "The expert in anything was once a beginner.",
// // // // // // // // //   "Learning is a treasure that will follow its owner everywhere.",
// // // // // // // // //   "Education is the most powerful weapon which you can use to change the world.",
// // // // // // // // //   "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
// // // // // // // // //   "Learning never exhausts the mind.",
// // // // // // // // //   "The beautiful thing about learning is that no one can take it away from you.",
// // // // // // // // //   "Live as if you were to die tomorrow. Learn as if you were to live forever.",
// // // // // // // // //   "Education is not the filling of a pail, but the lighting of a fire.",
// // // // // // // // // ];

// // // // // // // // // const DashboardContainer = styled(Box)(({ theme }) => ({
// // // // // // // // //   display: "flex",
// // // // // // // // //   minHeight: "100vh",
// // // // // // // // //   backgroundColor: theme.palette.grey[50],
// // // // // // // // // }));

// // // // // // // // // const MainContent = styled(Box)({
// // // // // // // // //   flexGrow: 1,
// // // // // // // // //   padding: "24px",
// // // // // // // // //   backgroundColor: "#f8fbff",
// // // // // // // // // });

// // // // // // // // // const StudentDashboard = () => {
// // // // // // // // //   const { user } = useAuth();
// // // // // // // // //   const theme = useTheme();
// // // // // // // // //   const [courses, setCourses] = useState([]);
// // // // // // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // // // // // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // // // // // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // // // // // // //   const [activeTab, setActiveTab] = useState("dashboard");
// // // // // // // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // // // // // // //     useState(null);
// // // // // // // // //   const [randomQuote] = useState(
// // // // // // // // //     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
// // // // // // // // //   );

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchData = async () => {
// // // // // // // // //       try {
// // // // // // // // //         setLoading(true);
// // // // // // // // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // // // // // // // //           [
// // // // // // // // //             CourseService.getAllCourses(),
// // // // // // // // //             EnrollmentService.getUserEnrollments(),
// // // // // // // // //           ]
// // // // // // // // //         );

// // // // // // // // //         const allCourses = Array.isArray(allCoursesResponse)
// // // // // // // // //           ? allCoursesResponse
// // // // // // // // //           : allCoursesResponse?.data || [];

// // // // // // // // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // // // // // // // //           ? userEnrollmentsResponse
// // // // // // // // //           : userEnrollmentsResponse?.data || [];

// // // // // // // // //         setCourses(allCourses);
// // // // // // // // //         setEnrolledCourses(userEnrollments);
// // // // // // // // //         setLoading(false);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // //         setLoading(false);
// // // // // // // // //         setCourses([]);
// // // // // // // // //         setEnrolledCourses([]);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchData();
// // // // // // // // //   }, []);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (selectedCourseForAssignments) {
// // // // // // // // //       console.log(
// // // // // // // // //         "✅ Switching to assignments tab for course:",
// // // // // // // // //         selectedCourseForAssignments
// // // // // // // // //       );
// // // // // // // // //       setActiveTab("assignments");
// // // // // // // // //     }
// // // // // // // // //   }, [selectedCourseForAssignments]);

// // // // // // // // //   const handleEnrollClick = (course) => {
// // // // // // // // //     setSelectedCourse(course);
// // // // // // // // //     setEnrollmentDialogOpen(true);
// // // // // // // // //   };

// // // // // // // // //   const handleViewProgress = (course) => {
// // // // // // // // //     setSelectedCourse(course);
// // // // // // // // //     setProgressDialogOpen(true);
// // // // // // // // //   };
// // // // // // // // //   const handleViewAssignments = (course) => {
// // // // // // // // //     setSelectedCourseForAssignments(course);
// // // // // // // // //   };

// // // // // // // // //   const handleEnroll = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const token = localStorage.getItem("access-token");
// // // // // // // // //       if (!token) {
// // // // // // // // //         console.error("No authentication token found");
// // // // // // // // //         return;
// // // // // // // // //       }

// // // // // // // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // // // // // // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // // // // // // // //       setEnrolledCourses(updatedEnrollments);
// // // // // // // // //       setEnrollmentDialogOpen(false);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error enrolling:", error);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const filteredCourses =
// // // // // // // // //     activeTab === "enrolled"
// // // // // // // // //       ? (Array.isArray(courses) ? courses : []).filter((course) =>
// // // // // // // // //           (Array.isArray(enrolledCourses) ? enrolledCourses : []).some(
// // // // // // // // //             (enrollment) => enrollment.course_id === course.id
// // // // // // // // //           )
// // // // // // // // //         )
// // // // // // // // //       : Array.isArray(courses)
// // // // // // // // //       ? courses
// // // // // // // // //       : [];

// // // // // // // // //   return (
// // // // // // // // //     <DashboardContainer>
// // // // // // // // //       <Header />
// // // // // // // // //       <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

// // // // // // // // //       <MainContent>
// // // // // // // // //         <Container maxWidth="xl">
// // // // // // // // //           {activeTab === "dashboard" ? (
// // // // // // // // //             <Box>
// // // // // // // // //               {/* Welcome Card with User Info */}
// // // // // // // // //               <Card
// // // // // // // // //                 sx={{
// // // // // // // // //                   mb: 4,
// // // // // // // // //                   p: 4,
// // // // // // // // //                   background:
// // // // // // // // //                     "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
// // // // // // // // //                   boxShadow: "0 4px 20px rgba(99, 102, 241, 0.1)",
// // // // // // // // //                   borderRadius: "16px",
// // // // // // // // //                   border: "1px solid rgba(99, 102, 241, 0.08)",
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 <Box
// // // // // // // // //                   sx={{
// // // // // // // // //                     display: "flex",
// // // // // // // // //                     alignItems: "center",
// // // // // // // // //                     gap: 3,
// // // // // // // // //                     mb: 3,
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   <Avatar
// // // // // // // // //                     sx={{
// // // // // // // // //                       width: 80,
// // // // // // // // //                       height: 80,
// // // // // // // // //                       fontSize: "2rem",
// // // // // // // // //                       background:
// // // // // // // // //                         "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// // // // // // // // //                     }}
// // // // // // // // //                   >
// // // // // // // // //                     {user?.name?.charAt(0) || "U"}
// // // // // // // // //                   </Avatar>
// // // // // // // // //                   <Box>
// // // // // // // // //                     <Typography
// // // // // // // // //                       variant="h4"
// // // // // // // // //                       component="h1"
// // // // // // // // //                       sx={{
// // // // // // // // //                         fontWeight: 700,
// // // // // // // // //                         color: "#1e293b",
// // // // // // // // //                         mb: 0.5,
// // // // // // // // //                       }}
// // // // // // // // //                     >
// // // // // // // // //                       Hello, {user?.name || "Student"}!
// // // // // // // // //                     </Typography>
// // // // // // // // //                     <Typography
// // // // // // // // //                       variant="body1"
// // // // // // // // //                       sx={{
// // // // // // // // //                         color: theme.palette.text.secondary,
// // // // // // // // //                       }}
// // // // // // // // //                     >
// // // // // // // // //                       Welcome back to your learning dashboard
// // // // // // // // //                     </Typography>
// // // // // // // // //                   </Box>
// // // // // // // // //                 </Box>
// // // // // // // // //                 <Typography
// // // // // // // // //                   variant="body1"
// // // // // // // // //                   sx={{
// // // // // // // // //                     fontStyle: "italic",
// // // // // // // // //                     color: "#6366f1",
// // // // // // // // //                     fontWeight: 500,
// // // // // // // // //                     px: 2,
// // // // // // // // //                     py: 1.5,
// // // // // // // // //                     backgroundColor: "rgba(99, 102, 241, 0.05)",
// // // // // // // // //                     borderRadius: "12px",
// // // // // // // // //                     borderLeft: "4px solid #6366f1",
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   "{randomQuote}"
// // // // // // // // //                 </Typography>
// // // // // // // // //               </Card>

// // // // // // // // //               {/* Courses Section */}
// // // // // // // // //               <Box>
// // // // // // // // //                 <Typography
// // // // // // // // //                   variant="h5"
// // // // // // // // //                   sx={{
// // // // // // // // //                     fontWeight: 600,
// // // // // // // // //                     color: "#1e293b",
// // // // // // // // //                     mb: 3,
// // // // // // // // //                     display: "flex",
// // // // // // // // //                     alignItems: "center",
// // // // // // // // //                     gap: 1,
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   Your Available Courses
// // // // // // // // //                 </Typography>

// // // // // // // // //                 {loading ? (
// // // // // // // // //                   <Box
// // // // // // // // //                     sx={{
// // // // // // // // //                       display: "flex",
// // // // // // // // //                       justifyContent: "center",
// // // // // // // // //                       alignItems: "center",
// // // // // // // // //                       minHeight: 200,
// // // // // // // // //                     }}
// // // // // // // // //                   >
// // // // // // // // //                     <CircularProgress sx={{ color: "#6366f1" }} />
// // // // // // // // //                   </Box>
// // // // // // // // //                 ) : (
// // // // // // // // //                   <Grid container spacing={3}>
// // // // // // // // //                     {filteredCourses.length > 0 ? (
// // // // // // // // //                       filteredCourses.map((course) => {
// // // // // // // // //                         const enrollment = (
// // // // // // // // //                           Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // // // // //                         ).find((enroll) => enroll.course_id === course.id);

// // // // // // // // //                         const isEnrolled = !!enrollment;

// // // // // // // // //                         const courseWithEnrollment = {
// // // // // // // // //                           ...course,
// // // // // // // // //                           enrollmentId: enrollment?.id || null,
// // // // // // // // //                         };

// // // // // // // // //                         return (
// // // // // // // // //                           <Grid
// // // // // // // // //                             item
// // // // // // // // //                             xs={12}
// // // // // // // // //                             sm={6}
// // // // // // // // //                             md={4}
// // // // // // // // //                             lg={3}
// // // // // // // // //                             key={course.id}
// // // // // // // // //                           >
// // // // // // // // //                             <CourseCard
// // // // // // // // //                               course={courseWithEnrollment}
// // // // // // // // //                               isEnrolled={isEnrolled}
// // // // // // // // //                               onEnrollClick={handleEnrollClick}
// // // // // // // // //                               onViewProgressClick={handleViewProgress}
// // // // // // // // //                               onViewAssignmentsClick={handleViewAssignments}
// // // // // // // // //                             />
// // // // // // // // //                           </Grid>
// // // // // // // // //                         );
// // // // // // // // //                       })
// // // // // // // // //                     ) : (
// // // // // // // // //                       <Grid item xs={12}>
// // // // // // // // //                         <Box
// // // // // // // // //                           sx={{
// // // // // // // // //                             backgroundColor: "#f8faff",
// // // // // // // // //                             padding: "40px",
// // // // // // // // //                             borderRadius: "12px",
// // // // // // // // //                             textAlign: "center",
// // // // // // // // //                             border: "1px dashed rgba(99, 102, 241, 0.3)",
// // // // // // // // //                           }}
// // // // // // // // //                         >
// // // // // // // // //                           <Typography
// // // // // // // // //                             variant="body1"
// // // // // // // // //                             sx={{ color: "#64748b", mb: 1 }}
// // // // // // // // //                           >
// // // // // // // // //                             No courses available at the moment
// // // // // // // // //                           </Typography>
// // // // // // // // //                           <Typography
// // // // // // // // //                             variant="body2"
// // // // // // // // //                             sx={{ color: "#94a3b8", fontSize: "0.875rem" }}
// // // // // // // // //                           >
// // // // // // // // //                             Check back later or contact your instructor
// // // // // // // // //                           </Typography>
// // // // // // // // //                         </Box>
// // // // // // // // //                       </Grid>
// // // // // // // // //                     )}
// // // // // // // // //                   </Grid>
// // // // // // // // //                 )}
// // // // // // // // //               </Box>
// // // // // // // // //             </Box>
// // // // // // // // //           ) : activeTab === "progress" ? (
// // // // // // // // //             <InProgressCourses />
// // // // // // // // //           ) : activeTab === "assignments" ? (
// // // // // // // // //             <AssignmentList
// // // // // // // // //               courseId={selectedCourseForAssignments?.id}
// // // // // // // // //               onBack={() => setActiveTab("enrolled")}
// // // // // // // // //             />
// // // // // // // // //           ) : loading ? (
// // // // // // // // //             <Box
// // // // // // // // //               sx={{
// // // // // // // // //                 display: "flex",
// // // // // // // // //                 justifyContent: "center",
// // // // // // // // //                 alignItems: "center",
// // // // // // // // //                 minHeight: 300,
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               <CircularProgress sx={{ color: "#6366f1" }} />
// // // // // // // // //             </Box>
// // // // // // // // //           ) : (
// // // // // // // // //             <Box>
// // // // // // // // //               <Typography
// // // // // // // // //                 variant="h5"
// // // // // // // // //                 sx={{
// // // // // // // // //                   fontWeight: 600,
// // // // // // // // //                   color: "#1e293b",
// // // // // // // // //                   mb: 3,
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {activeTab === "all"
// // // // // // // // //                   ? "All Courses"
// // // // // // // // //                   : activeTab === "enrolled"
// // // // // // // // //                   ? "My Enrolled Courses"
// // // // // // // // //                   : ""}
// // // // // // // // //               </Typography>
// // // // // // // // //               <Grid container spacing={3}>
// // // // // // // // //                 {filteredCourses.length > 0 ? (
// // // // // // // // //                   filteredCourses.map((course) => {
// // // // // // // // //                     const enrollment = (
// // // // // // // // //                       Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // // // // //                     ).find((enroll) => enroll.course_id === course.id);

// // // // // // // // //                     const isEnrolled = !!enrollment;

// // // // // // // // //                     const courseWithEnrollment = {
// // // // // // // // //                       ...course,
// // // // // // // // //                       enrollmentId: enrollment?.id || null,
// // // // // // // // //                     };

// // // // // // // // //                     return (
// // // // // // // // //                       <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // // // //                         <CourseCard
// // // // // // // // //                           course={courseWithEnrollment}
// // // // // // // // //                           isEnrolled={isEnrolled}
// // // // // // // // //                           onEnrollClick={handleEnrollClick}
// // // // // // // // //                           onViewProgressClick={handleViewProgress}
// // // // // // // // //                           onViewAssignmentsClick={handleViewAssignments}
// // // // // // // // //                         />
// // // // // // // // //                       </Grid>
// // // // // // // // //                     );
// // // // // // // // //                   })
// // // // // // // // //                 ) : (
// // // // // // // // //                   <Grid item xs={12}>
// // // // // // // // //                     <Box
// // // // // // // // //                       sx={{
// // // // // // // // //                         backgroundColor: "#f8faff",
// // // // // // // // //                         padding: "40px",
// // // // // // // // //                         borderRadius: "12px",
// // // // // // // // //                         textAlign: "center",
// // // // // // // // //                         border: "1px dashed rgba(99, 102, 241, 0.3)",
// // // // // // // // //                       }}
// // // // // // // // //                     >
// // // // // // // // //                       <Typography
// // // // // // // // //                         variant="body1"
// // // // // // // // //                         sx={{ color: "#64748b", mb: 1 }}
// // // // // // // // //                       >
// // // // // // // // //                         No courses found
// // // // // // // // //                       </Typography>
// // // // // // // // //                       <Typography
// // // // // // // // //                         variant="body2"
// // // // // // // // //                         sx={{ color: "#94a3b8", fontSize: "0.875rem" }}
// // // // // // // // //                       >
// // // // // // // // //                         {activeTab === "enrolled"
// // // // // // // // //                           ? "You haven't enrolled in any courses yet"
// // // // // // // // //                           : "No courses available at the moment"}
// // // // // // // // //                       </Typography>
// // // // // // // // //                     </Box>
// // // // // // // // //                   </Grid>
// // // // // // // // //                 )}
// // // // // // // // //               </Grid>
// // // // // // // // //             </Box>
// // // // // // // // //           )}
// // // // // // // // //         </Container>
// // // // // // // // //       </MainContent>

// // // // // // // // //       <EnrollmentDialog
// // // // // // // // //         open={enrollmentDialogOpen}
// // // // // // // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // // // // // // //         course={selectedCourse}
// // // // // // // // //         onEnroll={handleEnroll}
// // // // // // // // //       />

// // // // // // // // //       <ProgressDialog
// // // // // // // // //         open={progressDialogOpen}
// // // // // // // // //         onClose={() => setProgressDialogOpen(false)}
// // // // // // // // //         course={selectedCourse}
// // // // // // // // //       />
// // // // // // // // //     </DashboardContainer>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default StudentDashboard;
// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import {
// // // // // // // //   Box,
// // // // // // // //   Container,
// // // // // // // //   Typography,
// // // // // // // //   Grid,
// // // // // // // //   CircularProgress,
// // // // // // // //   Card,
// // // // // // // //   CardContent,
// // // // // // // //   Avatar,
// // // // // // // //   useTheme,
// // // // // // // // } from "@mui/material";
// // // // // // // // import { styled } from "@mui/system";
// // // // // // // // import CourseCard from "../../components/studant/CourseCard";
// // // // // // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // // // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // // // // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // // // // // // import CourseService from "../../services/StudentService";
// // // // // // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // // // // // import Header from "../../components/common/Header/Header";
// // // // // // // // import { useAuth } from "../../contexts/AuthContext/AuthContext";

// // // // // // // // // Motivational quotes
// // // // // // // // const motivationalQuotes = [
// // // // // // // //   "The expert in anything was once a beginner.",
// // // // // // // //   "Learning is a treasure that will follow its owner everywhere.",
// // // // // // // //   "Education is the most powerful weapon which you can use to change the world.",
// // // // // // // // ];

// // // // // // // // const DashboardContainer = styled(Box)({
// // // // // // // //   display: "flex",
// // // // // // // //   flexDirection: "column",
// // // // // // // //   minHeight: "100vh",
// // // // // // // //   width: "100%",
// // // // // // // //   overflowX: "hidden",
// // // // // // // // });

// // // // // // // // const ContentWrapper = styled(Box)({
// // // // // // // //   display: "flex",
// // // // // // // //   flex: 1,
// // // // // // // // });

// // // // // // // // const MainContent = styled(Box)({
// // // // // // // //   flexGrow: 1,
// // // // // // // //   padding: "24px",
// // // // // // // //   backgroundColor: "#f8fbff",
// // // // // // // //   width: "calc(100% - 280px)", // Subtract sidebar width
// // // // // // // // });

// // // // // // // // const StudentDashboard = () => {
// // // // // // // //   const { user } = useAuth();
// // // // // // // //   const theme = useTheme();
// // // // // // // //   const [courses, setCourses] = useState([]);
// // // // // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // // // // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // // // // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // // // // // //   const [activeTab, setActiveTab] = useState("dashboard");
// // // // // // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // // // // // //     useState(null);
// // // // // // // //   const [randomQuote] = useState(
// // // // // // // //     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
// // // // // // // //   );

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchData = async () => {
// // // // // // // //       try {
// // // // // // // //         setLoading(true);
// // // // // // // //         const [allCourses, userEnrollments] = await Promise.all([
// // // // // // // //           CourseService.getAllCourses(),
// // // // // // // //           EnrollmentService.getUserEnrollments(),
// // // // // // // //         ]);
// // // // // // // //         setCourses(allCourses?.data || []);
// // // // // // // //         setEnrolledCourses(userEnrollments?.data || []);
// // // // // // // //         setLoading(false);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchData();
// // // // // // // //   }, []);

// // // // // // // //   const filteredCourses =
// // // // // // // //     activeTab === "enrolled"
// // // // // // // //       ? courses.filter((course) =>
// // // // // // // //           enrolledCourses.some(
// // // // // // // //             (enrollment) => enrollment.course_id === course.id
// // // // // // // //           )
// // // // // // // //         )
// // // // // // // //       : courses;

// // // // // // // //   return (
// // // // // // // //     <DashboardContainer>
// // // // // // // //       <Header />

// // // // // // // //       <ContentWrapper>
// // // // // // // //         <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

// // // // // // // //         <MainContent>
// // // // // // // //           <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
// // // // // // // //             {activeTab === "dashboard" && (
// // // // // // // //               <>
// // // // // // // //                 {/* Welcome Section */}
// // // // // // // //                 <Card
// // // // // // // //                   sx={{
// // // // // // // //                     mb: 4,
// // // // // // // //                     p: 3,
// // // // // // // //                     borderRadius: "12px",
// // // // // // // //                     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <Box display="flex" alignItems="center" gap={3}>
// // // // // // // //                     <Avatar
// // // // // // // //                       sx={{
// // // // // // // //                         width: 64,
// // // // // // // //                         height: 64,
// // // // // // // //                         bgcolor: theme.palette.primary.main,
// // // // // // // //                         fontSize: "1.5rem",
// // // // // // // //                       }}
// // // // // // // //                     >
// // // // // // // //                       {user?.name?.charAt(0) || "U"}
// // // // // // // //                     </Avatar>
// // // // // // // //                     <Box>
// // // // // // // //                       <Typography variant="h4" fontWeight={700}>
// // // // // // // //                         Welcome, {user?.name || "Student"}!
// // // // // // // //                       </Typography>
// // // // // // // //                       <Typography color="text.secondary">
// // // // // // // //                         {randomQuote}
// // // // // // // //                       </Typography>
// // // // // // // //                     </Box>
// // // // // // // //                   </Box>
// // // // // // // //                 </Card>

// // // // // // // //                 {/* Courses Section */}
// // // // // // // //                 <Typography variant="h5" mb={3} fontWeight={600}>
// // // // // // // //                   Available Courses
// // // // // // // //                 </Typography>

// // // // // // // //                 {loading ? (
// // // // // // // //                   <Box display="flex" justifyContent="center" py={4}>
// // // // // // // //                     <CircularProgress />
// // // // // // // //                   </Box>
// // // // // // // //                 ) : (
// // // // // // // //                   <Grid container spacing={3}>
// // // // // // // //                     {filteredCourses.map((course) => (
// // // // // // // //                       <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // // //                         <CourseCard
// // // // // // // //                           course={course}
// // // // // // // //                           isEnrolled={enrolledCourses.some(
// // // // // // // //                             (e) => e.course_id === course.id
// // // // // // // //                           )}
// // // // // // // //                           onEnrollClick={() => {
// // // // // // // //                             setSelectedCourse(course);
// // // // // // // //                             setEnrollmentDialogOpen(true);
// // // // // // // //                           }}
// // // // // // // //                         />
// // // // // // // //                       </Grid>
// // // // // // // //                     ))}
// // // // // // // //                   </Grid>
// // // // // // // //                 )}
// // // // // // // //               </>
// // // // // // // //             )}

// // // // // // // //             {/* Other Tabs */}
// // // // // // // //             {activeTab === "progress" && <InProgressCourses />}
// // // // // // // //             {activeTab === "assignments" && (
// // // // // // // //               <AssignmentList
// // // // // // // //                 courseId={selectedCourseForAssignments?.id}
// // // // // // // //                 onBack={() => setActiveTab("enrolled")}
// // // // // // // //               />
// // // // // // // //             )}
// // // // // // // //             {["all", "enrolled"].includes(activeTab) && !loading && (
// // // // // // // //               <>
// // // // // // // //                 <Typography variant="h5" mb={3} fontWeight={600}>
// // // // // // // //                   {activeTab === "all" ? "All Courses" : "My Courses"}
// // // // // // // //                 </Typography>
// // // // // // // //                 <Grid container spacing={3}>
// // // // // // // //                   {filteredCourses.map((course) => (
// // // // // // // //                     <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // // //                       <CourseCard
// // // // // // // //                         course={course}
// // // // // // // //                         isEnrolled={enrolledCourses.some(
// // // // // // // //                           (e) => e.course_id === course.id
// // // // // // // //                         )}
// // // // // // // //                         onEnrollClick={() => {
// // // // // // // //                           setSelectedCourse(course);
// // // // // // // //                           setEnrollmentDialogOpen(true);
// // // // // // // //                         }}
// // // // // // // //                       />
// // // // // // // //                     </Grid>
// // // // // // // //                   ))}
// // // // // // // //                 </Grid>
// // // // // // // //               </>
// // // // // // // //             )}
// // // // // // // //           </Container>
// // // // // // // //         </MainContent>
// // // // // // // //       </ContentWrapper>

// // // // // // // //       {/* Dialogs */}
// // // // // // // //       <EnrollmentDialog
// // // // // // // //         open={enrollmentDialogOpen}
// // // // // // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // // // // // //         course={selectedCourse}
// // // // // // // //         onEnroll={() => {
// // // // // // // //           handleEnroll();
// // // // // // // //           setEnrollmentDialogOpen(false);
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       <ProgressDialog
// // // // // // // //         open={progressDialogOpen}
// // // // // // // //         onClose={() => setProgressDialogOpen(false)}
// // // // // // // //         course={selectedCourse}
// // // // // // // //       />
// // // // // // // //     </DashboardContainer>
// // // // // // // //   );

// // // // // // // //   async function handleEnroll() {
// // // // // // // //     try {
// // // // // // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // // // // // //       const updated = await EnrollmentService.getUserEnrollments();
// // // // // // // //       setEnrolledCourses(updated.data || []);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Enrollment error:", error);
// // // // // // // //     }
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // export default StudentDashboard;
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import {
// // // // // // //   Box,
// // // // // // //   Container,
// // // // // // //   Typography,
// // // // // // //   Grid,
// // // // // // //   CircularProgress,
// // // // // // //   Card,
// // // // // // //   CardContent,
// // // // // // //   Avatar,
// // // // // // //   useTheme,
// // // // // // // } from "@mui/material";
// // // // // // // import { styled } from "@mui/system";
// // // // // // // import CourseCard from "../../components/studant/CourseCard";
// // // // // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // // // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // // // // // import CourseService from "../../services/StudentService";
// // // // // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // // // // import Header from "../../components/common/Header/Header";
// // // // // // // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // // // // // // import InProgressCourses from "../../components/studant/Inprogress";
// // // // // // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";

// // // // // // // const motivationalQuotes = [
// // // // // // //   "The expert in anything was once a beginner.",
// // // // // // //   "Learning is a treasure that will follow its owner everywhere.",
// // // // // // //   "Education is the most powerful weapon which you can use to change the world.",
// // // // // // // ];

// // // // // // // const DashboardContainer = styled(Box)({
// // // // // // //   display: "flex",
// // // // // // //   flexDirection: "column",
// // // // // // //   minHeight: "100vh",
// // // // // // //   width: "100%",
// // // // // // //   overflowX: "hidden",
// // // // // // // });

// // // // // // // const ContentWrapper = styled(Box)({
// // // // // // //   display: "flex",
// // // // // // //   flex: 1,
// // // // // // // });

// // // // // // // const MainContent = styled(Box)({
// // // // // // //   flexGrow: 1,
// // // // // // //   padding: "24px",
// // // // // // //   backgroundColor: "#f8fbff",
// // // // // // //   width: "calc(100% - 280px)",
// // // // // // // });

// // // // // // // const StudentDashboard = () => {
// // // // // // //   const { user } = useAuth();
// // // // // // //   const theme = useTheme();
// // // // // // //   const [courses, setCourses] = useState([]);
// // // // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // // // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // // // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // // // // //   const [activeTab, setActiveTab] = useState("dashboard");
// // // // // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // // // // //     useState(null);
// // // // // // //   const [randomQuote] = useState(
// // // // // // //     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
// // // // // // //   );

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchData = async () => {
// // // // // // //       try {
// // // // // // //         setLoading(true);
// // // // // // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // // // // // //           [
// // // // // // //             CourseService.getAllCourses(),
// // // // // // //             EnrollmentService.getUserEnrollments(),
// // // // // // //           ]
// // // // // // //         );

// // // // // // //         // Keeping your original data handling exactly as it was
// // // // // // //         const allCourses = Array.isArray(allCoursesResponse)
// // // // // // //           ? allCoursesResponse
// // // // // // //           : allCoursesResponse?.data || [];

// // // // // // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // // // // // //           ? userEnrollmentsResponse
// // // // // // //           : userEnrollmentsResponse?.data || [];

// // // // // // //         setCourses(allCourses);
// // // // // // //         setEnrolledCourses(userEnrollments);
// // // // // // //         setLoading(false);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching data:", error);
// // // // // // //         setLoading(false);
// // // // // // //         setCourses([]);
// // // // // // //         setEnrolledCourses([]);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchData();
// // // // // // //   }, []);

// // // // // // //   useEffect(() => {
// // // // // // //     if (selectedCourseForAssignments) {
// // // // // // //       console.log(
// // // // // // //         "✅ Switching to assignments tab for course:",
// // // // // // //         selectedCourseForAssignments
// // // // // // //       );
// // // // // // //       setActiveTab("assignments");
// // // // // // //     }
// // // // // // //   }, [selectedCourseForAssignments]);

// // // // // // //   const handleEnrollClick = (course) => {
// // // // // // //     setSelectedCourse(course);
// // // // // // //     setEnrollmentDialogOpen(true);
// // // // // // //   };

// // // // // // //   const handleViewProgress = (course) => {
// // // // // // //     setSelectedCourse(course);
// // // // // // //     setProgressDialogOpen(true);
// // // // // // //   };

// // // // // // //   const handleViewAssignments = (course) => {
// // // // // // //     setSelectedCourseForAssignments(course);
// // // // // // //   };

// // // // // // //   const handleEnroll = async () => {
// // // // // // //     try {
// // // // // // //       const token = localStorage.getItem("access-token");
// // // // // // //       if (!token) {
// // // // // // //         console.error("No authentication token found");
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       // Keeping your original enrollment logic
// // // // // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // // // // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // // // // // //       setEnrolledCourses(updatedEnrollments);
// // // // // // //       setEnrollmentDialogOpen(false);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error enrolling:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Keeping your original filtering logic
// // // // // // //   const filteredCourses =
// // // // // // //     activeTab === "enrolled"
// // // // // // //       ? (Array.isArray(courses) ? courses : []).filter((course) =>
// // // // // // //           (Array.isArray(enrolledCourses) ? enrolledCourses : []).some(
// // // // // // //             (enrollment) => enrollment.course_id === course.id
// // // // // // //           )
// // // // // // //         )
// // // // // // //       : Array.isArray(courses)
// // // // // // //       ? courses
// // // // // // //       : [];

// // // // // // //   return (
// // // // // // //     <DashboardContainer>
// // // // // // //       <Header />

// // // // // // //       <ContentWrapper>
// // // // // // //         <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

// // // // // // //         <MainContent>
// // // // // // //           <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
// // // // // // //             {activeTab === "dashboard" && (
// // // // // // //               <>
// // // // // // //                 {/* Welcome Section - Added as requested */}
// // // // // // //                 <Card
// // // // // // //                   sx={{
// // // // // // //                     mb: 4,
// // // // // // //                     p: 3,
// // // // // // //                     borderRadius: "12px",
// // // // // // //                     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   <Box display="flex" alignItems="center" gap={3}>
// // // // // // //                     <Avatar
// // // // // // //                       sx={{
// // // // // // //                         width: 64,
// // // // // // //                         height: 64,
// // // // // // //                         bgcolor: theme.palette.primary.main,
// // // // // // //                         fontSize: "1.5rem",
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       {user?.name?.charAt(0) || "U"}
// // // // // // //                     </Avatar>
// // // // // // //                     <Box>
// // // // // // //                       <Typography variant="h4" fontWeight={700}>
// // // // // // //                         Welcome, {user?.name || "Student"}!
// // // // // // //                       </Typography>
// // // // // // //                       <Typography color="text.secondary">
// // // // // // //                         {randomQuote}
// // // // // // //                       </Typography>
// // // // // // //                     </Box>
// // // // // // //                   </Box>
// // // // // // //                 </Card>

// // // // // // //                 {/* Courses Section - Using your original course display logic */}
// // // // // // //                 <Typography variant="h5" mb={3} fontWeight={600}>
// // // // // // //                   Available Courses
// // // // // // //                 </Typography>

// // // // // // //                 {loading ? (
// // // // // // //                   <Box display="flex" justifyContent="center" py={4}>
// // // // // // //                     <CircularProgress />
// // // // // // //                   </Box>
// // // // // // //                 ) : (
// // // // // // //                   <Grid container spacing={3}>
// // // // // // //                     {filteredCourses.map((course) => {
// // // // // // //                       const enrollment = (
// // // // // // //                         Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // // //                       ).find((enroll) => enroll.course_id === course.id);

// // // // // // //                       const isEnrolled = !!enrollment;

// // // // // // //                       const courseWithEnrollment = {
// // // // // // //                         ...course,
// // // // // // //                         enrollmentId: enrollment?.id || null,
// // // // // // //                       };

// // // // // // //                       return (
// // // // // // //                         <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // //                           <CourseCard
// // // // // // //                             course={courseWithEnrollment}
// // // // // // //                             isEnrolled={isEnrolled}
// // // // // // //                             onEnrollClick={handleEnrollClick}
// // // // // // //                             onViewProgressClick={handleViewProgress}
// // // // // // //                             onViewAssignmentsClick={handleViewAssignments}
// // // // // // //                           />
// // // // // // //                         </Grid>
// // // // // // //                       );
// // // // // // //                     })}
// // // // // // //                   </Grid>
// // // // // // //                 )}
// // // // // // //               </>
// // // // // // //             )}

// // // // // // //             {/* Other Tabs - Keeping your original tab logic */}
// // // // // // //             {activeTab === "progress" && <InProgressCourses />}

// // // // // // //             {activeTab === "assignments" && (
// // // // // // //               <AssignmentList
// // // // // // //                 courseId={selectedCourseForAssignments?.id}
// // // // // // //                 onBack={() => setActiveTab("enrolled")}
// // // // // // //               />
// // // // // // //             )}

// // // // // // //             {["all", "enrolled"].includes(activeTab) && !loading && (
// // // // // // //               <>
// // // // // // //                 <Typography variant="h5" mb={3} fontWeight={600}>
// // // // // // //                   {activeTab === "all" ? "All Courses" : "My Courses"}
// // // // // // //                 </Typography>
// // // // // // //                 <Grid container spacing={3}>
// // // // // // //                   {filteredCourses.map((course) => {
// // // // // // //                     const enrollment = (
// // // // // // //                       Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // // //                     ).find((enroll) => enroll.course_id === course.id);

// // // // // // //                     const isEnrolled = !!enrollment;

// // // // // // //                     const courseWithEnrollment = {
// // // // // // //                       ...course,
// // // // // // //                       enrollmentId: enrollment?.id || null,
// // // // // // //                     };

// // // // // // //                     return (
// // // // // // //                       <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // // //                         <CourseCard
// // // // // // //                           course={courseWithEnrollment}
// // // // // // //                           isEnrolled={isEnrolled}
// // // // // // //                           onEnrollClick={handleEnrollClick}
// // // // // // //                           onViewProgressClick={handleViewProgress}
// // // // // // //                           onViewAssignmentsClick={handleViewAssignments}
// // // // // // //                         />
// // // // // // //                       </Grid>
// // // // // // //                     );
// // // // // // //                   })}
// // // // // // //                 </Grid>
// // // // // // //               </>
// // // // // // //             )}
// // // // // // //           </Container>
// // // // // // //         </MainContent>
// // // // // // //       </ContentWrapper>

// // // // // // //       {/* Keeping your original dialogs */}
// // // // // // //       <EnrollmentDialog
// // // // // // //         open={enrollmentDialogOpen}
// // // // // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // // // // //         course={selectedCourse}
// // // // // // //         onEnroll={handleEnroll}
// // // // // // //       />

// // // // // // //       <ProgressDialog
// // // // // // //         open={progressDialogOpen}
// // // // // // //         onClose={() => setProgressDialogOpen(false)}
// // // // // // //         course={selectedCourse}
// // // // // // //       />
// // // // // // //     </DashboardContainer>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default StudentDashboard;
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import {
// // // // // //   Box,
// // // // // //   Container,
// // // // // //   Typography,
// // // // // //   Grid,
// // // // // //   CircularProgress,
// // // // // //   Card,
// // // // // //   CardContent,
// // // // // //   Avatar,
// // // // // //   useTheme,
// // // // // //   Tabs,
// // // // // //   Tab,
// // // // // // } from "@mui/material";
// // // // // // import { styled } from "@mui/system";
// // // // // // import CourseCard from "../../components/studant/CourseCard";
// // // // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // // // // import CourseService from "../../services/StudentService";
// // // // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // // // import Header from "../../components/common/Header/Header";
// // // // // // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // // // // // import InProgressCourses from "../../components/studant/Inprogress";
// // // // // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";

// // // // // // const motivationalQuotes = [
// // // // // //   "The expert in anything was once a beginner.",
// // // // // //   "Learning is a treasure that will follow its owner everywhere.",
// // // // // //   "Education is the most powerful weapon which you can use to change the world.",
// // // // // // ];

// // // // // // const DashboardContainer = styled(Box)({
// // // // // //   display: "flex",
// // // // // //   flexDirection: "column",
// // // // // //   minHeight: "100vh",
// // // // // //   width: "100%",
// // // // // //   overflowX: "hidden",
// // // // // // });

// // // // // // const ContentWrapper = styled(Box)({
// // // // // //   display: "flex",
// // // // // //   flex: 1,
// // // // // // });

// // // // // // const MainContent = styled(Box)({
// // // // // //   flexGrow: 1,
// // // // // //   padding: "24px",
// // // // // //   backgroundColor: "#f8fbff",
// // // // // //   width: "calc(100% - 280px)",
// // // // // // });

// // // // // // const StatsCard = styled(Card)({
// // // // // //   borderRadius: "12px",
// // // // // //   boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // // //   marginBottom: "16px",
// // // // // //   "&:hover": {
// // // // // //     transform: "translateY(-2px)",
// // // // // //     transition: "transform 0.2s ease-in-out",
// // // // // //   },
// // // // // // });

// // // // // // const StudentDashboard = () => {
// // // // // //   const { user } = useAuth();
// // // // // //   const theme = useTheme();
// // // // // //   const [courses, setCourses] = useState([]);
// // // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // // // //   const [activeTab, setActiveTab] = useState("dashboard");
// // // // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // // // //     useState(null);
// // // // // //   const [randomQuote] = useState(
// // // // // //     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
// // // // // //   );
// // // // // //   const [categoryFilter, setCategoryFilter] = useState("all");
// // // // // //   const [categories, setCategories] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     const fetchData = async () => {
// // // // // //       try {
// // // // // //         setLoading(true);
// // // // // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // // // // //           [
// // // // // //             CourseService.getAllCourses(),
// // // // // //             EnrollmentService.getUserEnrollments(),
// // // // // //           ]
// // // // // //         );

// // // // // //         const allCourses = Array.isArray(allCoursesResponse)
// // // // // //           ? allCoursesResponse
// // // // // //           : allCoursesResponse?.data || [];

// // // // // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // // // // //           ? userEnrollmentsResponse
// // // // // //           : userEnrollmentsResponse?.data || [];

// // // // // //         // Extract unique categories from courses
// // // // // //         const uniqueCategories = [
// // // // // //           "all",
// // // // // //           ...new Set(allCourses.map((course) => course.category)),
// // // // // //         ];
// // // // // //         setCategories(uniqueCategories);

// // // // // //         setCourses(allCourses);
// // // // // //         setEnrolledCourses(userEnrollments);
// // // // // //         setLoading(false);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching data:", error);
// // // // // //         setLoading(false);
// // // // // //         setCourses([]);
// // // // // //         setEnrolledCourses([]);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchData();
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     if (selectedCourseForAssignments) {
// // // // // //       console.log(
// // // // // //         "✅ Switching to assignments tab for course:",
// // // // // //         selectedCourseForAssignments
// // // // // //       );
// // // // // //       setActiveTab("assignments");
// // // // // //     }
// // // // // //   }, [selectedCourseForAssignments]);

// // // // // //   const handleEnrollClick = (course) => {
// // // // // //     setSelectedCourse(course);
// // // // // //     setEnrollmentDialogOpen(true);
// // // // // //   };

// // // // // //   const handleViewProgress = (course) => {
// // // // // //     setSelectedCourse(course);
// // // // // //     setProgressDialogOpen(true);
// // // // // //   };

// // // // // //   const handleViewAssignments = (course) => {
// // // // // //     setSelectedCourseForAssignments(course);
// // // // // //   };

// // // // // //   const handleEnroll = async () => {
// // // // // //     try {
// // // // // //       const token = localStorage.getItem("access-token");
// // // // // //       if (!token) {
// // // // // //         console.error("No authentication token found");
// // // // // //         return;
// // // // // //       }

// // // // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // // // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // // // // //       setEnrolledCourses(updatedEnrollments);
// // // // // //       setEnrollmentDialogOpen(false);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error enrolling:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   // Calculate enrolled courses count
// // // // // //   const enrolledCoursesCount = enrolledCourses.length;

// // // // // //   // Calculate total assignments count (assuming each course has assignmentsCount property)
// // // // // //   const assignmentsCount = enrolledCourses.reduce((total, enrollment) => {
// // // // // //     const course = courses.find((c) => c.id === enrollment.course_id);
// // // // // //     return total + (course?.assignmentsCount || 0);
// // // // // //   }, 0);

// // // // // //   // Filter enrolled courses based on category
// // // // // //   const filteredEnrolledCourses = (Array.isArray(courses) ? courses : [])
// // // // // //     .filter((course) =>
// // // // // //       (Array.isArray(enrolledCourses) ? enrolledCourses : []).some(
// // // // // //         (enrollment) => enrollment.course_id === course.id
// // // // // //       )
// // // // // //     )
// // // // // //     .filter((course) =>
// // // // // //       categoryFilter === "all" ? true : course.category === categoryFilter
// // // // // //     );

// // // // // //   return (
// // // // // //     <DashboardContainer>
// // // // // //       <Header />

// // // // // //       <ContentWrapper>
// // // // // //         <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

// // // // // //         <MainContent>
// // // // // //           <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
// // // // // //             {activeTab === "dashboard" && (
// // // // // //               <>
// // // // // //                 {/* Welcome Section with Stats Cards */}
// // // // // //                 <Box sx={{ mb: 4 }}>
// // // // // //                   <Card
// // // // // //                     sx={{
// // // // // //                       mb: 2,
// // // // // //                       p: 3,
// // // // // //                       borderRadius: "12px",
// // // // // //                       boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     <Box display="flex" alignItems="center" gap={3}>
// // // // // //                       <Avatar
// // // // // //                         sx={{
// // // // // //                           width: 64,
// // // // // //                           height: 64,
// // // // // //                           bgcolor: theme.palette.primary.main,
// // // // // //                           fontSize: "1.5rem",
// // // // // //                         }}
// // // // // //                       >
// // // // // //                         {user?.name?.charAt(0) || "U"}
// // // // // //                       </Avatar>
// // // // // //                       <Box>
// // // // // //                         <Typography variant="h4" fontWeight={700}>
// // // // // //                           Welcome, {user?.name || "Student"}!
// // // // // //                         </Typography>
// // // // // //                         <Typography color="text.secondary">
// // // // // //                           {randomQuote}
// // // // // //                         </Typography>
// // // // // //                       </Box>
// // // // // //                     </Box>
// // // // // //                   </Card>

// // // // // //                   {/* Stats Cards */}
// // // // // //                   <Grid container spacing={2}>
// // // // // //                     <Grid item xs={12} sm={6} md={3}>
// // // // // //                       <StatsCard>
// // // // // //                         <CardContent>
// // // // // //                           <Typography
// // // // // //                             variant="h6"
// // // // // //                             color="text.secondary"
// // // // // //                             gutterBottom
// // // // // //                           >
// // // // // //                             Enrolled Courses
// // // // // //                           </Typography>
// // // // // //                           <Typography variant="h4" fontWeight={700}>
// // // // // //                             {enrolledCoursesCount}
// // // // // //                           </Typography>
// // // // // //                         </CardContent>
// // // // // //                       </StatsCard>
// // // // // //                     </Grid>
// // // // // //                     <Grid item xs={12} sm={6} md={3}>
// // // // // //                       <StatsCard>
// // // // // //                         <CardContent>
// // // // // //                           <Typography
// // // // // //                             variant="h6"
// // // // // //                             color="text.secondary"
// // // // // //                             gutterBottom
// // // // // //                           >
// // // // // //                             Pending Assignments
// // // // // //                           </Typography>
// // // // // //                           <Typography variant="h4" fontWeight={700}>
// // // // // //                             {assignmentsCount}
// // // // // //                           </Typography>
// // // // // //                         </CardContent>
// // // // // //                       </StatsCard>
// // // // // //                     </Grid>
// // // // // //                   </Grid>
// // // // // //                 </Box>

// // // // // //                 {/* Courses Section with Category Tabs */}
// // // // // //                 <Box sx={{ mb: 3 }}>
// // // // // //                   <Typography variant="h5" mb={2} fontWeight={600}>
// // // // // //                     My Courses
// // // // // //                   </Typography>

// // // // // //                   {categories.length > 1 && (
// // // // // //                     <Tabs
// // // // // //                       value={categoryFilter}
// // // // // //                       onChange={(e, newValue) => setCategoryFilter(newValue)}
// // // // // //                       variant="scrollable"
// // // // // //                       scrollButtons="auto"
// // // // // //                       sx={{ mb: 3 }}
// // // // // //                     >
// // // // // //                       {categories.map((category) => (
// // // // // //                         <Tab
// // // // // //                           key={category}
// // // // // //                           label={category}
// // // // // //                           value={category}
// // // // // //                           sx={{ textTransform: "capitalize" }}
// // // // // //                         />
// // // // // //                       ))}
// // // // // //                     </Tabs>
// // // // // //                   )}
// // // // // //                 </Box>

// // // // // //                 {loading ? (
// // // // // //                   <Box display="flex" justifyContent="center" py={4}>
// // // // // //                     <CircularProgress />
// // // // // //                   </Box>
// // // // // //                 ) : (
// // // // // //                   <Grid container spacing={3}>
// // // // // //                     {filteredEnrolledCourses.map((course) => {
// // // // // //                       const enrollment = (
// // // // // //                         Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // //                       ).find((enroll) => enroll.course_id === course.id);

// // // // // //                       const isEnrolled = !!enrollment;

// // // // // //                       const courseWithEnrollment = {
// // // // // //                         ...course,
// // // // // //                         enrollmentId: enrollment?.id || null,
// // // // // //                       };

// // // // // //                       return (
// // // // // //                         <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // //                           <CourseCard
// // // // // //                             course={courseWithEnrollment}
// // // // // //                             isEnrolled={isEnrolled}
// // // // // //                             onEnrollClick={handleEnrollClick}
// // // // // //                             onViewProgressClick={handleViewProgress}
// // // // // //                             onViewAssignmentsClick={handleViewAssignments}
// // // // // //                           />
// // // // // //                         </Grid>
// // // // // //                       );
// // // // // //                     })}
// // // // // //                   </Grid>
// // // // // //                 )}
// // // // // //               </>
// // // // // //             )}

// // // // // //             {/* Other Tabs */}
// // // // // //             {activeTab === "progress" && <InProgressCourses />}

// // // // // //             {activeTab === "assignments" && (
// // // // // //               <AssignmentList
// // // // // //                 courseId={selectedCourseForAssignments?.id}
// // // // // //                 onBack={() => setActiveTab("enrolled")}
// // // // // //               />
// // // // // //             )}

// // // // // //             {["all", "enrolled"].includes(activeTab) && !loading && (
// // // // // //               <>
// // // // // //                 <Typography variant="h5" mb={3} fontWeight={600}>
// // // // // //                   {activeTab === "all" ? "All Courses" : "My Courses"}
// // // // // //                 </Typography>
// // // // // //                 <Grid container spacing={3}>
// // // // // //                   {filteredEnrolledCourses.map((course) => {
// // // // // //                     const enrollment = (
// // // // // //                       Array.isArray(enrolledCourses) ? enrolledCourses : []
// // // // // //                     ).find((enroll) => enroll.course_id === course.id);

// // // // // //                     const isEnrolled = !!enrollment;

// // // // // //                     const courseWithEnrollment = {
// // // // // //                       ...course,
// // // // // //                       enrollmentId: enrollment?.id || null,
// // // // // //                     };

// // // // // //                     return (
// // // // // //                       <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // // //                         <CourseCard
// // // // // //                           course={courseWithEnrollment}
// // // // // //                           isEnrolled={isEnrolled}
// // // // // //                           onEnrollClick={handleEnrollClick}
// // // // // //                           onViewProgressClick={handleViewProgress}
// // // // // //                           onViewAssignmentsClick={handleViewAssignments}
// // // // // //                         />
// // // // // //                       </Grid>
// // // // // //                     );
// // // // // //                   })}
// // // // // //                 </Grid>
// // // // // //               </>
// // // // // //             )}
// // // // // //           </Container>
// // // // // //         </MainContent>
// // // // // //       </ContentWrapper>

// // // // // //       <EnrollmentDialog
// // // // // //         open={enrollmentDialogOpen}
// // // // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // // // //         course={selectedCourse}
// // // // // //         onEnroll={handleEnroll}
// // // // // //       />

// // // // // //       <ProgressDialog
// // // // // //         open={progressDialogOpen}
// // // // // //         onClose={() => setProgressDialogOpen(false)}
// // // // // //         course={selectedCourse}
// // // // // //       />
// // // // // //     </DashboardContainer>
// // // // // //   );
// // // // // // };

// // // // // // export default StudentDashboard;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import {
// // // // //   Box,
// // // // //   Container,
// // // // //   Typography,
// // // // //   Grid,
// // // // //   CircularProgress,
// // // // //   Card,
// // // // //   CardContent,
// // // // //   Avatar,
// // // // //   useTheme,
// // // // //   Tabs,
// // // // //   Tab,
// // // // // } from "@mui/material";
// // // // // import { styled } from "@mui/system";
// // // // // import CourseCard from "../../components/studant/CourseCard";
// // // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // // // import CourseService from "../../services/StudentService";
// // // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // // import Header from "../../components/common/Header/Header";
// // // // // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // // // // import InProgressCourses from "../../components/studant/Inprogress";
// // // // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// // // // // import QuizDashboard from "./QuizDashboard";

// // // // // const motivationalQuotes = [
// // // // //   "The expert in anything was once a beginner.",
// // // // //   "Learning is a treasure that will follow its owner everywhere.",
// // // // //   "Education is the most powerful weapon which you can use to change the world.",
// // // // // ];

// // // // // const DashboardContainer = styled(Box)({
// // // // //   display: "flex",
// // // // //   flexDirection: "column",
// // // // //   minHeight: "100vh",
// // // // //   width: "100%",
// // // // //   overflowX: "hidden",
// // // // // });

// // // // // const ContentWrapper = styled(Box)({
// // // // //   display: "flex",
// // // // //   flex: 1,
// // // // // });

// // // // // const MainContent = styled(Box)({
// // // // //   flexGrow: 1,
// // // // //   padding: "24px",
// // // // //   backgroundColor: "#f8fbff",
// // // // //   width: "calc(100% - 280px)",
// // // // // });

// // // // // const StatsCard = styled(Card)({
// // // // //   borderRadius: "12px",
// // // // //   boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // // //   marginBottom: "16px",
// // // // //   "&:hover": {
// // // // //     transform: "translateY(-2px)",
// // // // //     transition: "transform 0.2s ease-in-out",
// // // // //   },
// // // // // });

// // // // // const StudentDashboard = () => {
// // // // //   const { user } = useAuth();
// // // // //   const theme = useTheme();
// // // // //   const [courses, setCourses] = useState([]);
// // // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // // //   const [activeTab, setActiveTab] = useState("dashboard");
// // // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // // //     useState(null);
// // // // //   const [randomQuote] = useState(
// // // // //     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
// // // // //   );
// // // // //   const [categoryFilter, setCategoryFilter] = useState("all");
// // // // //   const [categories, setCategories] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //       try {
// // // // //         setLoading(true);
// // // // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // // // //           [
// // // // //             CourseService.getAllCourses(),
// // // // //             EnrollmentService.getUserEnrollments(),
// // // // //           ]
// // // // //         );

// // // // //         const allCourses = Array.isArray(allCoursesResponse)
// // // // //           ? allCoursesResponse
// // // // //           : allCoursesResponse?.data || [];

// // // // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // // // //           ? userEnrollmentsResponse
// // // // //           : userEnrollmentsResponse?.data || [];

// // // // //         const uniqueCategories = [
// // // // //           "all",
// // // // //           ...new Set(allCourses.map((course) => course.category)),
// // // // //         ];
// // // // //         setCategories(uniqueCategories);

// // // // //         setCourses(allCourses);
// // // // //         setEnrolledCourses(userEnrollments);
// // // // //         setLoading(false);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching data:", error);
// // // // //         setLoading(false);
// // // // //         setCourses([]);
// // // // //         setEnrolledCourses([]);
// // // // //       }
// // // // //     };

// // // // //     fetchData();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (selectedCourseForAssignments) {
// // // // //       setActiveTab("assignments");
// // // // //     }
// // // // //   }, [selectedCourseForAssignments]);

// // // // //   const handleEnrollClick = (course) => {
// // // // //     setSelectedCourse(course);
// // // // //     setEnrollmentDialogOpen(true);
// // // // //   };

// // // // //   const handleViewProgress = (course) => {
// // // // //     setSelectedCourse(course);
// // // // //     setProgressDialogOpen(true);
// // // // //   };

// // // // //   const handleViewAssignments = (course) => {
// // // // //     setSelectedCourseForAssignments(course);
// // // // //   };

// // // // //   const handleEnroll = async () => {
// // // // //     try {
// // // // //       const token = localStorage.getItem("access-token");
// // // // //       if (!token) return;

// // // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // // // //       setEnrolledCourses(updatedEnrollments);
// // // // //       setEnrollmentDialogOpen(false);
// // // // //     } catch (error) {
// // // // //       console.error("Error enrolling:", error);
// // // // //     }
// // // // //   };

// // // // //   // Helper functions
// // // // //   const enrolledCourseIds = enrolledCourses.map((enroll) => enroll.course_id);
// // // // //   const enrolledCoursesCount = enrolledCourseIds.length;
// // // // //   const completedCoursesCount = enrolledCourses.filter(
// // // // //     (enrollment) => enrollment.isCompleted
// // // // //   ).length;

// // // // //   const getEnrolledCourses = () => {
// // // // //     return courses
// // // // //       .filter((course) => enrolledCourseIds.includes(course.id))
// // // // //       .filter(
// // // // //         (course) =>
// // // // //           categoryFilter === "all" || course.category === categoryFilter
// // // // //       );
// // // // //   };

// // // // //   const getNotEnrolledCourses = () => {
// // // // //     return courses.filter((course) => !enrolledCourseIds.includes(course.id));
// // // // //   };

// // // // //   const renderCourses = () => {
// // // // //     if (loading) {
// // // // //       return (
// // // // //         <Box display="flex" justifyContent="center" py={4}>
// // // // //           <CircularProgress />
// // // // //         </Box>
// // // // //       );
// // // // //     }

// // // // //     const coursesToShow =
// // // // //       activeTab === "all" ? getNotEnrolledCourses() : getEnrolledCourses();

// // // // //     return (
// // // // //       <Grid container spacing={3}>
// // // // //         {coursesToShow.map((course) => {
// // // // //           const isEnrolled = enrolledCourseIds.includes(course.id);
// // // // //           const enrollment = enrolledCourses.find(
// // // // //             (enroll) => enroll.course_id === course.id
// // // // //           );

// // // // //           return (
// // // // //             <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // // //               <CourseCard
// // // // //                 course={{ ...course, enrollmentId: enrollment?.id || null }}
// // // // //                 isEnrolled={isEnrolled}
// // // // //                 onEnrollClick={activeTab === "all" ? handleEnrollClick : null}
// // // // //                 onViewProgressClick={handleViewProgress}
// // // // //                 onViewAssignmentsClick={handleViewAssignments}
// // // // //               />
// // // // //             </Grid>
// // // // //           );
// // // // //         })}
// // // // //       </Grid>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <DashboardContainer>
// // // // //       <Header />
// // // // //       <ContentWrapper>
// // // // //         <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
// // // // //         <MainContent>
// // // // //           <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
// // // // //             {activeTab === "dashboard" && (
// // // // //               <>
// // // // //                 {/* Welcome Section */}
// // // // //                 <Card sx={{ mb: 4, p: 3, borderRadius: "12px" }}>
// // // // //                   <Box display="flex" alignItems="center" gap={3}>
// // // // //                     <Avatar
// // // // //                       sx={{
// // // // //                         width: 64,
// // // // //                         height: 64,
// // // // //                         bgcolor: theme.palette.primary.main,
// // // // //                       }}
// // // // //                     >
// // // // //                       {user?.name?.charAt(0) || "U"}
// // // // //                     </Avatar>
// // // // //                     <Box>
// // // // //                       <Typography variant="h4" fontWeight={700}>
// // // // //                         Welcome, {user?.name || "Student"}!
// // // // //                       </Typography>
// // // // //                       <Typography color="text.secondary">
// // // // //                         {randomQuote}
// // // // //                       </Typography>
// // // // //                     </Box>
// // // // //                   </Box>
// // // // //                 </Card>

// // // // //                 {/* Stats Cards */}

// // // // //                 {/* <Grid container spacing={2} sx={{ mb: 4 }}>
// // // // //                   <Grid item xs={12} sm={6} md={3}>
// // // // //                     <StatsCard>
// // // // //                       <CardContent>
// // // // //                         <Typography color="text.secondary" gutterBottom>
// // // // //                           Enrolled Courses
// // // // //                         </Typography>
// // // // //                         <Typography variant="h4" fontWeight={700}>
// // // // //                           {enrolledCoursesCount}
// // // // //                         </Typography>
// // // // //                       </CardContent>
// // // // //                     </StatsCard>
// // // // //                   </Grid>
// // // // //                   <Grid item xs={12} sm={6} md={3}>
// // // // //                     <StatsCard>
// // // // //                       <CardContent>
// // // // //                         <Typography color="text.secondary" gutterBottom>
// // // // //                           Completed Courses
// // // // //                         </Typography>
// // // // //                         <Typography variant="h4" fontWeight={700}>
// // // // //                           {completedCoursesCount}
// // // // //                         </Typography>
// // // // //                       </CardContent>
// // // // //                     </StatsCard>
// // // // //                   </Grid>
// // // // //                 </Grid> */}
// // // // //                 <Grid container spacing={2} sx={{ mb: 4 }}>
// // // // //                   <Grid item xs={12} sm={6} md={3}>
// // // // //                     <StatsCard>
// // // // //                       <CardContent>
// // // // //                         <Typography color="text.secondary" gutterBottom>
// // // // //                           Enrolled Courses
// // // // //                         </Typography>
// // // // //                         <Typography variant="h4" fontWeight={700}>
// // // // //                           {enrolledCoursesCount}
// // // // //                         </Typography>
// // // // //                       </CardContent>
// // // // //                     </StatsCard>
// // // // //                   </Grid>
// // // // //                   <Grid item xs={12} sm={6} md={3}>
// // // // //                     <StatsCard>
// // // // //                       <CardContent>
// // // // //                         <Typography color="text.secondary" gutterBottom>
// // // // //                           Completed Courses
// // // // //                         </Typography>
// // // // //                         <Typography variant="h4" fontWeight={700}>
// // // // //                           {completedCoursesCount}
// // // // //                         </Typography>
// // // // //                       </CardContent>
// // // // //                     </StatsCard>
// // // // //                   </Grid>
// // // // //                 </Grid>
// // // // //                 {/* Courses Section */}
// // // // //                 <Typography variant="h5" mb={2} fontWeight={600}>
// // // // //                   My Courses
// // // // //                 </Typography>

// // // // //                 {categories.length > 1 && (
// // // // //                   <Tabs
// // // // //                     value={categoryFilter}
// // // // //                     onChange={(e, newValue) => setCategoryFilter(newValue)}
// // // // //                     variant="scrollable"
// // // // //                     scrollButtons="auto"
// // // // //                     sx={{ mb: 3 }}
// // // // //                   >
// // // // //                     {categories.map((category) => (
// // // // //                       <Tab
// // // // //                         key={category}
// // // // //                         label={category}
// // // // //                         value={category}
// // // // //                         sx={{ textTransform: "capitalize" }}
// // // // //                       />
// // // // //                     ))}
// // // // //                   </Tabs>
// // // // //                 )}

// // // // //                 {renderCourses()}
// // // // //               </>
// // // // //             )}

// // // // //             {activeTab === "progress" && <InProgressCourses />}

// // // // //             {activeTab === "assignments" && (
// // // // //               <AssignmentList
// // // // //                 courseId={selectedCourseForAssignments?.id}
// // // // //                 onBack={() => setActiveTab("enrolled")}
// // // // //               />
// // // // //             )}

// // // // //             {["all", "enrolled"].includes(activeTab) && (
// // // // //               <>
// // // // //                 <Typography variant="h5" mb={3} fontWeight={600}>
// // // // //                   {activeTab === "all" ? "Available Courses" : "My Courses"}
// // // // //                 </Typography>
// // // // //                 {renderCourses()}
// // // // //               </>
// // // // //             )}
// // // // //           </Container>
// // // // //         </MainContent>
// // // // //       </ContentWrapper>

// // // // //       <EnrollmentDialog
// // // // //         open={enrollmentDialogOpen}
// // // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // // //         course={selectedCourse}
// // // // //         onEnroll={handleEnroll}
// // // // //       />

// // // // //       <ProgressDialog
// // // // //         open={progressDialogOpen}
// // // // //         onClose={() => setProgressDialogOpen(false)}
// // // // //         course={selectedCourse}
// // // // //       />
// // // // //       {activeTab === "quizzes" && <QuizDashboard />}
// // // // //     </DashboardContainer>
// // // // //   );
// // // // // };

// // // // // export default StudentDashboard;
// // // // import React, { useState, useEffect } from "react";
// // // // import {
// // // //   Box,
// // // //   Container,
// // // //   Typography,
// // // //   Grid,
// // // //   CircularProgress,
// // // //   Card,
// // // //   CardContent,
// // // //   Avatar,
// // // //   useTheme,
// // // //   Tabs,
// // // //   Tab,
// // // // } from "@mui/material";
// // // // import { styled } from "@mui/system";
// // // // import CourseCard from "../../components/studant/CourseCard";
// // // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // // import StudentSidebar from "../../components/common/Sidebar/StudentSidebar";
// // // // import CourseService from "../../services/StudentService";
// // // // import EnrollmentService from "../../services/EnrollemtServices";
// // // // import Header from "../../components/common/Sidebar/StudentHeader";
// // // // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // // // import InProgressCourses from "../../components/studant/Inprogress";
// // // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// // // // import QuizDashboard from "./../../components/studant/Quiz/QuizDashboard";
// // // // import QuizIcon from "@mui/icons-material/Quiz";

// // // // const motivationalQuotes = [
// // // //   "The expert in anything was once a beginner.",
// // // //   "Learning is a treasure that will follow its owner everywhere.",
// // // //   "Education is the most powerful weapon which you can use to change the world.",
// // // // ];

// // // // const DashboardContainer = styled(Box)({
// // // //   display: "flex",
// // // //   flexDirection: "column",
// // // //   minHeight: "100vh",
// // // //   width: "100%",
// // // //   overflowX: "hidden",
// // // // });

// // // // const ContentWrapper = styled(Box)({
// // // //   display: "flex",
// // // //   flex: 1,
// // // // });

// // // // const MainContent = styled(Box)({
// // // //   flexGrow: 1,
// // // //   padding: "24px",
// // // //   backgroundColor: "#f8fbff",
// // // //   width: "calc(100% - 280px)",
// // // // });

// // // // const StatsCard = styled(Card)({
// // // //   borderRadius: "12px",
// // // //   boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// // // //   marginBottom: "16px",
// // // //   "&:hover": {
// // // //     transform: "translateY(-2px)",
// // // //     transition: "transform 0.2s ease-in-out",
// // // //   },
// // // // });

// // // // const StudentDashboard = () => {
// // // //   const { user } = useAuth();
// // // //   const theme = useTheme();
// // // //   const [courses, setCourses] = useState([]);
// // // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // // //   const [activeTab, setActiveTab] = useState("dashboard");
// // // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // // //     useState(null);
// // // //   const [randomQuote] = useState(
// // // //     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
// // // //   );
// // // //   const [categoryFilter, setCategoryFilter] = useState("all");
// // // //   const [categories, setCategories] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // // //           [
// // // //             CourseService.getAllCourses(),
// // // //             EnrollmentService.getUserEnrollments(),
// // // //           ]
// // // //         );

// // // //         const allCourses = Array.isArray(allCoursesResponse)
// // // //           ? allCoursesResponse
// // // //           : allCoursesResponse?.data || [];

// // // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // // //           ? userEnrollmentsResponse
// // // //           : userEnrollmentsResponse?.data || [];

// // // //         const uniqueCategories = [
// // // //           "all",
// // // //           ...new Set(allCourses.map((course) => course.category)),
// // // //         ];
// // // //         setCategories(uniqueCategories);

// // // //         setCourses(allCourses);
// // // //         setEnrolledCourses(userEnrollments);
// // // //         setLoading(false);
// // // //       } catch (error) {
// // // //         console.error("Error fetching data:", error);
// // // //         setLoading(false);
// // // //         setCourses([]);
// // // //         setEnrolledCourses([]);
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (selectedCourseForAssignments) {
// // // //       setActiveTab("assignments");
// // // //     }
// // // //   }, [selectedCourseForAssignments]);

// // // //   const handleEnrollClick = (course) => {
// // // //     setSelectedCourse(course);
// // // //     setEnrollmentDialogOpen(true);
// // // //   };

// // // //   const handleViewProgress = (course) => {
// // // //     setSelectedCourse(course);
// // // //     setProgressDialogOpen(true);
// // // //   };

// // // //   const handleViewAssignments = (course) => {
// // // //     setSelectedCourseForAssignments(course);
// // // //   };

// // // //   const handleEnroll = async () => {
// // // //     try {
// // // //       const token = localStorage.getItem("access-token");
// // // //       if (!token) return;

// // // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // // //       setEnrolledCourses(updatedEnrollments);
// // // //       setEnrollmentDialogOpen(false);
// // // //     } catch (error) {
// // // //       console.error("Error enrolling:", error);
// // // //     }
// // // //   };

// // // //   // Helper functions
// // // //   const enrolledCourseIds = enrolledCourses.map((enroll) => enroll.course_id);
// // // //   const enrolledCoursesCount = enrolledCourseIds.length;
// // // //   const completedCoursesCount = enrolledCourses.filter(
// // // //     (enrollment) => enrollment.isCompleted
// // // //   ).length;

// // // //   const getEnrolledCourses = () => {
// // // //     return courses
// // // //       .filter((course) => enrolledCourseIds.includes(course.id))
// // // //       .filter(
// // // //         (course) =>
// // // //           categoryFilter === "all" || course.category === categoryFilter
// // // //       );
// // // //   };

// // // //   const getNotEnrolledCourses = () => {
// // // //     return courses.filter((course) => !enrolledCourseIds.includes(course.id));
// // // //   };

// // // //   const renderCourses = () => {
// // // //     if (loading) {
// // // //       return (
// // // //         <Box display="flex" justifyContent="center" py={4}>
// // // //           <CircularProgress />
// // // //         </Box>
// // // //       );
// // // //     }

// // // //     const coursesToShow =
// // // //       activeTab === "all" ? getNotEnrolledCourses() : getEnrolledCourses();

// // // //     return (
// // // //       <Grid container spacing={3}>
// // // //         {coursesToShow.map((course) => {
// // // //           const isEnrolled = enrolledCourseIds.includes(course.id);
// // // //           const enrollment = enrolledCourses.find(
// // // //             (enroll) => enroll.course_id === course.id
// // // //           );

// // // //           return (
// // // //             <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // // //               <CourseCard
// // // //                 course={{ ...course, enrollmentId: enrollment?.id || null }}
// // // //                 isEnrolled={isEnrolled}
// // // //                 onEnrollClick={activeTab === "all" ? handleEnrollClick : null}
// // // //                 onViewProgressClick={handleViewProgress}
// // // //                 onViewAssignmentsClick={handleViewAssignments}
// // // //               />
// // // //             </Grid>
// // // //           );
// // // //         })}
// // // //       </Grid>
// // // //     );
// // // //   };

// // // //   const renderTabContent = () => {
// // // //     switch (activeTab) {
// // // //       case "dashboard":
// // // //         return (
// // // //           <>
// // // //             {/* Welcome Section */}
// // // //             <Card sx={{ mb: 4, p: 3, borderRadius: "12px" }}>
// // // //               <Box display="flex" alignItems="center" gap={3}>
// // // //                 <Avatar
// // // //                   sx={{
// // // //                     width: 64,
// // // //                     height: 64,
// // // //                     bgcolor: theme.palette.primary.main,
// // // //                   }}
// // // //                 >
// // // //                   {user?.name?.charAt(0) || "U"}
// // // //                 </Avatar>
// // // //                 <Box>
// // // //                   <Typography variant="h4" fontWeight={700}>
// // // //                     Welcome, {user?.name || "Student"}!
// // // //                   </Typography>
// // // //                   <Typography color="text.secondary">{randomQuote}</Typography>
// // // //                 </Box>
// // // //               </Box>
// // // //             </Card>

// // // //             {/* Stats Cards */}
// // // //             <Grid container spacing={2} sx={{ mb: 4 }}>
// // // //               <Grid item xs={12} sm={6} md={3}>
// // // //                 <StatsCard>
// // // //                   <CardContent>
// // // //                     <Typography color="text.secondary" gutterBottom>
// // // //                       Enrolled Courses
// // // //                     </Typography>
// // // //                     <Typography variant="h4" fontWeight={700}>
// // // //                       {enrolledCoursesCount}
// // // //                     </Typography>
// // // //                   </CardContent>
// // // //                 </StatsCard>
// // // //               </Grid>
// // // //               <Grid item xs={12} sm={6} md={3}>
// // // //                 <StatsCard>
// // // //                   <CardContent>
// // // //                     <Typography color="text.secondary" gutterBottom>
// // // //                       Completed Courses
// // // //                     </Typography>
// // // //                     <Typography variant="h4" fontWeight={700}>
// // // //                       {completedCoursesCount}
// // // //                     </Typography>
// // // //                   </CardContent>
// // // //                 </StatsCard>
// // // //               </Grid>
// // // //             </Grid>

// // // //             {/* Courses Section */}
// // // //             <Typography variant="h5" mb={2} fontWeight={600}>
// // // //               My Courses
// // // //             </Typography>

// // // //             {categories.length > 1 && (
// // // //               <Tabs
// // // //                 value={categoryFilter}
// // // //                 onChange={(e, newValue) => setCategoryFilter(newValue)}
// // // //                 variant="scrollable"
// // // //                 scrollButtons="auto"
// // // //                 sx={{ mb: 3 }}
// // // //               >
// // // //                 {categories.map((category) => (
// // // //                   <Tab
// // // //                     key={category}
// // // //                     label={category}
// // // //                     value={category}
// // // //                     sx={{ textTransform: "capitalize" }}
// // // //                   />
// // // //                 ))}
// // // //               </Tabs>
// // // //             )}

// // // //             {renderCourses()}
// // // //           </>
// // // //         );

// // // //       case "progress":
// // // //         return <InProgressCourses />;

// // // //       case "assignments":
// // // //         return (
// // // //           <AssignmentList
// // // //             courseId={selectedCourseForAssignments?.id}
// // // //             onBack={() => setActiveTab("enrolled")}
// // // //           />
// // // //         );

// // // //       case "quizzes":
// // // //         return <QuizDashboard />;

// // // //       case "all":
// // // //       case "enrolled":
// // // //         return (
// // // //           <>
// // // //             <Typography variant="h5" mb={3} fontWeight={600}>
// // // //               {activeTab === "all" ? "Available Courses" : "My Courses"}
// // // //             </Typography>
// // // //             {renderCourses()}
// // // //           </>
// // // //         );

// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <DashboardContainer>
// // // //       <Header />
// // // //       <ContentWrapper>
// // // //         <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
// // // //         <MainContent>
// // // //           <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
// // // //             {renderTabContent()}
// // // //           </Container>
// // // //         </MainContent>
// // // //       </ContentWrapper>

// // // //       <EnrollmentDialog
// // // //         open={enrollmentDialogOpen}
// // // //         onClose={() => setEnrollmentDialogOpen(false)}
// // // //         course={selectedCourse}
// // // //         onEnroll={handleEnroll}
// // // //       />

// // // //       <ProgressDialog
// // // //         open={progressDialogOpen}
// // // //         onClose={() => setProgressDialogOpen(false)}
// // // //         course={selectedCourse}
// // // //       />
// // // //     </DashboardContainer>
// // // //   );
// // // // };

// // // // export default StudentDashboard;

// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   Box,
// // //   Container,
// // //   Typography,
// // //   Grid,
// // //   CircularProgress,
// // //   Card,
// // //   CardContent,
// // //   Avatar,
// // //   useTheme,
// // //   Tabs,
// // //   Tab,
// // // } from "@mui/material";
// // // import { styled } from "@mui/system";
// // // import CourseCard from "../../components/studant/CourseCard";
// // // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // // import ProgressDialog from "../../components/studant/ProgressDialog";
// // // import StudentSidebar from "../../components/studant/StudentSidebar";
// // // import CourseService from "../../services/StudentService";
// // // import EnrollmentService from "../../services/EnrollemtServices";
// // // import Header from "../../components/common/Header/Header";
// // // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // // import InProgressCourses from "../../components/studant/Inprogress";
// // // import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// // // import QuizDashboard from "./../../components/studant/Quiz/QuizDashboard";
// // // import Settings from "../../components/common/Settings/Settings";
// // // const motivationalQuotes = [
// // //   "The expert in anything was once a beginner.",
// // //   "Learning is a treasure that will follow its owner everywhere.",
// // //   "Education is the most powerful weapon which you can use to change the world.",
// // // ];

// // // const DashboardContainer = styled(Box)({
// // //   display: "flex",
// // //   flexDirection: "column",
// // //   minHeight: "100vh",
// // //   width: "100%",
// // // });

// // // const ContentWrapper = styled(Box)({
// // //   display: "flex",
// // //   flex: 1,
// // // });

// // // const MainContent = styled(Box)(({ theme }) => ({
// // //   flexGrow: 1,
// // //   padding: theme.spacing(3),
// // //   width: "calc(100% - 280px)",
// // //   backgroundColor: theme.palette.background.default,
// // // }));

// // // const StatsCard = styled(Card)(({ theme }) => ({
// // //   borderRadius: theme.shape.borderRadius,
// // //   boxShadow: theme.shadows[2],
// // //   transition: theme.transitions.create(["transform"], {
// // //     duration: theme.transitions.duration.short,
// // //   }),
// // //   "&:hover": {
// // //     transform: "translateY(-2px)",
// // //     boxShadow: theme.shadows[4],
// // //   },
// // // }));

// // // const StudentDashboard = () => {
// // //   const { user } = useAuth();
// // //   const theme = useTheme();
// // //   const [courses, setCourses] = useState([]);
// // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedCourse, setSelectedCourse] = useState(null);
// // //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// // //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// // //   const [activeTab, setActiveTab] = useState("dashboard");
// // //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// // //     useState(null);
// // //   const [randomQuote] = useState(
// // //     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
// // //   );
// // //   const [categoryFilter, setCategoryFilter] = useState("all");
// // //   const [categories, setCategories] = useState([]);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// // //           [
// // //             CourseService.getAllCourses(),
// // //             EnrollmentService.getUserEnrollments(),
// // //           ]
// // //         );

// // //         const allCourses = Array.isArray(allCoursesResponse)
// // //           ? allCoursesResponse
// // //           : allCoursesResponse?.data || [];

// // //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// // //           ? userEnrollmentsResponse
// // //           : userEnrollmentsResponse?.data || [];

// // //         const uniqueCategories = [
// // //           "all",
// // //           ...new Set(allCourses.map((course) => course.category)),
// // //         ];
// // //         setCategories(uniqueCategories);

// // //         setCourses(allCourses);
// // //         setEnrolledCourses(userEnrollments);
// // //         setLoading(false);
// // //       } catch (error) {
// // //         console.error("Error fetching data:", error);
// // //         setLoading(false);
// // //         setCourses([]);
// // //         setEnrolledCourses([]);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (selectedCourseForAssignments) {
// // //       setActiveTab("assignments");
// // //     }
// // //   }, [selectedCourseForAssignments]);

// // //   const handleEnrollClick = (course) => {
// // //     setSelectedCourse(course);
// // //     setEnrollmentDialogOpen(true);
// // //   };

// // //   const handleViewProgress = (course) => {
// // //     setSelectedCourse(course);
// // //     setProgressDialogOpen(true);
// // //   };

// // //   const handleViewAssignments = (course) => {
// // //     setSelectedCourseForAssignments(course);
// // //   };

// // //   const handleEnroll = async () => {
// // //     try {
// // //       const token = localStorage.getItem("access-token");
// // //       if (!token) return;

// // //       await EnrollmentService.enrollUser(selectedCourse.id);
// // //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// // //       setEnrolledCourses(updatedEnrollments);
// // //       setEnrollmentDialogOpen(false);
// // //     } catch (error) {
// // //       console.error("Error enrolling:", error);
// // //     }
// // //   };

// // //   // Helper functions
// // //   const enrolledCourseIds = enrolledCourses.map((enroll) => enroll.course_id);
// // //   const enrolledCoursesCount = enrolledCourseIds.length;
// // //   const completedCoursesCount = enrolledCourses.filter(
// // //     (enrollment) => enrollment.isCompleted
// // //   ).length;

// // //   const getEnrolledCourses = () => {
// // //     return courses
// // //       .filter((course) => enrolledCourseIds.includes(course.id))
// // //       .filter(
// // //         (course) =>
// // //           categoryFilter === "all" || course.category === categoryFilter
// // //       );
// // //   };

// // //   const getNotEnrolledCourses = () => {
// // //     return courses.filter((course) => !enrolledCourseIds.includes(course.id));
// // //   };

// // //   const renderCourses = () => {
// // //     if (loading) {
// // //       return (
// // //         <Box display="flex" justifyContent="center" py={4}>
// // //           <CircularProgress />
// // //         </Box>
// // //       );
// // //     }

// // //     const coursesToShow =
// // //       activeTab === "all" ? getNotEnrolledCourses() : getEnrolledCourses();

// // //     return (
// // //       <Grid container spacing={3}>
// // //         {coursesToShow.map((course) => {
// // //           const isEnrolled = enrolledCourseIds.includes(course.id);
// // //           const enrollment = enrolledCourses.find(
// // //             (enroll) => enroll.course_id === course.id
// // //           );

// // //           return (
// // //             <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// // //               <CourseCard
// // //                 course={{ ...course, enrollmentId: enrollment?.id || null }}
// // //                 isEnrolled={isEnrolled}
// // //                 onEnrollClick={activeTab === "all" ? handleEnrollClick : null}
// // //                 onViewProgressClick={handleViewProgress}
// // //                 onViewAssignmentsClick={handleViewAssignments}
// // //               />
// // //             </Grid>
// // //           );
// // //         })}
// // //       </Grid>
// // //     );
// // //   };

// // //   const renderTabContent = () => {
// // //     switch (activeTab) {
// // //       case "dashboard":
// // //         return (
// // //           <>
// // //             {/* Welcome Section */}
// // //             <Card sx={{ mb: 4, p: 3, mt: 10 }}>
// // //               <Box display="flex" alignItems="center" gap={3}>
// // //                 <Avatar
// // //                   sx={{
// // //                     width: 64,
// // //                     height: 64,
// // //                     bgcolor: theme.palette.primary.main,
// // //                   }}
// // //                 >
// // //                   {user?.name?.charAt(0) || "U"}
// // //                 </Avatar>
// // //                 <Box>
// // //                   <Typography variant="h5" fontWeight={600}>
// // //                     Welcome, {user?.name || "Student"}!
// // //                   </Typography>
// // //                   <Typography color="text.secondary" variant="body2">
// // //                     {randomQuote}
// // //                   </Typography>
// // //                 </Box>
// // //               </Box>
// // //             </Card>

// // //             {/* Stats Cards */}
// // //             <Grid container spacing={2} sx={{ mb: 4 }}>
// // //               <Grid item xs={12} sm={6} md={3}>
// // //                 <StatsCard>
// // //                   <CardContent>
// // //                     <Typography color="text.secondary" variant="body2">
// // //                       Enrolled Courses
// // //                     </Typography>
// // //                     <Typography variant="h5" fontWeight={600}>
// // //                       {enrolledCoursesCount}
// // //                     </Typography>
// // //                   </CardContent>
// // //                 </StatsCard>
// // //               </Grid>
// // //               <Grid item xs={12} sm={6} md={3}>
// // //                 <StatsCard>
// // //                   <CardContent>
// // //                     <Typography color="text.secondary" variant="body2">
// // //                       Completed Courses
// // //                     </Typography>
// // //                     <Typography variant="h5" fontWeight={600}>
// // //                       {completedCoursesCount}
// // //                     </Typography>
// // //                   </CardContent>
// // //                 </StatsCard>
// // //               </Grid>
// // //             </Grid>

// // //             {/* Courses Section */}
// // //             <Typography variant="h6" mb={2} fontWeight={600}>
// // //               My Courses
// // //             </Typography>

// // //             {categories.length > 1 && (
// // //               <Tabs
// // //                 value={categoryFilter}
// // //                 onChange={(e, newValue) => setCategoryFilter(newValue)}
// // //                 variant="scrollable"
// // //                 scrollButtons="auto"
// // //                 sx={{ mb: 3 }}
// // //               >
// // //                 {categories.map((category) => (
// // //                   <Tab
// // //                     key={category}
// // //                     label={category}
// // //                     value={category}
// // //                     sx={{ textTransform: "capitalize", minWidth: "unset" }}
// // //                   />
// // //                 ))}
// // //               </Tabs>
// // //             )}

// // //             {renderCourses()}
// // //           </>
// // //         );

// // //       case "progress":
// // //         return <InProgressCourses />;

// // //       case "assignments":
// // //         return (
// // //           <AssignmentList
// // //             courseId={selectedCourseForAssignments?.id}
// // //             onBack={() => setActiveTab("enrolled")}
// // //           />
// // //         );

// // //       case "quizzes":
// // //         return <QuizDashboard />;

// // //       case "all":
// // //       case "enrolled":
// // //         return (
// // //           <>
// // //             <Typography variant="h6" mb={3} fontWeight={600}>
// // //               {activeTab === "all" ? "Available Courses" : "My Courses"}
// // //             </Typography>
// // //             {renderCourses()}
// // //           </>
// // //         );
// // //       case "settings":
// // //         return <Settings />;
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <DashboardContainer>
// // //       <Header />
// // //       <ContentWrapper>
// // //         <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
// // //         <MainContent>
// // //           <Container maxWidth="xl" sx={{ px: { xs: 0, md: 2 } }}>
// // //             {renderTabContent()}
// // //           </Container>
// // //         </MainContent>
// // //       </ContentWrapper>

// // //       <EnrollmentDialog
// // //         open={enrollmentDialogOpen}
// // //         onClose={() => setEnrollmentDialogOpen(false)}
// // //         course={selectedCourse}
// // //         onEnroll={handleEnroll}
// // //       />

// // //       <ProgressDialog
// // //         open={progressDialogOpen}
// // //         onClose={() => setProgressDialogOpen(false)}
// // //         course={selectedCourse}
// // //       />
// // //     </DashboardContainer>
// // //   );
// // // };

// // // export default StudentDashboard;

// // import React, { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Grid,
// //   CircularProgress,
// //   Card,
// //   CardContent,
// //   Avatar,
// //   useTheme,
// //   Tabs,
// //   Tab,
// //   Paper,
// //   Chip,
// //   LinearProgress,
// //   IconButton,
// // } from "@mui/material";
// // import { styled } from "@mui/system";
// // import {
// //   TrendingUpRounded,
// //   SchoolRounded,
// //   EmojiEventsRounded,
// //   AutoStoriesRounded,
// //   WavingHandRounded,
// // } from "@mui/icons-material";
// // import CourseCard from "../../components/studant/CourseCard";
// // import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// // import ProgressDialog from "../../components/studant/ProgressDialog";
// // import StudentSidebar from "../../components/studant/StudentSidebar";
// // import CourseService from "../../services/StudentService";
// // import EnrollmentService from "../../services/EnrollemtServices";
// // import Header from "../../components/common/Header/Header";
// // import { useAuth } from "../../contexts/AuthContext/AuthContext";
// // import InProgressCourses from "../../components/studant/Inprogress";
// // import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// // import QuizDashboard from "./../../components/studant/Quiz/QuizDashboard";
// // import Settings from "../../components/common/Settings/Settings";

// // const motivationalQuotes = [
// //   "The expert in anything was once a beginner.",
// //   "Learning is a treasure that will follow its owner everywhere.",
// //   "Education is the most powerful weapon which you can use to change the world.",
// // ];

// // const DashboardContainer = styled(Box)({
// //   display: "flex",
// //   flexDirection: "column",
// //   minHeight: "100vh",
// //   width: "100%",
// //   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //   position: "relative",
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     background: `
// //       radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
// //       radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
// //       radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
// //     `,
// //     pointerEvents: "none",
// //   },
// // });

// // const ContentWrapper = styled(Box)({
// //   display: "flex",
// //   flex: 1,
// //   position: "relative",
// //   zIndex: 1,
// // });

// // const MainContent = styled(Box)(({ theme }) => ({
// //   flexGrow: 1,
// //   padding_tob: theme.spacing(3),
// //   width: "calc(100% - 280px)",
// //   minHeight: "calc(100vh - 69px)",
// //   background: "rgba(255, 255, 255, 0.95)",
// //   backdropFilter: "blur(20px)",
// //   borderRadius: "24px 0 0 0",
// //   position: "relative",
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     inset: 0,
// //     background:
// //       "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
// //     borderRadius: "24px 0 0 0",
// //     pointerEvents: "none",
// //   },
// //   "& > *": {
// //     position: "relative",
// //     zIndex: 1,
// //   },
// // }));

// // const WelcomeCard = styled(Card)(({ theme }) => ({
// //   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //   color: "white",
// //   borderRadius: 24,
// //   overflow: "hidden",
// //   position: "relative",
// //   boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
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
// // }));

// // const StatsCard = styled(Card)(({ theme }) => ({
// //   borderRadius: 20,
// //   border: "1px solid rgba(255, 255, 255, 0.2)",
// //   background: "rgba(255, 255, 255, 0.9)",
// //   backdropFilter: "blur(20px)",
// //   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
// //   transition: theme.transitions.create(["transform", "box-shadow"], {
// //     duration: theme.transitions.duration.short,
// //   }),
// //   position: "relative",
// //   overflow: "hidden",
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     height: "4px",
// //     background: "linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
// //   },
// //   "&:hover": {
// //     transform: "translateY(-8px) scale(1.02)",
// //     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
// //   },
// // }));

// // const ModernTabs = styled(Tabs)(({ theme }) => ({
// //   backgroundColor: "rgba(255, 255, 255, 0.9)",
// //   borderRadius: 16,
// //   padding: 8,
// //   backdropFilter: "blur(20px)",
// //   border: "1px solid rgba(255, 255, 255, 0.3)",
// //   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
// //   "& .MuiTabs-indicator": {
// //     display: "none",
// //   },
// //   "& .MuiTab-root": {
// //     borderRadius: 12,
// //     margin: "0 4px",
// //     minHeight: 48,
// //     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //     textTransform: "capitalize",
// //     fontWeight: 600,
// //     "&.Mui-selected": {
// //       background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //       color: "white",
// //       boxShadow: "0 4px 16px rgba(102, 126, 234, 0.4)",
// //     },
// //     "&:hover:not(.Mui-selected)": {
// //       backgroundColor: "rgba(102, 126, 234, 0.1)",
// //     },
// //   },
// // }));

// // const SectionTitle = styled(Typography)(({ theme }) => ({
// //   fontWeight: 800,
// //   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //   backgroundClip: "text",
// //   WebkitBackgroundClip: "text",
// //   WebkitTextFillColor: "transparent",
// //   marginBottom: theme.spacing(3),
// //   position: "relative",
// //   "&::after": {
// //     content: '""',
// //     position: "absolute",
// //     bottom: -8,
// //     left: 0,
// //     width: 60,
// //     height: 4,
// //     background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
// //     borderRadius: 2,
// //   },
// // }));

// // const StudentDashboard = () => {
// //   const { user } = useAuth();
// //   const theme = useTheme();
// //   const [courses, setCourses] = useState([]);
// //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedCourse, setSelectedCourse] = useState(null);
// //   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
// //   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState("dashboard");
// //   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
// //     useState(null);
// //   const [randomQuote] = useState(
// //     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
// //   );
// //   const [categoryFilter, setCategoryFilter] = useState("all");
// //   const [categories, setCategories] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true);
// //         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
// //           [
// //             CourseService.getAllCourses(),
// //             EnrollmentService.getUserEnrollments(),
// //           ]
// //         );

// //         const allCourses = Array.isArray(allCoursesResponse)
// //           ? allCoursesResponse
// //           : allCoursesResponse?.data || [];

// //         const userEnrollments = Array.isArray(userEnrollmentsResponse)
// //           ? userEnrollmentsResponse
// //           : userEnrollmentsResponse?.data || [];

// //         const uniqueCategories = [
// //           "all",
// //           ...new Set(allCourses.map((course) => course.category)),
// //         ];
// //         setCategories(uniqueCategories);

// //         setCourses(allCourses);
// //         setEnrolledCourses(userEnrollments);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //         setLoading(false);
// //         setCourses([]);
// //         setEnrolledCourses([]);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     if (selectedCourseForAssignments) {
// //       setActiveTab("assignments");
// //     }
// //   }, [selectedCourseForAssignments]);

// //   const handleEnrollClick = (course) => {
// //     setSelectedCourse(course);
// //     setEnrollmentDialogOpen(true);
// //   };

// //   const handleViewProgress = (course) => {
// //     setSelectedCourse(course);
// //     setProgressDialogOpen(true);
// //   };

// //   const handleViewAssignments = (course) => {
// //     setSelectedCourseForAssignments(course);
// //   };

// //   const handleEnroll = async () => {
// //     try {
// //       const token = localStorage.getItem("access-token");
// //       if (!token) return;

// //       await EnrollmentService.enrollUser(selectedCourse.id);
// //       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
// //       setEnrolledCourses(updatedEnrollments);
// //       setEnrollmentDialogOpen(false);
// //     } catch (error) {
// //       console.error("Error enrolling:", error);
// //     }
// //   };

// //   // Helper functions
// //   const enrolledCourseIds = enrolledCourses.map((enroll) => enroll.course_id);
// //   const enrolledCoursesCount = enrolledCourseIds.length;
// //   const completedCoursesCount = enrolledCourses.filter(
// //     (enrollment) => enrollment.isCompleted
// //   ).length;

// //   const getEnrolledCourses = () => {
// //     return courses
// //       .filter((course) => enrolledCourseIds.includes(course.id))
// //       .filter(
// //         (course) =>
// //           categoryFilter === "all" || course.category === categoryFilter
// //       );
// //   };

// //   const getNotEnrolledCourses = () => {
// //     return courses.filter((course) => !enrolledCourseIds.includes(course.id));
// //   };

// //   const renderCourses = () => {
// //     if (loading) {
// //       return (
// //         <Box
// //           display="flex"
// //           justifyContent="center"
// //           alignItems="center"
// //           py={8}
// //           sx={{
// //             background: "rgba(255, 255, 255, 0.6)",
// //             borderRadius: 4,
// //             backdropFilter: "blur(10px)",
// //           }}
// //         >
// //           <CircularProgress
// //             size={60}
// //             thickness={4}
// //             sx={{
// //               color: "#667eea",
// //               "& .MuiCircularProgress-circle": {
// //                 strokeLinecap: "round",
// //               },
// //             }}
// //           />
// //         </Box>
// //       );
// //     }

// //     const coursesToShow =
// //       activeTab === "all" ? getNotEnrolledCourses() : getEnrolledCourses();

// //     return (
// //       <Grid container spacing={3}>
// //         {coursesToShow.map((course) => {
// //           const isEnrolled = enrolledCourseIds.includes(course.id);
// //           const enrollment = enrolledCourses.find(
// //             (enroll) => enroll.course_id === course.id
// //           );

// //           return (
// //             <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
// //               <CourseCard
// //                 course={{ ...course, enrollmentId: enrollment?.id || null }}
// //                 isEnrolled={isEnrolled}
// //                 onEnrollClick={activeTab === "all" ? handleEnrollClick : null}
// //                 onViewProgressClick={handleViewProgress}
// //                 onViewAssignmentsClick={handleViewAssignments}
// //               />
// //             </Grid>
// //           );
// //         })}
// //       </Grid>
// //     );
// //   };

// //   const renderTabContent = () => {
// //     switch (activeTab) {
// //       case "dashboard":
// //         return (
// //           <>
// //             {/* Welcome Section */}
// //             <WelcomeCard sx={{ mb: 4, p: 4 }}>
// //               <Box
// //                 display="flex"
// //                 alignItems="center"
// //                 gap={3}
// //                 position="relative"
// //               >
// //                 <Avatar
// //                   sx={{
// //                     width: 80,
// //                     height: 80,
// //                     background: "rgba(255, 255, 255, 0.2)",
// //                     backdropFilter: "blur(10px)",
// //                     border: "3px solid rgba(255, 255, 255, 0.3)",
// //                     fontSize: "2rem",
// //                     fontWeight: 800,
// //                     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
// //                   }}
// //                 >
// //                   {user?.name?.charAt(0) || "U"}
// //                 </Avatar>
// //                 <Box flex={1}>
// //                   <Box display="flex" alignItems="center" gap={1} mb={1}>
// //                     <WavingHandRounded
// //                       sx={{ color: "#FFD700", fontSize: 28 }}
// //                     />
// //                     <Typography
// //                       variant="h4"
// //                       fontWeight={800}
// //                       sx={{ color: "white" }}
// //                     >
// //                       Welcome back, {user?.name || "Student"}!
// //                     </Typography>
// //                   </Box>
// //                   <Typography
// //                     variant="h6"
// //                     sx={{
// //                       color: "rgba(255, 255, 255, 0.9)",
// //                       fontStyle: "italic",
// //                       fontWeight: 400,
// //                     }}
// //                   >
// //                     "{randomQuote}"
// //                   </Typography>
// //                 </Box>
// //               </Box>
// //             </WelcomeCard>

// //             {/* Stats Cards */}
// //             <Grid container spacing={3} sx={{ mb: 4 }}>
// //               <Grid item xs={12} sm={6} md={3}>
// //                 <StatsCard>
// //                   <CardContent sx={{ p: 3 }}>
// //                     <Box
// //                       display="flex"
// //                       alignItems="center"
// //                       justifyContent="space-between"
// //                     >
// //                       <Box>
// //                         <Typography
// //                           color="text.secondary"
// //                           variant="body2"
// //                           fontWeight={600}
// //                           sx={{ mb: 1 }}
// //                         >
// //                           Enrolled Courses
// //                         </Typography>
// //                         <Typography
// //                           variant="h4"
// //                           fontWeight={800}
// //                           color="#667eea"
// //                         >
// //                           {enrolledCoursesCount}
// //                         </Typography>
// //                       </Box>
// //                       <Box
// //                         sx={{
// //                           p: 2,
// //                           borderRadius: 3,
// //                           background:
// //                             "linear-gradient(135deg, #667eea20, #764ba220)",
// //                         }}
// //                       >
// //                         <AutoStoriesRounded
// //                           sx={{ fontSize: 32, color: "#667eea" }}
// //                         />
// //                       </Box>
// //                     </Box>
// //                   </CardContent>
// //                 </StatsCard>
// //               </Grid>
// //               <Grid item xs={12} sm={6} md={3}>
// //                 <StatsCard>
// //                   <CardContent sx={{ p: 3 }}>
// //                     <Box
// //                       display="flex"
// //                       alignItems="center"
// //                       justifyContent="space-between"
// //                     >
// //                       <Box>
// //                         <Typography
// //                           color="text.secondary"
// //                           variant="body2"
// //                           fontWeight={600}
// //                           sx={{ mb: 1 }}
// //                         >
// //                           Completed Courses
// //                         </Typography>
// //                         <Typography
// //                           variant="h4"
// //                           fontWeight={800}
// //                           color="#764ba2"
// //                         >
// //                           {completedCoursesCount}
// //                         </Typography>
// //                       </Box>
// //                       <Box
// //                         sx={{
// //                           p: 2,
// //                           borderRadius: 3,
// //                           background:
// //                             "linear-gradient(135deg, #764ba220, #f093fb20)",
// //                         }}
// //                       >
// //                         <EmojiEventsRounded
// //                           sx={{ fontSize: 32, color: "#764ba2" }}
// //                         />
// //                       </Box>
// //                     </Box>
// //                   </CardContent>
// //                 </StatsCard>
// //               </Grid>
// //               <Grid item xs={12} sm={6} md={3}>
// //                 <StatsCard>
// //                   <CardContent sx={{ p: 3 }}>
// //                     <Box
// //                       display="flex"
// //                       alignItems="center"
// //                       justifyContent="space-between"
// //                     >
// //                       <Box>
// //                         <Typography
// //                           color="text.secondary"
// //                           variant="body2"
// //                           fontWeight={600}
// //                           sx={{ mb: 1 }}
// //                         >
// //                           Success Rate
// //                         </Typography>
// //                         <Typography
// //                           variant="h4"
// //                           fontWeight={800}
// //                           color="#f093fb"
// //                         >
// //                           {enrolledCoursesCount > 0
// //                             ? Math.round(
// //                                 (completedCoursesCount / enrolledCoursesCount) *
// //                                   100
// //                               )
// //                             : 0}
// //                           %
// //                         </Typography>
// //                       </Box>
// //                       <Box
// //                         sx={{
// //                           p: 2,
// //                           borderRadius: 3,
// //                           background:
// //                             "linear-gradient(135deg, #f093fb20, #f5576c20)",
// //                         }}
// //                       >
// //                         <TrendingUpRounded
// //                           sx={{ fontSize: 32, color: "#f093fb" }}
// //                         />
// //                       </Box>
// //                     </Box>
// //                   </CardContent>
// //                 </StatsCard>
// //               </Grid>
// //               <Grid item xs={12} sm={6} md={3}>
// //                 <StatsCard>
// //                   <CardContent sx={{ p: 3 }}>
// //                     <Box
// //                       display="flex"
// //                       alignItems="center"
// //                       justifyContent="space-between"
// //                     >
// //                       <Box>
// //                         <Typography
// //                           color="text.secondary"
// //                           variant="body2"
// //                           fontWeight={600}
// //                           sx={{ mb: 1 }}
// //                         >
// //                           Learning Streak
// //                         </Typography>
// //                         <Typography
// //                           variant="h4"
// //                           fontWeight={800}
// //                           color="#f5576c"
// //                         >
// //                           {Math.floor(Math.random() * 30) + 1}
// //                         </Typography>
// //                         <Typography variant="caption" color="text.secondary">
// //                           days
// //                         </Typography>
// //                       </Box>
// //                       <Box
// //                         sx={{
// //                           p: 2,
// //                           borderRadius: 3,
// //                           background:
// //                             "linear-gradient(135deg, #f5576c20, #4facfe20)",
// //                         }}
// //                       >
// //                         <SchoolRounded
// //                           sx={{ fontSize: 32, color: "#f5576c" }}
// //                         />
// //                       </Box>
// //                     </Box>
// //                   </CardContent>
// //                 </StatsCard>
// //               </Grid>
// //             </Grid>

// //             {/* Courses Section */}
// //             <SectionTitle variant="h5">My Learning Journey</SectionTitle>

// //             {categories.length > 1 && (
// //               <ModernTabs
// //                 value={categoryFilter}
// //                 onChange={(e, newValue) => setCategoryFilter(newValue)}
// //                 variant="scrollable"
// //                 scrollButtons="auto"
// //                 sx={{ mb: 4 }}
// //               >
// //                 {categories.map((category) => (
// //                   <Tab
// //                     key={category}
// //                     label={category === "all" ? "All Categories" : category}
// //                     value={category}
// //                   />
// //                 ))}
// //               </ModernTabs>
// //             )}

// //             {renderCourses()}
// //           </>
// //         );

// //       case "progress":
// //         return <InProgressCourses />;

// //       case "assignments":
// //         return (
// //           <AssignmentList
// //             courseId={selectedCourseForAssignments?.id}
// //             onBack={() => setActiveTab("enrolled")}
// //           />
// //         );

// //       case "quizzes":
// //         return <QuizDashboard />;

// //       case "all":
// //       case "enrolled":
// //         return (
// //           <>
// //             <SectionTitle variant="h5">
// //               {activeTab === "all"
// //                 ? "Discover New Courses"
// //                 : "Continue Learning"}
// //             </SectionTitle>
// //             {renderCourses()}
// //           </>
// //         );
// //       case "settings":
// //         return <Settings />;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <DashboardContainer>
// //       <Header />
// //       <ContentWrapper>
// //         <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
// //         <MainContent>
// //           <Container maxWidth="xl" sx={{ px: { xs: 0, md: 2 } }}>
// //             {renderTabContent()}
// //           </Container>
// //         </MainContent>
// //       </ContentWrapper>

// //       <EnrollmentDialog
// //         open={enrollmentDialogOpen}
// //         onClose={() => setEnrollmentDialogOpen(false)}
// //         course={selectedCourse}
// //         onEnroll={handleEnroll}
// //       />

// //       <ProgressDialog
// //         open={progressDialogOpen}
// //         onClose={() => setProgressDialogOpen(false)}
// //         course={selectedCourse}
// //       />
// //     </DashboardContainer>
// //   );
// // };

// // export default StudentDashboard;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   CircularProgress,
//   Card,
//   CardContent,
//   Avatar,
//   useTheme,
//   Tabs,
//   Tab,
//   Paper,
//   Chip,
//   LinearProgress,
//   IconButton,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import {
//   TrendingUpRounded,
//   SchoolRounded,
//   EmojiEventsRounded,
//   AutoStoriesRounded,
//   WavingHandRounded,
// } from "@mui/icons-material";
// import CourseCard from "../../components/studant/CourseCard";
// import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
// import ProgressDialog from "../../components/studant/ProgressDialog";
// import StudentSidebar from "../../components/studant/StudentSidebar";
// import CourseService from "../../services/StudentService";
// import EnrollmentService from "../../services/EnrollemtServices";
// import Header from "../../components/common/Header/Header";
// import { useAuth } from "../../contexts/AuthContext/AuthContext";
// import InProgressCourses from "../../components/studant/Inprogress";
// import AssignmentList from "../../components/studant//Assignment/AssignmentList";
// import QuizDashboard from "./../../components/studant/Quiz/QuizDashboard";
// import Settings from "../../components/common/Settings/Settings";

// const motivationalQuotes = [
//   "The expert in anything was once a beginner.",
//   "Learning is a treasure that will follow its owner everywhere.",
//   "Education is the most powerful weapon which you can use to change the world.",
// ];

// const DashboardContainer = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   minHeight: "100vh",
//   width: "100%",
//   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: `
//       radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//       radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
//       radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
//     `,
//     pointerEvents: "none",
//   },
// });

// const ContentWrapper = styled(Box)({
//   display: "flex",
//   flex: 1,
//   position: "relative",
//   zIndex: 1,
// });

// const MainContent = styled(Box)(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   width: "calc(100% - 280px)",
//   minHeight: "calc(100vh - 69px)",
//   background: "rgba(255, 255, 255, 0.95)",
//   backdropFilter: "blur(20px)",
//   borderRadius: "24px 0 0 0",
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     inset: 0,
//     background:
//       "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
//     borderRadius: "24px 0 0 0",
//     pointerEvents: "none",
//   },
//   "& > *": {
//     position: "relative",
//     zIndex: 1,
//   },
// }));

// const WelcomeCard = styled(Card)(({ theme }) => ({
//   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//   color: "white",
//   borderRadius: 24,
//   overflow: "hidden",
//   position: "relative",
//   boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: `
//       radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
//       radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
//     `,
//     pointerEvents: "none",
//   },
// }));

// const StatsCard = styled(Card)(({ theme }) => ({
//   borderRadius: 20,
//   border: "1px solid rgba(255, 255, 255, 0.2)",
//   background: "rgba(255, 255, 255, 0.9)",
//   backdropFilter: "blur(20px)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   transition: theme.transitions.create(["transform", "box-shadow"], {
//     duration: theme.transitions.duration.short,
//   }),
//   position: "relative",
//   overflow: "hidden",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "4px",
//     background: "linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
//   },
//   "&:hover": {
//     transform: "translateY(-8px) scale(1.02)",
//     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
//   },
// }));

// const ModernTabs = styled(Tabs)(({ theme }) => ({
//   backgroundColor: "rgba(255, 255, 255, 0.9)",
//   borderRadius: 16,
//   padding: 8,
//   backdropFilter: "blur(20px)",
//   border: "1px solid rgba(255, 255, 255, 0.3)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   "& .MuiTabs-indicator": {
//     display: "none",
//   },
//   "& .MuiTab-root": {
//     borderRadius: 12,
//     margin: "0 4px",
//     minHeight: 48,
//     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//     textTransform: "capitalize",
//     fontWeight: 600,
//     "&.Mui-selected": {
//       background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//       color: "white",
//       boxShadow: "0 4px 16px rgba(102, 126, 234, 0.4)",
//     },
//     "&:hover:not(.Mui-selected)": {
//       backgroundColor: "rgba(102, 126, 234, 0.1)",
//     },
//   },
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   fontWeight: 800,
//   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//   backgroundClip: "text",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   marginBottom: theme.spacing(3),
//   position: "relative",
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     bottom: -8,
//     left: 0,
//     width: 60,
//     height: 4,
//     background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
//     borderRadius: 2,
//   },
// }));

// const StudentDashboard = () => {
//   const { user } = useAuth();
//   const theme = useTheme();
//   const [courses, setCourses] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
//   const [progressDialogOpen, setProgressDialogOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
//     useState(null);
//   const [randomQuote] = useState(
//     motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
//   );
//   const [categoryFilter, setCategoryFilter] = useState("all");
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
//           [
//             CourseService.getAllCourses(),
//             EnrollmentService.getUserEnrollments(),
//           ]
//         );

//         const allCourses = Array.isArray(allCoursesResponse)
//           ? allCoursesResponse
//           : allCoursesResponse?.data || [];

//         const userEnrollments = Array.isArray(userEnrollmentsResponse)
//           ? userEnrollmentsResponse
//           : userEnrollmentsResponse?.data || [];

//         const uniqueCategories = [
//           "all",
//           ...new Set(allCourses.map((course) => course.category)),
//         ];
//         setCategories(uniqueCategories);

//         setCourses(allCourses);
//         setEnrolledCourses(userEnrollments);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//         setCourses([]);
//         setEnrolledCourses([]);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (selectedCourseForAssignments) {
//       setActiveTab("assignments");
//     }
//   }, [selectedCourseForAssignments]);

//   const handleEnrollClick = (course) => {
//     setSelectedCourse(course);
//     setEnrollmentDialogOpen(true);
//   };

//   const handleViewProgress = (course) => {
//     setSelectedCourse(course);
//     setProgressDialogOpen(true);
//   };

//   const handleViewAssignments = (course) => {
//     setSelectedCourseForAssignments(course);
//   };

//   const handleEnroll = async () => {
//     try {
//       const token = localStorage.getItem("access-token");
//       if (!token) return;

//       await EnrollmentService.enrollUser(selectedCourse.id);
//       const updatedEnrollments = await EnrollmentService.getUserEnrollments();
//       setEnrolledCourses(updatedEnrollments);
//       setEnrollmentDialogOpen(false);
//     } catch (error) {
//       console.error("Error enrolling:", error);
//     }
//   };

//   // Helper functions
//   const enrolledCourseIds = enrolledCourses.map((enroll) => enroll.course_id);
//   const enrolledCoursesCount = enrolledCourseIds.length;
//   const completedCoursesCount = enrolledCourses.filter(
//     (enrollment) => enrollment.isCompleted
//   ).length;

//   const getEnrolledCourses = () => {
//     return courses
//       .filter((course) => enrolledCourseIds.includes(course.id))
//       .filter(
//         (course) =>
//           categoryFilter === "all" || course.category === categoryFilter
//       );
//   };

//   const getNotEnrolledCourses = () => {
//     return courses.filter((course) => !enrolledCourseIds.includes(course.id));
//   };

//   const renderCourses = () => {
//     if (loading) {
//       return (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           py={8}
//           sx={{
//             background: "rgba(255, 255, 255, 0.6)",
//             borderRadius: 4,
//             backdropFilter: "blur(10px)",
//           }}
//         >
//           <CircularProgress
//             size={60}
//             thickness={4}
//             sx={{
//               color: "#667eea",
//               "& .MuiCircularProgress-circle": {
//                 strokeLinecap: "round",
//               },
//             }}
//           />
//         </Box>
//       );
//     }

//     const coursesToShow =
//       activeTab === "all" ? getNotEnrolledCourses() : getEnrolledCourses();

//     return (
//       <Grid container spacing={3}>
//         {coursesToShow.map((course) => {
//           const isEnrolled = enrolledCourseIds.includes(course.id);
//           const enrollment = enrolledCourses.find(
//             (enroll) => enroll.course_id === course.id
//           );

//           return (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
//               <CourseCard
//                 course={{ ...course, enrollmentId: enrollment?.id || null }}
//                 isEnrolled={isEnrolled}
//                 onEnrollClick={activeTab === "all" ? handleEnrollClick : null}
//                 onViewProgressClick={handleViewProgress}
//                 onViewAssignmentsClick={handleViewAssignments}
//               />
//             </Grid>
//           );
//         })}
//       </Grid>
//     );
//   };

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <>
//             {/* Welcome Section */}
//             <WelcomeCard sx={{ mb: 4, p: 4 }}>
//               <Box
//                 display="flex"
//                 alignItems="center"
//                 gap={3}
//                 position="relative"
//               >
//                 <Avatar
//                   sx={{
//                     width: 80,
//                     height: 80,
//                     background: "rgba(255, 255, 255, 0.2)",
//                     backdropFilter: "blur(10px)",
//                     border: "3px solid rgba(255, 255, 255, 0.3)",
//                     fontSize: "2rem",
//                     fontWeight: 800,
//                     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   {user?.name?.charAt(0) || "U"}
//                 </Avatar>
//                 <Box flex={1}>
//                   <Box display="flex" alignItems="center" gap={1} mb={1}>
//                     <WavingHandRounded
//                       sx={{ color: "#FFD700", fontSize: 28 }}
//                     />
//                     <Typography
//                       variant="h4"
//                       fontWeight={800}
//                       sx={{ color: "white" }}
//                     >
//                       Welcome back, {user?.name || "Student"}!
//                     </Typography>
//                   </Box>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: "rgba(255, 255, 255, 0.9)",
//                       fontStyle: "italic",
//                       fontWeight: 400,
//                     }}
//                   >
//                     "{randomQuote}"
//                   </Typography>
//                 </Box>
//               </Box>
//             </WelcomeCard>

//             {/* Stats Cards */}
//             <Grid container spacing={3} sx={{ mb: 4 }}>
//               <Grid item xs={12} sm={6} md={3}>
//                 <StatsCard>
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       justifyContent="space-between"
//                     >
//                       <Box>
//                         <Typography
//                           color="text.secondary"
//                           variant="body2"
//                           fontWeight={600}
//                           sx={{ mb: 1 }}
//                         >
//                           Enrolled Courses
//                         </Typography>
//                         <Typography
//                           variant="h4"
//                           fontWeight={800}
//                           color="#667eea"
//                         >
//                           {enrolledCoursesCount}
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           p: 2,
//                           borderRadius: 3,
//                           background:
//                             "linear-gradient(135deg, #667eea20, #764ba220)",
//                         }}
//                       >
//                         <AutoStoriesRounded
//                           sx={{ fontSize: 32, color: "#667eea" }}
//                         />
//                       </Box>
//                     </Box>
//                   </CardContent>
//                 </StatsCard>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <StatsCard>
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       justifyContent="space-between"
//                     >
//                       <Box>
//                         <Typography
//                           color="text.secondary"
//                           variant="body2"
//                           fontWeight={600}
//                           sx={{ mb: 1 }}
//                         >
//                           Completed Courses
//                         </Typography>
//                         <Typography
//                           variant="h4"
//                           fontWeight={800}
//                           color="#764ba2"
//                         >
//                           {completedCoursesCount}
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           p: 2,
//                           borderRadius: 3,
//                           background:
//                             "linear-gradient(135deg, #764ba220, #f093fb20)",
//                         }}
//                       >
//                         <EmojiEventsRounded
//                           sx={{ fontSize: 32, color: "#764ba2" }}
//                         />
//                       </Box>
//                     </Box>
//                   </CardContent>
//                 </StatsCard>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <StatsCard>
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       justifyContent="space-between"
//                     >
//                       <Box>
//                         <Typography
//                           color="text.secondary"
//                           variant="body2"
//                           fontWeight={600}
//                           sx={{ mb: 1 }}
//                         >
//                           Success Rate
//                         </Typography>
//                         <Typography
//                           variant="h4"
//                           fontWeight={800}
//                           color="#f093fb"
//                         >
//                           {enrolledCoursesCount > 0
//                             ? Math.round(
//                                 (completedCoursesCount / enrolledCoursesCount) *
//                                   100
//                               )
//                             : 0}
//                           %
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           p: 2,
//                           borderRadius: 3,
//                           background:
//                             "linear-gradient(135deg, #f093fb20, #f5576c20)",
//                         }}
//                       >
//                         <TrendingUpRounded
//                           sx={{ fontSize: 32, color: "#f093fb" }}
//                         />
//                       </Box>
//                     </Box>
//                   </CardContent>
//                 </StatsCard>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <StatsCard>
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       justifyContent="space-between"
//                     >
//                       <Box>
//                         <Typography
//                           color="text.secondary"
//                           variant="body2"
//                           fontWeight={600}
//                           sx={{ mb: 1 }}
//                         >
//                           Learning Streak
//                         </Typography>
//                         <Typography
//                           variant="h4"
//                           fontWeight={800}
//                           color="#f5576c"
//                         >
//                           {Math.floor(Math.random() * 30) + 1}
//                         </Typography>
//                         <Typography variant="caption" color="text.secondary">
//                           days
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           p: 2,
//                           borderRadius: 3,
//                           background:
//                             "linear-gradient(135deg, #f5576c20, #4facfe20)",
//                         }}
//                       >
//                         <SchoolRounded
//                           sx={{ fontSize: 32, color: "#f5576c" }}
//                         />
//                       </Box>
//                     </Box>
//                   </CardContent>
//                 </StatsCard>
//               </Grid>
//             </Grid>

//             {/* Courses Section */}
//             <SectionTitle variant="h5">My Learning Journey</SectionTitle>

//             {categories.length > 1 && (
//               <ModernTabs
//                 value={categoryFilter}
//                 onChange={(e, newValue) => setCategoryFilter(newValue)}
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 sx={{ mb: 4 }}
//               >
//                 {categories.map((category) => (
//                   <Tab
//                     key={category}
//                     label={category === "all" ? "All Categories" : category}
//                     value={category}
//                   />
//                 ))}
//               </ModernTabs>
//             )}

//             {renderCourses()}
//           </>
//         );

//       case "progress":
//         return <InProgressCourses />;

//       case "assignments":
//         return (
//           <AssignmentList
//             courseId={selectedCourseForAssignments?.id}
//             onBack={() => setActiveTab("enrolled")}
//           />
//         );

//       case "quizzes":
//         return <QuizDashboard />;

//       case "all":
//       case "enrolled":
//         return (
//           <>
//             <SectionTitle variant="h5">
//               {activeTab === "all"
//                 ? "Discover New Courses"
//                 : "Continue Learning"}
//             </SectionTitle>
//             {renderCourses()}
//           </>
//         );
//       case "settings":
//         return <Settings />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <DashboardContainer>
//       <Header />
//       <ContentWrapper>
//         <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//         <MainContent>
//           <Container maxWidth="xl" sx={{ px: { xs: 0, md: 2 } }}>
//             {renderTabContent()}
//           </Container>
//         </MainContent>
//       </ContentWrapper>

//       <EnrollmentDialog
//         open={enrollmentDialogOpen}
//         onClose={() => setEnrollmentDialogOpen(false)}
//         course={selectedCourse}
//         onEnroll={handleEnroll}
//       />

//       <ProgressDialog
//         open={progressDialogOpen}
//         onClose={() => setProgressDialogOpen(false)}
//         course={selectedCourse}
//       />
//     </DashboardContainer>
//   );
// };

// export default StudentDashboard;
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
  Avatar,
  useTheme,
  Tabs,
  Tab,
  Paper,
  Chip,
  LinearProgress,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  TrendingUpRounded,
  SchoolRounded,
  EmojiEventsRounded,
  AutoStoriesRounded,
  WavingHandRounded,
  SearchRounded,
} from "@mui/icons-material";
import CourseCard from "../../components/studant/CourseCard";
import EnrollmentDialog from "../../components/studant/EnrollmentDialog";
import ProgressDialog from "../../components/studant/ProgressDialog";
import StudentSidebar from "../../components/studant/StudentSidebar";
import CourseService from "../../services/StudentService";
import EnrollmentService from "../../services/EnrollemtServices";
import Header from "../../components/common/Header/Header";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import InProgressCourses from "../../components/studant/Inprogress";
import AssignmentList from "../../components/studant//Assignment/AssignmentList";
import QuizDashboard from "./../../components/studant/Quiz/QuizDashboard";
import Settings from "../../components/common/Settings/Settings";

const motivationalQuotes = [
  "The expert in anything was once a beginner.",
  "Learning is a treasure that will follow its owner everywhere.",
  "Education is the most powerful weapon which you can use to change the world.",
];

const DashboardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "120vh",
  width: "100%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
    `,
    pointerEvents: "none",
  },
});

const ContentWrapper = styled(Box)({
  display: "flex",
  flex: 1,
  position: "relative",
  zIndex: 1,
});

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(10),
  width: "calc(100% - 280px)",
  minHeight: "calc(100vh - 69px)",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px 0 0 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)",
    borderRadius: "24px 0 0 0",
    pointerEvents: "none",
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}));

const WelcomeCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  borderRadius: 24,
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
    `,
    pointerEvents: "none",
  },
}));

const ModernTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: 16,
  padding: 8,
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    borderRadius: 12,
    margin: "0 4px",
    minHeight: 48,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textTransform: "capitalize",
    fontWeight: 600,
    "&.Mui-selected": {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      boxShadow: "0 4px 16px rgba(102, 126, 234, 0.4)",
    },
    "&:hover:not(.Mui-selected)": {
      backgroundColor: "rgba(102, 126, 234, 0.1)",
    },
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: theme.spacing(3),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: 60,
    height: 4,
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    borderRadius: 2,
  },
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: 12,
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    "& fieldset": {
      borderColor: "rgba(102, 126, 234, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(102, 126, 234, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#667eea",
    },
  },
  "& .MuiInputBase-input": {
    padding: "14px 14px",
  },
}));

const StudentDashboard = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentDialogOpen, setEnrollmentDialogOpen] = useState(false);
  const [progressDialogOpen, setProgressDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourseForAssignments, setSelectedCourseForAssignments] =
    useState(null);
  const [randomQuote] = useState(
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  );
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [allCoursesResponse, userEnrollmentsResponse] = await Promise.all(
          [
            CourseService.getAllCourses(),
            EnrollmentService.getUserEnrollments(),
          ]
        );

        const allCourses = Array.isArray(allCoursesResponse)
          ? allCoursesResponse
          : allCoursesResponse?.data || [];

        const userEnrollments = Array.isArray(userEnrollmentsResponse)
          ? userEnrollmentsResponse
          : userEnrollmentsResponse?.data || [];

        const uniqueCategories = [
          "all",
          ...new Set(allCourses.map((course) => course.category)),
        ];
        setCategories(uniqueCategories);

        setCourses(allCourses);
        setEnrolledCourses(userEnrollments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setCourses([]);
        setEnrolledCourses([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCourseForAssignments) {
      setActiveTab("assignments");
    }
  }, [selectedCourseForAssignments]);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setEnrollmentDialogOpen(true);
  };

  const handleViewProgress = (course) => {
    setSelectedCourse(course);
    setProgressDialogOpen(true);
  };

  const handleViewAssignments = (course) => {
    setSelectedCourseForAssignments(course);
  };

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem("access-token");
      if (!token) return;

      await EnrollmentService.enrollUser(selectedCourse.id);
      const updatedEnrollments = await EnrollmentService.getUserEnrollments();
      setEnrolledCourses(updatedEnrollments);
      setEnrollmentDialogOpen(false);
    } catch (error) {
      console.error("Error enrolling:", error);
    }
  };

  // Helper functions
  const enrolledCourseIds = enrolledCourses.map((enroll) => enroll.course_id);
  const enrolledCoursesCount = enrolledCourseIds.length;
  const completedCoursesCount = enrolledCourses.filter(
    (enrollment) => enrollment.isCompleted
  ).length;

  const getEnrolledCourses = () => {
    return courses
      .filter((course) => enrolledCourseIds.includes(course.id))
      .filter(
        (course) =>
          categoryFilter === "all" || course.category === categoryFilter
      )
      .filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  const getNotEnrolledCourses = () => {
    return courses
      .filter((course) => !enrolledCourseIds.includes(course.id))
      .filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  const renderCourses = () => {
    if (loading) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={8}
          sx={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: 4,
            backdropFilter: "blur(10px)",
          }}
        >
          <CircularProgress
            size={60}
            thickness={4}
            sx={{
              color: "#667eea",
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
        </Box>
      );
    }

    const coursesToShow =
      activeTab === "all" ? getNotEnrolledCourses() : getEnrolledCourses();

    if (coursesToShow.length === 0) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={8}
          sx={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: 4,
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h6" color="textSecondary">
            {searchQuery
              ? "No courses match your search"
              : "No courses available"}
          </Typography>
        </Box>
      );
    }

    return (
      <Grid container spacing={3}>
        {coursesToShow.map((course) => {
          const isEnrolled = enrolledCourseIds.includes(course.id);
          const enrollment = enrolledCourses.find(
            (enroll) => enroll.course_id === course.id
          );

          return (
            <Grid item size={{ xs: 12, md: 4 }} key={course.id}>
              <CourseCard
                course={{ ...course, enrollmentId: enrollment?.id || null }}
                isEnrolled={isEnrolled}
                onEnrollClick={activeTab === "all" ? handleEnrollClick : null}
                onViewProgressClick={handleViewProgress}
                onViewAssignmentsClick={handleViewAssignments}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            {/* Welcome Section */}
            <WelcomeCard sx={{ mb: 4, p: 4 }}>
              <Box
                display="flex"
                alignItems="center"
                gap={3}
                position="relative"
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    border: "3px solid rgba(255, 255, 255, 0.3)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {user?.name?.charAt(0) || "U"}
                </Avatar>
                <Box flex={1}>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <WavingHandRounded
                      sx={{ color: "#FFD700", fontSize: 28 }}
                    />
                    <Typography
                      variant="h4"
                      fontWeight={800}
                      sx={{ color: "white" }}
                    >
                      Welcome back, {user?.name || "Student"}!
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    "{randomQuote}"
                  </Typography>
                </Box>
              </Box>
            </WelcomeCard>

            {/* Search Bar */}
            <SearchBar
              fullWidth
              variant="outlined"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Courses Section */}
            <SectionTitle variant="h5">My Learning Journey</SectionTitle>

            {categories.length > 1 && (
              <ModernTabs
                value={categoryFilter}
                onChange={(e, newValue) => setCategoryFilter(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 4 }}
              >
                {categories.map((category) => (
                  <Tab
                    key={category}
                    label={category === "all" ? "All Categories" : category}
                    value={category}
                  />
                ))}
              </ModernTabs>
            )}

            {renderCourses()}
          </>
        );

      case "progress":
        return <InProgressCourses />;

      case "assignments":
        return (
          <AssignmentList
            courseId={selectedCourseForAssignments?.id}
            onBack={() => setActiveTab("enrolled")}
          />
        );

      case "quizzes":
        return <QuizDashboard />;

      case "all":
      case "enrolled":
        return (
          <>
            {/* Search Bar */}
            <SearchBar
              fullWidth
              variant="outlined"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <SectionTitle variant="h5">
              {activeTab === "all"
                ? "Discover New Courses"
                : "Continue Learning"}
            </SectionTitle>
            {renderCourses()}
          </>
        );
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <DashboardContainer>
      <Header />
      <ContentWrapper>
        <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainContent>
          <Container maxWidth="xl" sx={{ px: { xs: 0, md: 2 } }}>
            {renderTabContent()}
          </Container>
        </MainContent>
      </ContentWrapper>

      <EnrollmentDialog
        open={enrollmentDialogOpen}
        onClose={() => setEnrollmentDialogOpen(false)}
        course={selectedCourse}
        onEnroll={handleEnroll}
      />

      <ProgressDialog
        open={progressDialogOpen}
        onClose={() => setProgressDialogOpen(false)}
        course={selectedCourse}
      />
    </DashboardContainer>
  );
};

export default StudentDashboard;
