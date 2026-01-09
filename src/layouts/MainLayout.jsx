import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
