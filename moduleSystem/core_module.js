/**
 * we load fs module which is built into Node
 */
const fs = require('fs')
fs.appendFileSync('notes.txt', '\nNew text added');