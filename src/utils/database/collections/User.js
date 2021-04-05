const { model, Schema } = require('mongoose')
const Users = new Schema({
  _id: { type: String, default: '' },
  marry: { type: Object, default: { married: false, couple_id: '' } },
  blacklist: { type: Object, default: { banned: false, reason: '' } },
  rep: { type: Object, default: { count: 0, cooldown: 0, reason: '' } },
  profile: { type: Object, default: { type: '', color: '#cd8cff', background: '' } }
})
const User = model('Users', Users)
module.exports = User