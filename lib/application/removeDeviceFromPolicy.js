var https = require("https");

// removeDeviceFromPolicy
function removeDeviceFromPolicy(params, callback){
	if ((!params) || (!params.logicalDeviceId)){
		throw "Invalid Params!";
	}

	var options = {
		hostname: this.host,
		path: '/v1.3/application/?action=removedevicefrompolicy&accesskey=' + this.accessKey + 
		"&logicaldeviceid=" + params.logicalDeviceId,
		port: 443,
		method: 'GET'
	};

	removeDeviceFromPolicyCallback = function(res){
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

	var request = https.request(options, removeDeviceFromPolicyCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	request.end();
}

module.exports = removeDeviceFromPolicy;