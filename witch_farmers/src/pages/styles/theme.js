import { extendTheme } from "@chakra-ui/react";
const customTheme = {
  config : {
    useSystemColorMode: true,
    initialColorMode: "dark",
  }
};
export const theme = extendTheme(customTheme);