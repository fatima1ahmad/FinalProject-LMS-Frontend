import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { School } from "@mui/icons-material";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              className={styles.logoContainer}
            >
              <School className={styles.logoIcon} />
              <Typography variant="h6" className={styles.logoText}>
                LearnHub
              </Typography>
            </Stack>
            <Typography variant="body2" className={styles.description}>
              The next-generation learning platform that adapts to your needs
              and helps you achieve your educational goals faster.
            </Typography>
            <Stack direction="row" spacing={2}>
              {["Twitter", "Facebook", "LinkedIn", "Instagram"].map(
                (social) => (
                  <IconButton key={social} className={styles.socialIcon}>
                    <Box component="span" sx={{ width: 24, height: 24 }} />
                  </IconButton>
                )
              )}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" className={styles.sectionTitle}>
              Product
            </Typography>
            <Stack spacing={1.5}>
              {["Features", "Pricing", "Integrations", "Roadmap"].map(
                (item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    className={styles.link}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" className={styles.sectionTitle}>
              Resources
            </Typography>
            <Stack spacing={1.5}>
              {["Blog", "Guides", "Webinars", "Help Center"].map((item) => (
                <Typography key={item} variant="body2" className={styles.link}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" className={styles.sectionTitle}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              {["About Us", "Careers", "Partners", "Contact"].map((item) => (
                <Typography key={item} variant="body2" className={styles.link}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" className={styles.sectionTitle}>
              Legal
            </Typography>
            <Stack spacing={1.5}>
              {["Privacy", "Terms", "Security", "Cookies"].map((item) => (
                <Typography key={item} variant="body2" className={styles.link}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider className={styles.divider} />

        <Box className={styles.bottomBar}>
          <Typography variant="body2" className={styles.copyright}>
            © {new Date().getFullYear()} LearnHub. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3} className={styles.bottomLinks}>
            <Typography variant="body2" className={styles.link}>
              English
            </Typography>
            <Typography variant="body2" className={styles.link}>
              Terms of Service
            </Typography>
            <Typography variant="body2" className={styles.link}>
              Privacy Policy
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
