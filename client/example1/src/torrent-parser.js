'use strict'

const fs = require('fs')
const bencode = require('bencode')
const crypto = require('crypto')
const { toBufferBE, toBigIntBE } = require('bigint-buffer')

module.exports.BLOCK_LEN = Math.pow(2, 14)

module.exports.open = (filepath) => {
    return bencode.decode(fs.readFileSync(filepath))
}

module.exports.infoHash = (torrent) => {
    const info = bencode.encode(torrent.info)
    return crypto.createHash('sha1').update(info).digest()
}

module.exports.size = (torrent) => {
    const size = torrent.info.files
        ? torrent.info.files.map((file) => file.length).reduce((a, b) => a + b)
        : torrent.info.length

    const buf = Buffer.alloc(8)
    buf.writeBigInt64BE(BigInt(size))

    return buf
}

module.exports.pieceLen = (torrent, pieceIndex) => {
    const totalLength = Number(toBigIntBE(this.size(torrent)))
    const pieceLength = torrent.info['piece length']

    const lastPieceLength = totalLength % pieceLength
    const lastPieceIndex = Math.floor(totalLength / pieceLength)

    return lastPieceIndex === pieceIndex ? lastPieceLength : pieceLength
}

module.exports.blocksPerPiece = (torrent, pieceIndex) => {
    const pieceLength = this.pieceLen(torrent, pieceIndex)
    return Math.ceil(pieceLength / this.BLOCK_LEN)
}

module.exports.blockLen = (torrent, pieceIndex, blockIndex) => {
    const pieceLength = this.pieceLen(torrent, pieceIndex)

    const lastPieceLength = pieceLength % this.BLOCK_LEN
    const lastPieceIndex = Math.floor(pieceLength / this.BLOCK_LEN)

    return blockIndex === lastPieceIndex ? lastPieceLength : this.BLOCK_LEN
}
