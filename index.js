const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect("mongodb+srv://chipnotify:Detector123@cluster0.gi8itvo.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server has started!");
    });
  });
