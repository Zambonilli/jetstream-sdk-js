var https = require("https");

// removeEvents
function removeEvents(params, callback){
	if ((!params) || (!params.batchId & !params.eventIds)){
		throw "Invalid params";
	}

	var path =  '/v1.3/application/?action=removeevents&accesskey=' + this.accessKey;
	if (params.batchId){
		path+="&batchid=" + params.batchId;
	} else{
		var s = '';
		params.eventIds.forEach(function(eventId){
			if (s != ''){
				s+="_";
			}
			s+=eventId;
		});
		path+="&eventids=" + s;
	}

	var options = {
		hostname: this.host,
		path: path,
		port: 443,
		method: 'GET'
	};

	removeEventsCallback = function(res){
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

	var request = https.request(options, removeEventsCallback);
	request.on('error', function(e){
		if (callback){
			callback(e, null);
		}
	});
	request.end();
}

module.exports = removeEvents;