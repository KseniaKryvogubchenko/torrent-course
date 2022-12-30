const Actions = () => {
    return (
        <div className="Actions">
            <div className="Upload">
                Upload
                <input name="upload_file" type="file" />
                <button>OK</button>
            </div>
            <div className="Download">
                Download from link
                <input name="download_link" type="text" />
                <button>OK</button>
            </div>
        </div>
    )
}

export default Actions
