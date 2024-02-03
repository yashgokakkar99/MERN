const express = require("express");
require("dotenv").config(); // imp
const app = express();
const cors = require("cors"); // CORS => Cross-Origin Resourse Sharing
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("DB Connected")}).catch((err)=>{console.log(`DB not connected ${err}`)});

