const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
// require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);
// // const path = require('path');
// const MongoClient = require('mongodb').MongoClient;


const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
  console.log('Server started on port 5000...');
});
// Init App

// replace the uri string with your connection string.
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// Home Route
// app.get('/', function(req, res){
//   res.render('Hello world')
// });

// Route Files
// let users = require('./routes/users');
// app.use('/users', users);


// Start Server localhost:5000
