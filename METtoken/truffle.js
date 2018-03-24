module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ganache: { 
      network_id: "*", 
      host: "localhost",
      port: 8545,
      gas: 4700000,
      gasPrice: 100000000000,
    }
  }
};