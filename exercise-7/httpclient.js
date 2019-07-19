const http = require('http')
const url = process.argv[2]

http.get(url, function(response) {
    response.setEncoding('utf8')
    response.on('error', console.error)
    response.on('data', console.log)
}).on('error', console.error)