var Jetstream = require("../lib/core");
var application = require("../lib/application");

var client = new Jetstream.Application("jetstreambeta.tersosolutions.com", "7bbbe7d3-398b-40ae-97d0-d2a2af0ffa96");
var params = {
	logicalDeviceId : "LogicalDeviceId01",
	deviceSerialNumber : "DeviceSerialNumber01",
	region : "US",
	deviceDefinitionId : "10ee5fa4-15b6-4e00-a4ad-08ebeef99b79"
};
client.addLogicalDevice(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully added the logical device.\n" + data);
	}
});
