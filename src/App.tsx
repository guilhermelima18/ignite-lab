import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { client } from "./lib/apollo";
import { AppRoutes } from "./routes";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
          <AppRoutes />
          <Footer />
        </ApolloProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
