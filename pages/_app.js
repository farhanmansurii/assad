import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../styles/theme";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import React from 'react';
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps, router }) {

  return (
    <ChakraProvider theme={theme}>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <NextNProgress color="#e63946" options={{ easing: 'ease', speed: 500 ,showSpinner: false}} startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </ChakraProvider>
  );
}

export default MyApp;
