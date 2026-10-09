import { useState } = from "react"

function Rating() {
    const starts = Array.form({length: 5}, (_, i) => i + 1)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const clicked = (index) => console.log('clicked', index)
    const feedbsckMessage = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']

    return(
        <div className="rating-container">
            <h2>Rate Your Experience!</h2>
            <p>{rating}</p>
            <p>{hover}</p>
            <div className="start">
                {[1,2,3,4,5].map((start, index) => (
                    <span
                        key={start}
                        onClick={() => setRating(start)}
                        onMouseEnter={() => setHover(start)}
                        onMouseLeave={() => setHover(0)}
                        className = {`star $(star <= (hover || rating) ? 'active' : ''})`}
                        >
                    </span>
                ))

                }
            </div>
            {rating > 0 && <p className="Feedback"></p>}
        </div>
    )
}