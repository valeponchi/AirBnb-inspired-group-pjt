//include (get something from the same model)
//select (connects models with relationship)
//connect (on create/update if you have to connect a model to another)

const { apartment, apartmentLocation } = require('../../utils/dbClient')

const fetch = require('node-fetch')

// const address = 'RH19 4SA'
// const response = fetch(`https://api.postcodes.io/postcodes/${address}`)
// 	.then(resp => resp.json())
// 	.then(data =>
// 		console.log(
// 			`longitude: ${data.result.longitude}, latitude: ${data.result.latitude}`
// 		)
// 	)

// const address = 'RH19 4SA'
// const response = fetch(`https://api.postcodes.io/postcodes/${address}`)
// console.log('address longitude: ', response.result.longitude)
// const data = await response.json()
// console.log(data)

//CREATE ONE USER'S APARTMENT
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

	const address = postCode
	//VERSION 1
	// ❌📌🚨🛠❗❗❗ error is these 2 var are not detected inside the .then

	fetch(`https://api.postcodes.io/postcodes/${address}`)
		.then(resp => resp.json())
		.then(data => {
			console.log('data from API: ', data)
			console.log(
				`longitude: ${data.result.longitude}, latitude: ${data.result.latitude}`
			)
			let longi = data.result.longitude
			let lati = data.result.latitude
			console.log(`longi: ${longi}, lati: ${lati}`)

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
				location: {
					create: {
						latitude: lati,
						longitude: longi,
					},
				},
			}

			apartment
				.create({
					data: {
						...newApartment,
						userOwner: {
							connect: {
								id: parseInt(userOwnerId),
							},
						},
					},
				})
				.then(createdApartment => res.json({ data: createdApartment }))
		})

	// data.result = result,

	// longitudeFetched = result.longitude
	// latitudeFetched = result.latitude

	//VERSION 2
	// ❌📌🚨🛠❗❗❗ error is response.json() not a function
	// const response = fetch(`https://api.postcodes.io/postcodes/${address}`)
	// const data = await response.json()
	// console.log(data)
	// console.log('address longitude: ', data.result.longitude)
	// console.log('address latitude: ', data.result.latitude)

	// const longitude = data.result.longitude
	// const latitude = data.result.latitude

	// const newApartment = {
	// 	priceNight,
	// 	bedrooms,
	// 	maxPeopleIn,
	// 	description,
	// 	city,
	// 	postCode,
	// 	road,
	// 	imageUrl1,
	// 	imageUrl2,
	// 	imageUrl3,
	// 	extra: {
	// 		create: {
	// 			wifi,
	// 			smartTV,
	// 			microwave,
	// 			coffeeMaker,
	// 			hotTub,
	// 			parkingSpace,
	// 			garden,
	// 			pool,
	// 			gym,
	// 		},
	// 	},
	// 	location: {
	// 		create: {
	// 			latitude: lati,
	// 			longitude: longi,
	// 		},
	// 	},
	// }

	// const createdApartment = await apartment.create({
	// 	data: {
	// 		...newApartment,
	// 		userOwner: {
	// 			connect: {
	// 				id: parseInt(userOwnerId),
	// 			},
	// 		},
	// 	},
	// })
	// res.json({ data: createdApartment })
}

//GET ONE USER'S APARTMENT
// const getOneApartment = async (req, res) => {
// 	const { id } = req.params

// 	const oneApartment = await apartment.findUnique({
// 		where: {
//       id: parseInt(id)
//     },
// 	})
// 	res.json({ data: oneApartment })
// }

async function getApartmentsByCity(req, res) {
	const searchLocation = req.params.city

	try {
		const result = await apartment.findMany({
			where: {
				city: {
					equals: searchLocation,
					mode: 'insensitive',
				},
			},
			select: {
				location: true,
			},
		})
		if (result) res.json(result)
		if (!result) res.json({ msg: 'City not found' })
	} catch (e) {
		console.log(e)
		res.json(e.message)
	}
}

const deleteOneApartment = async (req, res) => {
	console.log('req.params', req.params)
	try {
		const apartId = parseInt(req.params.apartId)
		const deletedApartment = await apartment.delete({
			where: { id: apartId },
		})
		res.json({ deletedApartment })
	} catch (error) {
		console.log(error)
		res.status(404).json({ error: 'apartment not deleted' })
	}
}

module.exports = {
	createOneApartment,
	getApartmentsByCity,
	deleteOneApartment,
}
