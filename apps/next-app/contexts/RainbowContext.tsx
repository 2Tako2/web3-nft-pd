import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { ReactNode } from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";

import { config } from "../configs/config";

const RainbowProvider = ({ children }: { children: ReactNode }) => {
  const { chains, provider } = configureChains(
    [config.chain],
    [
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_GOERLI_URL }),
      // publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "PD Web3 Crowd Funding",
    chains,
  });

  const wagmiClient = createClient({ autoConnect: true, connectors, provider });

  const theme = lightTheme({ ...lightTheme.accentColors.blue });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={theme}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export { RainbowProvider };
