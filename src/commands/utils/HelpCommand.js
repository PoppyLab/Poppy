const { CommandListener, Emoji, EmbedBuilder } = require('../../utils')
module.exports = class HelpCommand extends CommandListener {
  constructor() {
    super({
      name: 'help',
      aliases: ['ajuda', 'comandos', 'commands'],
      category: 'utils',
      permissions: {
        user: ['embedLinks'],
        bot: []
      },
      guild: false,
      developer: false
    })
  }

  run(ctx) {
    const misc = this.getCategory(ctx.client, 'misc', ctx.database.guild.prefix)
    const music = this.getCategory(ctx.client, 'music', ctx.database.guild.prefix)
    const utils = this.getCategory(ctx.client, 'utils', ctx.database.guild.prefix)
    const embed = new EmbedBuilder()
    embed.setColor('DEFAULT')
    embed.addField(ctx.locale('commands:help.misc'), misc)
    embed.addField(ctx.locale('commands:help.music'), music)
    embed.addField(ctx.locale('commands:help.utils'), utils)

    ctx.send(embed.build())
  }
}