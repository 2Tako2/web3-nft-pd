import {
  Flex,
  Text,
  Input,
  Button,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { getPopCat } from "@web3-nft-pd/lib/helpers";
import { useState, useContext } from "react";
import { useSigner } from "wagmi";

import { ContractContext } from "../contexts/ContractContext";

const metadata = {
  image: "ipfs://QmPf56HnaScowvYuzrMNVYEwptJ2DMjqorqLNa7RgJWase",
  description: "Pop Cat metadata is not revealed yet",
  name: "Pop Cat #hidden",
  attributes: [
    { trait_type: "speed", value: 5, display_type: "boost_number" },
    { trait_type: "size", value: 5, display_type: "boost_percentage" },
    { trait_type: "jump power", value: 5, display_type: "number" },
  ],
  background_color: "ffffff",
};

const ProfileSection = () => {
  const [tokenId, setTokenId] = useState<string>();
  const [ipfs, setIpfs] = useState<string>();

  const { data: signer } = useSigner();

  const toast = useToast();

  const onGetPopCat = async () => {
    if (!signer || !tokenId) return;
    try {
      const result = await getPopCat(signer, tokenId);

      setIpfs(result);
    } catch (err: any) {
      toast({
        title: "Something is wrong",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      flexDir="column"
      w="400px"
      p="20px"
      m="10px"
      border="1px solid #363535"
    >
      <Text fontSize="1.5rem" fontWeight="bold" textAlign="center" mb="10px">
        Profile Section
      </Text>
      <FormLabel>Enter your Pop Cat token ID:</FormLabel>
      <Input
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
        mb="20px"
      />
      <Button isDisabled={!tokenId} onClick={onGetPopCat}>
        Get Pop Cat
      </Button>
      {ipfs && (
        <Flex flexDir="column">
          <Text>{`Name: ${metadata.name}`}</Text>
          <Text>{`Description: ${metadata.description}`}</Text>
          {metadata.attributes.map((attribute) => (
            <Text key={attribute.trait_type}>
              {`${attribute.trait_type}: ${attribute.value}`}
            </Text>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ProfileSection;

// https://ipfs.io/ipfs/QmRvxvHqY5vKgnBegGsYsci39QgpmkP2B52jGcbqxprX2q
