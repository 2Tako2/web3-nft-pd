import { Network } from "@web3-nft-pd/lib/types";
import { Contract, Signer, providers } from "ethers";

import { PopCat } from "../typechain";

import GoerliPopCatJSON from "./goerli/PopCat.json";

const network = process.env.NEXT_PUBLIC_NETWORK as Network;

if (!network) {
  throw new Error("Specify network in Next app config");
}

interface NetworkContracts {
  popCat: any;
}

const getContracts: Record<Network, NetworkContracts> = {
  [Network.Goerli]: { popCat: GoerliPopCatJSON },
  [Network.Localhost]: { popCat: undefined },
};

export const PopCatContract = (signer?: Signer | providers.Provider) => {
  const { popCat } = getContracts[network];
  const { address, abi } = popCat;
  return new Contract(address, abi, signer) as PopCat;
};
