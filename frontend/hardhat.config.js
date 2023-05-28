/** @type import('hardhat/config').HardhatUserConfig */
/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
console.log(API_URL)
module.exports = {
    solidity: "0.8.18",
    defaultNetwork: "goerli",
    networks: {
        hardhat: {},
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/oqeOc94obCxkJEpe3KNrK3MzHE6Y3pmy",
            accounts: [`0x11a1cea1dd86cc5e6f48ba97a0e9651f7ec2fd9f38943c13ccfb4d6c88c4cb36`]
        }
    },
};
