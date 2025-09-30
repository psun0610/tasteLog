import StarRating from '@/components/starRating'
import './styles.scss'
import { IReview } from './types'

const ReviewList = ({ reviews }: { reviews: IReview[] }) => {
    return (
        <ul id="review-list">
            {reviews.map((review) => (
                <li key={review.id}>
                    <div className="profile">
                        <img src="https://placehold.co/600x400" alt="profile" />
                    </div>
                    <div className="review">
                        <p className="nickname">{review.nickname}</p>
                        <div>
                            <p className="restaurant-name">{review.restaurantName}</p>
                            <StarRating rating={review.starRating} />
                        </div>
                        <p className="review-content">{review.reviewContent}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ReviewList
