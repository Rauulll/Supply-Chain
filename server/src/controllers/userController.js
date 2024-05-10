const { createUser } = require('../models/index')
// const { User } = require('../models/user')

module.exports = {
  async register (req, res) {
    try {
      await createUser(req.body.email, req.body.password, req.body.firstName, req.body.lastName)
      res.send({ message: `${req.body.email}! registered successfully` })
    } catch (err) {
      res.status(400).send({ error: err.message })
      console.log(err)
    }
  }
}
