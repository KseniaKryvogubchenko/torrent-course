import './Graph.scss'

type cProps = {
    selectedTorrent: { name: string; type: string }
    uploadingTor: any[]
    downloadingTor: any[]
}

const Graph: React.FC<cProps> = ({
    selectedTorrent,
    uploadingTor,
    downloadingTor,
}: cProps) => {
    return (
        <div className="Graph">
            {selectedTorrent.name !== '' ? (
                <>
                    {selectedTorrent.type === 'downloading'
                        ? downloadingTor.find(
                              (tor) => tor.name === selectedTorrent.name
                          ).magnetURI
                        : uploadingTor.find(
                              (tor) => tor.name === selectedTorrent.name
                          ).magnetURI}
                </>
            ) : (
                ''
            )}
        </div>
    )
}

export default Graph
