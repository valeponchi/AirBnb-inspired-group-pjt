const { PrismaClient } = require('@prisma/client')

const dbClient = new PrismaClient()

const users = [
	{
		email: 'tom@tom.com',
		password: 'tom123',
		role: 'host',
	},
	{
		email: 'david@david.com',
		password: 'david123',
		role: 'host',
	},
	{
		email: 'diana@diana.com',
		password: 'diana123',
		role: 'host',
	},
	{
		email: 'vale@vale.com',
		password: 'vale123',
		role: 'host',
	},
]

const userInfo = [
	{
		userId: 1,
		firstName: 'Tom',
		lastName: 'Mot',
		dateOfBirth: '4 Feb 1990',
	},
	{
		userId: 2,
		firstName: 'David',
		lastName: 'Divad',
		dateOfBirth: '5 Mar 1989',
	},
	{
		userId: 3,
		firstName: 'Diana',
		lastName: 'Anaid',
		dateOfBirth: '6 Apr 1988',
	},
	{
		userId: 4,
		firstName: 'Vale',
		lastName: 'Elav',
		dateOfBirth: '22 Nov 1985',
	},
]

const apartments = [
	{
		priceNight: 30,
		bedrooms: 3,
		maxPeopleIn: 6,
		description:
			'High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 5 mins walk to Battersea Park, 15 minutes to Clapham Junction and 15 minutes to South Kensington tube Station. Ideal for exploring all that Central London has to offer.',

		city: 'London',
		postCode: 'SW1V 3DP',
		road: '104 Churchill Garden Road',

		imageUrl1:
			'https://images.pexels.com/photos/7166554/pexels-photo-7166554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl2:
			'https://images.pexels.com/photos/7166558/pexels-photo-7166558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl3:
			'https://images.pexels.com/photos/7166551/pexels-photo-7166551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userOwnerId: 1,
	},
	{
		priceNight: 30,
		bedrooms: 3,
		maxPeopleIn: 6,
		description:
			'High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 5 mins walk to Battersea Park, 15 minutes to Clapham Junction and 15 minutes to South Kensington tube Station. Ideal for exploring all that Central London has to offer.',

		city: 'London',
		postCode: 'SW1V 2HB',
		road: '5B Denbigh Pl, Pimlico',

		imageUrl1:
			'https://images.pexels.com/photos/7147298/pexels-photo-7147298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl2:
			'https://images.pexels.com/photos/7147299/pexels-photo-7147299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl3:
			'https://images.pexels.com/photos/7147296/pexels-photo-7147296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userOwnerId: 2,
	},
	{
		priceNight: 30,
		bedrooms: 3,
		maxPeopleIn: 6,
		description:
			'High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 5 mins walk to Battersea Park, 15 minutes to Clapham Junction and 15 minutes to South Kensington tube Station. Ideal for exploring all that Central London has to offer.',

		city: 'London',
		postCode: 'SW1W 8PA',
		road: '25 Ranelagh Grove',

		imageUrl1:
			'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl2:
			'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl3:
			'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userOwnerId: 2,
	},
	{
		priceNight: 40,
		bedrooms: 1,
		maxPeopleIn: 3,
		description:
			'High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 5 mins walk to Battersea Park, 15 minutes to Clapham Junction and 15 minutes to South Kensington tube Station. Ideal for exploring all that Central London has to offer.',

		city: 'London',
		postCode: 'E2 0NJ',
		road: '22 Moravian St, Bethnal Green',

		imageUrl1:
			'https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl2:
			'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl3:
			'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userOwnerId: 3,
	},
	{
		priceNight: 55,
		bedrooms: 2,
		maxPeopleIn: 5,
		description:
			'High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 5 mins walk to Battersea Park, 15 minutes to Clapham Junction and 15 minutes to South Kensington tube Station. Ideal for exploring all that Central London has to offer.',

		city: 'Wembley',
		postCode: 'HA9 8HY',
		road: '93A Oakington Avenue',

		imageUrl1:
			'https://images.pexels.com/photos/3316926/pexels-photo-3316926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl2:
			'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl3:
			'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userOwnerId: 3,
	},
	{
		priceNight: 35,
		bedrooms: 1,
		maxPeopleIn: 2,
		description:
			'High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 5 mins walk to Battersea Park, 15 minutes to Clapham Junction and 15 minutes to South Kensington tube Station. Ideal for exploring all that Central London has to offer.',

		city: 'London',
		postCode: 'E5 0DD',
		road: '268 Millfields Road, Lower Clapton',

		imageUrl1:
			'https://images.pexels.com/photos/2736139/pexels-photo-2736139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl2:
			'https://images.pexels.com/photos/7147287/pexels-photo-7147287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl3:
			'https://images.pexels.com/photos/3316926/pexels-photo-3316926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userOwnerId: 2,
	},
	{
		priceNight: 55,
		bedrooms: 2,
		maxPeopleIn: 5,
		description:
			'High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 5 mins walk to Battersea Park, 15 minutes to Clapham Junction and 15 minutes to South Kensington tube Station. Ideal for exploring all that Central London has to offer.',

		city: 'London',
		postCode: 'SE15 4HS',
		road: '29 Fenwick Road',

		imageUrl1:
			'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl2:
			'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl3:
			'https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userOwnerId: 3,
	},
	{
		priceNight: 40,
		bedrooms: 2,
		maxPeopleIn: 5,
		description:
			'High end, newly refurbished, 5 Star double room with shared bathroom. Spacious and well designed living and sleeping space complimented by our fully equipped modern kitchen. Décor is exceptional throughout. 5 mins walk to Battersea Park, 15 minutes to Clapham Junction and 15 minutes to South Kensington tube Station. Ideal for exploring all that Central London has to offer.',

		city: 'London',
		postCode: 'SE6 3QN',
		road: '65 Sedgehill Road',

		imageUrl1:
			'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl2:
			'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imageUrl3:
			'https://images.pexels.com/photos/6315803/pexels-photo-6315803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userOwnerId: 1,
	},
]

