const { CommandListener, EmbedBuilder } = require('../../utils')
const moment = require('moment')
require('moment-duration-format')
module.exports = class NowPlayingCommand extends CommandListener {
  constructor() {
    super({
      name: 'nowplaying',
      aliases: ['np'],
      category: 'music',
      permissions: {
        bot: ['embedLinks']
      }
    })
  }

  async run(ctx) {
    if (!ctx.msg.member.voiceState.sessionID) return ctx.replyT('poppy_rip', 'basic:voice.authorNotInVoiceChannel')
    if (!ctx.client.player.has(ctx.msg.guildID)) return ctx.replyT('poppy_rip', 'basic:voice.emptyQueue')
    const song = ctx.client.player.get(ctx.msg.guildID).np
    const time = moment.duration(ctx.client.player.get(ctx.msg.guildID).player.state.position).format('hh:mm:ss', { stopTrim: 'h' })
    const embed = new EmbedBuilder()
    embed.setColor('DEFAULT')
    embed.setImage(`https://i.ytimg.com/vi/${song.identifier}/hqdefault.jpg`)
    embed.addField(ctx.locale('commands:nowplaying.title'), `[${song.title}](${song.uri})`)
    embed.addField(ctx.locale('commands:nowplaying.author'), song.author)
    embed.addField(ctx.locale('commands:nowplaying.length'), `${time}/${moment.duration(song.length).format('hh:mm:ss', { stopTrim: 'h' })}`)
    embed.addField(ctx.locale('commands:nowplaying.requestedBy'), `${song.requestedBy.username}#${song.requestedBy.discriminator}`)
    embed.addField('Volume', `${ctx.client.player.get(ctx.msg.guildID).player.state.volume}/150`)

    ctx.send(embed.build())
  }
}