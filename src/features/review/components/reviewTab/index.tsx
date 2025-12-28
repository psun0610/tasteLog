import './styles.scss'
import StarRating from '@/components/starRating'
import Button from '@/components/button'
import { Place } from '@/components/kakaoMap/types'
import { useState } from 'react'
import { defaultReview, starList } from './const'
import { IReview } from '../types'

const ReviewTab = ({ selectedPlace }: { selectedPlace: Place | null }) => {
    const [review, setReview] = useState<IReview>(defaultReview)

    /** 별점 변경 핸들러 */
    const handleStarRatingChange = (value: keyof Omit<IReview, 'review'>, rating: number) => {
        setReview({ ...review, [value]: rating })
    }

    /** 상세 리뷰 변경 핸들러 */
    const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview({ ...review, review: e.target.value })
    }

    return (
        <div id="review-tab">
            <div className="title">
                <span>{selectedPlace?.place_name}</span>
                <p>이 장소에 대해 알려주세요!</p>
            </div>
            <ul className="review-star-rating">
                {starList.map((star) => (
                    <li key={star.value}>
                        <label>{star.label}</label>
                        <StarRating
                            rating={review[star.value]}
                            onClick={(rating) => handleStarRatingChange(star.value, rating)}
                        />
                    </li>
                ))}
                <div className="review-textarea-box">
                    <label>상세 리뷰✏️</label>
                    <textarea
                        placeholder="생생한 리뷰가 듣고싶어요!"
                        value={review.review}
                        onChange={handleReviewChange}
                    />
                </div>
            </ul>
            {/* <div className="review-tag-box"></div> */}
            <Button text="작성 완료" onClick={() => {}} color="primary" className="large" />
        </div>
    )
}

export default ReviewTab
