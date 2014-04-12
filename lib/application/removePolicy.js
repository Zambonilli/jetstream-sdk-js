var https = require("https");

// removePolicy
function removePolicy(params, callback){
	if ((!params) || (!params.policyId)){
		throw "Invalid params";
	}

	var options = {
		hostname: this.host,
		path: '/v1.3/application/?action=removepolicy&accesskey=' + this.accessKey +
		'&policyId=' + params.policyId,
		port: 443,
		method: 'POST'
	};

	removePolicyCallback = function(res){
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

	var request = https.request(options, removePolicyCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	request.end();
}

module.exports = removePolicy;