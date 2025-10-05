import KakaoMap from '@/components/kakaoMap'
import HomeFloatingButton from '@/layouts/homeFloatingButton'
import './styles.scss'
const Map = () => {
    return (
        <div id="map">
            <HomeFloatingButton />
            <KakaoMap />
        </div>
    )
}

export default Map
