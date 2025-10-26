import KakaoMap from '@/components/kakaoMap'
import { Place } from '@/components/kakaoMap/types'
import './styles.scss'
import Input from '@/components/input'
import Button from '@/components/button'
import { useState, useCallback } from 'react'

const RestaurantSearchTab = ({ onTabChange }: { onTabChange: () => void }) => {
    const [keyword, setKeyword] = useState('')
    const [places, setPlaces] = useState<Place[]>([])
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
    const [resultsState, setResultsState] = useState<'collapsed' | 'partial' | 'expanded'>('partial')

    const handlePlacesChange = useCallback((newPlaces: Place[]) => {
        setPlaces(newPlaces)
    }, [])

    const handleMarkerClick = useCallback((place: Place) => {
        setSelectedPlace(place)
    }, [])

    const handlePlaceSelect = (place: Place) => {
        setSelectedPlace(place)
        // 선택된 장소로 지도 중심 이동 (필요시)
    }

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault()
        const startY = 'touches' in e ? e.touches[0].clientY : e.clientY
        const startState = resultsState
        let isDragging = false

        const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
            const currentY = 'touches' in moveEvent ? moveEvent.touches[0].clientY : moveEvent.clientY
            const deltaY = currentY - startY
            const threshold = 30

            // 드래그가 시작되었는지 확인
            if (Math.abs(deltaY) > 5) {
                isDragging = true
            }

            if (isDragging) {
                if (deltaY > threshold) {
                    // 아래로 드래그 - 접기
                    if (startState === 'expanded') {
                        setResultsState('partial')
                    } else if (startState === 'partial') {
                        setResultsState('collapsed')
                    }
                } else if (deltaY < -threshold) {
                    // 위로 드래그 - 펼치기
                    if (startState === 'collapsed') {
                        setResultsState('partial')
                    } else if (startState === 'partial') {
                        setResultsState('expanded')
                    }
                }
            }
        }

        const handleEnd = () => {
            isDragging = false
            document.removeEventListener('mousemove', handleMove)
            document.removeEventListener('mouseup', handleEnd)
            document.removeEventListener('touchmove', handleMove)
            document.removeEventListener('touchend', handleEnd)
        }

        // 마우스 이벤트
        document.addEventListener('mousemove', handleMove)
        document.addEventListener('mouseup', handleEnd)

        // 터치 이벤트
        document.addEventListener('touchmove', handleMove, { passive: false })
        document.addEventListener('touchend', handleEnd)
    }

    return (
        <div id="restaurant-search-tab">
            <p className="description">어디에 다녀오셨나요?</p>
            <Input id="restaurant-name" line onChange={(e) => setKeyword(e.target.value)} placeholder="식당 검색하기" />
            <div className="kakao-map-container">
                <KakaoMap keyword={keyword} onPlacesChange={handlePlacesChange} onMarkerClick={handleMarkerClick} />
                {places.length > 0 && (
                    <div className={`search-results ${resultsState}`}>
                        <div className="drag-handle" onMouseDown={handleDragStart} onTouchStart={handleDragStart}>
                            <div className="drag-indicator"></div>
                        </div>
                        <div className="search-results-header">
                            <h3>검색 결과 ({places.length}개)</h3>
                        </div>
                        <div
                            className={`search-results-list ${resultsState === 'collapsed' ? 'collapsed' : 'expanded'}`}
                        >
                            {places.map((place, index) => (
                                <div
                                    key={place.id || index}
                                    className={`search-result-item ${selectedPlace?.id === place.id ? 'selected' : ''}`}
                                    onClick={() => handlePlaceSelect(place)}
                                >
                                    <div className="place-name">{place.place_name}</div>
                                    <div className="place-address">{place.road_address_name || place.address_name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Button onClick={onTabChange} className="primary large">
                이 장소 리뷰 쓰기
            </Button>
        </div>
    )
}

export default RestaurantSearchTab
