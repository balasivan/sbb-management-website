import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#2c2c2c", color: "#fff", mt: 10 }}>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* COMPANY INFO */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              SBB Management Services
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc", lineHeight: 1.7 }}>
              SBB Management Services Private Limited is a professionally managed
              organization delivering reliable and integrated business support
              services across multiple sectors.
            </Typography>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" underline="none" sx={linkStyle}>
                Home
              </Link>
              <Link href="/about" underline="none" sx={linkStyle}>
                About
              </Link>
              <Link href="/services" underline="none" sx={linkStyle}>
                Services
              </Link>
              <Link href="/contact" underline="none" sx={linkStyle}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* CONTACT INFO */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Contact
            </Typography>

            <Typography sx={contactStyle}>
              <LocationOnIcon sx={iconStyle} />
              <a
                href="https://www.google.com/maps?q=Chennai,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                style={anchorStyle}
              >
                Chennai, Tamil Nadu, India
              </a>
            </Typography>

            <Typography sx={contactStyle}>
              <PhoneIcon sx={iconStyle} />
              <a href="tel:+919876543210" style={anchorStyle}>
                +91 98765 43210
              </a>
            </Typography>

            <Typography sx={contactStyle}>
              <EmailIcon sx={iconStyle} />
              <a href="mailto:info@sbbmanagement.com" style={anchorStyle}>
                info@sbbmanagement.com
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

      {/* COPYRIGHT */}
      <Box sx={{ py: 2, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#aaa" }}>
          © {new Date().getFullYear()} SBB Management Services Private Limited. All
          rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

/* STYLES */
const linkStyle = {
  color: "#ccc",
  "&:hover": {
    color: "#f57c00",
  },
};

const contactStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  mb: 1,
  color: "#ccc",
};

const iconStyle = {
  fontSize: 18,
};

const anchorStyle = {
  color: "#ccc",
  textDecoration: "none",
};
