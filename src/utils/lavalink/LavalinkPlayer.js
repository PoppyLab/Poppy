const { EventEmitter } = require('events')

module.exports = class LavalinkPlayer extends EventEmitter {
  constructor(manager) {
    super()
    this.player = manager
    this.queue = []
    this.np = null
    this.repeat = {
      enable: false,
      track: ''
    }
  }

  async getSongs(node, search) {
    const { Logger } = require('..')
    const log = new Logger(true, false)
    const axios = require('axios')
    const { URLSearchParams } = require('url')
    const params = new URLSearchParams()
    params.append('identifier', search)

    try {
      const res = await axios.get(`http://${node.host}:${node.port}/loadtracks?${params.toString()}`, {
        headers: {
          Authorization: node.password
        }
      })

      return res.data.tracks
    } catch (err) {
      log.error(err.message)
      return []
    }
  }

  play(query) {
    return this.getSongs(this.player.node, `ytsearch:${query}`).then(result => {
      if (!result[0]) return
      this._addToQueue(result[0])
      return result[0].info
    })
  }

  search(query) {
    return this.getSongs(this.player.node, `ytsearch:${query}`).then(result => {
      return result
    })
  }
  
  skip() {
    const queue = this.queue.shift()
    if (!queue) return false
    this.player.play(queue.track)
    this.np = queue.info
    this.repeat.track = queue.track
  }

  shuffle() {
    return this.queue.sort(() => Math.random() > 0.5 ? -1 : 1)
  }

  _addToQueue(track) {
    if (!this.player.playing && !this.player.paused) return this._play(track)
    return this.queue.push(track)
  }

  _play(song) {
    this.player.on('end', (data) => {
      if (data.reason === 'REPLACED') return
      if (this.repeat.enable) {
        return this.player.play(this.repeat.track)
      } else {
        const queue = this.queue.shift()
        if (!queue) return this.emit('playEnd')
        this.player.play(queue.track)
        this.repeat.track
        this.np = queue.info
      }
    })

    this.player.play(song.track)
    this.np = song.info
    this.repeat.track = song.track
    return this.emit('playNow', song)
  }
}