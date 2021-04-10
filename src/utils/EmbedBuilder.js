const ColorResolver = require('./ColorResolver')
module.exports = class EmbedBUilder {
  constructor() {
    this.title = null
    this.description = null
    this.url = null
    this.timestamp = null
    this.color = null
    this.footer = null
    this.image = null
    this.thumbnail = null
    this.author = null
    this.fields = []
  }

  setTitle(title) {
    this.title = title

    return this
  }

  setDescription(description) {
    this.description = description.toString().substring(0, 2048)

    return this
  }

  setURL(url) {
    this.url = url

    return this
  }

  setTimestamp(timestamp = new Date().getTime()) {
    this.timestamp = timestamp

    return this
  }

  setColor(color) {
    this.color = ColorResolver.resolve(color)

    return this
  }

  setFooter(text, icon_url) {
    this.footer = {
      text: text.toString().substring(0, 2048),
      icon_url
    }

    return this
  }

  setImage(url) {
    this.url = { url }

    return this
  }

  setThumbnail(url) {
    this.thumbnail = { url }

    return this
  }

  setAuthor(name, icon_url, url) {
    this.author = { name, icon_url, url }

    return this
  }

  addField(name, value, inline = false) {
    if (!name || this.fields.length >= 25) return this
    if (!value) return false
    this.fields.push({ name: name.toString().substring(0, 256), value: value.toString().substring(0, 1024), inline })

    return this
  }

  addBlankField(inline = false) {
    this.addField('\u200B', '\u200B', inline)

    return this
  }


  build(content) {
    return { content, embed: this }
  }
}