const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/signup',
    // AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
  })
}
