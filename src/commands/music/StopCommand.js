const { CommandListener } = require('../../utils')

module.exports = class StopCommand extends CommandListener {
  constructor() {
    super({
      name: 'stop',
      aliases: ['parar', 'leave', 'sair'],
      category: 'music'
    })
  }

  async run(ctx) {
    if (!ctx.msg.member.voiceState.sessionID) return ctx.replyT('poppy_rip', 'basic:voice.authorNotInVoiceChannel')
    const client = await ctx.msg.channel.guild.getRESTMember(ctx.client.user.id)
    if (client.voiceState.sessionID && ctx.msg.member.voiceState.channelID !== client.voiceState.channelID) return ctx.replyT('poppy_rip', 'basic:voice:wrongChannel')
    if (!ctx.client.player.has(ctx.msg.guildID)) return ctx.replyT('poppy_rip', 'basic:voice.emptyQueue')

    ctx.client.player.get(ctx.msg.guildID).stop(ctx).then(() => {
      ctx.replyT('poppy_proud', 'commands:stop.stoped')
    })
  }
}