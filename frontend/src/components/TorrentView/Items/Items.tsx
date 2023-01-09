import Item from './Item'
import './Items.scss'

type cProps = {
    selectedTorrent: { idx: number; type: string }
    setSelectedTorrent: Function
    activeFilter: string
    downloadingTor: any[]
    uploadingTor: any[]
}

const Items: React.FC<cProps> = ({
    selectedTorrent,
    setSelectedTorrent,
    activeFilter,
    downloadingTor,
    uploadingTor,
}: cProps) => {
    return (
        <div className="Items">
            {activeFilter === 'download'
                ? downloadingTor.map((item, idx) => (
                      <Item
                          item={item}
                          idx={idx}
                          selectedTorrent={selectedTorrent}
                          setSelectedTorrent={setSelectedTorrent}
                          key={idx}
                      />
                  ))
                : activeFilter === 'upload'
                ? uploadingTor.map((item, idx) => (
                      <Item
                          item={item}
                          idx={idx}
                          selectedTorrent={selectedTorrent}
                          setSelectedTorrent={setSelectedTorrent}
                          key={idx}
                      />
                  ))
                : [...downloadingTor, ...uploadingTor].map((item, idx) => (
                      <Item
                          item={item}
                          idx={idx}
                          selectedTorrent={selectedTorrent}
                          setSelectedTorrent={setSelectedTorrent}
                          key={idx}
                      />
                  ))}
        </div>
    )
}

export default Items
