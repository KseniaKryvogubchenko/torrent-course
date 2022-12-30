import { useState } from 'react'
import './App.scss'
import Actions from './components/Actions/Actions'
import Graph from './components/TorrentView/Graph/Graph'
import TorrentView from './components/TorrentView/TorrentView'

function App() {
    const [selectedTorrent, setSelectedTorrent] = useState(-1)

    return (
        <div className="App">
            <Actions />
            <TorrentView
                selectedTorrent={selectedTorrent}
                setSelectedTorrent={setSelectedTorrent}
            />
            <Graph selectedTorrent={selectedTorrent} />
        </div>
    )
}

export default App
