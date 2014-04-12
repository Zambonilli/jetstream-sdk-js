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
		path: '/v1.3/application/?action=addlogicaldevice&accesskey=' + this.accessKey + 
		'&deviceserialnumber=' + encodeURIComponent(params.deviceSerialNumber) + '&logicaldeviceid=' + 
		encodeURIComponent(params.logicalDeviceId) + '&devicedefinitionid=' + params.deviceDefinitionId + 
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
	request.end();
}

module.exports = addLogicalDevice;