const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

function createToken(payload) {
	return jwt.sign(payload, JWT_SECRET)
}

function validateToken(token) {
	return jwt.verify(token, JWT_SECRET)
}

module.exports = { createToken, validateToken }
