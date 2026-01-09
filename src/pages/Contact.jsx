import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function Contact() {
  return (
    <>
      {/* HEADER */}
      <Box sx={{ bgcolor: "#f5f5f5", py: 8 }}>
        <Container>
          <Typography variant="h3" fontWeight={600} textAlign="center">
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mt: 2, color: "#555", maxWidth: 700, mx: "auto" }}
          >
            Reach out to us for enquiries, partnerships, or service-related
            discussions. Our team is always ready to assist you.
          </Typography>
        </Container>
      </Box>

      {/* FORM + CONTACT DETAILS */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {/* CONTACT FORM */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Send Us a Message
            </Typography>

            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Your Name" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Email Address" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Phone Number" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ px: 5 }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* CONTACT INFO */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Contact Information
            </Typography>

            <Box sx={{ mt: 3 }}>
              {/* Address */}
              <Typography sx={{ mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                <strong>Address:</strong>{" "}
                <a
                  href="https://www.google.com/maps?q=Chennai,+Tamil+Nadu,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#f57c00",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Chennai, Tamil Nadu, India
                </a>
              </Typography>

              {/* Phone */}
              <Typography sx={{ mb: 2 }}>
                <PhoneIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919876543210"
                  style={{
                    color: "#f57c00",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  +91 98765 43210
                </a>
              </Typography>

              {/* Email */}
              <Typography>
                <EmailIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@sbbmanagement.com"
                  style={{
                    color: "#f57c00",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  info@sbbmanagement.com
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* MAP SECTION */}
      <Box sx={{ bgcolor: "#fafafa", py: 10 }}>
        <Container>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Our Location
          </Typography>

          <Box
            sx={{
              mt: 3,
              width: "100%",
              height: 350,
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            {/* Replace location if needed */}
            <iframe
              title="Company Location"
              src="https://www.google.com/maps?q=Chennai,+Tamil+Nadu,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>

      {/* TRUST SECTION */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
        >
          Why Contact Us
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={4}>
          {[
            {
              icon: <SupportAgentIcon color="secondary" sx={{ fontSize: 40 }} />,
              title: "Responsive Support",
              text: "Quick response to enquiries and service requests.",
            },
            {
              icon: <VerifiedIcon color="secondary" sx={{ fontSize: 40 }} />,
              title: "Trusted Partner",
              text: "Ethical, transparent, and professional engagement.",
            },
            {
              icon: <HandshakeIcon color="secondary" sx={{ fontSize: 40 }} />,
              title: "Long-Term Relationship",
              text: "We focus on building sustainable partnerships.",
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
                <CardContent sx={{ textAlign: "center" }}>
                  {item.icon}
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
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
