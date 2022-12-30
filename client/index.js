import bencode from 'bencode'
import fs from 'fs'
import crypto from 'crypto'
import WebTorrent from 'webtorrent'
import parseTorrent from 'parse-torrent'

const open = (filepath) => {
    return bencode.decode(fs.readFileSync(filepath))
}

const infoHash = (torrent) => {
    const info = bencode.encode(torrent.info)
    return crypto.createHash('sha1').update(info).digest()
}

const torrentId = parseTorrent(fs.readFileSync('beach.jpeg.torrent'))

const client = new WebTorrent()

const magnet =
    'magnet:?xt=urn:btih:ec86fa23a50f3ea2a78b7bcc54b1b2f7f829fe64&dn=beach.jpeg&tr=http%3A%2F%2Flocalhost%3A9696%2Fannounce&tr=http%3A%2F%2Flocalhost%3A9696&tr=udp%3A%2F%2F0.0.0.0%3A9696&tr=udp%3A%2F%2Flocalhost%3A9696&tr=ws%3A%2F%2Flocalhost%3A9696'
client.add(magnet, function (torrent) {
    // Torrents can contain many files. Let's use the .mp4 file

    torrent.files.forEach(function (file) {
        // Display the file by appending it to the DOM. Supports video, audio, images, and
        // more. Specify a container element (CSS selector or reference to DOM node).
    })

    torrent.on('ready', (data) => {
        console.log('ready')
        console.log(data)
    })

    torrent.on('done', (data) => {
        console.log('done')
        console.log(data)
        console.log(torrent.files[0].length)

        console.log(torrent.files[0].downloaded)
        console.log(
            torrent.files[0].getBuffer((err, buffer) => {
                console.log(err)
                console.log(buffer)
                fs.writeFileSync('download.jpeg', buffer)
            })
        )
    })
    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
})

client.on('error', function (err) {
    console.log(err)
})
