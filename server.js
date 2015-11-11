var express = require('express');
var app = express();

// app.get('/', handleRoot);

// function handleRoot(req, res){
//   res.send('hello world !!!');
// }

app.use(express.static(__dirname+'/public'));

// app.listen(3000);

var host =process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port =process.env.OPENSHIFT_NODEJS_PORT || 3000;

 app.listen(port , host);