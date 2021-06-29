const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path")

app.use(cors());

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){

    res.sendFile( path.join(__dirname, "./public/index.html") );
    
})

app.get("/api/", function(req, res){
    res.status(200).send("Hello")
})



const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log("running on " + port);
})