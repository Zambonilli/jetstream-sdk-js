var https = require("https");

// addDeviceToPolicy
function addDeviceToPolicy(params, callback){
	if ((!params) || (!params.logicalDeviceId | !params.policyId)){
		throw "Invalid params";
	}

	var path = '/v1.3/application/?action=adddevicetopolicy&accesskey=' + this.accessKey;
	Object.getOwnPropertyNames(params).forEach(function(val){
		path+= "&" + encodeURIComponent(val) + "=" + encodeURIComponent(params[val]);
	});

	var options = {
		hostname: this.host,
		path: path,
		port: 443,
		method: 'POST'
	};

	addDeviceToPolicyCallback = function(res){
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

	var request = https.request(options, addDeviceToPolicyCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	request.end();
}

module.exports = addDeviceToPolicy;