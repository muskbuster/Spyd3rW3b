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
  "wss://polygon-mumbai.g.alchemy.com/v2/IcInT1a5d8xNalg3T7ZrtwndijtYJg32"
);


/**
 * Export
 */
module.exports = {
  MUMBAI_80001,
  GOERLIETH,
  QuickNode
};