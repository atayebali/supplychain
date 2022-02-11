# Setup 

# Versions of Libs

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