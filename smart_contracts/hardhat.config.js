// https://eth-ropsten.alchemyapi.io/v2/FBIScOM8gb3B0XOE3G8FipLLhE676Jma

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/FBIScOM8gb3B0XOE3G8FipLLhE676Jma',
      accounts: ['1295b7a384fc1c129ec112871b7bce6deba05aacb351fb79b6194c749326f111']
    }
  }
}