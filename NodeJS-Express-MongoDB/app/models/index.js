const dbconfig = require('../config/db.config.js');
const getTutorialModel = require('./tutorial.model.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose
db.url = dbconfig.url
db.tutorials = getTutorialModel()

module.exports = db;

