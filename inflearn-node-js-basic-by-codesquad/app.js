var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.listen(3000, function() {
	console.log('start! express server on port 3000');
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');  // 'view engine은 ejs야'라고 말해줌 


// url routing
app.get('/', function(req, res) {
  // req.param('email')   ->  email이라는 이름의 parameter value
  res.sendFile(__dirname + '/public/main.html');
});

app.post('/email_post', function(req, res) { 
  console.log(req.body.email);
  res.render('email.ejs', {'email': req.body.email}); 
});

app.post('/ajax_send_mail', function(req, res) {
  console.log(req.body.email); 
  var responseData = {'result': 'ok', 'email': req.body.email};
  res.json(responseData); 
});

