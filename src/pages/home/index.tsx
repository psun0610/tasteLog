import HomeFloatingButton from '@/layouts/homeFloatingButton'
import './styles.scss'
import SectionBox from '@/layouts/sectionBox'
import ReviewList from '@/features/review/components/reviewList'
import { IReview } from '@/features/review/components/reviewList/types'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const reviews: IReview[] = [
        {
            id: 1,
            nickname: '선영',
            restaurantName: '유이쯔',
            starRating: 5,
            reviewContent: '연어 서비스로 줘서 감동이었고 너무 맛있음',
        },
        {
            id: 2,
            nickname: '준석',
            restaurantName: '유이쯔',
            starRating: 4.3,
            reviewContent: '연어 서비스로 줘서 감동이었고 너무 맛있음',
        },
    ]
    return (
        <div id="home">
            <SectionBox title="친구들이 다녀온 맛집" titleClick={() => navigate('/reviewFeed')}>
                <ReviewList reviews={reviews} />
            </SectionBox>
            <HomeFloatingButton />
        </div>
    )
}

export default Home
