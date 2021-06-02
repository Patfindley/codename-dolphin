import './Key.css'

const Key = ({ note, index, pressedKeys }) => {

    return (
        <div className="key">
            <div className="note-display">
                { note.toUpperCase() }
            </div>
        </div>
    )

}

export default Key;