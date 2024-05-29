require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../config/Database')

async function createUser (email, password, firstName, lastName) {
  // hashing user password.
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)
  try {
    // insert user into database
    await db.query(
      'INSERT INTO Users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, hashPassword]
    )
    // create a token for the user
    return jwt.sign({ email },
      process.env.jwt_secret, { expiresIn: '1800' }
    )
  } catch (err) {
    const errorMessage = 'Email already exists'
    throw new Error(errorMessage)
  }
}

async function findUsers (email, password, res) {
  try {
    // find user in database
    const sql = 'SELECT * FROM Users WHERE email = ?'
    const [Users] = await db.query(sql, [email])
    const user = Users[0]
    if (!user) {
      res.status(403).send({ error: 'User does not exist' })
    }
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (isPasswordValid) {
        // create a token for the user
        let token
        try {
          token = jwt.sign(
            {
              userId: user.id,
              email: user.email
            },
            process.env.jwt_secret, { expiresIn: '1h' }
          )
          res.status(200).json({
            token
          })
          return token
        } catch (error) {
          console.log(error)
        }
      } else {
        res.status(403).send({ error: 'Invalid password' })
      }
    }
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

module.exports = { createUser, findUsers }
