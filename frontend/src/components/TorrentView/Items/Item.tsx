import cn from 'classnames'
import './Item.scss'

type cProps = {
    idx: number
    selectedTorrent: any
    setSelectedTorrent: any
}

const Item: React.FC<cProps> = ({
    idx,
    selectedTorrent,
    setSelectedTorrent,
}: cProps) => {
    const selectTorrent = () => {
        if (
            selectedTorrent === -1 ||
            (selectedTorrent !== -1 && selectedTorrent !== idx)
        ) {
            setSelectedTorrent(idx)
        } else {
            setSelectedTorrent(-1)
        }
    }

    return (
        <div
            className={cn('Item', { selected: selectedTorrent === idx })}
            onClick={selectTorrent}
        >
            test text (link) downloaded: 44444, time left: 55555, download
            speed: 666655 gb/s
        </div>
    )
}

export default Item
