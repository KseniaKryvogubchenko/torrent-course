import './Menu.scss'
import cn from 'classnames'

type cProps = {
    activeFilter: string
    setActiveFilter: any
}

const Menu: React.FC<cProps> = ({ activeFilter, setActiveFilter }: cProps) => {
    return (
        <div className="Menu">
            <div
                className={cn('Menu__All', {
                    selected: activeFilter === 'all',
                })}
                onClick={() => setActiveFilter('all')}
            >
                All
            </div>
            <div
                className={cn('Menu__Downloading', {
                    selected: activeFilter === 'download',
                })}
                onClick={() => setActiveFilter('download')}
            >
                Downloading
            </div>
            <div
                className={cn('Menu__Uploading', {
                    selected: activeFilter === 'upload',
                })}
                onClick={() => setActiveFilter('upload')}
            >
                Uploading
            </div>
        </div>
    )
}

export default Menu
