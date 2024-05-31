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

    // Attach the decoded user information to the request object
    req.user = decoded.user

    // Attach the user role to the response object
    res.locals.userRole = decoded.user

    // Call the next middleware or route handler
  } catch (error) {
    console.log('JWT verify error:', error.message)
    return res.status(403).json({ message: 'Unauthorized' })
  }
  return next()
}

module.exports = authMiddleware
