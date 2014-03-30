var Jetstream = require ("./core");

Jetstream.Application = function Application(host, accessKey){
	this.host = host,
	this.accessKey = accessKey;

	if ((!this.host) || (this.host === '')){
		this.host = 'jetstreambeta.tersosolutions.com';
	}

	this.addLogicalDevice = require('./application/addLogicalDevice');
	this.getDeviceDefinitions = require('./application/getDeviceDefinitions');
	this.getConfiguration = require('./application/getConfiguration');
	this.addDeviceToPolicy = require('./application/addDeviceToPolicy');
	this.addPolicy = require('./application/addPolicy');
	this.getPolicies = require('./application/getPolicies');
	this.removeDeviceFromPolicy = require('./application/removeDeviceFromPolicy');
	this.removeLogicalDevice = require('./application/removeLogicalDevice');
	this.removePolicy = require('./application/removePolicy');
	this.getEvents = require('./application/getEvents');
	this.removeEvents = require('./application/removeEvents');
	this.queueDeviceSpecificCommand = require('./application/deviceSpecificCommand');
	this.queueGetConfigValuesCommand = require('./application/getConfigValuesCommand');
	this.queueGetEPCListCommand = require('./application/getEPCListCommand');
	this.queueResetCommand = require('./application/resetCommand');
	this.queueSetConfigValuesCommand = require('./application/setConfigValuesCommand');
}