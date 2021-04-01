const { Client } = require('eris')
const { readdir } = require('fs')

module.exports = class PoppyClient extends Client {
  constructor(token, options) {
    super(token, options)

    this.aliases = new Map()
    this.commands = new Map()
  }

  connect() {
    this.registerCommands()
    this.registerListeners()
    return super.connect()
  }

  registerCommands() {
    readdir('./src/commands', (err, f) => {
      if (err) return console.log(`Ocorreu um erro: ${err.message}`)
      for (const category of f) {
        readdir(`./src/commands/${category}`, (err, file) => {
          if (err) return console.log(`Ocorreu um erro: ${err.message}`)
          for (const commands of file) {
            const Command = require(`./commands/${category}/${commands}`)
            const command = new Command()
            this.commands.set(command.config.name, command)
            command.config.aliases.forEach((alias) => this.aliases.set(alias, command.config.name))
          }
        })
      }
    })
  }

  registerListeners() {
    readdir('./src/events', (err, f) => {
      if (err) return console.log(`Ocorreu um erro: ${err.message}`)
      for (const events of f) {
        const dir = './events'
        const event = require(`${dir}/${events}`)
        super.on(event.name, (...args) => event.run(this, ...args))
      }
    })
  }
}