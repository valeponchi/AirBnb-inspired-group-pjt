const userRouter = require('express').Router()

const {
	createOneUser,
	getOneUser,
	getAllUsers,
	getOneUserPlusInfo,
	getAllApartments,
	getOneUserApartment,
	// updateOneUser,
} = require('./controller')

const {
	createOneApartment,
	getApartmentsByCity,
	deleteOneApartment,
	// updateOneApartment
} = require('../apartment/controller')

//GENERAL
//GET ALL APARTMENTS BY CITY
userRouter.get('/apartments/:city', getApartmentsByCity)

//GENERAL USER FUNCTIONS
userRouter.post('/', createOneUser)
userRouter.get('/:id', getOneUser)
userRouter.get('/:id/info', getOneUserPlusInfo)
userRouter.get('/', getAllUsers)
// userRouter.patch('/:id', updateOneUser)

//*****AS A HOST************/
//CREATE ONE APARTMENT
userRouter.post('/:id/apartments', createOneApartment)
//GET ALL YOUR APARTMENTS
userRouter.get('/:id/apartments', getAllApartments)
//GET ONE OF YOUR APARTMENTS
userRouter.get('/:id/apartments/:apartId', getOneUserApartment)
//DELETE ONE OF YOUR APARTMENTS
userRouter.delete('/:id/apartments/:apartId', deleteOneApartment)

//UPDATE ONE OF YOUR APARTMENTS
// userRouter.patch('/:id/apartments/:id', updateOneApartment)
//GET ONE OF YOUR APARTMENTS
// userRouter.get('/:id/apartments/:id', getOneApartment)

module.exports = userRouter
