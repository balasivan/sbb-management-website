import { createTheme } from "@mui/material/styles";

const theme = createTheme({
 palette: {
  primary: {
    main: "#2c2c2c", // dark charcoal (professional)
  },
  secondary: {
    main: "#f57c00", // warm orange (human touch)
  },
  background: {
    default: "#fafafa",
  },
},
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
});

export default theme;
