import Item from './Item'
import './Items.scss'

type cProps = {
    selectedTorrent: { name: string; type: string }
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
            {activeFilter === 'download' ? (
                downloadingTor.map((item, idx) => (
                    <Item
                        item={item}
                        selectedTorrent={selectedTorrent}
                        setSelectedTorrent={setSelectedTorrent}
                        type="downloading"
                        key={idx}
                    />
                ))
            ) : activeFilter === 'upload' ? (
                uploadingTor.map((item, idx) => (
                    <Item
                        item={item}
                        selectedTorrent={selectedTorrent}
                        setSelectedTorrent={setSelectedTorrent}
                        type="uploading"
                        key={idx}
                    />
                ))
            ) : (
                <></>
            )}
        </div>
    )
}

export default Items
