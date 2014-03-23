var Jetstream = require ("./core");
var https = require("https");

// addLogicalDevice
function addLogicalDevice(params, callback){
	if ((!params) || (!params.logicalDeviceId) || 
		(!params.deviceSerialNumber) || 
		(!params.deviceDefinitionId) || 
		(!params.region)){
		throw "Invalid params";
	}

	var options = {
		hostname: this.host,
		path: '/v1.2/application/?action=addlogicaldevice&accesskey=' + this.accessKey + 
		'&deviceserialnumber=' + params.deviceSerialNumber + '&logicaldeviceid=' + 
		params.logicalDeviceId + '&devicedefinitionid=' + params.deviceDefinitionId + 
		'&region=' + params.region,
		port: 443,
		method: 'POST'
	};

	addLogicalDeviceCallback = function(res){
		var body = '';

		// http-chunked fragment buffer -> body var
		res.on('data', function (chunk) {
    		body+=chunk;
  		});

		// body handler end
		res.on('end', function () {
			if (res.statusCode === 200){
				if (callback){
					callback(null, body);
				}	
			}
			else{
				if (callback){
					callback('invalid http request.' + res.statusCode + ' ' + body, null);
				}
			}
			return body;
		});
	}

	var request = https.request(options, addLogicalDeviceCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	console.log(request);
	request.end();
}

function getDeviceDefinitions(params, callback){
	var options = {
		hostname : this.host,
		path : "/v1.2/application/?action=getdevicedefinitions&accesskey=" + this.accessKey,
		port: 443,
		method: 'GET'
	};

	getDeviceDefinitionsCallback = function(res){
		var body = '';

		// http-chunked fragment buffer -> body var
		res.on('data', function(chunk){
			body+=chunk;
		});

		// body handler end
		res.on('end', function(){
			if (callback){
				callback(null, body);
			}
			return body;
		});
	}

	var request = https.request(options, getDeviceDefinitionsCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	request.end();
}

Jetstream.Application = function Application(host, accessKey){
	this.host = host,
	this.accessKey = accessKey;

	if ((!this.host) || (this.host === '')){
		this.host = 'jetstreambeta.tersosolutions.com';
	}

	this.addLogicalDevice = addLogicalDevice;
	this.getDeviceDefinitions = getDeviceDefinitions;
}