const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const mainRoute = require("./Routes/index.js");
const port = 5000;

dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Çalıştı...");
    } catch (error) {
        throw error;
    }

};

// middlewares
app.use(logger("dev"));
app.use(express.json())
app.use(cors());


app.use("/api", mainRoute);

app.listen(port, () => {
    connect();
    console.log(`sunucu ${5000} portunda çalışıyor.`);
} );


