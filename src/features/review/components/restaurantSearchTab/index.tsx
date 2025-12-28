import { Place } from '@/components/kakaoMap/types'
import './styles.scss'
import Input from '@/components/input'
import { useState } from 'react'
import SearchModal from './searchTab'

const RestaurantSearchTab = ({
    onTabChange,
    selectedPlace,
    setSelectedPlace,
}: {
    onTabChange: () => void
    selectedPlace: Place | null
    setSelectedPlace: (place: Place | null) => void
}) => {
    const [openSearchTab, setOpenSearchTab] = useState(false)

    if (!openSearchTab) {
        return (
            <div id="restaurant-search-tab-main">
                <p className="description">어디에 다녀오셨나요?</p>
                <Input
                    id="restaurant-name"
                    line
                    readOnly
                    placeholder="식당 검색하기"
                    onClick={() => setOpenSearchTab(true)}
                />
            </div>
        )
    } else {
        return (
            <SearchModal selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} onTabChange={onTabChange} />
        )
    }
}

export default RestaurantSearchTab
