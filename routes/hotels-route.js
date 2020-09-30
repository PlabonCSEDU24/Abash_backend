const express = require("express");
const router = express.Router();

const hotelController = require("../controllers/hotels-controller");
router.get("/getHotels", hotelController.getHotels);
router.post("/createHotel", hotelController.createHotel);

module.exports = router;
