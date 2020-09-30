const HttpError = require("../models/http-error");
const Hotel = require("../models/hotel");

const getHotels = async (req, res, next) => {
  let hotels;
  try {
    hotels = await Hotel.find({});
  } catch (err) {
    return next(new HttpError("could not find any Hotel", 404));
  }
  res.json(hotels);
};

const createHotel = async (req, res, next) => {
  const {
    name,
    location,
    address,
    amenities,
    price,
    star,
    charges,
    image,
  } = req.body;
  const createdHotel = new Hotel({
    name,
    location,
    address,
    amenities,
    price,
    star,
    charges,
    image,
  });
  try {
    await createdHotel.save();
  } catch (err) {
    return next(new HttpError("creating hotel failed", 500));
  }

  res.status(201).json(createdHotel);
};

exports.getHotels = getHotels;
exports.createHotel = createHotel;
