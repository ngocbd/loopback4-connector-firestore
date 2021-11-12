module.exports = require('should');

const { DataSource } = require('loopback-datasource-juggler');
const lib = require('./../dist/firestore');

let {
	firestore_projectId: projectId,
	firestore_clientEmail: clientEmail,
	firestore_privateKey: privateKey
} = process.env;


let config;
config = {
	projectId,
	clientEmail,
	privateKey: privateKey
};
if (projectId) {
	config = {
		projectId,
		clientEmail,
		privateKey: privateKey.replace(/\\n/g, '\n')
	};
	
}

global.config = config;
console.log(config);
global.getDataSource = global.getSchema = customConfig => {
	const db = new DataSource(lib, customConfig || config);

	db.log = a => {
		console.log(a);
	};

	return db;
};
