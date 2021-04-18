# Welcome to my repository
### Poppy is a public Discord bot, please, check the license before forking.

## Self-hosting instance
- We are **NOT** providing any kind of support unoriginal self-hosted instance, please, if you need self-hosting our code, read the tutorial down below.
## How I can self-hosting?
It's simple, first of all, make sure if you use a node version compatible with our source (14.x or latest)
#### To make sure about this, execute this command
> node -v

if the version is compatible, let's go to next step.
#### Installing the libraries
Run in your terminal this command
> npm install -f

This will force install all libraries
#### Almost ready...
And finally... We will create two new files: `.env` and `LavalinkConfig.js`
- In the .env file, you will put this:
```
TOKEN=
PREFIX=
MONGO_URI=
MAX_SHARDS=
TOPGG_TOKEN=
DISCORDBOTS_TOKEN=
```
- Before you create the file, go to this directory /src/utils/lavalink and put this:
```js
module.exports = [
  {
    id: '1',
    host: '0.0.0.0',
    port: 2333,
    password: 'youshallnotpass'
  }
]
```
- Now we can run the code, execute this command:
> node .

#### About Lavalink
If you want play music, you will need dowloading the lavalink, click [here](https://github.com/freyacodes/Lavalink/blob/master/README.md#server-configuration) and have fun.