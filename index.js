const fs = require("fs")
const http = require('http')

const server = http.createServer(handleRequest)

server.listen(3000, () => console.log("Server started at http://localhost:3000"))

function handleRequest(request, response) {
    let { url } = request

    if (url === "/") {
        url = "/index.html"
    }
    
    try {
        const file = fs.readFileSync("." + url, "utf-8")
        response.end(file)
    } catch (error) {
        response.statusCode = 404
        response.end("404 not found")
    }
}