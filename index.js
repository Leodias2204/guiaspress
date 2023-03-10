const express = require("express");
const app = express();
const bodyParser = require ("body-parser");
const connection = require ("./database/database")

app.set('view engine', 'ejs');



app.use(express.static('public'));


app.use(bodyParser.urlencoded({extendeds:false}));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log("Connection with my SQL running")
    })
    .catch((error) => {
        console.log(error)
    })

app.get("/", (req,res) => {
    res.render("index")
});



app.listen(8080,() => {
    console.log("Server stater")
});