// Assume you have Express.js and MongoDB set up

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://deepakkr10460:FoodShareSDP_Project@foodshare.ate8v4k.mongodb.net/?retryWrites=true&w=majority&appName=FoodShare"
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
