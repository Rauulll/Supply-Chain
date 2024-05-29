const db = require('../config/Database')

async function createProduct (productName, productInformation) {
  console.log('Creating product:', productName, productInformation)
  try {
    await db.query(
      'INSERT INTO Products (Product_Name, Product_Information) Value(?, ?)',
      [productName, productInformation]
    )
  } catch (err) {
    console.log(err)
  }
}

module.exports = { createProduct }
