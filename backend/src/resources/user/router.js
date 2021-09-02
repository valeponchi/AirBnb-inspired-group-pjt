const userRouter = require('express').Router()

const {
	createOneUser,
	getOneUser,
	getAllUsers,
	getOneUserPlusInfo,
} = require('./controller')
const { createOneApartment } = require('../apartment/controller')

//USER
userRouter.post('/', createOneUser)
userRouter.get('/:id', getOneUser)
userRouter.get('/:id/info', getOneUserPlusInfo)
//***patch needs to be created

//USERS
userRouter.get('/', getAllUsers)

//CREATE ONE USER'S APARTMENT
userRouter.post('/:id/apartments', createOneApartment)
//***patch needs to be created

//GET ONE USER'S APARTMENT

//GET ALL USER'S APARTMENTS

module.exports = userRouter
