var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    // Serve HTML so set content-type to text/html
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<!DOCTYPE html><head></head><body><header><h1>Welcome to My Page</h1><title>My Page</title></header><main><p>This is a simple webpage created as part of a dynamic web applications course</p><h2>About Me</h2><ul><li>Name: Saim Hussain</li><li>Age: 20</li><li>DOB: 07/11/2004</li></ul><p>I was born and raised in South London and am the youngest of 4 siblings, with a niece/nephew for each older sibling. </p></main></body></html>");
})        
       
.listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
