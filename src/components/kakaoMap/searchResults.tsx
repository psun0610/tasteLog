import { useRef, useEffect } from 'react'
import { Place } from './types'
import './SearchResults.scss'

interface SearchResultsProps {
    places: Place[]
    selectedPlaceId?: string | null
    resultsState: 'collapsed' | 'partial' | 'expanded'
    onPlaceSelect: (place: Place) => void
    onDragStart: (e: React.MouseEvent | React.TouchEvent) => void
}

const SearchResults: React.FC<SearchResultsProps> = ({
    places,
    selectedPlaceId,
    resultsState,
    onPlaceSelect,
    onDragStart,
}) => {
    const dragHandleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const dragHandle = dragHandleRef.current
        if (!dragHandle) return

        const handleTouchStart = (e: TouchEvent) => {
            onDragStart(e as any)
        }

        // 터치 이벤트를 passive: false로 수동 등록
        dragHandle.addEventListener('touchstart', handleTouchStart, { passive: false })

        return () => {
            dragHandle.removeEventListener('touchstart', handleTouchStart)
        }
    }, [onDragStart])

    if (places.length === 0) return null

    return (
        <div className={`search-results ${resultsState}`}>
            <div className="drag-handle" ref={dragHandleRef} onMouseDown={onDragStart}>
                <div className="drag-indicator"></div>
            </div>
            <div className="search-results-header">
                <h3>검색 결과 ({places.length}개)</h3>
            </div>
            <div className={`search-results-list ${resultsState === 'collapsed' ? 'collapsed' : 'expanded'}`}>
                {places.map((place, index) => (
                    <div
                        key={place.id || index}
                        className={`search-result-item ${selectedPlaceId === place.id ? 'selected' : ''}`}
                        onClick={() => onPlaceSelect(place)}
                    >
                        <div className="place-name">{place.place_name}</div>
                        <div className="place-address">{place.road_address_name || place.address_name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults
