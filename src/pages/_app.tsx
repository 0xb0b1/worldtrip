import { AppProps } from "next/dist/next-server/lib/router/router";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import "../styles/custom-slide-style.scss";

// swiper styling
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
