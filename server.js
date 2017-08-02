var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var morgan = require('morgan');

app.use(morgan());

app.get('/', function(req, res){
   res.send('Hello World') ;
});
app.listen(port,function(){
    console.log('Running the server on port '+port);
});