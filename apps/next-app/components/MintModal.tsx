import {
  Flex,
  Modal,
  ModalOverlay,
  Text,
  Button,
  Input,
  ModalCloseButton,
  ModalContent,
  useToast,
  HStack,
  ModalHeader,
} from "@chakra-ui/react";
import { mintPopCat } from "@web3-nft-pd/lib/helpers";
import { isAddress } from "ethers/lib/utils";
import { useState, useContext } from "react";
import { useSigner } from "wagmi";

import { ContractContext } from "../contexts/ContractContext";

interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MintModal = (props: MintModalProps) => {
  const { isOpen, onClose } = props;

  const { walletAddress } = useContext(ContractContext);

  const { data: signer } = useSigner();
  const [to, setTo] = useState("");

  const toast = useToast();

  const mintForSelf = async () => {
    if (!walletAddress || !signer) return;
    try {
      await mintPopCat(signer, walletAddress);

      toast({
        title: "Successful Mint!",
        description: `A new Pop Cat is on its way to ${walletAddress}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err: any) {
      toast({
        title: "Something went wrong",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const mintForFriend = async () => {
    if (!to || !signer) return;
    if (!isAddress(to)) {
      toast({
        title: "Invalid Address",
        description: "Please insert a valid address",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    try {
      const tx = await mintPopCat(signer, to);
      onClose();
      toast({
        title: "Submission completed!",
        description: "Waiting the transaction to process",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      await tx.wait();

      toast({
        title: "Successful Mint!",
        description: `A new Pop Cat is on its way to ${walletAddress}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err: any) {
      onClose();
      toast({
        title: "Something went wrong",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Mint a Pop Cat</ModalHeader>
        <Flex flexDir="column" p="20px">
          <Text mb="5px">Want to mint a Pop Cat for a friend?</Text>
          <Text mb="20px">Enter their wallet address:</Text>
          <Input mb="20px" onChange={(e) => setTo(e.target.value)} value={to} />
          <HStack w="100%">
            <Button w="100%" onClick={mintForFriend}>
              Mint for a friend
            </Button>
            <Text>or</Text>
            <Button w="100%" onClick={mintForSelf}>
              Mint for yourself
            </Button>
          </HStack>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default MintModal;
