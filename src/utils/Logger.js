const chalk = require('chalk')
const moment = require('moment')




module.exports = class Logger {
    constructor(timeShow, levelShow) {
        this.loggers = []
        this.timeShow = typeof timeShow === 'boolean' ? timeShow : false
        this.levelShow = typeof levelShow === 'boolean' ? levelShow : false
        this.time = chalk.magentaBright(`[${moment(Date.now()).format('LTS')}]`)
    }

    
    log(message = '') {
        console.log(`${this.timeShow === true ? this.time : ''} ` + chalk.bgCyanBright.gray(`   [${this.levelShow === true ? 'LEVEL: ' : ''}Log]   `) + ` ${this.sytaxColor(message, 'redBright')}`)
        return this;
    }

    info(message = '') {
        console.log(`${this.timeShow === true ? this.time : ''} ` + chalk.bgGreen.blackBright(`   [${this.levelShow === true ? 'LEVEL: ' : ''}Info]   `) + ` ${this.sytaxColor(message, 'redBright')}`)
        return this;
    }


    success(message = '') {
        console.info(`${this.timeShow === true ? this.time : ''} ` + chalk.bgBlueBright.black(`   [${this.levelShow === true ? 'LEVEL: ' : ''}Success]  `) + ` ${this.sytaxColor(message)}`)
        return this;
    }

    error(message) {
        if (typeof message.message === 'string') {
            const stack = message.stack.replace(`Error: ${message.message}`, '')
            console.error(`${this.timeShow === true ? this.time : ''} ` + chalk.bgRedBright.whiteBright(`   [ ${this.levelShow === true ? 'LEVEL: ' : ''}Error ]  `) + ` ${this.numberColor(message.message,  'redBright')}\n${this.sytaxColor(stack, 'blueBright', true)}`)
        } else {
            console.error(`${this.timeShow === true ? this.time : ''} ` + chalk.bgRedBright.whiteBright(`   [${this.levelShow === true ? 'LEVEL: ' : ''} Message Error ]  `) + ` ${this.numberColor(message,  'redBright', true)}`)
        }
        return this;
    }

    sytaxColor(message, color, noColorNumber) {
        const splitString = message.split('')
        const colorSelect = typeof color === 'string' ? color : 'redBright'
        const adding = []
        for (let str of splitString) {
            if (typeof noColorNumber === 'boolean') {
                switch(str) {
                    case 'at': 
                        adding.push(chalk.magentaBright(str))
                    break;
                    case ':': 
                    adding.push(chalk.cyanBright(str))
                    break;
                    case '0':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '1':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '2':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '3':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '4':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '5':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '6':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '7':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '8':
                        adding.push(chalk[colorSelect](str))
                    break;
                    case '9':
                        adding.push(chalk[colorSelect](str))
                       
                    break;
                    default:
                        adding.push(str)
                }
            } else {
                adding.push(str)
            }
        }

        const fixSomes = adding.join('')

        .replace(/(\s)/g, '!)(#*$-')
        .split('!)(#*$-')
        
        let nb = -1
        const algoritm = []
        const algoritmStr = []
        for (let letter of fixSomes) {
            nb++
            const regexPrefix = RegExp(/\{error:\s*(.*)\}|\{warn:\s*(.*)\}|\{success:\s*(.*)\}|\{idk:\s*(.*)\}/)
         
            switch (regexPrefix.test(letter) === true) {
               case true:
                const getPrefix = letter.match(/error.*:|warn.*:|success.*:|idk.*:/g)
                algoritm.push(nb)
                switch(getPrefix[0]) {
                    case 'error:':
                        algoritmStr.push(
                            chalk.redBright(letter
                                .replace(/(\{error:|\{warn:|\{success:|\{idk:|\{javascript:)/g, '')
                                .replace(/(\/s+)/g, ' ')
                                .replace(/(})/g, ''))
                        )
                    break;
                    case 'warn:':
                        algoritmStr.push(
                            chalk.yellowBright(letter
                                .replace(/(\{error:|\{warn:|\{success:|\{idk:|\{javascript:)/g, '')
                                .replace(/(\/s+)/g, ' ')
                                .replace(/(})/g, ''))
                        )
                    break;
                    case 'success:':
                        algoritmStr.push(
                            chalk.greenBright(letter
                                .replace(/(\{error:|\{warn:|\{success:|\{idk:|\{javascript:)/g, '')
                                .replace(/(\/s+)/g, ' ')
                                .replace(/(})/g, ''))
                        )
                    break;
                    case 'idk:':
                        algoritmStr.push(
                            chalk.gray(letter
                                .replace(/(\{error:|\{warn:|\{success:|\{idk:|\{javascript:)/g, '')
                                .replace(/(\/s+)/g, ' ')
                                .replace(/(})/g, ''))
                        )
                    break;
                    default: 
                    algoritmStr.push(
                        letter
                                .replace(/(\{error:|\{warn:|\{success:|\{idk:|\{javascript:)/g, '')
                                .replace(/(\/s+)/g, ' ')
                                .replace(/(})/g, '')
                    )
                }
                break;
            } 
        }
        let nbPrefixes = -1
        for (let getPrefixes of algoritm) {
            nbPrefixes++
            fixSomes[getPrefixes] = algoritmStr[nbPrefixes]
        }

        return noColorNumber === true ? adding.join('').replace(/([^cjs]js)/g, chalk.yellowBright('.js')) : fixSomes.join(' ')
         
    }

    numberColor(message, color) {
        const splitString = message.split('')
        const colorSelect = typeof color === 'string' ? color : 'redBright'
        const adding = []
        for (let str of splitString) {
            switch(str) {
                case '0':
                    adding.push(chalk[colorSelect](str))
                break;
                case '1':
                    adding.push(chalk[colorSelect](str))
                break;
                case '2':
                    adding.push(chalk[colorSelect](str))
                break;
                case '3':
                    adding.push(chalk[colorSelect](str))
                break;
                case '4':
                    adding.push(chalk[colorSelect](str))
                break;
                case '5':
                    adding.push(chalk[colorSelect](str))
                break;
                case '6':
                    adding.push(chalk[colorSelect](str))
                break;
                case '7':
                    adding.push(chalk[colorSelect](str))
                break;
                case '8':
                    adding.push(chalk[colorSelect](str))
                break;
                case '9':
                    adding.push(chalk[colorSelect](str))
                   
                break;
                default:
                    adding.push(str)
            }
        }

        return adding.join('')
    }


}