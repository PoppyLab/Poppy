const { CommandListener } = require('../../utils')

module.exports = class VolumeCommand extends CommandListener {
  constructor() {
    super({
      name: 'volume',
      aliases: ['vol']
    })
  }

  async run(ctx) {
    if (!ctx.msg.member.voiceState.sessionID) return ctx.replyT('poppy_rip', 'basic:voice.authorNotInVoiceChannel')
    const client = await ctx.msg.channel.guild.getRESTMember(ctx.client.user.id)
    if (client.voiceState.sessionID && ctx.msg.member.voiceState.channelID !== client.voiceState.channelID) return ctx.replyT('poppy_rip', 'basic:voice:wrongChannel')
    if (!ctx.client.player.has(ctx.msg.guildID)) return ctx.replyT('poppy_rip', 'basic:voice.emptyQueue')
    if (!ctx.args[0]) return ctx.replyT('poppy_rip', 'commands:volume.argsNotFound')
    if (isNaN(ctx.args[0])) return ctx.replyT('poppy_rip', 'basic:invalidNumber')
    if (Number(ctx.args[0] < 5)) return ctx.replyT('poppy_rip', 'commands:volume.minimalVol')
    if (Number(ctx.args[0]) > 150) return ctx.replyT('poppy_rip', 'commands:volume.maxVol')

    ctx.client.player.get(ctx.msg.guildID).setVolume(parseInt(ctx.args[0])).then((value) => {
      ctx.replyT('poppy_proud', 'commands:volume.successfully', { data: { 0: `${value}/150` } })
    })
  }
}