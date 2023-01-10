import { useState } from 'react'
import Items from './Items/Items'
import Menu from './Menu/Menu'
import './TorrentView.scss'

type cProps = {
    selectedTorrent: { name: string; type: string }
    setSelectedTorrent: Function
    downloadingTor: any[]
    uploadingTor: any[]
}

const TorrentView: React.FC<cProps> = ({
    selectedTorrent,
    setSelectedTorrent,
    downloadingTor,
    uploadingTor,
}: cProps) => {
    const [activeFilter, setActiveFilter] = useState('download')

    return (
        <div className="TorrentView">
            <Menu
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <Items
                selectedTorrent={selectedTorrent}
                setSelectedTorrent={setSelectedTorrent}
                activeFilter={activeFilter}
                downloadingTor={downloadingTor}
                uploadingTor={uploadingTor}
            />
        </div>
    )
}

export default TorrentView
