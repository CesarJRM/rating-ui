import { useState } from "react"

// props {heading, starColor}
function Rating({ heading = 'Rate Your Experience!', starColor = 'gold' }) {
    //const starts = Array.form({length: 5}, (_, i) => i + 1)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    // const [submitted, setSubmitted] = useState(false)

    //const clicked = (index) => console.log('clicked', index)
    const feedbsckMessage = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']

    return(
        <div className="rating-container">
            <h2>Rate Your Experience!</h2>
            <p>{rating}</p>
            <p>{hover}</p>
            <div className="start">
                {[1,2,3,4,5].map((start) => (
                    <span
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className="star"
                        style={{
                            color: star <= (hover || rating) ? starColor : '#ccc',
                        }}>
                        {'★'}
                    </span>
                ))

                }
            </div>
            {rating > 0 && <p className="Feedback">{feedbackMessage[rating - 1]}</p>}
        </div>
    )
}

// const styles = {
//     container: {
//         textAlign: 'center',
//         fontFamily: 'Arial',
//         padding: '20px'
//     },
//     heading: {color: 'red'}
// }

export default Rating
