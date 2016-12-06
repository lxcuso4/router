/**
 *
 * Created by LX on 2016/8/10.
 */
var server = require("./server");
var router = require("./router");
var handle = require("./json");

server(router, handle);

