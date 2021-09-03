const dbClient = require('../../utils/dbClient')
const { compare, hash } = require('bcrypt')

const findUserWithValidation = async userData => {
	const foundUser = await dbClient.user.findUnique({
		where: { email: userData.email },
	})

	if (!foundUser) throw new Error('Username/Password incorrect')

	const isPasswordValid = await compare(userData.password, foundUser.password)
	if (!isPasswordValid) throw new Error('Username/Password incorrect')

	return foundUser
}

const createdWithHash = async newUser => {
	const plainText = newUser.password

	const hashedPassword = await hash(plainText, 15)
	const savedUser = dbClient.user.create({
		data: { ...newUser, password: hashedPassword },
	})

	return savedUser
}

module.exports = { createdWithHash, findUserWithValidation }
