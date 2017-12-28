const odata = require('node-odata');

// mondodb connection URL
const mongoUrl = ``;
const server = odata(mongoUrl);

const resource = require('./resource')(server);

server.listen(3000, function(){
	console.log('server started');
});
