const { createUser, findUsers } = require('../models/index')

module.exports = {
  async register (req, res) {
    const { email, password, firstName, lastName } = req.body
    try {
      await createUser(email, password, firstName, lastName)
      res.send({ message: `${req.body.email}! registered successfully` })
    } catch (err) {
      res.status(400).send({ error: err.message })
      console.log(err)
    }
  },
  async signIn (req, res) {
    const { email, password } = req.body
    try {
      await findUsers(email, password, res)
    } catch (err) {
      console.log(err)
      res.status(403).send({ error: err.message })
    }
  }
}
