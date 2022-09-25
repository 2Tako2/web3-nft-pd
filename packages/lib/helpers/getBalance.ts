import { PopCatContract } from "@web3-nft-pd/smart-contracts/deployments";
import { Signer } from "ethers";

export const getBalance = async (signer: Signer) => {
  try {
    const balance = await PopCatContract(signer).balanceOf(signer.getAddress());

    return balance;
  } catch (err: any) {
    throw new Error(err);
  }
};
