import FriendsToggleHeader from '@/features/friends/components/friendsToggleHeader'
import Header from '@/layouts/header'
import ReviewList from '@/features/review/components/reviewList'
import { reviewFeedList } from '@/consts/dummy'
import './styles.scss'

const ReviewFeed = () => {
    return (
        <div id="review-feed">
            <Header title="친구들이 다녀온 맛집" />
            <FriendsToggleHeader />
            <div className="review-list-container">
                <ReviewList reviews={reviewFeedList} />
            </div>
        </div>
    )
}

export default ReviewFeed
