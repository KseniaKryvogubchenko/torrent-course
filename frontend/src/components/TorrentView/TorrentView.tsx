import { useState } from 'react'
import Items from './Items/Items'
import Menu from './Menu/Menu'
import './TorrentView.scss'

type cProps = {
    selectedTorrent: any
    setSelectedTorrent: any
}

const TorrentView: React.FC<cProps> = ({
    selectedTorrent,
    setSelectedTorrent,
}: cProps) => {
    const [activeFilter, setActiveFilter] = useState('all')

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
            />
        </div>
    )
}

export default TorrentView
