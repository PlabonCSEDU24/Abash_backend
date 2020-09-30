var mongoose = require("mongoose");

var roomSchema = new mongoose.Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
  title: { type: String },
  roomtype: { type: String },
  price: { type: Number },
  capacity: { type: Number },
  image: { type: String },
});
module.exports = new mongoose.model("Room", roomSchema);

/*eg:{
    "title":"A five star hotel with sea view",
    "hotel":{
        "name":"Hotel Sea Crown",
        "address":"Cox's Bazar"
    },
    "roomtype":"Deluxe",
    "amenities":"wifi--pool--etc",
    "price":5000,
    "rating":4.7,
    "imageURL":"url here"
}
*/
/*make queries:
1)find list of rooms where hotel name is x
2)find list of rooms where hotel address contains a substring x ( here x refers to a place name like dhaka/cox's bazar etc.. )
3)find list of rooms where price is between x and y
4)find list of rooms where rating is minimum x
5)find list of rooms where amamnities contain substring x (like "wifi"/"pool"....)
*/
