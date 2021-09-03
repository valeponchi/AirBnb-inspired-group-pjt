const { validateToken } = require('../utils/authGenerator')

const loginAuth = (req, res, next) => {
	const token = req.cookies.token
	let userData = null

	if (token) {
		userData = validateToken(token)
	}

	// const userData = token && validateToken(token);

	if (userData) {
		req.currentUser = userData
		next()
	} else {
		res
			.status(401)
			.json({ err: 'You need to be logged in to access this data' })
	}
}

module.exports = loginAuth
