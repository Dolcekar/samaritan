const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();

const db = require('./config/keys').mondoURI;


//Connect to MongoDB
mongoose
  .connect(db)
  .then( ()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  const profile = require('./routes/api/profile');
  const users = require('./routes/api/users');
  const maps = require('./routes/api/maps');
  const posts = require('./routes/api/posts');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/maps', maps);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
