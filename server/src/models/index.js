require('dotenv').config()
const mysql = require('mysql2')
const bycrypt = require('bcryptjs')

const db = mysql.createConnection({
  host: process.env.mysql_host,
  database: process.env.mysql_database,
  user: process.env.mysql_user,
  password: process.env.mysql_password
}).promise()

db.connect()
  .then(() => {
    console.log('connected to database')
  })

async function createUser (email, password, firstName, lastName) {
  // hashing user password.
  const salt = await bycrypt.genSalt(10)
  const hashPassword = await bycrypt.hash(password, salt)
  try {
    await db.query(
      'INSERT INTO Users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, hashPassword]
    )
  } catch (err) {
    const errorMessage = err.code === 'ER_DUP_ENTRY'
      ? 'Email already exists'
      : err.message
    throw new Error(errorMessage)
  }
}

module.exports = { createUser }
