'use strict'

//server port - 9696

const download = require('./src/download')
const torrentParser = require('./src/torrent-parser')

const torrent = torrentParser.open('beach.jpeg.torrent')

download(torrent, torrent.info.name, 6888)
