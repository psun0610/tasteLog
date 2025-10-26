import { useEffect, useRef, useState } from 'react'

export interface Place {
    id?: string
    place_name?: string
    address_name?: string
    road_address_name?: string
    y: string
    x: string
}

interface KakaoMapProps {
    keyword?: string // 검색 키워드
    markersData?: Place[] // 부모에서 직접 마커 데이터 전달 가능
    onMarkerClick?: (place: Place) => void // 마커 클릭 시 콜백
    onPlacesChange?: (places: Place[]) => void // 검색 결과 콜백
    center?: { lat: number; lng: number } // 지도 중심
    level?: number // 지도 확대 레벨
}

const KakaoMap: React.FC<KakaoMapProps> = ({
    keyword,
    markersData,
    onMarkerClick,
    onPlacesChange,
    center = { lat: 37.5665, lng: 126.978 },
    level = 3,
}) => {
    const mapContainer = useRef<HTMLDivElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [map, setMap] = useState<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const markersRef = useRef<any[]>([]) // 마커는 useRef로 관리

    // 콜백 함수들을 useRef로 관리하여 불필요한 리렌더링 방지
    const onMarkerClickRef = useRef(onMarkerClick)
    const onPlacesChangeRef = useRef(onPlacesChange)

    // 콜백 함수 업데이트
    useEffect(() => {
        onMarkerClickRef.current = onMarkerClick
    }, [onMarkerClick])

    useEffect(() => {
        onPlacesChangeRef.current = onPlacesChange
    }, [onPlacesChange])

    // SDK 동적 로딩 + 지도 초기화 (한 번만 실행)
    useEffect(() => {
        if (map) return // 이미 지도가 있으면 재생성하지 않음

        const loadKakaoSDK = () =>
            new Promise<void>((resolve) => {
                if (window.kakao) return resolve()
                const script = document.createElement('script')
                script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
                    import.meta.env.VITE_KAKAO_JS_KEY
                }&libraries=services`
                script.async = true
                script.onload = () => resolve()
                document.head.appendChild(script)
            })

        loadKakaoSDK().then(() => {
            if (!mapContainer.current) return
            const kakao = window.kakao
            const mapInstance = new kakao.maps.Map(mapContainer.current, {
                center: new kakao.maps.LatLng(center.lat, center.lng),
                level,
            })
            setMap(mapInstance)
        })
    }, []) // 의존성 배열을 비워서 한 번만 실행

    // 키워드 검색
    useEffect(() => {
        if (!map || !keyword || !window.kakao) return

        const kakao = window.kakao
        const ps = new kakao.maps.services.Places()

        // 기존 마커 제거
        markersRef.current.forEach((m) => m.setMap(null))
        markersRef.current = []

        ps.keywordSearch(keyword, (data: Place[], status: string) => {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds()

                data.forEach((place) => {
                    const marker = new kakao.maps.Marker({
                        map,
                        position: new kakao.maps.LatLng(place.y, place.x),
                    })

                    kakao.maps.event.addListener(marker, 'click', () => {
                        onMarkerClickRef.current?.(place)
                    })

                    markersRef.current.push(marker)
                    bounds.extend(new kakao.maps.LatLng(place.y, place.x))
                })

                map.setBounds(bounds)
                onPlacesChangeRef.current?.(data)
            } else {
                onPlacesChangeRef.current?.([])
            }
        })
    }, [keyword, map])

    // 부모가 직접 마커 전달 시
    useEffect(() => {
        if (!map || !markersData || !window.kakao) return

        const kakao = window.kakao

        // 기존 마커 제거
        markersRef.current.forEach((m) => m.setMap(null))
        markersRef.current = []

        const bounds = new kakao.maps.LatLngBounds()
        markersData.forEach((place) => {
            const marker = new kakao.maps.Marker({
                map,
                position: new kakao.maps.LatLng(place.y, place.x),
            })

            kakao.maps.event.addListener(marker, 'click', () => {
                onMarkerClickRef.current?.(place)
            })

            markersRef.current.push(marker)
            bounds.extend(new kakao.maps.LatLng(place.y, place.x))
        })

        if (markersData.length) map.setBounds(bounds)
    }, [markersData, map])

    return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
}

export default KakaoMap
