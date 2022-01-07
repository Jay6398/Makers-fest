const routes = require("next-routes")();

routes.add("/supply-chain/new", "/supply_chain/new");
routes.add("/supply-chain/:address", "/supply_chain/show");
routes.add("/supply-chain/:address/create-chain", "/supply_chain/chain/new");

module.exports = routes;
