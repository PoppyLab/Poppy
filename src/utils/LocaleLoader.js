const { readdirSync } = require('fs')
const i18next = require('i18next')
const translationBackend = require('i18next-node-fs-backend')

module.exports = class LocaleLoader {
  constructor(client) {
    this.client = client
    this.languages = ['pt-BR', 'en-US', 'es-ES', 'ja-JP', 'fr-FR', 'de']
    this.ns = ['basic', 'commands', 'events', 'permissions']
  }

  load() {
    try {
      i18next.use(translationBackend).init({
        ns: this.ns,
        preload: readdirSync('./src/locales'),
        fallbackLng: 'en-US',
        backend: {
          loadPath: './src/locales/{{lng}}/{{ns}}.json'
        },
        interpolation: {
          escapeValue: false
        },
        returnEmptyString: false
      })

      console.log('Successfully loaded all locales.')
    } catch {
      console.log('Oh gosh, an error occurred on load locales.')
    }
  }
}