const express = require("express");
const app = express();

const mongoose = require("mongoose");

const products = require("./routes/products");
const categories = require("./routes/categories");
const users = require("./routes/users");
const home = require("./routes/home");

const error = require("./middleware/error");
const logger = require("./middleware/logger");

app.use(express.json());

app.use("/api/products" ,products);
app.use("/api/categories" ,categories);
app.use("/api/users" ,users);
app.use("/", home);

app.use(error);

const username = "taha35";
const password = "taha1234";
const database = "shopdb";

(async () => {
  try {
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.5xr9hyn.mongodb.net/${database}?retryWrites=true&w=majority`);
    console.log("mongodb bağlantısı kuruldu.");
  } catch (err) {
    console.log(err);
  }
})();

app.listen(3000, () => {
    console.log("listening on port 3000");
});