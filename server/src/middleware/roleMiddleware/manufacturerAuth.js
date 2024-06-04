const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Token not found' })
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret)

    // Check if the user is a Manufacturer
    if (decoded.role === 'Manufacturer') {
      req.user = decoded
    } else {
      return res.status(403).json({ message: 'Unauthorized Access' })
    }
    next()
  } catch (err) {
    console.log(err)
  }
}
