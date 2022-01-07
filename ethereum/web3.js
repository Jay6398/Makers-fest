import Web3 from "web3";

/*================================
    1.  USING MODULES 
================================*/
const HDWalletProvider = require("@truffle/hdwallet-provider");

/*======================================================
    2.  CREATE PROVIDER AND WEB3 INSTANCE 
======================================================*/
/*
    1.  METAMASK MNEMONIC
*/
const mnemonic =
  "angry humor street emerge mushroom afraid reform federal mean phone submit reason";
/*
    2.  DEFINE PROVIDER
*/
const ropsten_network =
  "https://ropsten.infura.io/v3/8efd075c2e114bdfa695c50669c71f20";
const provider = new HDWalletProvider(mnemonic, ropsten_network);
const web3 = new Web3(provider);

export default web3;
