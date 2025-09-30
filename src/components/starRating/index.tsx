import './styles.scss'
import { TbStarFilled } from 'react-icons/tb'

const StarRating = ({ rating }: { rating: number }) => {
    const numberOfStars = Array.from({ length: 5 }, (_, index) => index + 1)
    const percentage = (rating / 5) * 100

    return (
        <div className="star-rating">
            <div className="stars">
                {numberOfStars.map((star) => (
                    <TbStarFilled key={star} />
                ))}
            </div>
            <div className="stars yellow" style={{ width: `${percentage}%` }}>
                {numberOfStars.map((star) => (
                    <TbStarFilled key={star} />
                ))}
            </div>
        </div>
    )
}

export default StarRating
