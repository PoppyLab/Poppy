module.exports = class CommandListener {
  constructor(config) {
    this.config = {
      name: config.name,
      aliases: config.aliases || [],
      permissions: {
        user: config.permissions?.user || [],
        bot: config.permissions?.bot || []
      },
      guild: config.guild || false,
      developer: config.developer || false,
      cooldown: config.cooldown || 5
    }
  }
}