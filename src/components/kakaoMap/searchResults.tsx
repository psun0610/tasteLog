import { Place } from './types'
import { useInfiniteScroll } from './hooks/useInfiniteScroll'
import { useDragHandle } from './hooks/useDragHandle'
import './searchResults.scss'

interface SearchResultsProps {
    places: Place[]
    selectedPlaceId?: string | null
    resultsState: 'collapsed' | 'partial' | 'expanded'
    onPlaceSelect: (place: Place) => void
    onDragStart: (e: React.MouseEvent | React.TouchEvent) => void
    onLoadMore?: () => void
    hasNextPage?: boolean
    isLoading?: boolean
}

const SearchResults: React.FC<SearchResultsProps> = ({
    places,
    selectedPlaceId,
    resultsState,
    onPlaceSelect,
    onDragStart,
    onLoadMore,
    hasNextPage = false,
    isLoading = false,
}) => {
    const dragHandleRef = useDragHandle({ onDragStart })
    const listRef = useInfiniteScroll({
        hasNextPage,
        isLoading,
        onLoadMore,
        itemsCount: places.length,
    })

    if (places.length === 0) {
        return <></>
    }

    return (
        <div className={`search-results ${resultsState}`}>
            <div className="drag-handle" ref={dragHandleRef} onMouseDown={onDragStart} onTouchStart={onDragStart}>
                <div className="drag-indicator"></div>
            </div>

            <ul
                ref={listRef}
                className={`search-results-list ${resultsState === 'collapsed' ? 'collapsed' : 'expanded'}`}
            >
                {places.map((place, index) => (
                    <li
                        key={place.id || index}
                        className={`search-result-item ${selectedPlaceId === place.id ? 'selected' : ''}`}
                        onClick={() => onPlaceSelect(place)}
                    >
                        <div className="place-name">{place.place_name}</div>
                        <div className="place-address">{place.road_address_name || place.address_name}</div>
                    </li>
                ))}
                {!hasNextPage && places.length > 0 && <div className="no-more-results">모든 결과를 불러왔습니다</div>}
            </ul>
        </div>
    )
}

export default SearchResults
