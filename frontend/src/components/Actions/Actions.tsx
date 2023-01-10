import { useEffect, useState } from 'react'
import { downloading, downloadTorrent } from '../../funcs/download'
import { seed, uploading } from '../../funcs/upload'
import './Actions.scss'

type cProps = {
    setDownloadingTor: Function
    setUploadingTor: Function
}

const Actions: React.FC<cProps> = ({
    setDownloadingTor,
    setUploadingTor,
}: cProps) => {
    const [magnetURI, setMagnetURI] = useState('')
    const handleTypeURI = (ev: any) => {
        setMagnetURI(ev.target.value)
    }

    useEffect(() => {
        const timeout = setInterval(() => {
            setUploadingTor([...uploading])
            setDownloadingTor([...downloading])
        }, 500)

        return () => {
            clearInterval(timeout)
        }
    }, [setUploadingTor, setDownloadingTor])

    return (
        <div className="Actions">
            <div className="Upload">
                Seed file
                <input name="upload_file" type="file" />
                <button onClick={seed}>OK</button>
            </div>
            <div className="Download">
                Download from link
                <input
                    name="download_link"
                    type="text"
                    value={magnetURI}
                    onChange={handleTypeURI}
                />
                <button
                    onClick={() => {
                        if (magnetURI.length) downloadTorrent(magnetURI)
                    }}
                >
                    OK
                </button>
            </div>
        </div>
    )
}

export default Actions
