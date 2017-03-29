//main setup
var express = require('express');   //define express
var app = express();                //define app with express
//main setup
var express = require('express');   //define express
var app = express();                //define app with express
var path = require('path');         //define path
var os = require('os');             //define os

//get ip addresses
/*var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}*/

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

//setup view to index page
app.get('/', function (req, res) {
    res.send("Hello");
});

//set environment variables for azure
app.set('port', process.env.PORT || 8080);

//http setup
var server = app.listen(app.get('port'), function () {  //http server listen
});

//export modules for testing
module.exports = app;
