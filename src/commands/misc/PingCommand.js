const { CommandListener, Emoji } = require('../../utils')
module.exports = class PingCommand extends CommandListener {
  constructor() {
    super({
      name: 'ping',
      aliases: [],
      permissions: {
        user: [],
        bot: []
      },
      guild: false,
      developer: false
    })
  }

  run(ctx) {
    ctx.reply('ping_pong', `**Pong!** \`${ctx.msg.channel.guild.shard.latency}ms\` (${Emoji.get('world').mention} Shard: ${ctx.msg.channel.guild.shard.id}/${ctx.client.shards.size})`)
  }
}