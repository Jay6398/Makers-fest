import web3 from "./web3";
import supplyChainFactory from "../build/contracts/SupplyChainFactory.json";

/*================================
    1.  CREATE FACTORY INSTANCE
================================*/
const factoryContractAccountAddress =
  "0xedf7190a17b1a6555981c816661a45774f2c274d"; // get from deploy.js
const supplyChainFactoryInstance = new web3.eth.Contract(
  supplyChainFactory.abi,
  factoryContractAccountAddress
);

//console.log(supplyChainFactoryInstance);
export default supplyChainFactoryInstance;
