import web3 from "./web3";
import FoodSupplyChain from "../build/contracts/FoodSupplyChain.json";

const supplyChainInstance = (address) => {
  return new web3.eth.Contract(FoodSupplyChain.abi, address);
};

export default supplyChainInstance;
