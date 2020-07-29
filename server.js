
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));  // to log to both cmd and window console

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerdb");

// routes
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});