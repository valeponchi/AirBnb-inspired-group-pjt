const { validateToken } = require('../utils/authGenerator')

const loginAuth = (req, res, next) => {
	const token = req.cookies.token
	//the cookie token is going to be here only if you do the "credential: 'include' " in the frontend)
	let userData = null

	if (token) {
		userData = validateToken(token)
		//id and email
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
