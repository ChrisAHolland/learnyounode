const http = require('http')
const bl = require('bl')
const urldata = []
let count = 0

for (let i = 0; i < 3; i++) {
    collect(i)
}

function collect(index) {
    http.get(process.argv[index + 2], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) console.err(err)
            
            urldata[index] = data.toString()
            count++

            if (count === 3) printResults()
        }))
    })
}

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(urldata[i])
    }
}