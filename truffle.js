const HDWalletProvider = require('truffle-hdwallet-provider');
var words = "words"
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      // rinkeby link taken from metamask
      provider: () => new HDWalletProvider(words, "https://rinkeby.infura.io/v3/KEY"),
      network_id: 4,       // Ropsten's id
      gas: 5500000,
      gasPrice: 10000000000,     // Ropsten has a lower block limit than mainnet      
    }
  }
};
