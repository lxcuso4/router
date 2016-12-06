/**
 *
 * Created by LX on 2016/8/10.
 */
function route(handle, pathname, response, request) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(401, {"Content-Type": "text/html"});
        response.write("404 Not found of there");
        response.end();
    }
}

module.exports = route;
