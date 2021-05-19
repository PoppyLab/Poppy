module.exports = class CommandListener {
  constructor(config) {
    this.config = {
      name: config.name,
      aliases: config.aliases || [],
      category: config.category || 'misc',
      permissions: {
        user: config.permissions?.user || [],
        bot: config.permissions?.bot || []
      },
      guild: config.guild || false,
      developer: config.developer || false,
      cooldown: config.cooldown || 5
    }
  }

  getCategory(client, category, prefix) {
    return client.commands.filter(cmd => cmd.config.category === category.toLowerCase()).map(cmd => `${prefix}${cmd.config.name}`).join(', ')
  }
}