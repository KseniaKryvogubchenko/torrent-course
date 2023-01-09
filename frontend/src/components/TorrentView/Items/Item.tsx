import cn from 'classnames'
import './Item.scss'
import prettyBytes from 'pretty-bytes'
import moment from 'moment'

type cProps = {
    item: any
    idx: number
    selectedTorrent: { idx: number; type: string }
    setSelectedTorrent: Function
}

const Item: React.FC<cProps> = ({
    item,
    idx,
    selectedTorrent,
    setSelectedTorrent,
}: cProps) => {
    const selectTorrent = () => {
        if (
            selectedTorrent.idx === -1 ||
            (selectedTorrent.idx !== -1 && selectedTorrent.idx !== idx)
        ) {
            setSelectedTorrent((prev: any) => ({ ...prev, idx }))
        } else {
            setSelectedTorrent((prev: any) => ({ ...prev, idx: -1 }))
        }
    }

    return (
        <div
            className={cn('Item', { selected: selectedTorrent.idx === idx })}
            onClick={selectTorrent}
        >
            {`${item.name} downloaded: ${prettyBytes(
                item.downloaded
            )} uploaded: ${prettyBytes(item.uploaded)}, time left: ${
                moment
                    .duration(item.timeRemaining / 1000, 'seconds')
                    .humanize()[0]
                    .toUpperCase() +
                moment
                    .duration(item.timeRemaining / 1000, 'seconds')
                    .humanize()
                    .substring(1)
            } download speed ${
                prettyBytes(item.downloadSpeed) + '/s'
            } upload speed ${prettyBytes(item.uploadSpeed) + '/s'}`}
        </div>
    )
}

export default Item
