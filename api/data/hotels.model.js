/**
 * Created by Weizguy on 2/6/2017.
 */

var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
    type : String,
    number : Number,
    description : String,
    photos : [String],
    price : Number
});

var reviewSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    stars : {
        type : Number,
        min : 0,
        max : 5,
        required : true
    },
        review : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    }
});

var hotelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    stars : {
        type : Number,
        min : 0,
        max : 5,
        default : 0
    },
    services : [String],
    description : String,
    photos : [String],
    currency : String,
    reviews : [reviewSchema],
    rooms : [roomSchema],
    location : {
        address : String,
        // always store coordinates in longitude (East/West), latitude (North/South) order
        coordinates : {
            type : [Number],
            index : '2dsphere'
        }
    }
});

mongoose.model('Hotel', hotelSchema, 'hotelData');
