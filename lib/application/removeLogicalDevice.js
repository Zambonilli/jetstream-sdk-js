var https = require("https");

// removeLogicalDevice
function removeLogicalDevice(params, callback){
	if ((!params) || (!params.logicalDeviceId)){
		throw "Invalid params";
	}

	var options = {
		hostname: this.host,
		path: '/v1.3/application/?action=removelogicaldevice&accesskey=' + this.accessKey +
		'&logicaldeviceid=' + encodeURIComponent(params.logicalDeviceId),
		port: 443,
		method: 'POST'
	};

	removeLogicalDeviceCallback = function(res){
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

	var request = https.request(options, removeLogicalDeviceCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	request.end();
}

module.exports = removeLogicalDevice;