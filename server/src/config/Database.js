const mysql = require('mysql2')

// create a connection to the database
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
  .catch((err) => {
    console.log('error connecting to database', err)
  })

module.exports = db
