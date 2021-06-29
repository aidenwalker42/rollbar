const express = require("express");
const app = express();
const cors = require("cors");
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '10e82bfaacb74fe08ebe93277bd57f31',
  captureUncaught: true,
  captureUnhandledRejections: true
});
const path = require("path")

app.use(cors());

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){

    res.sendFile( path.join(__dirname, "./public/index.html") );
    
})

app.get("/api/", function(req, res){
    rollbar.log("SUCCESS!");
    res.status(200).send("Hello")
})

app.get("/api/err", function(req, res){
    asdf();
    rollbar.error("Something went wrong");
    res.status(200).send("Error Test")
})

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log("running on " + port);
})