import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import './Graph.scss'

type cProps = {
    selectedTorrent: { idx: number; type: string }
    uploadingTor: any[]
    downloadingTor: any[]
}

const Graph: React.FC<cProps> = ({
    selectedTorrent,
    uploadingTor,
    downloadingTor,
}: cProps) => {
    const data = [
        { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
    ]
    return (
        <div className="Graph">
            {selectedTorrent.idx !== -1 ? (
                <>
                    {selectedTorrent.type === 'download'
                        ? downloadingTor[selectedTorrent.idx].magnetURI
                        : uploadingTor[selectedTorrent.idx].magnetURI}
                    <LineChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis />
                        <YAxis />
                    </LineChart>
                </>
            ) : (
                ''
            )}
        </div>
    )
}

export default Graph
