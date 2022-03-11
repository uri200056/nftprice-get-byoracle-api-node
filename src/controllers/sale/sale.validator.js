const Joi = require('joi');

export const addOrder = {
  body: {
    transactionHash: Joi.string().required(),
    contract: Joi.string().required(),
    etherValue: Joi.string().required(),
    chainId: Joi.strict().required(),
    maker: Joi.string().required(),
    taker: Joi.string().required(),
  },
};

export const addTransfer = {
  body: {
    transactionHash: Joi.string().required(),
    contract: Joi.string().required(),
    chainId: Joi.strict().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    tokenId: Joi.string().required(),
  },
};

export const verifyTransaction = {
  body: {
    transaction_hash: Joi.string().required(),
    block_timestamp: Joi.number().required(),
    confirmations: Joi.number().required(),
  },
  query: {
    nftId: Joi.string().required(),
    tokenId: Joi.string().required(),
  },
};

export const addSale = {
  body: {
    transactionHash: Joi.string().required(),
    contract: Joi.string().required(),
    tokenId: Joi.string().required(),
    blockTimestamp: Joi.string().required(),
    etherValue: Joi.string().required(),
    chainId: Joi.strict().required(),
    from: Joi.strict().required(),
    to: Joi.strict().required(),
  },
};
