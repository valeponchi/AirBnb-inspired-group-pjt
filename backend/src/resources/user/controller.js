//include (get something from the same model)
//select (connects models with relationship)

const { createToken } = require('../../utils/authGenerator')
const { user } = require('../../utils/dbClient')
const { createdWithHash } = require('../auth/services')

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

	const savedUser = await createdWithHash(newUser)

	const token = createToken({
		id: savedUser.id,
		email: savedUser.email,
	})
	res.cookie('token', token, { httpOnly: true })

	res.json({
		user: {
			role: savedUser.role,
			email: savedUser.email,
		},
	})
}

// //GET ALL USERS
const getAllUsers = async (req, res) => {
	const allUsers = await user.findMany()
	res.json({ data: allUsers })
}

// //GET ONE USER
const getOneUser = async (req, res) => {
	const { id } = req.currentUser

	const oneUser = await user.findUnique({
		where: { id: parseInt(id) },
	})
	res.json({ data: oneUser })
}

// GET ONE USER PLUS INFO
const getOneUserPlusInfo = async (req, res) => {
	const { id } = req.params

	const oneUser = await user.findUnique({
		where: { id: parseInt(id) },
		select: {
			email: true,
			role: true,
			info: true,
		},
	})
	res.json({ data: oneUser })
}

// GET ALL APARTMENTS OF A USER
const getAllApartments = async (req, res) => {
	const { id } = req.currentUser
	const relatedApartments = await user.findMany({
		where: {
			id: parseInt(id),
		},
		include: {
			apartmentOwned: {
				select: {
					priceNight: true,
					bedrooms: true,
					maxPeopleIn: true,
					description: true,

					city: true,
					postCode: true,
					road: true,

					imageUrl1: true,
					imageUrl2: true,
					imageUrl3: true,
					extra: true,
					location: true,
				},
			},
		},
	})
	res.json({ data: relatedApartments })
}

const getOneUserApartment = async (req, res) => {
	try {
		const { id } = req.currentUser
		const { apartId } = req.params
		const apartmentRequested = await user.findMany({
			where: {
				id: parseInt(id),
			},
			include: {
				apartmentOwned: {
					where: { id: parseInt(apartId) },
					select: {
						priceNight: true,
						bedrooms: true,
						maxPeopleIn: true,
						description: true,

						city: true,
						postCode: true,
						road: true,

						imageUrl1: true,
						imageUrl2: true,
						imageUrl3: true,
						extra: true,
						location: true,
					},
				},
			},
		})
		res.json({ data: apartmentRequested })
	} catch (error) {}
}

// const updateOneUser = async (req, res) => {
// 	const id = parseInt(req.params.id)
// 	const updatedInfo = req.body
// 	try {
// 		const userToUpdate = await user.findUnique({
// 			where: { id },
// 		})

// 		if (userToUpdate) {
// 			const userUpdated = await user.update({
// 				where: { id },
// 				data: { ...userToUpdate, ...updatedInfo },
// 				include: { extra: true },
// 			})
// 			res.json({ data: userUpdated })
// 		}
// 	} catch (error) {
// 		res.status(404).json({ error: "Not able to update user's data" })
// 	}
// }

// const updateOneApartment = async (req, res) => {
// 	const id = parseInt(req.params.id)
// 	const updatedInfo = req.body
// 	try {
// 		const apartmentToUpdate = await user.findUnique({
// 			where: { id },
// 		})

// 		if (userToUpdate) {
// 			const userUpdated = await user.update({
// 				where: { id },
// 				data: { ...userToUpdate, ...updatedInfo },
// 				include: { extra: true },
// 			})
// 			res.json({ data: userUpdated })
// 		}
// 	} catch (error) {
// 		res.status(404).json({ error: "Not able to update user's data" })
// 	}
// }

module.exports = {
	getAllApartments,
	createOneUser,
	getOneUser,
	getAllUsers,
	getOneUserPlusInfo,
	getOneUserApartment,
	// updateOneUser,
	// updateOneApartment
}
