/*
function Star({ filled, starColor = 'gold', onClick, onMouseEnter, onMouseLeave }) {
    return (
        <span
            className="star"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                color: filled ? starColor : '#ccc',
            }}
        >
            {'★'}
        </span>
    )
}

export default Star
