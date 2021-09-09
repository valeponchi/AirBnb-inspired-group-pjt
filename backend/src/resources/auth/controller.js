const { findUserWithValidation, createdWithHash } = require('./services')
console.log('findUserWithValidation:', findUserWithValidation)

const { createToken } = require('../../utils/authGenerator')
console.log('createdWithHash:', createdWithHash)

const loginUser = async (req, res) => {
	const userCreds = req.body

	try {
		const loggedUser = await findUserWithValidation(userCreds)

		const token = createToken({
			id: (await loggedUser).id,
			email: (await loggedUser).email,
		})

		//creating the cookie here:
		//credential: include in the frontend
		res.cookie('token', token, { httpOnly: true })

		res.json({
			data: {
				email: loggedUser.email,
				id: loggedUser.id,
			},
		})
	} catch (error) {
		res.status(401).json({ error: error })
	}
}

const logOutUser = async (req, res) => {
	res.clearCookie('token')
	res.json({ msg: "You've been successfully logged out", data: null })
}

const validateLoggedInToken = async (req, res) => {
	const token = req.cookies.token

	const tokenPayload = token && validateToken(token)

	if (tokenPayload) {
		const userData = await findUnique({
			where: {
				id: parseInt(tokenPayload.id),
			},
			select: {
				email: true,
				role: true,
			},
			include: {
				extra: true,
			},
		})

		res.json({ data: userData })
	} else {
		res.status(401).json({ err: 'No valid token was found' })
	}
}

module.exports = {
	loginUser,
	logOutUser,
	validateLoggedInToken,
}
