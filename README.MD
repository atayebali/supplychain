# Setup 

To run the project follow these steps:
1. Fetch npm packages: `npm install`
2. Start Ganache and provide secret phrase:
  `ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"`
3. Deploy the contract: `truffle migrate`  
4. Run dapp: `npm run dev`

# Versions of Libs

```
node: v16.13.2
├── eslint@8.7.0
├── ganache-cli@6.12.2
├── npm@8.4.1
├── truffle-hdwallet-provider@1.0.17
├── truffle@4.1.14
├── web3@0.2.6
```

## Explanation of use

Eslint: Was installed to help work with JS syntax on the test and dapp.
Ganache Cli : Used to run local Blockchain 
NPM: Used to run server and handle dev automation tasks
Truffle HD Wallet : Used in order to connect and deploy my contract to Rinkeby.
Truffle: Toolkit for development. Manage tasks like migrations and running tests.


IPFS was not used in this project.

# Public Testnet Info

Rinkeby: 
  Contract: https://rinkeby.etherscan.io/address/0x7addac2a3c1d4fc2fa783629a6c8bef17c60be09
  Deployer: https://rinkeby.etherscan.io/address/0x59e71283bae474fac070183ec8ae9b6520cd8d68

  Details: https://rinkeby.etherscan.io/address/0x856bddc6d5b79b165ef9c45e915f942185bbb302#code

## Deployment log

```
truffle migrate --network rinkeby
Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xdc51f4e4de2e420db21a21395e2d31af4996a785ca4a667fc745c320a01b45f2
  Migrations: 0x856bddc6d5b79b165ef9c45e915f942185bbb302
Saving successful migration to network...
  ... 0x47328c9c5bd1e98ec379ffac9fc967d00bcae594d9a6806a73e38a1ac572950b
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying FarmerRole...
  ... 0xbb2ae569051f74bea059f31446797075dea0f38a569ae9f2a808d3d414b280bb
  FarmerRole: 0xbc4ea9b8fda357e2ff4706c4f47c54081b47d5b3
  Deploying DistributorRole...
  ... 0x79a4764203d773f2eb39342b01a12767038d8dab309ee8555a8fdeeaee7bb87e
  DistributorRole: 0x9b944209903b189b89b5803b0c6fcb713f9d4507
  Deploying RetailerRole...
  ... 0xc079c4c3c61784a5020ecff88d091bf3092a65adb33ad631bb0d01ddebb6ecac
  RetailerRole: 0x7addac2a3c1d4fc2fa783629a6c8bef17c60be09
  Deploying ConsumerRole...
  ... 0xc08742eacda354c7af5aefe730f8d3ff8b5861efcb4afc7708bd6612fe478373
  ConsumerRole: 0x4079ad8eeeb0d192176b21af92a0c0c598d4e56c
  Deploying SupplyChain...
  ... 0x839c10f9a0521daa1656bddff36f2525f2b62418686228b15dee96821513fb01
  SupplyChain: 0x248e37a0839b4872f17c5892c679f8807bc3a771
Saving successful migration to network...
  ... 0x3a2483485a7b5c8c502651d2d1fafe1bf7044987730eeab8945eed6f1e40545e
Saving artifacts...
```
# UML

## Activity Diagram

![Screen Shot 2022-02-16 at 2 20 37 PM](https://user-images.githubusercontent.com/777379/154379877-3c4a9331-c0c4-470b-9db7-450feb602034.png)

## State Diagram

![Screen Shot 2022-02-16 at 2 35 49 PM](https://user-images.githubusercontent.com/777379/154379942-bb54d5c6-276d-48d7-84bf-5010b17f8217.png)

## Sequence Diagram

![Screen Shot 2022-02-16 at 2 52 18 PM](https://user-images.githubusercontent.com/777379/154379985-7bb1f919-7725-4d7d-86f9-1e389e58b1f0.png)

## Class Diagram

![Screen Shot 2022-02-16 at 3 27 58 PM](https://user-images.githubusercontent.com/777379/154380013-5fc22905-933d-44f7-ba1b-d1083efd6bcf.png)



