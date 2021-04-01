module.exports = {
  name: 'error',
  run: (client, err, shardID) => {
    console.log(`Ocorreu um erro na shard ${shardID}: ${err.message}`)
  }
}