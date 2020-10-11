const express = require("express");
const app = express();


app.get("/ping", (req, res) => {
    res.send("PONG");
});

app.listen(8080, (err, response) => {
    console.log("App started on 8080");
});

module.exports = app;