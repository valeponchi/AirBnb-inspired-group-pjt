//include (get something from the same model)
//select (connects models with relationship)
//connect (on create/update if you have to connect a model to another)
const nodeFetch = require("node-fetch");
const { apartment, apartmentLocation } = require("../../utils/dbClient");

//CREATE ONE USER'S APARTMENT
async function createOneApartment(req, res) {
  const userOwnerId = req.params.id;
  console.log("userOwnerId: ", userOwnerId);
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
  } = req.body;

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
        latitude,
        longitude,
      },
    },
  };

  const createdApartment = await apartment.create({
    data: {
      ...newApartment,
      userOwner: {
        connect: {
          id: parseInt(userOwnerId),
        },
      },
    },
  });
  res.json({ data: createdApartment });
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
  const searchLocation = req.params.city;

  try {
    const result = await apartment.findMany({
      where: {
        city: {
          equals: searchLocation,
          mode: "insensitive",
        },
      },
      include: {
        location: true,
      },
    });
    if (result) res.json(result);
    if (!result) res.json({ msg: "City not found" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
}

module.exports = {
  createOneApartment,
  getApartmentsByCity,
};
