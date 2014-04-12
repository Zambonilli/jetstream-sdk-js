var Jetstream = require("../lib/core");
var application = require("../lib/application");

var client = new Jetstream.Application("jetstreambeta.tersosolutions.com", "7bbbe7d3-398b-40ae-97d0-d2a2af0ffa96");
var params = {};

// getDeviceDefinitions
params = {};
client.getDeviceDefinitions(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully retrieved the device definitions\n" + data);
	}
});

// addLogicalDevice
params = {
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

// addPolicy
params = {
	deviceDefinitionId : "10ee5fa4-15b6-4e00-a4ad-08ebeef99b79",
	name : "Policy " + Math.floor((Math.random()*1000)+1),
	aggregateeventscancount : 2,
	aggregateeventscantime : 10,
	antenna1rxsensitivity :50,
	antenna1txpower :30,
	antenna2rxsensitivity :50,
	antenna2txpower :30,
	antenna3rxsensitivity :50,
	antenna3txpower :30,
	antenna4rxsensitivity:50,
	antenna4txpower :30,
	commandpollinterval :60,
	dns :"0.0.0.0",
	dooropentimelimit :300,
	gateway :"0.0.0.0",
	ip :"0.0.0.0",
	jetstreamdeviceurl :"https://us-device.tersosolutions.com/v1.0/device/",
	lockdownhightemp :127,
	lockdownonacpowerfailure :0,
	lockdownonhightemp :0,
	lockdownonreaderfailure :0,
	logentryeventhightemp :127,
	logentryeventlowtemp :-128,
	logentrylevel : "warning",
	numberofantennas :4,
	objecteventscancount :2,
	objecteventscantime :10,
	subnet :"0.0.0.0"
};
client.addPolicy(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully added the policy.\n" + data);
	}
});

// addDeviceToPolicy
params = {
	policyId : "4954d361-84ff-468d-9b6e-69429cae6aff",
	logicalDeviceId : "LogicalDeviceId01"
};
client.addDeviceToPolicy(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully added the device to the policy.\n" + data);
	}
});

// getConfiguration
params = {};
client.getConfiguration(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called GetConfiguration.\n" + data);
	}
});

// getEvents
params = {};
client.getEvents(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called GetEvents.\n" + data);
	}
});

// getPolicies
params = {};
client.getPolicies(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called GetPolicies.\n" + data);
	}
});

// removeDeviceFromPolicy
params = {
	logicalDeviceId : "LogicalDeviceId01"
};
client.removeDeviceFromPolicy(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called RemoveDeviceFromPolicy.\n" + data);
	}
});

// removeEvents by batchId
params = {
	batchId : "bd7462ed-997b-4f62-9359-652b6d6ef94f"
};
client.removeEvents(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called RemoveEvents via batch.\n" + data);
	}
});

// removeEvents by eventIds
params = {
	eventIds : ["74b6e771-2e68-4d85-a0ca-1564e82bec13","e3892467-36d3-4e95-ba4a-845a1e98a0ac"]
};
client.removeEvents(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called RemoveEvents via eventIds.\n" + data);
	}
});

// removeLogicalDevice
params = {
	logicalDeviceId : "LogicalDeviceId02"
};
client.removeLogicalDevice(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called RemoveLogicalDevice.\n" + data);
	}
});

// removePolicy
params = {
	policyId : "bd7462ed-997b-4f62-9359-652b6d6ef94f"
};
client.removePolicy(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called RemovePolicy.\n" + data);
	}
});