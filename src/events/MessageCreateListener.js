const {CommandRunner} = require('../utils')
module.exports = {
  name: 'messageCreate',
  run: async (client, msg) => {
    const runner = new CommandRunner(client, msg)
    runner.load()
  }
}