var https = require("https");

// getEvents
function getEvents(params, callback){

	var options = {
		hostname: this.host,
		path: '/v1.3/application/?action=getevents&accesskey=' + this.accessKey,
		port: 443,
		method: 'GET'
	};

	getEventsCallback = function(res){
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

	var request = https.request(options, getEventsCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	request.end();
}

module.exports = getEvents;