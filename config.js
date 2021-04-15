require('dotenv').config()
module.exports = {
  dev: ['395788326835322882'],
  colors: {
    default: 0xCD9CFF,
    error: 0xD93030,
    admin: 0xFF602B
  },
  options: {
    maxShards: isNaN(process.env.MAX_SHARDS) ? process.env.MAX_SHARDS : Number(process.env.MAX_SHARDS),
    restMode: true,
    allowedMentions: {
      everyone: false,
      users: true,
      roles: false,
      repliedUser: true
    },
    intents: [
      'guilds',
      'guildBans',
      'guildEmojis',
      'guildMessages',
      'guildVoiceStates',
      'guildMessageReactions',
      'directMessages',
      'directMessageReactions'
    ]
  }
}
