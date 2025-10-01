import HomeFloatingButton from '@/layouts/homeFloatingButton'
import './styles.scss'
import SectionBox from '@/layouts/sectionBox'
import ReviewList from '@/features/review/components/reviewList'
import { useNavigate } from 'react-router-dom'
import RecommendRestaurant from '@/features/restaurant/components/recommend'
import { reviews } from '@/consts/dummy'
import TrendList from '@/features/restaurant/components/trendList'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div id="home">
            <div className="home-header">
                <h1>맛팔🍴</h1>
            </div>
            <div className="home-content">
                <SectionBox title="따끈따끈 최신 후기✨" titleClick={() => navigate('/reviewFeed')}>
                    <ReviewList reviews={reviews} />
                </SectionBox>
                <SectionBox title="이런 곳은 어때요?" titleClick={() => navigate('/recommendRestaurant')}>
                    <RecommendRestaurant />
                </SectionBox>
                <SectionBox title="트렌드 TOP 10🔥" contentBox={false}>
                    <TrendList />
                </SectionBox>
            </div>
            <HomeFloatingButton />
        </div>
    )
}

export default Home
