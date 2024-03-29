const debug = require('debug')('odelice:validate');
const BadInputError = require('../errors/BadInputError');



/**
 * Factory returning a validation middleware
 *
 * @param {Object} schema - a Joi schema
 * @param {("query"|"body"|"params")} dataSource - the source object
 * @returns {function} a validation middleware
 */

function validate(schema, dataSource) {
    debug('create a new validation middleware');
    return async (request, response, next) => {
        try {
            debug(schema.constructor.name);
            await schema.validateAsync(request[dataSource]);
            next();
        } catch (err) {
            next(new BadInputError(err));
        }
    };
}

module.exports = validate;