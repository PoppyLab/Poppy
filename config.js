require('dotenv').config()
module.exports = {
  dev: ['395788326835322882'],
  colors: {
    default: '#cd9cff',
    error: '#d93030',
    admin: '#ff602b'
  },
  options: {
    getAllUsers: true,
    disableMentions: 'everyone',
    maxShards: 1,
    restMode: true,
    allowedMentions: {
      everyone: false,
      users: true,
      roles: false,
      repliedUser: true
    },
    intents: [
      'guilds',
      'guildMembers',
      'guildBans',
      'guildEmojis',
      'guildMessages',
      'guildMessageReactions',
      'directMessages',
      'directMessageReactions'
    ],
    disableEvents: {
      CHANNEL_CREATE: true,
      CHANNEL_DELETE: true,
      CHANNEL_UPDATE: true,
      GUILD_BAN_ADD: true,
      GUILD_BAN_REMOVE: true,
      GUILD_CREATE: false,
      GUILD_DELETE: false,
      GUILD_MEMBER_ADD: true,
      GUILD_MEMBER_REMOVE: true,
      GUILD_MEMBER_UPDATE: true,
      GUILD_ROLE_CREATE: true,
      GUILD_ROLE_DELETE: true,
      GUILD_ROLE_UPDATE: true,
      GUILD_UPDATE: true,
      MESSAGE_CREATE: false,
      MESSAGE_DELETE: true,
      MESSAGE_DELETE_BULK: true,
      MESSAGE_UPDATE: false,
      PRESENCE_UPDATE: true,
      TYPING_START: true,
      USER_UPDATE: true,
      VOICE_STATE_UPDATE: true
    }
  },
  guild: {
    id: '738943426187493447',
    autoRole: '794024278638329897',
    welcomeChannel: '794020356054056980',
    reactionRole: {
      genders: {
        girl: {
          role: '',
          emoji: ''
        },
        boy: {
          role: '',
          emoji: ''
        },
        noBinary: {
          role: '',
          emoji: ''
        }
      },
      sexuality: {
        straight: {
          role: '',
          emoji: ''
        },
        lgbt: {
          role: '',
          emoji: ''
        }
      },
      club: {
        water: {
          role: '',
          emoji: ''
        },
        fire: {
          role: '',
          emoji: ''
        },
        wind: {
          role: '',
          emoji: ''
        },
        light: {
          role: '',
          emoji: ''
        },
        dark: {
          role: '',
          emoji: ''
        },
        corrupted: {
          role: '',
          emoji: ''
        },
        dj: {
          role: '',
          emoji: ''
        },
        shadow: {
          role: '',
          emoji: ''
        }
      }
    }
  }
}