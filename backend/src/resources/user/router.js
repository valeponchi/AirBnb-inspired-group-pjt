const userRouter = require('express').Router()

const {
	createOneUser,
	getOneUser,
	getAllUsers,
	getOneUserPlusInfo,
	getAllApartments,
	// updateOneUser,
} = require('./controller')
const {
	createOneApartment,
	// updateOneApartment
} = require('../apartment/controller')

//USER
userRouter.post('/', createOneUser)
userRouter.get('/:id', getOneUser)
userRouter.get('/:id/info', getOneUserPlusInfo)
// userRouter.patch('/:id', updateOneUser)

//USERS
userRouter.get('/', getAllUsers)

//CREATE ONE USER'S APARTMENT
userRouter.post('/:id/apartments', createOneApartment)
// userRouter.patch('/:id/apartments/:id', updateOneApartment)

//GET ONE USER'S APARTMENT
userRouter.get('/:id/apartments', getAllApartments)
// userRouter.get('/:id/apartments/:id', getOneApartment)

//GET ALL USER'S APARTMENTS

module.exports = userRouter
