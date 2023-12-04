import { ethers } from "ethers";

import { Chain, L1Chain, L2Chain, Network } from "./types";

const DEFAULT_INFURA_KEY = "84842078b09946638c03157f83405213";

export const NETWORK_DATA: Record<Chain, Network> = {
  ethereum: {
    id: 1,
    name: "Mainnet",
    provider: new ethers.providers.InfuraProvider("homestead"),
    layer: 1,
  },

  goerli: {
    id: 5,
    name: "Goerli",
    provider: new ethers.providers.InfuraProvider("goerli"),
    layer: 1,
  },
  sepolia: {
    id: 11155111,
    name: "Sepolia",
    provider: new ethers.providers.StaticJsonRpcProvider(
      `https://sepolia.infura.io/v3/${DEFAULT_INFURA_KEY}`,
      11155111
    ),
    layer: 1,
  },
  titan: {
    id: 55004,
    name: "Titan",
    provider: new ethers.providers.StaticJsonRpcProvider(
      "https://rpc.titan.tokamak.network"
    ),
    layer: 2,
  },
  "titan-goerli": {
    id: 5050,
    name: "Titan",
    provider: new ethers.providers.StaticJsonRpcProvider(
      "https://rpc.titan-goerli.tokamak.network"
    ),
    layer: 2,
  },
  "titan-sepolia": {
    id: 50505050,
    name: "Titan-sepolia",
    provider: new ethers.providers.StaticJsonRpcProvider(
      "https://rpc.titan.tokamak.network"
    ),
    layer: 2,
  },
};

interface L2BridgeInformation {
  l2StandardBridgeAddress: string;
}

interface L1BridgeInformation {
  l2Chain: L2Chain;
  l1StandardBridgeAddress: string;
}

export const L2_STANDARD_BRIDGE_INFORMATION: Record<
  L2Chain,
  L2BridgeInformation
> = {
  optimism: {
    l2StandardBridgeAddress: "0x4200000000000000000000000000000000000010",
  },
  base: {
    l2StandardBridgeAddress: "0x4200000000000000000000000000000000000010",
  },
  pgn: {
    l2StandardBridgeAddress: "0x4200000000000000000000000000000000000010",
  },
  "optimism-goerli": {
    l2StandardBridgeAddress: "0x4200000000000000000000000000000000000010",
  },
  "optimism-sepolia": {
    l2StandardBridgeAddress: "0x4200000000000000000000000000000000000010",
  },
  "base-goerli": {
    l2StandardBridgeAddress: "0x4200000000000000000000000000000000000010",
  },
  "pgn-sepolia": {
    l2StandardBridgeAddress: "0x4200000000000000000000000000000000000010",
  },
};

export const L2_TO_L1_PAIR: Partial<Record<L2Chain, L1Chain>> = {
  optimism: "ethereum",
  base: "ethereum",
  pgn: "ethereum",
  "optimism-goerli": "goerli",
  "optimism-sepolia": "sepolia",
  "base-goerli": "goerli",
  "pgn-sepolia": "sepolia",
};

export const L1_STANDARD_BRIDGE_INFORMATION: Record<
  L1Chain,
  L1BridgeInformation[]
> = {
  ethereum: [
    {
      l2Chain: "optimism",
      l1StandardBridgeAddress: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
    },
    {
      l2Chain: "base",
      l1StandardBridgeAddress: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
    },
    {
      l2Chain: "pgn",
      l1StandardBridgeAddress: "0xD0204B9527C1bA7bD765Fa5CCD9355d38338272b",
    },
  ],
  goerli: [
    {
      l2Chain: "optimism-goerli",
      l1StandardBridgeAddress: "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8",
    },
    {
      l2Chain: "base-goerli",
      l1StandardBridgeAddress: "0xfa6d8ee5be770f84fc001d098c4bd604fe01284a",
    },
  ],
  sepolia: [
    {
      l2Chain: "optimism-sepolia",
      l1StandardBridgeAddress: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1",
    },
    {
      l2Chain: "pgn-sepolia",
      l1StandardBridgeAddress: "0xFaE6abCAF30D23e233AC7faF747F2fC3a5a6Bfa3",
    },
  ],
};
