//include (get something from the same model)
//select (connects models with relationship)

const { user } = require('../../utils/dbClient')

//CREATE ONE USER
async function createOneUser(req, res) {
	const { email, password, role, firstName, lastName, dateOfBirth } = req.body

	const newUser = {
		email,
		password,
		role,
		info: {
			create: {
				firstName,
				lastName,
				dateOfBirth: new Date(dateOfBirth).toISOString(),
			},
		},
	}

	const createdUser = await user.create({ data: newUser })
	res.json({ data: createdUser })
}

// //GET ALL USERS
const getAllUsers = async (req, res) => {
	const allUsers = await user.findMany()
	res.json({ data: allUsers })
}

// //GET ONE USER
const getOneUser = async (req, res) => {
	const { id } = req.params

	const oneUser = await user.findUnique({
		where: { id: parseInt(id) },
	})
	res.json({ data: oneUser })
}

module.exports = { createOneUser, getOneUser, getAllUsers }
