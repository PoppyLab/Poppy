const { model, Schema } = require('mongoose')
const Users = new Schema({
  _id: { type: String, default: '' },
  marry: { type: Object, default: { married: false, couple_id: '' } },
  blacklist: { type: Object, default: { banned: false, reason: '' } },
  rep: { type: Object, default: { count: 0, cooldown: 0, reason: '' } },
  profile: { type: Object, default: { type: '', color: '#cd8cff', background: '' } },
  lollicoins: { type: Object, default: { count: 0, cooldown: 0, transations: [] } },
  vip: { type: Object, default: { type: 'normal', time: 0 } }
})
const User = model('Users', Users)
module.exports = User