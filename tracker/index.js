const Server = require('bittorrent-tracker').Server

const server = new Server({
    udp: true, // enable udp server? [default=true]
    http: true, // enable http server? [default=true]
    ws: true, // enable websocket server? [default=true]
    stats: true, // enable web-based statistics? [default=true]
    trustProxy: false, // enable trusting x-forwarded-for header for remote IP [default=false]
})

// Internal http, udp, and websocket servers exposed as public properties.
server.http
server.udp
server.ws

server.on('error', function (err) {
    // fatal server error!
    console.log(err.message)
})

server.on('warning', function (err) {
    // client sent bad data. probably not a problem, just a buggy client.
    console.log(err.message)
})

server.on('listening', function () {
    // fired when all requested servers are listening

    // HTTP
    const httpAddr = server.http.address()
    const httpHost = httpAddr.address !== '::' ? httpAddr.address : 'localhost'
    const httpPort = httpAddr.port
    console.log(`HTTP tracker: http://${httpHost}:${httpPort}/announce`)

    // UDP
    const udpAddr = server.udp.address()
    const udpHost = udpAddr.address
    const udpPort = udpAddr.port
    console.log(`UDP tracker: udp://${udpHost}:${udpPort}`)

    // WS
    const wsAddr = server.ws.address()
    const wsHost = wsAddr.address !== '::' ? wsAddr.address : 'localhost'
    const wsPort = wsAddr.port
    console.log(`WebSocket tracker: ws://${wsHost}:${wsPort}`)
})

// start tracker server listening! Use 0 to listen on a random free port.
const port = 9696
const hostname = 'localhost'
server.listen(port, hostname, () => {
    // Do something on listening...
})

// listen for individual tracker messages from peers:

server.on('start', function (addr) {
    console.log('got start message from ' + addr)
})

server.on('complete', function (addr) {
    const a = addr
    console.log('complete ' + a)
})
server.on('update', function (addr) {
    const a = addr

    console.log('update ' + a)
})
server.on('stop', function (addr) {})
