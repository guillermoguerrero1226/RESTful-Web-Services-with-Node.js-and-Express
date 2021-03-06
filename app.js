const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

if (process.env.ENV === "Test") {
    const db = mongoose.connect("mongodb://localhost/restApi_Test");
    console.log("Test database connected");
} else{
    const db = mongoose.connect("mongodb://localhost/restApi");
}

const port = process.env.PORT || 3000;

const Book = require("./models/bookModel");
const bookRouter =  require("./routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/api", bookRouter);
app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.server = app.listen(port, () => {
    console.log("Running port" + port);
})

module.exports = app;