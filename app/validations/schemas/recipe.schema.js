const Joi = require('joi');

const schema = {

  post: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    steps: Joi.string().required(),
    picture: Joi.string().required(),
    member_id: Joi.number().required(),
  }).required(),

  put: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    steps: Joi.string(),
    picture: Joi.string(),
    member_id: Joi.number(),
  }).required(),
};

module.exports = schema;