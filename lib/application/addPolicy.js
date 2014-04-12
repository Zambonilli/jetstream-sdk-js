var https = require("https");

// addPolicy
function addPolicy(params, callback){
	if ((!params) || (!params.deviceDefinitionId | !params.name)){
		throw "Invalid params";
	}

	var path = '/v1.3/application/?action=addpolicy&accesskey=' + this.accessKey;
	Object.getOwnPropertyNames(params).forEach(function(val){
		path+= "&" + encodeURIComponent(val) + "=" + encodeURIComponent(params[val]);
	});

	console.log(path);

	var options = {
		hostname: this.host,
		path: path,
		port: 443,
		method: 'POST'
	};

	addPolicyCallback = function(res){
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

	var request = https.request(options, addPolicyCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	request.end();
}

module.exports = addPolicy;