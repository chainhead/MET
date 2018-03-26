const Web3 = require('web3');
const TruffleConfig = require('../truffle');
const config = TruffleConfig.networks.aws;

var Migrations = artifacts.require("./contracts/Migrations.sol");

module.exports = function(deployer) {
  const web3 = new Web3(new Web3.providers.HttpProvider('http://' + config.host + ':' + config.port));
  web3.personal.unlockAccount(config.from, 'Welc0me', 36000);

  deployer.deploy(Migrations);
};
