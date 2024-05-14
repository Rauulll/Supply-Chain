/* eslint-disable prefer-regex-literals */
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
      firstName: Joi.string(),
      lastName: Joi.string()
    })

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
      switch (error.details[0].context.key) {
        case 'email': res.status(400).send({
          error: 'You must provide a valid email address'
        })
          break
        case 'password': res.status(400).send({
          error: `The password provided failed to match the following rules:
          <br>
          1. It must contain only the following characters: lower case, upper case, numerics
          <br>
          2. It must be at least 3 characters in length and not greater than 30 characters in length`
        })
          break
        default: res.status(400).send({
          error: 'Invalid registration information'
        })
      }
    } else {
      next()
    }
  }
}
