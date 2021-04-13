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
    return this.msg.channel.createMessage({ content: `${Emoji.get(emoji).mention} **|** ${this.msg.author.mention} ${content}`, messageReferenceID: this.msg.id }, opt[0]?.options, opt[0]?.files)
  }

  replyT(emoji, content, ...opt) {
    return this.msg.channel.createMessage({ content: `${Emoji.get(emoji).mention} **|** ${this.msg.author.mention} ${this.locale(content, opt[0]?.data)}`, messageReferenceID: this.msg.id }, opt[0]?.options, opt[0]?.files)
  }

  send(content, ...opt) {
    if (typeof content === 'object') {
      return this.msg.channel.createMessage(Object.assign(content, { messageReferenceID: this.msg.id }), opt[0]?.options, opt[0]?.files)
    }

    return this.msg.createMessage(Object.assign({ content }, { messageReferenceID: this.msg.id }), opt[0]?.options, opt[0]?.files)
  }

  async getUser(member, getAuthor = false) {
    if (!member) return false
    if (!member && getAuthor) {
      return this.msg.author
    }

    try {
      const user = await this.client.getRESTUser(member.replace(/[<@!>]/g, ''))
      return user
    } catch {
      const guild_member = this.msg.channel.guild.members.find(user => user.user.username.toLowerCase().includes(member.toLowerCase()))
      if (!guild_member) return false

      return guild_member.user
    }
  }
}