import { useState } from 'react'
import './styles.scss'
import StarRating from '@/components/starRating'
import Button from '@/components/button'

const ReviewTab = () => {
    const starList = [
        {
            label: '맛',
            value: 'taste',
        },
        {
            label: '분위기',
            value: 'atmosphere',
        },
        {
            label: '서비스',
            value: 'service',
        },
        {
            label: '가성비',
            value: 'affordable',
        },
        {
            label: '재방문 의사',
            value: 'revisit',
        },
    ]

    return (
        <div id="review-tab">
            <p className="title">
                <span>남산에</span>
                <p>이 장소에 대해 알려주세요!</p>
            </p>
            <ul className="review-star-rating">
                {starList.map((star) => (
                    <li key={star.value}>
                        <label>{star.label}</label>
                        <StarRating rating={0} />
                    </li>
                ))}
            </ul>
            <div className="review-textarea-box">
                <label>리뷰✏️</label>
                <textarea placeholder="생생한 리뷰가 듣고싶어요!" />
            </div>
            {/* <div className="review-tag-box"></div> */}
            <Button text="작성 완료" onClick={() => {}} color="primary" className="large" />
        </div>
    )
}

export default ReviewTab
