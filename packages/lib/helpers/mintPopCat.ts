import { PopCatContract } from "@web3-nft-pd/smart-contracts/deployments";
import { providers, Signer } from "ethers";

export const mintPopCat = async (
  signer: Signer | providers.Provider,
  to: string
) => {
  try {
    const tx = await PopCatContract(signer).mint(to);

    return tx;
  } catch (err: any) {
    throw new Error(err);
  }
};
