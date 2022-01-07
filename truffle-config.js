require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*" // Match any network id
    // },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          "angry humor street emerge mushroom afraid reform federal mean phone submit reason",
          "https://ropsten.infura.io/v3/8efd075c2e114bdfa695c50669c71f20"
        ),
      network_id: 3,
      gas: 3000000,
      gasPrice: 10000000000,
      timeoutBlocks: 200,
    },
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./build/contracts/",
  compilers: {
    solc: {
      version: "0.8.7",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
