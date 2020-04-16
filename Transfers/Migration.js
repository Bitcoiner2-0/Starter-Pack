const Migrations = artifacts.require("Transfers");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
