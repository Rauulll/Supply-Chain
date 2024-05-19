const userController = require('./controllers/userController')
const userControllerPolicy = require('./policy/userControllerPolicy')

module.exports = (app) => {
  app.post('/signup',
    userControllerPolicy.register,
    userController.register
  )
  app.post('/signin',
    userController.signIn
  )
}
