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

enu.contract("enumivo").then(ctx=>{ctx.regproducer(config["producer-name"], config["public-key"], config["url"], 1).then(result=>console.log(result)).catch(e=>console.log(e))}).catch(e=>console.log(e))


