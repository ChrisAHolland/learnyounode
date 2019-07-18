const fs = require('fs')

const dir = process.argv[2]
const ext = '.' + process.argv[3]

function filterDir(callback) {
    fs.readdir(dir, function(err, files) {
        if (err) return console.error(err)
        callback(files)
    })
}

function logFiles(files) {
    files.forEach(function(item) {
        if (item.endsWith(ext)) console.log(item)
    })
}

filterDir(logFiles)