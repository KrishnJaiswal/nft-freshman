
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = "https://eth-rinkeby.alchemyapi.io/v2/HEzxk2-2YVUUIBIz_mx3qbPfaDkkk5_B";

const RINKEBY_PRIVATE_KEY = "283e90753fd74a88a53f1d1c6e9c09702818bf6ed3b43208da4249ab3c4ca032";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};