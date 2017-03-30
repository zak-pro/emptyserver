var config = require('config');
var express = require('express');   //define express
var app = express();                //define app with express
var path = require('path');         //define path


app.get('/', function (req, res) {
    res.json({
        Витек: 'ПИРОРАС!!!',
       /* playerName: 'String',
        level: 'String',
        expirience: 'String',
        mass: 'Array',
        timeSpan: 'String'*/
    })
});

app.set('port', process.env.PORT || config.get('port'));


var server = app.listen(config.get('port'), function () {
    console.log("Server is running on port: " + app.get('port'));
});
