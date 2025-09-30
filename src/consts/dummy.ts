import { IReview } from '@/features/review/components/reviewList/types'

export const reviews: IReview[] = [
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
    {
        id: 3,
        nickname: '길동',
        restaurantName: '현풍 닭칼국수',
        starRating: 4.3,
        reviewContent:
            '걍 지금 먹고 싶은 거 ㅎ 닭칼 김치 겁나 먹고싶다ㅠㅠㅠㅠ 아무말아무말 리뷰리뷰 참 맛있어용 호호호호호호호호ㅎㅎㅎ',
    },
]

export const reviewFeedList: IReview[] = [
    {
        id: 1,
        nickname: '선영',
        restaurantName: '유이쯔',
        starRating: 5,
        reviewContent: '연어 서비스로 줘서 감동이었고 너무 맛있음',
        imageSrc: 'https://placehold.co/600x400',
    },
    {
        id: 2,
        nickname: '준석',
        restaurantName: '유이쯔',
        starRating: 4.3,
        reviewContent: '연어 서비스로 줘서 감동이었고 너무 맛있음',
        imageSrc: 'https://placehold.co/600x400',
    },
    {
        id: 3,
        nickname: '길동',
        restaurantName: '현풍 닭칼국수',
        starRating: 4.3,
        reviewContent:
            '걍 지금 먹고 싶은 거 ㅎ 닭칼 김치 겁나 먹고싶다ㅠㅠㅠㅠ 아무말아무말 리뷰리뷰 참 맛있어용 호호호호호호호호ㅎㅎㅎ',
        imageSrc: 'https://placehold.co/600x400',
    },
]
