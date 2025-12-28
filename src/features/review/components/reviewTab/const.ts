import { IReview } from '../types'

export const starList: { label: string; value: keyof Omit<IReview, 'review'> }[] = [
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

/**
 * 리뷰 (별점 및 리뷰) 디폴트 값
 */
export const defaultReview: IReview = {
    taste: 0,
    atmosphere: 0,
    service: 0,
    affordable: 0,
    revisit: 0,
    review: '',
}
