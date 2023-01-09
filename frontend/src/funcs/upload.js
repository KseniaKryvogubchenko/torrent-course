const WebTorrent = require('webtorrent/webtorrent.min.js')

const client = new WebTorrent()

export const uploading = []

export function getUploadedFile() {
    const fileToLoad = document.getElementsByName('upload_file')[0].files[0]
    return fileToLoad
}

export function seed() {
    client.seed(
        getUploadedFile(),
        {
            announce: [
                'http://localhost:9696/announce',
                'http://localhost:9696',
                'udp://0.0.0.0:9696',
                'udp://localhost:9696',
                'ws://localhost:9696',
            ],
        },
        function (torrent) {
            uploading.push(torrent)
        }
    )
}

client.on('error', function (err) {
    console.log(err)
})
