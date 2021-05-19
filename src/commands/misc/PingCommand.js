const { CommandListener, Emoji, EmbedBuilder } = require('../../utils')
module.exports = class PingCommand extends CommandListener {
  constructor() {
    super({
      name: 'ping',
      aliases: [],
      category: 'misc',
      permissions: {
        user: [],
        bot: []
      },
      guild: false,
      developer: false
    })
  }

  run(ctx) {
    switch (ctx.args[0]) {
      case 'shards': {
        const embed = new EmbedBuilder()
        embed.setColor('DEFAULT')

        for (const shard of ctx.client.shards) {
          embed.addField(`Shard ${ctx.client.shards.get(shard[0]).id}`, `${Math.round(ctx.client.shards.get(shard[0]).latency)}ms`, true)
        }
        ctx.send(embed.build())
      }
        break;
      default: {
        ctx.reply('ping_pong', `**Pong!** \`${ctx.msg.channel.guild.shard.latency}ms\` (${Emoji.get('satellite').mention} Shard: ${ctx.msg.channel.guild.shard.id}/${ctx.client.shards.size})`)
      }
    }
  }
}