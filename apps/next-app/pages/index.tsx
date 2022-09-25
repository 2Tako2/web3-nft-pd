import { Flex, Text, Button, useDisclosure, HStack } from "@chakra-ui/react";
import { useContext } from "react";

import MintModal from "../components/MintModal";
import MintSection from "../components/MintSection";
import ProfileSection from "../components/ProfileSection";
import Shop from "../components/Shop";
import { ContractContext } from "../contexts/ContractContext";

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { walletAddress, balance } = useContext(ContractContext);

  return (
    <Flex flexDirection="column">
      <Text fontSize="2rem" fontWeight="bold">
        Home Page
      </Text>
      <Flex flexWrap="wrap">
        <MintSection />
        <ProfileSection />
      </Flex>
    </Flex>
  );
};

export default Home;
