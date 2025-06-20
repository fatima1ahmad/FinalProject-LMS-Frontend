import React from 'react';
import { 
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  School as SchoolIcon,
  People as PeopleIcon,
  Code as CodeIcon,
  BarChart as StatsIcon
} from '@mui/icons-material';

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Quality Education",
      description: "Access courses from top instructors around the world in various subjects."
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      title: "Community Learning",
      description: "Join discussions, ask questions, and collaborate with fellow learners."
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: "Interactive Content",
      description: "Engage with interactive coding exercises, quizzes, and projects."
    },
    {
      icon: <StatsIcon fontSize="large" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and reports."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      avatar: "/static/images/avatar/1.jpg"
    },
    {
      name: "Maria Garcia",
      role: "Head of Education",
      avatar: "/static/images/avatar/2.jpg"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      avatar: "/static/images/avatar/3.jpg"
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      avatar: "/static/images/avatar/4.jpg"
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant={isMobile ? "h4" : "h2"} 
            component="h1" 
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            About LearnHub
          </Typography>
          <Typography 
            variant={isMobile ? "body1" : "h6"} 
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Empowering learners worldwide with accessible, high-quality education through innovative technology.
          </Typography>
        </Box>

        {/* Mission Section */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At LearnHub, we believe that education should be accessible to everyone, 
                regardless of location or financial circumstances. Our platform bridges 
                the gap between learners and quality education.
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2020, LearnHub has grown to serve over 1 million students 
                across 150 countries, offering courses in technology, business, arts, 
                and more.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/static/images/about/learning.jpg"
                alt="Students learning"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Why Choose LearnHub?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Avatar sx={{ 
                      bgcolor: theme.palette.primary.main, 
                      width: 60, 
                      height: 60,
                      mb: 2,
                      mx: 'auto'
                    }}>
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Box sx={{ 
          bgcolor: 'primary.main', 
          color: 'primary.contrastText', 
          py: 6, 
          mb: 8,
          borderRadius: 2
        }}>
          <Container>
            <Grid container spacing={4} justifyContent="center" textAlign="center">
              <Grid item xs={6} sm={3}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700 }}>
                  1M+
                </Typography>
                <Typography variant="subtitle1">
                  Students
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700 }}>
                  500+
                </Typography>
                <Typography variant="subtitle1">
                  Courses
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700 }}>
                  150
                </Typography>
                <Typography variant="subtitle1">
                  Countries
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700 }}>
                  95%
                </Typography>
                <Typography variant="subtitle1">
                  Satisfaction
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center' }}>
                  <CardContent>
                    <Avatar
                      alt={member.name}
                      src={member.avatar}
                      sx={{ 
                        width: 120, 
                        height: 120, 
                        mb: 2,
                        mx: 'auto'
                      }}
                    />
                    <Typography variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Values Section */}
        <Box>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Accessibility
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We strive to make education available to everyone by offering affordable 
                pricing, scholarships, and free resources.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quality
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Every course on LearnHub goes through a rigorous review process to 
                ensure it meets our high standards for educational value.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Innovation
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We continuously improve our platform with cutting-edge technology 
                to enhance the learning experience.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;