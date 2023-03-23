const devnet = false;
export const config = {
  ipfsStreamGateway:
    "https://silver-rapid-shrimp-610.mypinata.cloud?stream=true/ipfs/",
  ipfsGateway: "https://silver-rapid-shrimp-610.mypinata.cloud/ipfs/",
  socketUrl: "https://rize2day.com",
  baseUrl: "https://rize2day.com/api/",
  API_URL: "https://rize2day.com/",
  RPC_URL: devnet
    ? "https://rize2day.com/cosmwasm/"
    : "https://rize2day.com/cosmwasm/", //'https://rpc-test.coreum.hexskrt.net/',
  REST_URL: devnet
    ? "https://rize2day.com/cosmwasm-rest/"
    : "https://test-coreum-api.genznodes.dev/",
  DATA_LAYER: devnet ? "" : "",
  FAUCET_URL: "",
  CHAIN_ID: devnet ? "coreum-devnet-1" : "coreum-testnet-1",
  CHAIN_NAME: devnet ? "Coreum Devnet 1" : "Coreum Testnet 1",
  COIN_DENOM: devnet ? "DCORE" : "TESTCORE",
  COIN_MINIMAL_DENOM: devnet ? "ducore" : "utestcore",
  COIN_TYPE: devnet ? 990 : 118,
  COIN_DECIMALS: 6,
  COIN_GECKOID: devnet ? "coreum" : "coreum",
  PREFIX: devnet ? "devcore" : "testcore",
  AVG_GAS_STEP: 0.005,
  MAXIMUM_UPLOAD: 100,

  MARKETPLACE: devnet
    ? "devcore1xryveqc63z0l2q6h4a3h0c02ftscwdlm0f2elhngczgau9lefpmqzn69lq"
    : "testcore1f6jlx7d9y408tlzue7r2qcf79plp549n30yzqjajjud8vm7m4vds64070x",
  CW721_CONTRACT: "devcore...",
  CW721_OWNER: "devcore...",
  CW20_CONTRACT: devnet
    ? "devcore143gjvxqvea69v0hqp2p6wtz386hhgdn06uw7xntyhleahaunjkqs0jx6pc"
    : "testcore1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3sqwjxmq",
  COLLECTION_CODE_ID: devnet ? 42 : 6,
  CW721_CODE_ID: devnet ? 41 : 4,
};

export const PINATA_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxYTY2NTdhMi1jYmYzLTQzOGEtODI4Yy02ZTg1Y2U3MzBiNmUiLCJlbWFpbCI6InN1cHBvcnRAcml6ZTJkYXkuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjFkZWUxYTYzMDAwMzA3NTUyYjEyIiwic2NvcGVkS2V5U2VjcmV0IjoiYzMwNjg5YjViM2U1MmM1MTFlYTc5ZGRkODdhNmExODJlNzUyMWY1ZTRmMTA5ZjU5OTMxMTg0Mzk3OGY0YmUwNiIsImlhdCI6MTY3ODI3NTIxN30.N4WqxO0FsBz_m-zsAlbVzN2ZoXktiTFisFHXtgyDw38";

export const chainConfig = {
  chainId: config.CHAIN_ID,
  chainName: config.CHAIN_NAME,
  rpc: config.RPC_URL,
  rest: config.REST_URL,
  stakeCurrency: {
    coinDenom: config.COIN_DENOM,
    coinMinimalDenom: config.COIN_MINIMAL_DENOM,
    coinDecimals: config.COIN_DECIMALS,
    coinGeckoId: config.COIN_GECKOID,
  },
  bip44: {
    coinType: config.COIN_TYPE,
  },
  bech32Config: {
    bech32PrefixAccAddr: `${config.PREFIX}`,
    bech32PrefixAccPub: `${config.PREFIX}pub`,
    bech32PrefixValAddr: `${config.PREFIX}valoper`,
    bech32PrefixValPub: `${config.PREFIX}valoperpub`,
    bech32PrefixConsAddr: `${config.PREFIX}valcons`,
    bech32PrefixConsPub: `${config.PREFIX}valconspub`,
  },
  currencies: [
    {
      coinDenom: config.COIN_DENOM,
      coinMinimalDenom: config.COIN_MINIMAL_DENOM,
      coinDecimals: config.COIN_DECIMALS,
      coinGeckoId: config.COIN_GECKOID,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: config.COIN_DENOM,
      coinMinimalDenom: config.COIN_MINIMAL_DENOM,
      coinDecimals: config.COIN_DECIMALS,
      coinGeckoId: config.COIN_GECKOID,
      gasPriceStep: {
        low: 0.0625,
        average: 1,
        high: 62.5,
      },
      features: ["cosmwasm"],
    },
  ],
  gasPriceStep: {
    low: 0.0625,
    average: 1,
    high: 62.5,
  },
  features: ["cosmwasm"],
  coinType: config.COIN_TYPE,
  beta: true,
};

export const FILE_TYPE = {
  ALL: 0,
  IMAGE: 1,
  AUDIO: 2,
  VIDEO: 3,
  THREED: 4,
};

export const CATEGORIES = [
  { value: 1, text: "Arts" },
  { value: 2, text: "Games" },
  { value: 3, text: "Sports" },
  { value: 4, text: "Audio" },
  { value: 5, text: "Video" },
  { value: 6, text: "3D NFTs" },
  { value: 7, text: "Photography" },
];

export const PROPERTY_TYPES = [
  { value: 1, text: "string" },
  { value: 2, text: "boolean" },
  { value: 3, text: "number" },
  { value: 4, text: "textarea" },
];

export const PROFILE_TABS = {
  COLLECTIBLES: 0,
  CREATED: 1,
  LIKED: 2,
  FOLLOWING: 3,
  FOLLOWERS: 4,
  COLLECTIONS: 5,
};
