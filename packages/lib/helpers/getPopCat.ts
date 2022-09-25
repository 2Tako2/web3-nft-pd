import { PopCatContract } from "@web3-nft-pd/smart-contracts/deployments";
import { Signer } from "ethers";

export const getPopCat = async (signer: Signer, tokenId: string) => {
  const address = await signer.getAddress();
  try {
    const owner = await PopCatContract(signer).ownerOf(tokenId);

    if (owner !== address) return undefined;
    const ipfsUrl = await PopCatContract(signer).tokenURI(tokenId);

    return ipfsUrl;
  } catch (err: any) {
    throw new Error(err);
  }
};
