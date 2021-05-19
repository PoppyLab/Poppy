const { Manager } = require('@lavacord/eris')
const nodes = require('./LavalinkConfig')
const LavalinkPlayer = require('./LavalinkPlayer')
module.exports = class LavalinkManager {
  constructor(client) {
    this.client = client
    this.manager = new Manager(this.client, nodes, {
      user: this.client.user.id,
      shards: parseInt(this.client.shards.size)
    })
  }

  get getNode() {
    return nodes[Math.floor(Math.random() * nodes.length)].id
  }

  async connect() {
    const { Logger } = require('../../utils')
    const log = new Logger(true, false)
    try {
      await this.manager.connect()
      log.success('Lavalink nodes successfully connected!')
    } catch (err) {
      log.error(`Error to connect on Lavalink node: ${err.message}`)
    }
  }

  async join(channel) {
    const manager = await this.manager.join({ channel, guild: this.client.getChannel(channel).guild.id, node: this.getNode }, { selfdeaf: true })
    return new LavalinkPlayer(manager)
  }
}