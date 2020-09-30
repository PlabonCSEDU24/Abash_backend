const express = require("express");
const router = express.Router();

const roomController = require("../controllers/rooms-controller");
router.get("/getRooms", roomController.getRooms);
router.post("/createRoom", roomController.createRoom);

module.exports = router;
