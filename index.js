const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config()

mongoose
  .connect(process.env.MONGOOSE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server has started!");
    });
  });
