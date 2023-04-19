const http = require("http");
const getCharById = require("./controllers/getCharById")

http.createServer(function (request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");

  if (request.url.includes("/rickandmorty/character")){
    const id = request.url.split("/").at(-1)
    getCharById(response, id)
  }
  else {
    response.writeHead(404, {"Content-Type":"text/plain"})
    response.end("Character not found")
  }
  
}).listen(3001, "localhost");