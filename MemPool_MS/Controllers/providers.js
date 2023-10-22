const { ethers } = require("ethers");

/**
 * Create Providers
 */
const MUMBAI_80001 = new ethers.providers.JsonRpcProvider(
  // process.env.MUMBAI_80001,
  "https://rpc.ankr.com/polygon_mumbai",
  80001
);

const GOERLIETH = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth_goerli",
  5
);

const QuickNode = new ethers.providers.WebSocketProvider(
  "wss://indulgent-palpable-scion.scroll-testnet.quiknode.pro/6dc6b1f66185c9e7fd1defdd3304b10b00bf2fe1",
);

const ScrollSepolia = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/scroll_sepolia_testnet",
);

/**
 * Export
 */
module.exports = {
  MUMBAI_80001,
  GOERLIETH,
  QuickNode,
  ScrollSepolia
};