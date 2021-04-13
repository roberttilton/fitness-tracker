const mongoose = require("mongoose");
const express = require("express");
const routes = require('./routes');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// bring in mongoose.connect
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:3000/fitness-tracker",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  );

app.use(routes);

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);