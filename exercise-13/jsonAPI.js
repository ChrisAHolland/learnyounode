const http = require('http')
const url = require('url')
const port = process.argv[2]

//Function to get the time in a a parsed format
function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

//Function to get the time in Unix format
function unixTime(time) {
    return { unixtime: time.getTime() }
}

const server = http.createServer(function(req, res) {
    const parsedUrl = url.parse(req.url, true)
    const time = new Date(parsedUrl.query.iso)
    let result

    //RegEx the URL to see what format is desired
    if (/^\/api\/parsetime/.test(req.url)) {
        result = parseTime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixTime(time)
    }

    //Ensure the URL was valid
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(port)