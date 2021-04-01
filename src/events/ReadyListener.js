module.exports = {
    name: 'ready',
    run: (client) => {
        console.log('Estou online.')
        const status = [
            { name: 'Asphalt 8: Airborne Event', type: 5 },
            { name: 'Gacha Club', type: 0 },
            { name: 'Drawing a anime neko girl', type: 1, url: 'https://twitch.tv/DanielaGC_' },
            { name: 'Can I be your Star', type: 2 }
        ]

        setInterval(() => client.editStatus('idle', status[Math.floor(Math.random() * status.length)]), 15000)
    }
}