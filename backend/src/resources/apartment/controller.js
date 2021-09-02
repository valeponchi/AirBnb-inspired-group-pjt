//include (get something from the same model)
//select (connects models with relationship)

const { apartment } = require('../../utils/dbClient')

//CREATE ONE APARTMENT
async function createOneApartment(req, res) {
	const userOwnerId = req.params.id
	console.log('userOwnerId: ', userOwnerId)
	const {
		priceNight,
		bedrooms,
		maxPeopleIn,
		description,
		city,
		postCode,
		road,
		imageUrl1,
		imageUrl2,
		imageUrl3,
		wifi,
		smartTV,
		microwave,
		coffeeMaker,
		hotTub,
		parkingSpace,
		garden,
		pool,
		gym,
	} = req.body

	const newApartment = {
		priceNight,
		bedrooms,
		maxPeopleIn,
		description,
		city,
		postCode,
		road,
		imageUrl1,
		imageUrl2,
		imageUrl3,
		extra: {
			create: {
				wifi,
				smartTV,
				microwave,
				coffeeMaker,
				hotTub,
				parkingSpace,
				garden,
				pool,
				gym,
			},
		},
	}

	const createdApartment = await apartment.create({
		data: {
			...newApartment,
			userOwner: {
				connect: {
					id: parseInt(userOwnerId),
				},
			},
		},
	})
	res.json({ data: createdApartment })
}

// // //GET ALL APARTMENT
// const getAllApartments = async (req, res) => {
// 	const allApartments = await apartment.findMany()
// 	res.json({ data: allApartments })
// }

// // // //GET ONE APARTMENT
// const getOneApartment = async (req, res) => {
// 	const { id } = req.params

// 	const oneApartment = await apartment.findUnique({
// 		where: {
//       id: parseInt(id)
//     },
// 	})
// 	res.json({ data: oneApartment })
// }

module.exports = { createOneApartment }
