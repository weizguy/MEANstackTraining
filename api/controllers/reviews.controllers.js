/**
 * Created by Weizguy on 2/6/2017.
 */

var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

// GET all reviews for a hotel
module.exports.reviewsGetAll = function(req, res) {
    var hotelId = req.params.hotelId;
    console.log('GET hotelId', hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, doc) {
            console.log('returned doc', doc)
            res
                .status(200)
                .json( doc.reviews );
        });

};

// GET one review for a hotel
module.exports.reviewsGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;
    console.log('GET reviewId ' + reviewId + ' for hotelId ' + hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, hotel) {
            console.log('returned doc', hotel);
            var review = hotel.reviews.id(reviewId);
            res
                .status(200)
                .json( review );
        });

};