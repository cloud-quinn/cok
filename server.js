var express = require('express');
var app = express();                                                    
var bodyParser = require('body-parser');    
var methodOverride = require('method-override');   

app.use(express.static(__dirname));                                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

app.get('/', function(req, res) {
    res.sendfile('./index.html'); 
});

app.listen(process.env.PORT || 80);
