import StarRating from '@/components/starRating'
import './styles.scss'

const RecommendRestaurant = () => {
    const restaurant = {
        friendName: '선영',
        name: '유이쯔',
        address: '서울특별시 강남구 도산대로 123',
        description: '연어 서비스로 줘서 감동이었고 너무 맛있음!!!!!!!!ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ',
        rating: 4.5,
    }
    return (
        <div id="recommend-restaurant">
            <img src="https://placehold.co/600x400" alt="recommend-restaurant" />
            <div className="recommend-restaurant-info">
                <p className="friend-name">
                    <span>{restaurant.friendName}</span>의 추천 맛집
                </p>
                <div className="header">
                    <p className="name">{restaurant.name}</p>
                    <StarRating rating={restaurant.rating} />
                </div>
                <p className="address">{restaurant.address}</p>
                <p className="description">{restaurant.description}</p>
            </div>
        </div>
    )
}

export default RecommendRestaurant
