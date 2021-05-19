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

  play(query, author) {
    return this.getSongs(this.player.node, `ytsearch:${query}`).then(result => {
      if (!result[0]) return
      this._addToQueue(result[0], author)
      return Object.assign(result[0].info, { requestedBy: author })
    })
  }

  search(query) {
    return this.getSongs(this.player.node, `ytsearch:${query}`).then(result => {
      return result
    })
  }
  async bassboost(type) {
    if (type === 'normal') type = { band: 0, gain: 0.2 }
    if (type === 'medium') type = { band: 2, gain: 0.5 }
    if (type === 'high') type = { band: 4, gain: 1.0 }

    return this.player.equalizer(type)
  }
  async skip() {
    let queue = this.queue.shift()
    if (!queue) return
    this.player.play(queue.track)
    this.np = queue.info
    this.repeat.track = queue.track
    return this.np
  }

  async setVolume(value) {
    if (value > 150) value = 150
    this.player.volume(value)
    return value
  }

  pause() {
    return this.player.paused ? this.player.resume() : this.player.pause()
  }

  async stop(ctx) {
    await ctx.client.manager.manager.leave(ctx.msg.guildID)
    ctx.client.player.delete(ctx.msg.guildID)
    return true
  }

  repeatMode() {
    if (this.repeat.enable) {
      this.repeat.enable = false
    } else {
      this.repeat.enable = true
    }
  }

  remove(value) {
    return this.queue.splice(Number(value) - 1, 1)
  }

  shuffle() {
    return this.queue.sort(() => Math.random() > 0.5 ? -1 : 1)
  }

  _addToQueue(track, author) {
    if (!this.player.playing && !this.player.paused) return this._play(track, author)
    return this.queue.push(Object.assign(track, { requestedBy: author }))
  }

  seek(position) {
    if (!position) position = 0
    return this.player.seek(position)
  }

  _play(song, author) {
    this.player.on('end', (data) => {
      if (data.reason === 'REPLACED') return
      if (this.repeat.enable) return this.player.play(this.repeat.track.track, this.repeat.track.requestedBy)

      let queue = this.queue.shift()
      if (!queue) return this.emit('playEnd')
      this.player.play(queue.track, queue.requestedBy)
      this.repeat.track = queue
      this.np = Object.assign(queue.info, queue.requestedBy)
      return
    })

    this.player.play(song.track)
    this.repeat.track = song.track
    this.np = Object.assign(song.info, { requestedBy: author })
    return this.emit('playNow', song)
  }
}