const apartmentLocation = [
	{
		apartmentId: 1,
		latitude: 51.4862724,
		longitude: -0.1383385,
	},
	{
		apartmentId: 2,
		latitude: 51.4900802,
		longitude: -0.1394628,
	},
	{
		apartmentId: 3,
		latitude: 51.4905907,
		longitude: -0.150862,
	},
	{
		apartmentId: 4,
		latitude: 51.5292276,
		longitude: -0.0517115,
	},
	{
		apartmentId: 5,
		latitude: 51.4966782,
		longitude: -0.4330496,
	},
	{
		apartmentId: 6,
		latitude: 51.5576641,
		longitude: -0.0416914,
	},
	{
		apartmentId: 7,
		latitude: 51.4635207,
		longitude: -0.068523,
	},
	{
		apartmentId: 8,
		latitude: 51.4235896,
		longitude: -0.0219719,
	},
]

const apartmentExtra = [
	{
		apartmentId: 1,
		wifi: true,
		smartTV: true,
		microwave: true,
		parkingSpace: true,
	},
	{
		apartmentId: 2,
		wifi: true,
		smartTV: true,
		microwave: true,
		parkingSpace: true,
		garden: true,
	},
	{
		apartmentId: 3,
		wifi: true,
		smartTV: true,
		microwave: true,
		parkingSpace: true,
		coffeeMaker: true,
	},
	{
		apartmentId: 4,
		wifi: true,
		smartTV: true,
		microwave: true,
		parkingSpace: true,
		coffeeMaker: true,
	},
	{
		apartmentId: 5,
		wifi: true,
		smartTV: true,
		microwave: true,
		parkingSpace: true,
		coffeeMaker: true,
	},
	{
		apartmentId: 6,
		wifi: true,
		smartTV: true,
		microwave: true,
		parkingSpace: true,
		coffeeMaker: true,
	},
	{
		apartmentId: 7,
		wifi: true,
		smartTV: true,
		microwave: true,
		parkingSpace: true,
		coffeeMaker: true,
	},
	{
		apartmentId: 8,
		wifi: true,
		smartTV: true,
		microwave: true,
		parkingSpace: true,
		coffeeMaker: true,
	},
]

async function seed() {
	//THE ORDER THEY ARE MATTERS !!
	//USER
	for (const user of users) {
		const theUser = await dbClient.user.create({
			data: user,
		})
		console.log({ theUser })
	}

	//USER INFO
	for (const info of userInfo) {
		const oneUserInfo = await dbClient.userInfo.create({
			data: info,
		})
		console.log({ oneUserInfo })
	}

	//APARTMENT
	for (const apartment of apartments) {
		const oneApartment = await dbClient.apartment.create({
			data: apartment,
		})
		console.log({ oneApartment })
	}

	//APARTMENT LOCATION
	for (const location of apartmentLocation) {
		const oneLocation = await dbClient.apartmentLocation.create({
			data: location,
		})
		console.log({ oneLocation })
	}

	//APARTMENT EXTRA
	for (const extra of apartmentExtra) {
		const oneExtra = await dbClient.apartmentExtra.create({
			data: extra,
		})
		console.log({ oneExtra })
	}
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await dbClient.$disconnect()
	})
