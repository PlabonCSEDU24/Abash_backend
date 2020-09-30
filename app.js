const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const roomsRoute = require(__dirname + "/routes/rooms-route");
const hotelsRoute = require(__dirname + "/routes/hotels-route");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
//cors header
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authotization"
  );
  res.setHeader("Access-Control-Allow-Methods", "Get,Post,Patch,Delete");
  next();
});
app.get("/", (req, res) => {
  res.send("hello");
});
//hotels api
app.use("/api", hotelsRoute);
//rooms api
app.use("/api", roomsRoute);

mongoose
  .connect(
    "mongodb+srv://plabon:19271185@cluster0.kbvgk.mongodb.net/HotelDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
