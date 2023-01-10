import cn from 'classnames'
import './Item.scss'
import prettyBytes from 'pretty-bytes'
import moment from 'moment'

type cProps = {
    item: any
    selectedTorrent: { name: string; type: string }
    setSelectedTorrent: Function
    type: string
}

const Item: React.FC<cProps> = ({
    item,
    selectedTorrent,
    setSelectedTorrent,
    type,
}: cProps) => {
    const selectTorrent = () => {
        if (
            selectedTorrent.name === '' ||
            (selectedTorrent.name !== '' &&
                selectedTorrent.name !== item.name &&
                selectedTorrent.type === type) ||
            (selectedTorrent.name === item.name &&
                selectedTorrent.type !== type)
        ) {
            setSelectedTorrent(() => ({
                name: item.name,
                type: type,
            }))
        } else {
            setSelectedTorrent(() => ({ name: '', type: '' }))
        }
    }

    return (
        <div
            className={cn('Item', {
                selected:
                    selectedTorrent.name === item.name &&
                    selectedTorrent.type === type,
            })}
            onClick={selectTorrent}
            dangerouslySetInnerHTML={{
                __html:
                    `<b>${item.name}</b> downloaded: ${prettyBytes(
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
                    } upload speed ${prettyBytes(item.uploadSpeed) + '/s'}` +
                    (item.done ? ' <b>DONE</b>' : ''),
            }}
        ></div>
    )
}

export default Item
