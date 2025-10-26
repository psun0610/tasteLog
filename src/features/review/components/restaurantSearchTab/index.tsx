import KakaoMap from '@/components/kakaoMap'
import { Place } from '@/components/kakaoMap/types'
import './styles.scss'
import Input from '@/components/input'
import Button from '@/components/button'
import { useState, useCallback } from 'react'

const RestaurantSearchTab = ({ onTabChange }: { onTabChange: () => void }) => {
    const [keyword, setKeyword] = useState('')
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)

    const handleMarkerClick = useCallback((place: Place) => {
        setSelectedPlace(place)
    }, [])

    return (
        <div id="restaurant-search-tab">
            <p className="description">어디에 다녀오셨나요?</p>
            <Input id="restaurant-name" line onChange={(e) => setKeyword(e.target.value)} placeholder="식당 검색하기" />
            <div className="kakao-map-container">
                <KakaoMap
                    keyword={keyword}
                    onMarkerClick={handleMarkerClick}
                    selectedPlaceId={selectedPlace?.id || null}
                    showSearchResults={true}
                />
            </div>
            <Button onClick={onTabChange} className="primary large">
                이 장소 리뷰 쓰기
            </Button>
        </div>
    )
}

export default RestaurantSearchTab
