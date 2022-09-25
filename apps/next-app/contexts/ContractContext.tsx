import { getBalance, getPopCat } from "@web3-nft-pd/lib/helpers";
import { PopCatContract } from "@web3-nft-pd/smart-contracts/deployments";
// import { PopCatMetadata, PopCatAttribute } from "@web3-nft-pd/lib";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useSigner } from "wagmi";

interface ContractContextInterface {
  walletAddress: string | undefined;
  balance: string;
}

export const ContractContext = createContext<ContractContextInterface>(
  {} as ContractContextInterface
);

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const { data: signer } = useSigner();

  const [walletAddress, setWalletAddress] = useState<string>();
  const [balance, setBalance] = useState<string>("nah");

  useEffect(() => {
    if (!signer) {
      setWalletAddress(undefined);
      return;
    }
    (async () => {
      setWalletAddress(await signer.getAddress());
    })();
  }, [signer]);

  // Get the balance of PopCat NFT upon walletAddress update
  useEffect(() => {
    if (!walletAddress || !signer) {
      setBalance("0");
      return;
    }
    (async () => {
      const result = await getBalance(signer);
      setBalance(result.toString());
    })();
  }, [signer, walletAddress]);

  return (
    <ContractContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ walletAddress, balance }}
    >
      {children}
    </ContractContext.Provider>
  );
};
