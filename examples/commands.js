var Jetstream = require("../lib/core");
var application = require("../lib/application");

var client = new Jetstream.Application("jetstreambeta.tersosolutions.com", "7bbbe7d3-398b-40ae-97d0-d2a2af0ffa96");
var params = {};

// queueDeviceSpecificCommand
params = {
	commandName : "GetPasses",
	logicalDeviceId : "LogicalDeviceId01"
};
client.queueDeviceSpecificCommand(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully queued a DeviceSpecificCommand.\n" + data);
	}
});

// queueGetConfigValuesCommand
params = {
	logicalDeviceId : "LogicalDeviceId01"
};
client.queueGetConfigValuesCommand(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully queued a GetConfigValuesCommand.\n" + data);
	}
});

// queueGetEPCListCommand
params = {
	logicalDeviceId : "LogicalDeviceId01"
};
client.queueGetEPCListCommand(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully queued a GetEPCListCommand.\n" + data);
	}
});

// queueResetCommand
params = {
	logicalDeviceId : "LogicalDeviceId01"
};
client.queueResetCommand(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully queued a ResetCommand.\n" + data);
	}
});

// setConfigValuesCommand
params = {
	logicalDeviceId : "LogicalDeviceId01",
	ip : "10.6.20.241",
	subnet : "255.255.255.0"
};
client.queueSetConfigValuesCommand(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully queued a SetConfigValuesCommand.\n" + data);
	}
});