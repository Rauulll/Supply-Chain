const userController = require('./controllers/userController')
const userControllerPolicy = require('./policy/userControllerPolicy')
// const manufacturerController = require('./controllers/ManufacturerController')
const auth = require('./middleware/auth')

module.exports = (app) => {
  app.post('/signup',
    userControllerPolicy.register,
    userController.register
  )
  app.post('/signin',
    userController.signIn
  )
  app.post('/manufacturer', auth, (req, res) => {
    res.send('If you see this, you are authenticated')
  })
}
