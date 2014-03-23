var Jetstream = require("../lib/core");
var application = require("../lib/application");

var client = new Jetstream.Application("jetstreambeta.tersosolutions.com", "7bbbe7d3-398b-40ae-97d0-d2a2af0ffa96");
var params = {};
client.getDeviceDefinitions(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully retrieved the device definitions\n" + data);
	}
});
