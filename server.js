const mongoose = require("mongoose");
const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// bring in mongoose.connect

//  declare routes

//  declare api routes