const express = require('express');
const app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8060;
   
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

//Static CSS
app.use(express.static(__dirname + "/app/public"));

//parse various different custom tpyes 
app.use(bodyParser.json({ type: "application/**json" }))
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }))
app.use(bodyParser.text({ type: "text/html" }))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})