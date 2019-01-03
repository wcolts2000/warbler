const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require('./handlers/error');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    let err = new Error("Not found");
    err.status = 404;
    next(err)
})

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`SRVER STARTING ON PORT ${PORT}`)
})