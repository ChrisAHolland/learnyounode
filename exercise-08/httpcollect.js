const http = require('http')
const bl = require('bl')
const url = process.argv[2]

function collect(callback) {
    http.get(url, function(response) {
        response.pipe(bl(function(err, data) {
            if (err) console.err(err)
            callback(data)
        }))
    })
}

function printdata(data) {
    data = data.toString()
    console.log(data.length)
    console.log(data)
}

collect(printdata)