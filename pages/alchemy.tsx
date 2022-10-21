// Javascript
// Setup: npm install alchemy-sdk
const { Alchemy, Network } = require("alchemy-sdk");
export {};

const settings = {
  apiKey: "sJNxFCoRMV31PY5Yqn5y-v1Ugeg3m7aw",
  network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);

export default async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

main();
