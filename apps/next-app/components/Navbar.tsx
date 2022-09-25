import { Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => (
  <Flex justify="end" maxW="1200px" m="auto" py="30px">
    <ConnectButton />
  </Flex>
);

export default Navbar;
