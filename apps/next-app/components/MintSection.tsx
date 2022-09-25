import { Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { ContractContext } from "../contexts/ContractContext";

import MintModal from "./MintModal";

const MintSection = () => {
  const { walletAddress, balance } = useContext(ContractContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      flexDir="column"
      w="400px"
      m="10px"
      border="1px solid #575757"
      p="20px"
    >
      <Text textAlign="center" fontSize="1.5rem" mb="10px" fontWeight="bold">
        Mint section
      </Text>
      <Text>{`You have ${balance} Pop Cat NFT`}</Text>
      <Button onClick={onOpen} isDisabled={!!walletAddress}>
        Mint a Pop Cat
      </Button>
      <MintModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
export default MintSection;
