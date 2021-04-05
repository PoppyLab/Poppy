const emojis = require('./EmojiList')
module.exports = {
  get: function get(emoji) {
    if (!emojis[emoji]) return {
      name: '🐛',
      id: '🐛',
      mention: '🐛',
      reaction: '🐛'
    }

    const emojiSplit = emojis[emoji]
      .replace(/(<:)/, '')
      .replace(/(<a:)/, '')
      .replace(/(>)/, '')
      .trim()
      .split(':')

    const objectEmoji = {
      name: emojiSplit[0],
      id: (!emojiSplit[1]) ? emojiSplit[1] : undefined,
      mention: emojis[emoji],
      reaction: (!emojiSplit[1]) ? `${emojiSplit[0]}:${emojiSplit[1]}` : emojiSplit[0]
    }

    return objectEmoji
  }
}