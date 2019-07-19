const mymodule = require('./dirmod.js')
const dir = process.argv[2]
const ext = process.argv[3]

function logFiles(err, data) {
    if (err) console.error(err)

    data.forEach(function(item) {
        console.log(item)
    })    
}    

mymodule(dir, ext, logFiles)