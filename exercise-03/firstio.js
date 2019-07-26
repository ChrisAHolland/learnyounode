const fs = require('fs')

const text = fs.readFileSync(process.argv[2], 'utf8')
const newlines = text.split('\n').length - 1
console.log(newlines)