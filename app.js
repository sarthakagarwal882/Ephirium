const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/games", (req, res) => {
    res.render('games');
});

app.listen(process.env.PORT || 4000, () => { console.log("Server is running on port 3000"); });