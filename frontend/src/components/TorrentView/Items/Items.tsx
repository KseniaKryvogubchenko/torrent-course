import { useState } from 'react'
import Item from './Item'
import './Items.scss'

type cProps = {
    selectedTorrent: any
    setSelectedTorrent: any
    activeFilter: string
}

const Items: React.FC<cProps> = ({
    selectedTorrent,
    setSelectedTorrent,
    activeFilter,
}: cProps) => {
    const [downloading, setDownloading] = useState(['1', '2', '3'])
    const [uploading, setUploading] = useState(['4', '5'])

    return (
        <div className="Items">
            {activeFilter === 'download'
                ? downloading.map((_item, idx) => (
                      <Item
                          idx={idx}
                          selectedTorrent={selectedTorrent}
                          setSelectedTorrent={setSelectedTorrent}
                          key={_item}
                      />
                  ))
                : activeFilter === 'upload'
                ? uploading.map((_item, idx) => (
                      <Item
                          idx={idx}
                          selectedTorrent={selectedTorrent}
                          setSelectedTorrent={setSelectedTorrent}
                          key={_item}
                      />
                  ))
                : [...downloading, ...uploading].map((_item, idx) => (
                      <Item
                          idx={idx}
                          selectedTorrent={selectedTorrent}
                          setSelectedTorrent={setSelectedTorrent}
                          key={_item}
                      />
                  ))}
            {}
        </div>
    )
}

export default Items
