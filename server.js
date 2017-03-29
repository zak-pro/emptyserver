//main setup
var express = require('express');   //define express
var app = express();                //define app with express
var path = require('path');         //define path
var os = require('os');             //define os


var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}



app.get('/', function (req, res) {
    res.send("HELLO!");
});

app.set('port', process.env.PORT || 8080);


var server = app.listen(app.get('port'), function () {  //http server listen
    var host = server.address().address;
    var port = server.address().port;
});