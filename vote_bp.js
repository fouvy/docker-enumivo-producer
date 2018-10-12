var ENU = require('enujs');
var conf = require("./config_producer.js")
var config = {
    chainId: conf.chainId,
    priKey:  conf["producer-priKey"],
    httpEndpoint: conf.httpEndpoint,
    verbose: false,
}

var enu = ENU({
	chainId: config["chainId"],
	keyProvider: config["priKey"],
	httpEndpoint: config["httpEndpoint"],
	logger: {
		log: null,
		error: null
	}
});

var vote_list = ["williamfouvy"].sort();

enu.contract("enumivo").then(ctx=>{ctx.voteproducer(conf["producer-name"], "", vote_list).then(result=>console.log(result)).catch(e=>console.log(e))}).catch(e=>console.log(e))

