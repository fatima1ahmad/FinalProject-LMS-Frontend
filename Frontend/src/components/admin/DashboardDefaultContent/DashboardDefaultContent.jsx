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
  Tabs,
  Tab,
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
  const [activeTab, setActiveTab] = useState(0);

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

  // Modern purple color palette
  const colors = {
    primary: "#6d28d9", // Vibrant purple
    secondary: "#8b5cf6", // Light purple
    success: "#10b981", // Emerald green
    warning: "#f59e0b", // Amber
    info: "#3b82f6", // Blue
    darkPurple: "#4c1d95", // Dark purple
    lightPurple: "#a78bfa", // Very light purple
    lightBg: "#f5f3ff", // Very light purple background
    cardBorder: "#ddd6fe", // Light purple border
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

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
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
      {/* Header Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.darkPurple} 0%, ${colors.primary} 100%)`,
          py: 4,
          px: 3,
          color: "white",
          mb: 4,
          boxShadow: `0 4px 6px -1px ${alpha(colors.darkPurple, 0.1)}`,
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
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Dashboard Overview
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
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
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Refresh
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Stats Cards - Modern Design */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                background: `linear-gradient(135deg, ${alpha(
                  colors.primary,
                  0.1
                )} 0%, ${alpha(colors.primary, 0.05)} 100%)`,
                borderRadius: 2,
                border: `1px solid ${colors.cardBorder}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 10px 15px -3px ${alpha(colors.primary, 0.1)}`,
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
                      sx={{ fontWeight: 700, lineHeight: 1.2 }}
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
                background: `linear-gradient(135deg, ${alpha(
                  colors.secondary,
                  0.1
                )} 0%, ${alpha(colors.secondary, 0.05)} 100%)`,
                borderRadius: 2,
                border: `1px solid ${colors.cardBorder}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 10px 15px -3px ${alpha(colors.secondary, 0.1)}`,
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
                      sx={{ fontWeight: 700, lineHeight: 1.2 }}
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
                background: `linear-gradient(135deg, ${alpha(
                  colors.info,
                  0.1
                )} 0%, ${alpha(colors.info, 0.05)} 100%)`,
                borderRadius: 2,
                border: `1px solid ${colors.cardBorder}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 10px 15px -3px ${alpha(colors.info, 0.1)}`,
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: alpha(colors.info, 0.1),
                      color: colors.info,
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
                      sx={{ fontWeight: 700, lineHeight: 1.2 }}
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

        {/* Analytics Section with Tabs */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 2,
            border: `1px solid ${colors.cardBorder}`,
            backgroundColor: "white",
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `1px solid ${colors.cardBorder}`,
              px: 3,
              pt: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Analytics Dashboard
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="time-range-label">Time Range</InputLabel>
                <Select
                  labelId="time-range-label"
                  value={timeRange}
                  label="Time Range"
                  onChange={(e) => setTimeRange(e.target.value)}
                  sx={{
                    borderRadius: 1,
                    "& .MuiSelect-select": {
                      py: 1,
                    },
                  }}
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
                    backgroundColor: colors.darkPurple,
                  },
                }}
              >
                Export
              </Button>
            </Box>
          </Box>

          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: colors.primary,
                height: 3,
              },
            }}
          >
            <Tab
              label="User Activity"
              icon={<PeopleIcon />}
              iconPosition="start"
              sx={{
                minHeight: 60,
                "&.Mui-selected": {
                  color: colors.primary,
                },
              }}
            />
            <Tab
              label="Course Popularity"
              icon={<CourseIcon />}
              iconPosition="start"
              sx={{
                minHeight: 60,
                "&.Mui-selected": {
                  color: colors.primary,
                },
              }}
            />
            <Tab
              label="System Performance"
              icon={<AnalyticsIcon />}
              iconPosition="start"
              sx={{
                minHeight: 60,
                "&.Mui-selected": {
                  color: colors.primary,
                },
              }}
            />
          </Tabs>

          <CardContent sx={{ p: 0 }}>
            {error && (
              <Alert
                severity="error"
                sx={{
                  mx: 3,
                  mt: 2,
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
              <Box sx={{ p: 3 }}>
                {/* User Activity Tab */}
                {activeTab === 0 && (
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: 400,
                      borderRadius: 2,
                      border: `1px solid ${colors.cardBorder}`,
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <SpeedIcon
                        sx={{
                          color: colors.primary,
                          mr: 1,
                          fontSize: "1.25rem",
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        User Activity Trends
                      </Typography>
                    </Box>
                    <Box sx={{ height: 320 }}>
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
                            No user activity data available
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                )}

                {/* Course Popularity Tab */}
                {activeTab === 1 && (
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          height: 400,
                          borderRadius: 2,
                          border: `1px solid ${colors.cardBorder}`,
                          backgroundColor: "white",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 3,
                          }}
                        >
                          <CourseIcon
                            sx={{
                              color: colors.secondary,
                              mr: 1,
                              fontSize: "1.25rem",
                            }}
                          />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Course Popularity
                          </Typography>
                        </Box>
                        <Box sx={{ height: 320 }}>
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
                                      colors.primary,
                                      colors.secondary,
                                      colors.info,
                                      colors.warning,
                                      colors.success,
                                    ].map((color) => alpha(color, 0.7)),
                                    borderColor: [
                                      colors.primary,
                                      colors.secondary,
                                      colors.info,
                                      colors.warning,
                                      colors.success,
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
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                No course data available
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          height: 400,
                          borderRadius: 2,
                          border: `1px solid ${colors.cardBorder}`,
                          backgroundColor: "white",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 3,
                          }}
                        >
                          <TrendingUpIcon
                            sx={{
                              color: colors.warning,
                              mr: 1,
                              fontSize: "1.25rem",
                            }}
                          />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Top Performing Courses
                          </Typography>
                        </Box>
                        <Box sx={{ height: 320 }}>
                          {coursePopularityData ? (
                            <BarChart
                              options={{
                                ...chartOptions,
                                plugins: {
                                  ...chartOptions.plugins,
                                  title: { display: false },
                                },
                                indexAxis: "y",
                              }}
                              data={{
                                labels: coursePopularityData.labels.slice(0, 5),
                                datasets: [
                                  {
                                    label: "Enrollments",
                                    data: coursePopularityData.enrollments.slice(
                                      0,
                                      5
                                    ),
                                    backgroundColor: alpha(
                                      colors.secondary,
                                      0.7
                                    ),
                                    borderColor: colors.secondary,
                                    borderWidth: 1,
                                    borderRadius: 4,
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
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                No course data available
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                )}

                {/* System Performance Tab */}
                {activeTab === 2 && (
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: 400,
                      borderRadius: 2,
                      border: `1px solid ${colors.cardBorder}`,
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <AnalyticsIcon
                        sx={{
                          color: colors.warning,
                          mr: 1,
                          fontSize: "1.25rem",
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        System Performance Metrics
                      </Typography>
                    </Box>
                    <Box sx={{ height: 320 }}>
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
                            No performance data available
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                )}
              </Box>
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
          sx={{
            width: "100%",
            borderRadius: 1,
            backgroundColor: colors.success,
            color: "white",
            "& .MuiAlert-icon": {
              color: "white",
            },
          }}
        >
          Report exported successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DashboardDefaultContent;
