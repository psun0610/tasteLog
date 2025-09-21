import { useEffect, useRef } from 'react'

const KakaoMap = () => {
    const mapContainer = useRef<HTMLDivElement>(null)
    const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY

    useEffect(() => {
        const script = document.createElement('script')
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`
        script.async = true
        document.head.appendChild(script)

        script.onload = () => {
            const kakao = (window as any).kakao
            kakao.maps.load(() => {
                if (!mapContainer.current) return

                const map = new kakao.maps.Map(mapContainer.current, {
                    center: new kakao.maps.LatLng(37.5665, 126.978), // 서울
                    level: 3,
                })

                const marker = new kakao.maps.Marker({
                    position: map.getCenter(),
                })
                marker.setMap(map)
            })
        }
    }, [])

    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
}

export default KakaoMap
