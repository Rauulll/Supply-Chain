const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  console.log('Headers:', req.headers)
  // Get the token from the request headers
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.jwt_secret)
    console.log('Decoded:', decoded)
    res.status(200).json({ decoded })
    req.user = decoded

    next()
  } catch (error) {
    console.log('JWT verify error:', error.message)
    return res.status(403).json({ message: 'FORBIDDEN' })
  }
}

module.exports = authMiddleware
