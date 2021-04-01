const { CommandListener } = require('../../utils')
module.exports = class PingCommand extends CommandListener {
  constructor() {
    super({
      name: 'ping',
      aliases: [],
      permissions: {
        user: [],
        bot: []
      },
      guild: false,
      developer: false
    })
  }

  run(context) {

  }
}