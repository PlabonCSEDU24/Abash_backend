const HttpError = require("../models/http-error");
const Room = require("../models/room");

const getRooms = async (req, res, next) => {
  let rooms;
  try {
    rooms = await Room.find({});
  } catch (err) {
    return next(new HttpError("could not find any room", 404));
  }
  res.json(rooms);
};

const createRoom = async (req, res, next) => {
  const { hotel, title, roomtype, price, capacity, image } = req.body;
  const createdRoom = new Room({
    hotel,
    title,
    roomtype,
    price,
    capacity,
    image,
  });
  try {
    await createdRoom.save();
  } catch (err) {
    return next(new HttpError("creating room failed", 500));
  }

  res.status(201).json(createdRoom);
};

exports.getRooms = getRooms;
exports.createRoom = createRoom;
