const userController = require('./controllers/userController')
const userControllerPolicy = require('./policy/userControllerPolicy')
const manufacturerController = require('./controllers/ManufacturerController')
const userAuth = require('./middleware/userAuth')
const manufacturerAuth = require('./middleware/roleMiddleware/manufacturerAuth.js')

module.exports = (app) => {
  app.post('/signup',
    userControllerPolicy.register,
    userController.register
  )
  app.post('/signin',
    userController.signIn
  )
  app.post('/manufacturer', userAuth, manufacturerAuth, (req, res) =>
    manufacturerController.createProduct(req, res)
  )
}
