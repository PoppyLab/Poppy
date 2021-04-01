module.exports = class CommandListener {
  constructor(config) {
    this.config = {
      name: config.name,
      aliases: config.aliases || [],
      permissions: {
        user: [],
        bot: []
      },
      guild: false,
      developer: false
    }
  }
}