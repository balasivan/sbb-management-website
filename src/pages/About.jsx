import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import aboutImg from "../assets/images/about/about-team.jpg";

export default function About() {
  return (
    <>
      {/* INTRO SECTION */}
      <Box sx={{ bgcolor: "#f5f5f5", py: { xs: 8, md: 10 } }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={600}>
                About Us
              </Typography>

              <Typography
                variant="body1"
                sx={{ mt: 2, color: "#555", lineHeight: 1.7 }}
              >
                SBB Management Services Private Limited is a professionally
                managed organization delivering reliable and integrated business
                support services across multiple sectors.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={aboutImg}
                alt="SBB Management Services Team"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHO WE ARE */}
      <Container sx={{ py: 10 }}>
        <Box maxWidth={900} mx="auto">
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Who We Are
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#555", lineHeight: 1.8, mt: 2 }}
          >
            We offer a wide spectrum of services including supply of electronics
            and IT products, repairs and maintenance, transport and logistics,
            event management, consultancy, training, and manpower supply.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#555", lineHeight: 1.8, mt: 2 }}
          >
            Our approach is focused on delivering cost-effective, high-quality,
            and timely solutions while maintaining ethical and transparent
            business practices. We believe in building long-term partnerships by
            consistently delivering value to our clients.
          </Typography>
        </Box>
      </Container>

      {/* VISION & MISSION */}
      <Box sx={{ bgcolor: "#fafafa", py: 10 }}>
        <Container>
          <Grid container spacing={6}>
            {/* Vision */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Our Vision
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mt: 2 }}
              >
                To be a trusted multi-service organization recognized for
                quality, reliability, and professional excellence, delivering
                meaningful value to businesses across sectors.
              </Typography>
            </Grid>

            {/* Mission */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Our Mission
              </Typography>

              <Box sx={{ mt: 2 }}>
                {[
                  "Deliver high-quality and cost-effective services",
                  "Maintain ethical and transparent business practices",
                  "Build long-term client partnerships",
                  "Continuously improve skills, systems, and service delivery",
                ].map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: 1.8,
                      mb: 1.5,
                    }}
                  >
                    • {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* VALUES / WHY CHOOSE US */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
        >
          What We Stand For
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={4}>
          {[
            {
              title: "Reliability",
              text: "Consistent and dependable service delivery you can trust.",
            },
            {
              title: "Professional Excellence",
              text: "High standards, skilled professionals, and quality outcomes.",
            },
            {
              title: "Client-Centric Approach",
              text: "We listen, understand, and deliver solutions that matter.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, color: "#666", lineHeight: 1.6 }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
