require('dotenv').config();
const express = require('express');
const expressJWT = require("express-jwt");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require ("morgan");
const path = require("path");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/clock-in",
(err) => {
    if (err) throw err;
    console.log("Connected to Mongo");
});

app.use("/api", expressJWT({secret: process.env.SECRET}))
app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => {
    console.log(`[+] App is listening on port ${PORT}`);
});