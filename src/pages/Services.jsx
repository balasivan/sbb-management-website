import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";

import DevicesIcon from "@mui/icons-material/Devices";
import BuildIcon from "@mui/icons-material/Build";
import EventIcon from "@mui/icons-material/Event";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";

// Images
import supplyImg from "../assets/images/services/supply.jpg";
import maintenanceImg from "../assets/images/services/maintenance.jpg";
import eventImg from "../assets/images/services/event.jpg";
import logisticsImg from "../assets/images/services/logistics.jpg";
import consultingImg from "../assets/images/services/consulting.jpg";
import trainingImg from "../assets/images/services/training.jpg";
import manpowerImg from "../assets/images/services/manpower.jpg";

const services = [
  {
    title: "Supply of Electronics & IT Products",
    description:
      "Electronics, IT products, stationery, solar products, and water purifiers.",
    icon: <DevicesIcon color="secondary" sx={{ fontSize: 36 }} />,
    image: supplyImg,
  },
  {
    title: "Repairs & Maintenance",
    description:
      "Reliable maintenance and repair services for business operations.",
    icon: <BuildIcon color="secondary" sx={{ fontSize: 36 }} />,
    image: maintenanceImg,
  },
  {
    title: "Event Management",
    description:
      "Professional planning and execution of corporate events.",
    icon: <EventIcon color="secondary" sx={{ fontSize: 36 }} />,
    image: eventImg,
  },
  {
    title: "Transport & Logistics",
    description:
      "Efficient and dependable transport & logistics solutions.",
    icon: <LocalShippingIcon color="secondary" sx={{ fontSize: 36 }} />,
    image: logisticsImg,
  },
  {
    title: "Management & Consultancy",
    description:
      "Business consultancy for growth, efficiency, and optimization.",
    icon: <BusinessCenterIcon color="secondary" sx={{ fontSize: 36 }} />,
    image: consultingImg,
  },
  {
    title: "Academic & Professional Training",
    description:
      "Skill-based academic and professional training programs.",
    icon: <SchoolIcon color="secondary" sx={{ fontSize: 36 }} />,
    image: trainingImg,
  },
  {
    title: "Manpower Supply",
    description:
      "Skilled and unskilled manpower solutions across industries.",
    icon: <GroupsIcon color="secondary" sx={{ fontSize: 36 }} />,
    image: manpowerImg,
  },
];

export default function Services() {
  return (
    <Box sx={{ bgcolor: "#fafafa", py: 10 }}>
      <Container>
        {/* Page Header */}
        <Box textAlign="center" mb={7}>
          <Typography variant="h3" fontWeight={600}>
            Our Services
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              maxWidth: 720,
              mx: "auto",
              color: "#555",
              lineHeight: 1.7,
            }}
          >
            We provide reliable, professional, and integrated services that
            support businesses across supply, logistics, consultancy, training,
            and manpower.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={5}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: 210,
                    objectFit: "cover",
                    borderBottom: "1px solid #eee",
                  }}
                />

                {/* Content */}
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  {service.icon}

                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{ mt: 2, color: "#2c2c2c" }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mt: 1, color: "#666", lineHeight: 1.6 }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
