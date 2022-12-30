import './Graph.scss'

type cProps = {
    selectedTorrent: any
}

const Graph: React.FC<cProps> = ({ selectedTorrent }: cProps) => {
    return (
        <div className="Graph">
            {selectedTorrent !== -1 ? selectedTorrent : ''}
        </div>
    )
}

export default Graph
