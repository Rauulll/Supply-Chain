const config = require('../config/config')
const mysql = require('mysql2')
// const bycrypt = require('bcryptjs')

const db = mysql.createConnection({
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password
}).promise()

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected to database')
})

// async function createUser (email, password, firstName, lastName) {
//   // hashing user password.
//   const salt = await bycrypt.genSalt(10)
//   const hashPassword = await bycrypt.hash(password, salt)
//   try {
//     await db.query(
//       'INSERT INTO User (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
//       [firstName, lastName, email, hashPassword]
//     )
//   } catch (err) {
//     const errorMessage = err.code === 'ER_DUP_ENTRY'
//       ? 'Email already exists'
//       : err.message
//     throw new Error(errorMessage)
//   }
// }

// module.exports = { createUser }
