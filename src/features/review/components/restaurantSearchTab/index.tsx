import Button from '@/components/button'
import './styles.scss'

const RestaurantSearchTab = ({ onTabChange }: { onTabChange: () => void }) => {
    return (
        <div id="restaurant-search-tab">
            <p className="description">어디에 다녀오셨나요?</p>
            <Button text="검색" onClick={onTabChange} color="green" />
        </div>
    )
}

export default RestaurantSearchTab
