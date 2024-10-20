import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "App";
import "index.css";
import reportWebVitals from "reportWebVitals";

const customTheme = {
  ...theme,
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Kufam", cursive',
    mono: "Menlo, monospace",
  },
  fontWeights: {
    regular: "400",
    semibold: "600",
    bold: "800",
  },
  fontSizes: {
    xs: "0.875rem",
    sm: "0.95rem",
    md: "1.125rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "1.5rem",
    "3xl": "1.95rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  colors: {
    ...theme.colors,
    primary: "#1f1f1f",
    secondary: "white",
    brand: {
      50: "rgba(255, 84, 121, 0.1)",
      100: "rgba(255, 84, 121, 0.3)",
      200: "rgba(255, 84, 121, 0.5)",
      300: "rgba(255, 84, 121, 0.7)",
      400: "rgba(255, 84, 121, 0.9)",
      500: "rgba(255, 84, 121, 1)",
      600: "#ff1043",
      700: "#ed0033",
      800: "#cb002c",
      900: "#a90024",
    },
    off: {
      50: "rgba(27, 195, 169, 0.1)",
      100: "rgba(27, 195, 169, 0.3)",
      500: "rgba(27, 195, 169, 1)",
    },
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
