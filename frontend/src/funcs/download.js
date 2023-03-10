var fileDownload = require('js-file-download')
const WebTorrent = require('webtorrent/webtorrent.min.js')

const client = new WebTorrent()

export const downloading = []

export const downloadTorrent = (magnetURI) => {
    try {
        client.add(magnetURI, function (torrent) {
            downloading.push(torrent)

            torrent.on('done', (data) => {
                torrent.files.forEach((file) => {
                    file.getBuffer((err, buffer) => {
                        fileDownload(buffer, file.name)
                    })
                })
            })
        })
    } catch (err) {
        console.error(err)
    }
}

client.on('error', function (err) {
    throw new Error(err)
})
