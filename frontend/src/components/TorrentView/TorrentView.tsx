import { useState } from 'react'
import Graph from './Graph/Graph'
import Item from './Item/Item'
import Menu from './Menu/Menu'
import './TorrentView.scss'

const TorrentView = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5])
    return (
        <div className="TorrentView">
            <Menu />
            {items.map((item) => (
                <Item />
            ))}
            <Graph />
        </div>
    )
}

export default TorrentView
