const config = require('../config/config')
const mysql = require('mysql2')
const bycrypt = require('bcryptjs')

const db = mysql.createConnection({
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password
}).promise()

db.connect()

async function createUser (email, password) {
  // hashing user password.
  const salt = await bycrypt.genSalt(10)
  const hashPassword = await bycrypt.hash(password, salt)
  try {
    await db.query(
      'INSERT INTO User (email, password) VALUES (?, ?)',
      [email, hashPassword]
    )
  } catch (err) {
    const errorMessage = err.code === 'ER_DUP_ENTRY'
      ? 'Email already exists'
      : err.message
    throw new Error(errorMessage)
  }
}

module.exports = { createUser }
