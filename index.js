const PoppyClient = require('./src/PoppyClient')
const { options } = require('./config')
const client = new PoppyClient(process.env.TOKEN, options)
client.connect()