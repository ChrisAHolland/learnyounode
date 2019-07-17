const fs = require('fs')
const file = process.argv[2]
let newlines = 0;

function countNewlines(callback) {
    fs.readFile(file, 'utf8', function doneReading(err, fileContents) {
        newlines = fileContents.split('\n').length-1
        callback()
    })
}

function lognum() {
    console.log(newlines)
}

countNewlines(lognum)