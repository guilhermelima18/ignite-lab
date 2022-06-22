import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#121214",
      "900": "#09090A",
    },
    cyan: {
      "400": "#81D8F7",
    },
    orange: {
      "400": "#FBA94C",
    },
    red: {
      "400": "#F75A68",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
      },
    },
  },
});
