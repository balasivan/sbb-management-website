import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box textAlign="center" py={8}>
      <Typography variant="h3" gutterBottom>
        SBB Management Services Private Limited
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Reliable. Professional. Integrated Services
      </Typography>
    </Box>
  );
}
