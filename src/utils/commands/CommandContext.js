const Emoji = require('../emojis/Emojis')
const UserTools = require('../UserTools')
module.exports = class CommandContext {
  constructor(client, msg, args, locale, database) {
    this.client = client
    this.msg = msg
    this.args = args
    this.locale = locale
    this.database = database
    this.member = new UserTools(this.msg.member)

  }

  reply(emoji, content, ...opt) {
    this.msg.channel.createMessage({ content: `${Emoji.get(emoji).mention} **|** ${this.msg.author.mention} ${content}`, messageReferenceID: this.msg.id }, opt.options, opt.files)
  }

  replyT(emoji, content, ...opt) {
    this.msg.channel.createMessage({ content: `${Emoji.get(emoji).mention} **|** ${this.msg.author.mention} ${this.locale(content, opt.data)}`, messageReferenceID: this.msg.id }, opt.options, opt.files)
  }
}