var https = require("https");

//getDeviceDefinitions
function getDeviceDefinitions(params, callback){
	var options = {
		hostname : this.host,
		path : "/v1.3/application/?action=getdevicedefinitions&accesskey=" + this.accessKey,
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

module.exports = getDeviceDefinitions;