const fs = require("fs")
const http = require('http')

const server = http.createServer(handleRequest)

server.listen(3000, () => console.log("Server started at http://localhost:3000"))

function handleRequest(request, response) {
    if (request.url === "/" || request.url === "/index.html") {
        const html = fs.readFileSync("index.html", "utf-8")
        response.end(html)
    } else if (request.url === "/style.css") {
        const css = fs.readFileSync("style.css", "utf-8")
        response.end(css)
    } else {
        response.statusCode = 404
        response.end("404 not found")
    }
}