const BAD_NICKNAMES = [
  'puta',
  'vagabunda',
  'lixo',
  'desgraça',
  'burra',
  'piranha',
  'protistuta',
  'bicha',
  'bixa',
  'arromabada',
  'cachorra',
  'ruim',
  'boquete',
  'boqueteira',
  'putona',
  'viada',
  'vadia',
  'putiane',
  'fdp',
  'xereca',
  'pepeca',
  'pepeka',
  'ppk',
  'escrava sexual',
  'xota',
  'xoxota',
  'xoxotinha',
  'loli',
  'bitch',
  'slut'
]

module.exports.check = function (client, guild) {
  const guild_client = guild.members.get(client.user.id)
  if (BAD_NICKNAMES.includes(guild_client.nick?.toLowerCase())) {
    if (guild_client.permissions.has('changeNickname')) {
      client.editNickname(guild.id, '')
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}