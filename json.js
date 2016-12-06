/**
 * 
 * Created by LX on 2016/8/10.
 */
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/test"] = requestHandlers.test;

module.exports = handle;
