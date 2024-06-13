const { createProduct, fetchProduct } = require('../models/ManufacturerIndex')

module.exports = {
  async createProduct (req, res) {
    const { productName, productInformation } = req.body
    try {
      await createProduct(productName, productInformation)
      res.status(200).send({ message: 'Product created' })
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: error.message })
    }
  },
  async getProduct (req, res) {
    try {
      const products = await fetchProduct()
      console.log('List of products:', products)
      res.json(products)
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: error.message })
    }
  }
}
