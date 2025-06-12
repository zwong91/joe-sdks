import { ChainId } from '@lb-xyz/sdk-core'

export const EXCHANGE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange',
  [ChainId.ARBITRUM_ONE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-arbitrum',
  [ChainId.ARB_GOERLI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-arb-goerli',
  [ChainId.BNB_CHAIN]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-bnb',
  [ChainId.BNB_TESTNET]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-bnbtest',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const MASTERCHEF_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const DEXCANDLES_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const BAR_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const LENDING_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const ROCKET_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const SJOE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe',
  [ChainId.ARBITRUM_ONE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe-arbitrum',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const MONEY_MAKER_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/moneymaker-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/money-maker',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const VEJOE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const BOOSTED_MASTERCHEF_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boostedmasterchef-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boosted-master-chef',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const NFT_CONTRACTS_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contract-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contracts',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const JOEPEG_MARKPLACE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace-fuji',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}

export const FEE_COLLECTOR_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '',
  [ChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/fee-collector-avax',
  [ChainId.ARBITRUM_ONE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/fee-collector-arbitrum',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: '',
  [ChainId.ETHEREUM]: '',
  [ChainId.MANTLE]: '',
  [ChainId.BERACHAIN]: '',
  [ChainId.BASE]: '',
  [ChainId.MONAD_TESTNET]: '',
  [ChainId.SOLANA]: '',
  [ChainId.SONIC]: ''
}
