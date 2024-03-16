import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#e6e6e6",
      },
    },
  },
  colors: {
    primary: {
      100: "#292929",
    },
  },
});

export default theme;
