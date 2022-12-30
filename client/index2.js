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

// client.add(torrentId, function (torrent) {
//     // Torrents can contain many files. Let's use the .mp4 file
//     const file = torrent.files.find(function (file) {
//         return file
//     })
//     console.log(file)
//     // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
// })
client.seed(
    './beach.jpeg',
    {
        announce: [
            'http://localhost:9696/announce',
            'http://localhost:9696',
            'udp://0.0.0.0:9696',
            'udp://localhost:9696',
            'ws://localhost:9696',
        ],
        // getAnnounceOpts: Function, // Custom callback to allow sending extra parameters to the tracker
        // urlList: [String], // Array of web seeds
        // maxWebConns: Number, // Max number of simultaneous connections per web seed [default=4]
        // path: String, // Folder to download files to (default=`/tmp/webtorrent/`)
        // private: Boolean, // If true, client will not share the hash with the DHT nor with PEX (default is the privacy of the parsed torrent)
        // store: Function, // Custom chunk store (must follow [abstract-chunk-store](https://www.npmjs.com/package/abstract-chunk-store) API)
        // destroyStoreOnDestroy: Boolean, // If truthy, client will delete the torrent's chunk store (e.g. files on disk) when the torrent is destroyed
        // storeCacheSlots: Number, // Number of chunk store entries (torrent pieces) to cache in memory [default=20]; 0 to disable caching
        // storeOpts: Object, // Custom options passed to the store
        // addUID: Boolean, // (Node.js only) If true, the torrent will be stored in it's infoHash folder to prevent file name collisions (default=false)
        // skipVerify: Boolean, // If true, client will skip verification of pieces for existing store and assume it's correct
        // preloadedStore: Function, // Custom, pre-loaded chunk store (must follow [abstract-chunk-store](https://www.npmjs.com/package/abstract-chunk-store) API)
        // strategy: String, // Piece selection strategy, `rarest` or `sequential`(defaut=`sequential`)
    },
    function (torrent) {
        console.log('Client is seeding ' + torrent.magnetURI)
    }
)

client.on('error', function (err) {
    console.log(err)
})

console.log(client.torrents[0].files)
