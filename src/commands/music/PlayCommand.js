const { CommandListener } = require('../../utils')

module.exports = class PlayCommand extends CommandListener {
  constructor() {
    super({
      name: 'play'
    })
  }

  async run(ctx) {
    // if (!ctx.msg.member.voiceState.sessionID) return ctx.replyT('poppy_rip', 'basic:voice.authorNotInVoiceChannel')
    const client = await ctx.msg.channel.guild.getRESTMember(ctx.client.user.id)
    if (client.voiceState.sessionID && ctx.msg.member.voiceState.channelID !== client.voiceState.channelID) return ctx.replyT('poppy_rip', 'basic:voice:wrongChannel')
    if (!ctx.args[0]) return ctx.replyT('poppy_rip', 'commands:play.argsNotFound')
    if (ctx.client.player.has(ctx.msg.guildID)) {
      const song = await this.client.player.get(ctx.msg.guildID).play(ctx.args.join(' '))
      return ctx.replyT('poppy_proud', 'commands:play.addedToQueue', { data: { 0: song.title } })
    } else {

      const player = await ctx.client.manager.join(ctx.msg.member.voiceState.channelID)
      player.on('playNow', (song) => {
        ctx.replyT('poppy_headphone', 'commands:play.nowPlaying', { data: { 0: song.info.title } })
      })

      player.on('playEnd', async () => {
        await ctx.client.manager.manager.leave(ctx.msg.guildID)
        ctx.client.player.delete(ctx.msg.guildID)
      })

      player.play(ctx.args.join(' '))
      ctx.client.player.set(ctx.msg.guildID, player)
    }
  }
}