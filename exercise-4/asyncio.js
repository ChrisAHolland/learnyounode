const fs = require('fs')
const file = process.argv[2]
let newlines = 0;

function countNewlines(callback) {
    fs.readFile(file, 'utf8', function doneReading(err, fileContents) {
        if (err) return console.error(err)
        newlines = fileContents.split('\n').length-1
        callback()
    })
}

function lognum() {
    console.log(newlines)
}

countNewlines(lognum)