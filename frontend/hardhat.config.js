/** @type import('hardhat/config').HardhatUserConfig */
/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
console.log(API_URL);
module.exports = {
    solidity: "0.8.18",
    defaultNetwork: "goerli",
    networks: {
        hardhat: {},
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/BvQ8bEoXvE-AZnOoswN0nFkhfYEg8Lr3",
            accounts: [`5a972752a68fdab77079d2f9229e24eac70de35fd3502b5fd4c6faef5073bcbc`]
        },
    xinfin: {
    url: process.env.XINFIN_NETWORK_URL,
    accounts: [process.env.PRIVATE_KEY],
    },
    apothem: {
    url: process.env.APOTHEM_NETWORK_URL,
    accounts: [process.env.PRIVATE_KEY],
    },
    
  }, 
  paths: {
        artifacts: "./src/artifacts",
  },  
};
