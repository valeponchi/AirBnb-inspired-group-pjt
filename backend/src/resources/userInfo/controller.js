// const { runway } = require('../../utils/dbClient')

// //CREATE ONE RUNWAY
// async function createOneRunway(req, res) {
// 	const { designerId, season, date, location } = req.body

// 	const newRunway = {
// 		season,
// 		date: new Date(date).toISOString(),
// 		location,
// 	}

// 	const createdRunway = await runway.create({ data: newRunway })
// 	res.json({ data: createdRunway })
// }

// //GET ALL RUNWAYS
// const getAllRunways = async (req, res) => {
// 	const allRunways = await runway.findMany()
// 	res.json({ data: allRunways })
// }

// //GET ONE RUNWAY
// const getOneRunway = async (req, res) => {
// 	const { id } = req.params

// 	const oneRunway = await runway.findUnique({
// 		where: { id: parseInt(id) },
// 	})
// 	res.json({ data: oneRunway })
// }

// module.exports = { getAllRunways, createOneRunway, getOneRunway }
