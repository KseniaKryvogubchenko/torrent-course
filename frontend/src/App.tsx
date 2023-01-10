import { useState } from 'react'
import './App.scss'
import Actions from './components/Actions/Actions'
import Graph from './components/TorrentView/Graph/Graph'
import TorrentView from './components/TorrentView/TorrentView'

function App() {
    const [downloadingTor, setDownloadingTor] = useState([])
    const [uploadingTor, setUploadingTor] = useState([])

    const [selectedTorrent, setSelectedTorrent] = useState({
        name: '',
        type: '',
    })

    return (
        <div className="App">
            <Actions
                setDownloadingTor={setDownloadingTor}
                setUploadingTor={setUploadingTor}
            />
            <TorrentView
                selectedTorrent={selectedTorrent}
                setSelectedTorrent={setSelectedTorrent}
                downloadingTor={downloadingTor}
                uploadingTor={uploadingTor}
            />
            <Graph
                selectedTorrent={selectedTorrent}
                uploadingTor={uploadingTor}
                downloadingTor={downloadingTor}
            />
        </div>
    )
}

export default App
