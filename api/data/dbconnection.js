/**
 * Created by Weizguy on 2/6/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/mongoHotel';

var _connection = null;

var open = function() {
    MongoClient.connect(dburl, function(err, db) {
        if(err) {
            console.log('DB connection failed');
            return;
        }
        _connection = db;
        console.log('DB connection open', db);
    });
};

var get = function() {
    return _connection;
};

module.exports = {
    open : open,
    get : get
};