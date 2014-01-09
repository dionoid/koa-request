
/*
  Simple wrapper of request library
  http://github.com/mikeal/request
  For use in Koa.
*/
  
var request = require('request');

module.exports = kaoRequest;

function kaoRequest (options) { 
	return function (callback) { 
		request(options, function (error, response, body) { 
			callback(error, response); 
		}) 
	} 
}

kaoRequest.Request = request.Request;
kaoRequest.debug = request.debug;
kaoRequest.initParams = request.initParams;
kaoRequest.defaults = request.defaults;
kaoRequest.forever = request.forever;
kaoRequest.get = kaoRequest;
kaoRequest.post = function (uri, options) { return function (callback) { request.post(uri, options, function (error, response, body) { callback(error, response); }) } }
kaoRequest.put = function (uri, options) { return function (callback) { request.put(uri, options, function (error, response, body) { callback(error, response); }) } }
kaoRequest.patch = function (uri, options) { return function (callback) { request.patch(uri, options, function (error, response, body) { callback(error, response); }) } }
kaoRequest.head = function (uri, options) { return function (callback) { request.head(uri, options, function (error, response, body) { callback(error, response); }) } }
kaoRequest.del = function (uri, options) { return function (callback) { request.del(uri, options, function (error, response, body) { callback(error, response); }) } }
kaoRequest.jar = request.jar;
kaoRequest.cookie = request.cookie;
