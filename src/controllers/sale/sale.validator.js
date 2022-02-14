const Joi = require('joi');

export const addSale = {
  body: {
    address: Joi.string().required(),
    chainId: Joi.strict().required(),

    tokenId: Joi.string().required(),
    // timestamp: Joi.string().required(),
    usdValue: Joi.number().required(),
    transactionHash: Joi.string().required(),
  },
};
