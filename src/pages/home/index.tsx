import HomeFloatingButton from '@/layouts/homeFloatingButton'
import './styles.scss'
import SectionBox from '@/layouts/sectionBox'
import ReviewList from '@/features/review/components/reviewList'
import { useNavigate } from 'react-router-dom'
import RecommendRestaurant from '@/features/restaurant/components/recommend'
import { reviews } from '@/consts/dummy'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div id="home">
            <SectionBox title="친구들이 다녀온 맛집" titleClick={() => navigate('/reviewFeed')}>
                <ReviewList reviews={reviews} />
            </SectionBox>
            <SectionBox title="추천 맛집" titleClick={() => navigate('/recommendRestaurant')}>
                <RecommendRestaurant />
            </SectionBox>
            <HomeFloatingButton />
        </div>
    )
}

export default Home
