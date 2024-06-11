const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI ||'mongodb://127.0.0.1:27017/OnlyTasks');

module.exports = mongoose.connection;
