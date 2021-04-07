const { dev } = require('../../../config')
const i18next = require('i18next')
const PermissionsTools = require('../Permissions')
const CommandContext = require('./CommandContext')
const PermissionsList = require('../PermissionsList')

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
    if (command.config.developer && !dev.includes(this.msg.author.id)) return
    this.msg.channel.sendTyping()
    
    for (let permission of command.config.permissions.user) {   
      let permissionSelect = PermissionsList[permission]
      if (typeof permissionSelect === 'object') {
          let permissionCheck = new PermissionsTools(ctx.msg.member.permissions)
          let positionPermision = permissionCheck.permissionsAllow.indexOf(permissionSelect.tag)
          if (permissionCheck.permissionsAllow[positionPermision] === undefined) {
            ctx.reply('ping_pong', `You don't have permission \`${permissionSelect.tag}\` to run this command!`)
            return
          }
      } else {
          ctx.reply('ping_pong', `Sorry there are unrecognized permissions and therefore the command cannot be executed for security reasons.`)
          return 
      }
    }

    if (command.config.permissions.bot.size >= 0) {

    } else {
      const getBot = this.msg.channel.guild.members.get(ctx.client.user.id)
      for (let permission of command.config.permissions.bot) {   
        let permissionSelect = PermissionsList[permission]
        if (typeof permissionSelect === 'object') {
          let permissionCheck = new PermissionsTools(getBot.permissions)
          let positionPermision = permissionCheck.permissionsAllow.indexOf(permissionSelect.tag)
          if (permissionCheck.permissionsAllow[positionPermision] === undefined) {
            ctx.reply('ping_pong', `I do not have permission that \`${permissionSelect.tag}\` for this command!`)
            return
          }
        } else {
          ctx.reply('ping_pong', `Sorry there are unrecognized permissions and therefore the command cannot be executed for security reasons.`)
          return 
        }
      }
    }

    command.run(ctx)
  }
}