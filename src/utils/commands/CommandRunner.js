const i18next = require('i18next')
const CommandContext = require('./CommandContext')
module.exports = class CommandRunner {
  constructor(client, msg) {
    this.client = client
    this.msg = msg
  }

  async load() {
    if (this.msg.channel.type !== 0) return
    if (this.msg.author.bot) return

    const guildData = await this.client.database.guilds.getOrCreate(this.msg.guildID)
    const userData = await this.client.database.users.getOrCreate(this.msg.author.id)
    if (guildData.blacklist.banned) return this.client.leaveGuild(this.msg.guildID)
    if (!guildData.prefix) {
      guildData.prefix = process.env.PREFIX
      guildData.save()
    }

    let locale
    const setFixedT = function (translate) {
      locale = translate
    }

    const language = (guildData && guildData.lang) || 'en-US'
    setFixedT(i18next.getFixedT(language))
    const regexp = new RegExp(`^(${guildData.prefix?.replace(/[-[\]{}()*+?.,\\{ $|#\a]/g, '\\$&')}|${process.env.GLOBAL_PREFIX}|<@!?${this.client.user.id}>( )*)`, 'gi')
    if (!this.msg.content.match(regexp)) return
    const args = this.msg.content.replace(regexp, '').trim().split(/ /g)
    const commandName = args.shift().toLowerCase()
    const command = this.client.commands.get(commandName) || this.client.commands.get(this.client.aliases.get(commandName))
    if (!command) return
    const ctx = new CommandContext(this.client, this.msg, locale, { user: userData, guild: guildData, global: this.client.database })
    command.run(ctx)
  }
}