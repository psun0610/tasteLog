import './styles.scss'
import { TbStarFilled } from 'react-icons/tb'

interface IStarRatingProps {
    rating: number
    onClick?: (rating: number) => void
    starSize?: number
}

const StarRating = ({ rating, onClick, starSize = 1.8 }: IStarRatingProps) => {
    const numberOfStars = Array.from({ length: 5 }, (_, index) => index + 1)
    const percentage = (rating / 5) * 100

    return (
        <div className="star-rating">
            <div className="stars">
                {numberOfStars.map((star) => (
                    <TbStarFilled key={star} size={`${starSize}rem`} onClick={() => onClick && onClick(star)} />
                ))}
            </div>
            <div className="stars yellow" style={{ width: `${percentage}%` }}>
                {numberOfStars.map((star) => (
                    <TbStarFilled key={star} size={`${starSize}rem`} onClick={() => onClick && onClick(star)} />
                ))}
            </div>
        </div>
    )
}

export default StarRating
