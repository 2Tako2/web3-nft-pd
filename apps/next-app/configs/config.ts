import { Network } from "@web3-nft-pd/lib";
import { chain, Chain } from "wagmi";

const network = process.env.NEXT_PUBLIC_NETWORK as Network;
if (!network) {
  throw Error("Specify network in config");
}

interface IConfig {
  chain: Chain;
}

const goerli: IConfig = {
  chain: chain.goerli,
};

// const polygonMainnet: IConfig = {
//   chain: chain.polygon,
// };

// const polygonMumbai: IConfig = {
//   chain: chain.polygonMumbai,
// };

const localhost: IConfig = {
  chain: chain.hardhat,
};

const ConfigRecord: Record<Network, IConfig> = {
  [Network.Goerli]: goerli,
  // [Network.Polygon]: polygonMainnet,
  // [Network.Mumbai]: polygonMumbai,
  [Network.Localhost]: localhost,
};

export const config = ConfigRecord[network];
