import Input from '@/components/input'
import KakaoMap from '@/components/kakaoMap'
import { Place } from '@/components/kakaoMap/types'
import { useDebounce } from '@/hooks/useDebounce'
import { useCallback, useEffect, useRef, useState } from 'react'

interface SearchModalProps {
    setSelectedPlace: (place: Place | null) => void
    selectedPlace: Place | null
    onTabChange: () => void
}
const SearchTab = ({ selectedPlace, setSelectedPlace, onTabChange }: SearchModalProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [keyword, setKeyword] = useState('')
    const debouncedKeyword = useDebounce(keyword, 300)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handleMarkerClick = useCallback(
        (place: Place) => {
            setSelectedPlace(place)
            onTabChange()
        },
        [setSelectedPlace, onTabChange]
    )

    return (
        <div id="restaurant-search-tab">
            <Input
                ref={inputRef}
                line
                placeholder="식당 검색하기"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <KakaoMap
                keyword={debouncedKeyword}
                onMarkerClick={handleMarkerClick}
                selectedPlaceId={selectedPlace?.id || null}
                showSearchResults={true}
            />
        </div>
    )
}
export default SearchTab
