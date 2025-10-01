import Header from '@/layouts/header'
import './styles.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RestaurantSearchTab from '@/features/review/components/restaurantSearchTab'
import ReviewTab from '@/features/review/components/reviewTab'

const CreateReview = () => {
    const navigate = useNavigate()
    const [tab, setTab] = useState<'search' | 'review'>('search')

    /** 헤더 뒤로가기 클릭 핸들러 */
    const handleHeaderClick = () => {
        if (tab === 'search') {
            navigate(-1)
        } else {
            setTab('search')
        }
    }

    return (
        <div id="create-review">
            <Header title="리뷰 작성" onClick={handleHeaderClick} />
            {tab === 'search' && <RestaurantSearchTab onTabChange={() => setTab('review')} />}
            {tab === 'review' && <ReviewTab />}
        </div>
    )
}

export default CreateReview
