import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";
import { ContractProvider } from "../contexts/ContractContext";
import { RainbowProvider } from "../contexts/RainbowContext";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <RainbowProvider>
      <ContractProvider>
        <Navbar />
        <Box maxW="1200px" w="90vw" m="auto" border="1px solid gray" p="50px">
          <Component {...pageProps} />
        </Box>
      </ContractProvider>
    </RainbowProvider>
  </ChakraProvider>
);

export default MyApp;
