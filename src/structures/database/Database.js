const guild = require('./collections/Guild')
const user = require('./collections/User')
const Collection = require('./Collection')
const { connect } = require('mongoose')

module.exports = class Database {
  constructor() {
    if (process.env.MONGO_URI) {
      const Logger = require('../../utils/Logger')
      const log = new Logger(true, false)
      connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (error) => {
        if (error) return log.error(`Unable to connect to database ${error}`)
        log.success('Connected to database')
      })

      this.guilds = new Collection(guild)
      this.users = new Collection(user)
    }
  }
}