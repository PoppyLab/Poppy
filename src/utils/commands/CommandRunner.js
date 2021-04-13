const { dev } = require('../../../config')
const i18next = require('i18next')
const PermissionsTools = require('../Permissions')
const CommandContext = require('./CommandContext')
const PermissionsList = require('../PermissionsList')
const cooldown = new Map()
const LocaleLoader = require('../LocaleLoader')

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

    const ctx = new CommandContext(this.client, this.msg, args, locale, { user: userData, guild: guildData, global: this.client.database })
    if (command.config.developer && !dev.includes(this.msg.author.id)) return
    this.msg.channel.sendTyping()
    const getCooldown = cooldown.get(this.msg.author.id)
    if (!getCooldown) {
      cooldown.set(this.msg.author.id, [{
        name: command.config.name,
        author: this.msg.author.id,
        time: Date.now() + command.config.cooldown * 1000
      }])
      if (getCooldown) {
        const cmds = getCooldown.filter(cmd => cmd.author === this.msg.author.id)
        setTimeout(() => {
          cooldown.delete(this.msg.author.id)
        }, new Date(new Date(cmds.find(cmd => cmd.name === command.config.name).time).getTime() - Date.now()).getTime())
      }
    } else {
      const cmds = getCooldown.filter(cmd => cmd.author === this.msg.author.id)
      if (cmds.find(cmd => cmd.name === command.config.name)) {
        return ctx.replyT('poppy_rip', 'basic:cooldown', {
          data: { 0: new Date(new Date(cmds.find(cmd => cmd.name === command.config.name).time).getTime() - Date.now()).getSeconds() }
        })
      }
    }

    for (let permission of command.config.permissions.user) {
      let permissionSelect = PermissionsList[permission]
      if (typeof permissionSelect === 'object') {
        let permissionCheck = new PermissionsTools(ctx.msg.member.permissions)
        let positionPermision = permissionCheck.permissionsAllow.indexOf(permissionSelect.tag)
        if (permissionCheck.permissionsAllow[positionPermision] === undefined) {
          ctx.replyT('poppy_rip', 'basic:permissions.user', { data: { 0: permissionSelect.tag } })
          return
        }
      } else {
        ctx.replyT('poppy_rip', 'basic:permissions.unknown')
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
            ctx.replyT('poppy_rip', 'basic:permissions.bot', { data: { 0: permissionSelect.tag } })
            return
          }
        } else {
          ctx.replyT('poppy_rip', 'basic:permissions.unknown')
          return
        }
      }
    }

    command.run(ctx)
  }
}