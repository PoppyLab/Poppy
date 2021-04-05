const { model, Schema } = require('mongoose')

const Guilds = new Schema({
  _id: { type: String },
  prefix: { type: String, default: process.env.PREFIX },
  lang: { type: String, default: 'en-US' },
  animu: { type: Object, default: { enabled: false, channel_id: '' } },
  blacklist: { type: Object, default: { banned: false, reason: '' } },
  punishment: { type: Object, default: { enabled: false, channel_id: '' } },
  report: { type: Object, default: { enabled: false, channel_id: '' } }
})

const Guild = model('Guilds', Guilds)
module.exports = Guild