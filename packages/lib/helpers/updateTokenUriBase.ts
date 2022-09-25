import { PopCatContract } from "@web3-nft-pd/smart-contracts/deployments";
import { Signer } from "ethers";

export const updateTokenUriBase = async (signer: Signer, uri: string) => {
  const signerAddress = await signer.getAddress();
  if (signerAddress !== process.env.DEPLOYER_ADDRESS) {
    throw new Error("Not owner");
  }
  try {
    await PopCatContract(signer).updateTokenUriBase(uri);
  } catch (err: any) {
    throw new Error(err);
  }
};
