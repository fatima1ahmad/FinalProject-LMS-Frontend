import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Divider,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import { School } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ py: 6, bgcolor: "background.white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: 2,
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <School sx={{ color: "white", fontSize: 28 }} />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.02em",
                }}
              >
                LearnHub
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" mt={2} mb={2}>
              The next-generation learning platform that adapts to your needs
              and helps you achieve your educational goals faster.
            </Typography>
            <Stack direction="row" spacing={2}>
              {["Twitter", "Facebook", "LinkedIn", "Instagram"].map(
                (social) => (
                  <IconButton key={social} color="primary">
                    <Box component="span" sx={{ width: 24, height: 24 }} />
                  </IconButton>
                )
              )}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Product
            </Typography>
            <Stack spacing={1.5}>
              {["Features", "Pricing", "Integrations", "Roadmap"].map(
                (item) => (
                  <Typography key={item} variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                )
              )}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Resources
            </Typography>
            <Stack spacing={1.5}>
              {["Blog", "Guides", "Webinars", "Help Center"].map((item) => (
                <Typography key={item} variant="body2" color="text.secondary">
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Company
            </Typography>
            <Stack spacing={1.5}>
              {["About Us", "Careers", "Partners"].map((item) => (
                <Typography key={item} variant="body2" color="text.secondary">
                  {item}
                </Typography>
              ))}
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ alignSelf: "flex-start" }}
              >
                Contact
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1.5}>
              {["Privacy", "Terms", "Security", "Cookies"].map((item) => (
                <Typography key={item} variant="body2" color="text.secondary">
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} LearnHub. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography variant="body2" color="text.secondary">
              English
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Terms of Service
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Privacy Policy
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
