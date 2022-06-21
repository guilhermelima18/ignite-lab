import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./routes";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AppRoutes />
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}
