const WebTorrent = require('webtorrent/webtorrent.min.js')

const client = new WebTorrent()

export const uploading = []

export function getUploadedFile() {
    let fileToLoad = document.getElementsByName('upload_file')[0].files[0]

    if (uploading.find((tor) => tor.name === fileToLoad.name))
        throw new Error('File with this name is already seeding')

    return fileToLoad
}

export function seed() {
    try {
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
    } catch (err) {
        console.warn(err)
    }
}

client.on('error', function (err) {
    console.log(err)
})
