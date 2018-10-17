var ENU = require('enujs');
var conf = require("./config_producer.js")

var config = {
	"chainId": conf.chainId, 
	"producer-name": conf["producer-name"],
	"public-key":  conf["producer-pubKey"],
	"private-key": conf["producer-priKey"],
	"httpEndpoint": conf.httpEndpoint,
	"url": conf.url
};

var enu = ENU({
	chainId: config["chainId"],
	keyProvider: config["private-key"],
	httpEndpoint: config["httpEndpoint"],
	logger: {
		log: null,
		error: null
	}
});

enu.claimrewards(conf['producer-name']).then(result=>console.log(result)).catch(e=>console.log(e))
