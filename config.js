require('dotenv').config()
module.exports = {
  dev: ['395788326835322882'],
  colors: {
    default: '#cd9cff',
    error: '#d93030',
    admin: '#ff602b'
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
      'guildMessageReactions',
      'directMessages',
      'directMessageReactions'
    ]
  }
}