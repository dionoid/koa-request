var koa = require('koa');
var request = require('../index'); //koa-request
 
var app = koa();

app.use(function *() {

	var options = {
    	url: 'https://api.github.com/repos/dionoid/koa-request',
	    headers: { 'User-Agent': 'request' }
	};

	var response = yield request(options);
	var info = JSON.parse(response.body);

	this.body = 'my full name is ' + info.full_name;
});

app.listen(process.env.PORT || 8080);