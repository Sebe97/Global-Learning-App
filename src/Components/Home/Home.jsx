import React from "react";
import { Container, Typography, Paper } from "@mui/material";
const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="body1" gutterBottom>
          Welcome to My App
        </Typography>
        <Typography variant="body2" paragraph>
          My App is designed to provide an exceptional user experience with a
          wide range of features including Cell Rendering, Custom Headers, Ant
          Design integration, and a flexible 3-column layout.
        </Typography>
        <Typography variant="caption" paragraph>
          Explore the app to discover more about its capabilities and how it can
          be utilized to meet your needs.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;
