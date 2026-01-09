import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ScheduleIcon from "@mui/icons-material/Schedule";

import supplyImg from "../assets/images/home/service-supply.jpg";
import supportImg from "../assets/images/home/service-support.jpg";
import managementImg from "../assets/images/home/service-management.jpg";

import heroImg from "../assets/images/home-hero.jpg";
import serviceImg from "../assets/images/home-service.jpg";
import trustImg from "../assets/images/home-trust.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight={700} sx={{ maxWidth: 900 }}>
            Integrated Business Support Services
          </Typography>

          <Typography
            variant="h6"
            sx={{ mt: 3, maxWidth: 720, color: "#e0e0e0", lineHeight: 1.7 }}
          >
            Delivering professional, reliable, and scalable solutions across
            supply, logistics, consultancy, training, event management, and
            manpower services.
          </Typography>

          <Box sx={{ mt: 5, display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate("/contact")}
            >
              Contact Our Team
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { color: "#f57c00", borderColor: "#f57c00" },
              }}
              onClick={() => navigate("/services")}
            >
              View Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= TRUST / PROOF ================= */}
      <Box sx={{ py: 8, bgcolor: "#fafafa" }}>
        <Container>
          <Grid container spacing={4} textAlign="center">
            {[
              { icon: <VerifiedIcon />, text: "Trusted & Ethical Practices" },
              { icon: <GroupsIcon />, text: "Experienced Professional Team" },
              { icon: <HandshakeIcon />, text: "Long-Term Client Partnerships" },
              { icon: <ScheduleIcon />, text: "Reliable & Timely Delivery" },
            ].map((item, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Box sx={{ color: "#f57c00" }}>{item.icon}</Box>
                <Typography fontWeight={600} sx={{ mt: 1 }}>
                  {item.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= SERVICE SNAPSHOT ================= */}
      <Box sx={{ py: 14, bgcolor: "#111" }}>
        <Container>
          <Typography variant="h4" fontWeight={600} textAlign="center" color="white">
            Our Core Service Areas
          </Typography>

          <Grid container spacing={4} sx={{ mt: 8 }}>
            {[
              {
                title: "Supply & Operations",
                text: "Electronics, IT products, stationery, solar products, and water purifiers.",
                image: supplyImg,
              },
              {
                title: "Support & Maintenance",
                text: "Repairs, maintenance, transport, and logistics services.",
                image: supportImg,
              },
              {
                title: "Management & People",
                text: "Consultancy, training, manpower supply, and event management.",
                image: managementImg,
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    height: 420,
                    borderRadius: 4,
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-end",
                    p: 3,
                    transition: "0.4s",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                  onClick={() => navigate("/services")}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={600} color="white">
                      {item.title}
                    </Typography>
                    <Typography color="#ddd" variant="body2">
                      {item.text}
                    </Typography>
                    <Typography sx={{ mt: 1, color: "#f57c00" }}>
                      View Services →
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= WHY SBB ================= */}
      <Container sx={{ py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={600}>
              Why SBB Management Services
            </Typography>
            <Typography sx={{ mt: 3, color: "#555", lineHeight: 1.8 }}>
              We focus on ethical practices, operational excellence, and
              long-term partnerships to consistently deliver value-driven
              services.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={serviceImg}
              alt="Why SBB"
              sx={{ width: "100%", borderRadius: 4 }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* ================= HOW WE WORK ================= */}
      <Box sx={{ py: 12, bgcolor: "#fafafa" }}>
        <Container>
          <Typography variant="h4" fontWeight={600} textAlign="center">
            How We Work
          </Typography>

          <Grid container spacing={4} sx={{ mt: 6 }}>
            {[
              "Understand requirements",
              "Plan resources",
              "Execute with quality",
              "Deliver & support",
            ].map((step, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Card sx={{ textAlign: "center", py: 4 }}>
                  <Typography variant="h4" fontWeight={700} color="secondary">
                    {i + 1}
                  </Typography>
                  <Typography sx={{ mt: 2 }}>{step}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= FINAL CTA ================= */}
      <Box
        sx={{
          py: 10,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${trustImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Container textAlign="center">
          <Typography variant="h4" fontWeight={600}>
            Looking for a Reliable Business Support Partner?
          </Typography>
          <Typography sx={{ mt: 2, color: "#ddd" }}>
            Let’s discuss how SBB Management Services can support your operations.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </>
  );
}
