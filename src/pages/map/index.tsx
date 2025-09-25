import Button from '@/components/button'
import FloatingButtonGroup from '@/components/floatingButtonGroup'
import KakaoMap from '@/components/kakaoMap'
import FriendsToggle from '@/features/friends/components/friendsToggle'
import useHomeFloatingButton from '@/hooks/useHomeFloatingButton'

const Map = () => {
    const { buttonList, mainIcon, isToggleOpen, setIsToggleOpen } = useHomeFloatingButton()

    return (
        <div id="map">
            <KakaoMap />
            <FloatingButtonGroup mainIcon={mainIcon} buttons={buttonList} />
            <FriendsToggle isOpen={isToggleOpen} onClose={() => setIsToggleOpen(false)} />
        </div>
    )
}

export default Map
