koa-request
===========

Very simple wrapper to the request library for use in koa.  
Wraps the request lib as thunk-returning functions for use in kao's middleware generator-functions.


To install simply run:
```bash
npm install koa-request
```

Require koa first and will only work on node v0.11.7 or newer.

You must run node with --harmony flag (--harmony-generators works as well)

```bash
node --harmony example.js
```

Simple example using koa-request in koa:

```js
var koa = require('koa');
var request = require('koa-request');
 
var app = koa();

app.use(function *() {

	var options = {
    	url: 'https://api.github.com/repos/dionoid/koa-request',
	    headers: { 'User-Agent': 'request' }
	};

	var response = yield request(options); //Yay, HTTP requests with no callbacks!
	var info = JSON.parse(response.body);

	this.body = 'my full name is ' + info.full_name;
});

app.listen(process.env.PORT || 8080);
```