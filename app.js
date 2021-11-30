const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to DB 🔌"))
    .catch(() => console.log("Couldn't connect to server...❌"));

app.use(cors());
app.use(express.json());

app.use("/api/v1/turns", require('./routes/turn'));
app.use("/api/v1/auth", require("./routes/auth"));

const port = process.env.PORT;
app.listen(port, () => console.log("Server started running...⚡"));