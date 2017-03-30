//main setup
var express = require('express');   //define express
var app = express();                //define app with express
//main setup
var express = require('express');   //define express
var app = express();                //define app with express
var path = require('path');         //define path
var os = require('os');             //define os

//get ip addresses

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

//setup view to index page
app.get('/', function (req, res) {
    res.send({
        _id: 'String',
        playerName: 'String',
        level: 'String',
        expirience: 'String',
        mass: 'Array',
        timeSpan: 'String'
    })
});


app.set('port', process.env.PORT || 8080);


var server = app.listen(app.get('port'), function () {  //http server listen
});
