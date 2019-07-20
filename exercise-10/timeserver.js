const net = require('net')
const strftime = require('strftime')
const port = process.argv[2]

var server = net.createServer(function(socket) {
    socket.write(timestamp() + '\n')
    socket.end()
})

function timestamp() {
    const data = strftime('%Y-%m-%d %H:%M')
    return data
}

server.listen(port)