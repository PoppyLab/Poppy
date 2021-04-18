const { Logger } = require('../utils')
const log = new Logger(true, false)
const LavalinkManager = require('../utils/lavalink/LavalinkManager')
module.exports = {
  name: 'ready',
  run: (client) => {

    log.success('I\'m ready to make someone happy!')
    const status = [
      { name: 'Gacha Club with the boss Neon', type: 5 },
      { name: 'Gacha Club', type: 0 },
      { name: 'Drawing a anime neko girl', type: 1, url: 'https://twitch.tv/DanielaGC_' },
      { name: 'Can I be your Star', type: 2 }
    ]

    setInterval(() => client.editStatus('idle', status[Math.floor(Math.random() * status.length)]), 15000)
    const manager = new LavalinkManager(client)
    client.player = new Map()
    client.manager = manager
    manager.connect()
  }
}