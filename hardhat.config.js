require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: {
        count: 1000,
      } 
    },
  },
};
