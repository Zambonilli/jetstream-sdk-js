jetstream-sdk-js
================

Jetstream SDK for javascript in Node.js.  See full Jetstream documentation at https://jetstreamrfid.com/Documentation

## Quick Examples

```javascript
var client = new Jetstream.Application("jetstream.tersosolutions.com", "MyAccessKey");
var params = {};
client.getDeviceDefinitions(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully retrieved the device definitions\n" + data);
	}
});

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
```
## Documentation

### Commands

* [`queueDeviceSpecificCommand`](#queueDeviceSpecificCommand)
* [`queueGetConfigValuesCommand`](#queueGetConfigValuesCommand)
* [`queueGetEPCListCommand`](#queueGetEPCListCommand)
* [`queueResetCommand`](#queueResetCommand)
* [`queueSetConfigValuesCommand`](#queueSetConfigValuesCommand)

### Configuration

* [`addDeviceToPolicy`](#addDeviceToPolicy)
* [`addLogicalDevice`](#addLogicalDevice)
* [`addPolicy`](#addPolicy)
* [`getConfiguration`](#getConfiguration)
* [`getDeviceDefinitions`](#getDeviceDefinitions)
* [`getPolicies`](#getPolicies)
* [`removeDeviceFromPolicy`](#removeDeviceFromPolicy)
* [`removeLogicalDevice`](#removeLogicalDevice)
* [`removePolicy`](#removePolicy)

### Messaging

* [`getEvents`](#getEvents)
* [`removeEvents`](#removePolicy)

## Commands

<a name="queueDeviceSpecificCommand" />
### queueDeviceSpecificCommand(params, callback)

__Examples__


```js
var params = {
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
```

<a name="queueGetConfigValuesCommand" />
### queueGetConfigValuesCommand(params, callback)

__Examples__


```js
var params = {
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
```

<a name="queueGetEPCListCommand" />
### queueGetEPCListCommand(params, callback)

__Examples__


```js
var params = {
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
```

<a name="queueResetCommand" />
### queueResetCommand(params, callback)

__Examples__


```js
var params = {
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
```

<a name="queueSetConfigValuesCommand" />
### queueSetConfigValuesCommand(params, callback)

__Examples__


```js
var params = {
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
```

## Configuration

<a name="addDeviceToPolicy" />
### addDeviceToPolicy(params, callback)

__Examples__


```js
var params = {
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
```

<a name="addLogicalDevice" />
### addLogicalDevice(params, callback)

__Examples__


```js
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
```

<a name="addPolicy" />
### addPolicy(params, callback)

__Examples__


```js
var params = {
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
```

<a name="getConfiguration" />
### getConfiguration(params, callback)

__Examples__


```js
var params = {};
client.getConfiguration(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called GetConfiguration.\n" + data);
	}
});
```

<a name="getDeviceDefinitions" />
### getDeviceDefinitions(params, callback)

__Examples__


```js
var params = {};
client.getDeviceDefinitions(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully retrieved the device definitions\n" + data);
	}
});
```

<a name="getPolicies" />
### getPolicies(params, callback)

__Examples__


```js
var params = {};
client.getPolicies(params, function(err, data){
	if (err){
		console.log(err);
	}
	else{
		console.log("successfully called GetPolicies.\n" + data);
	}
});
```

<a name="removeDeviceFromPolicy" />
### removeDeviceFromPolicy(params, callback)

__Examples__


```js
var params = {
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
```

<a name="removeLogicalDevice" />
### removeLogicalDevice(params, callback)

__Examples__


```js
var params = {
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
```

<a name="removePolicy" />
### removePolicy(params, callback)

__Examples__


```js
var params = {
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
```