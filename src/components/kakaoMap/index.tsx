import { useEffect, useRef, useState, useCallback } from 'react'
import { Place } from './types'
import SearchResults from './searchResults'
import { useKakaoMapSearch } from './hooks/useKakaoMapSearch'
import './styles.scss'

interface KakaoMapProps {
    keyword?: string // 검색 키워드
    markersData?: Place[] // 부모에서 직접 마커 데이터 전달 가능
    onMarkerClick?: (place: Place) => void // 마커 클릭 시 콜백
    onPlacesChange?: (places: Place[]) => void // 검색 결과 콜백
    center?: { lat: number; lng: number } // 지도 중심
    level?: number // 지도 확대 레벨
    selectedPlaceId?: string | null // 선택된 장소 ID (부모에서 제어)
    showSearchResults?: boolean // 검색 결과 표시 여부
}

const KakaoMap: React.FC<KakaoMapProps> = ({
    keyword,
    markersData,
    onMarkerClick,
    onPlacesChange,
    center = { lat: 37.5665, lng: 126.978 },
    level = 3,
    selectedPlaceId = null,
    showSearchResults = true,
}) => {
    const mapContainer = useRef<HTMLDivElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [map, setMap] = useState<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const markersRef = useRef<any[]>([])
    const markersDataRef = useRef<Place[]>([])
    const [resultsState, setResultsState] = useState<'collapsed' | 'partial' | 'expanded'>('partial')
    const onMarkerClickRef = useRef(onMarkerClick)

    useEffect(() => {
        onMarkerClickRef.current = onMarkerClick
    }, [onMarkerClick])

    // 장소 선택 핸들러
    const handlePlaceSelect = useCallback((place: Place) => {
        onMarkerClickRef.current?.(place)
    }, [])

    // 드래그 핸들러
    const handleDragStart = useCallback(
        (e: React.MouseEvent | React.TouchEvent) => {
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

            // 터치 이벤트 - passive: false로 설정하여 preventDefault 사용 가능
            document.addEventListener('touchmove', handleMove, { passive: false })
            document.addEventListener('touchend', handleEnd)
        },
        [resultsState]
    )

    // 주황색 마커 이미지 생성 함수
    const createOrangeMarkerImage = () => {
        if (!window.kakao) return null

        const kakao = window.kakao
        const imageSrc =
            'data:image/svg+xml;base64,' +
            btoa(`
            <svg width="24" height="35" viewBox="0 0 24 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.4 0 0 5.4 0 12c0 12 12 23 12 23s12-11 12-23c0-6.6-5.4-12-12-12z" fill="#FF6B35"/>
                <circle cx="12" cy="12" r="6" fill="white"/>
            </svg>
        `)

        return new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(24, 35), {
            offset: new kakao.maps.Point(12, 35),
        })
    }

    // 선택된 장소로 지도 중심 이동
    const moveToSelectedPlace = (place: Place) => {
        if (!map || !window.kakao) return

        const kakao = window.kakao
        const moveLatLon = new kakao.maps.LatLng(place.y, place.x)

        // 검색결과 상태에 따라 지도 중심 위치 조정
        if (resultsState === 'partial') {
            // partial 상태일 때는 상단 75% 지점에 위치하도록 오프셋 조정
            const bounds = map.getBounds()
            const sw = bounds.getSouthWest() // 남서쪽 모서리
            const ne = bounds.getNorthEast() // 북동쪽 모서리
            const latDiff = ne.getLat() - sw.getLat() // 위도 차이
            const offsetLat = -latDiff * 0.25 // 상단 25% 오프셋 (75% 지점에 위치)

            // 오프셋을 적용한 새로운 중심점 계산
            const newCenter = new kakao.maps.LatLng(
                moveLatLon.getLat() + offsetLat, // 위도에 오프셋 추가
                moveLatLon.getLng()
            )

            // 지도 중심을 부드럽게 이동
            map.panTo(newCenter)
        } else {
            // collapsed나 expanded 상태일 때는 중앙에 위치
            map.panTo(moveLatLon)
        }
    }

    // SDK 동적 로딩 + 지도 초기화
    useEffect(() => {
        if (map) return

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
    }, [])

    // 식당 필터링 함수
    const filterRestaurants = useCallback((data: Place[]): Place[] => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return data.filter((place: any) => {
            const categoryCode = place.category_group_code
            const categoryName = place.category_name || ''
            return (
                categoryCode === 'FD6' ||
                categoryName.includes('음식점') ||
                categoryName.includes('식당') ||
                categoryName.includes('레스토랑') ||
                categoryName.includes('카페')
            )
        })
    }, [])

    // 마커 생성 함수
    const createMarkers = useCallback(
        (restaurantData: Place[], shouldSetBounds: boolean = false) => {
            if (!map || !window.kakao) return

            const kakao = window.kakao
            const bounds = new kakao.maps.LatLngBounds()

            restaurantData.forEach((place) => {
                const marker = new kakao.maps.Marker({
                    map,
                    position: new kakao.maps.LatLng(place.y, place.x),
                })

                marker.place = place

                kakao.maps.event.addListener(marker, 'click', () => {
                    moveToSelectedPlace(place)
                    onMarkerClickRef.current?.(place)
                })

                markersRef.current.push(marker)
                bounds.extend(new kakao.maps.LatLng(place.y, place.x))
            })

            if (shouldSetBounds && restaurantData.length > 0) {
                map.setBounds(bounds)
            }
        },
        [map, resultsState]
    )

    // 검색 훅 사용
    const { places, hasNextPage, isLoading, loadNextPage } = useKakaoMapSearch({
        keyword,
        map,
        onPlacesChange,
        filterRestaurants,
        createMarkers,
        markersRef,
        markersDataRef,
    })

    // 부모가 직접 마커 전달 시
    useEffect(() => {
        if (!map || !markersData || !window.kakao) return

        const kakao = window.kakao

        // 기존 마커 제거
        markersRef.current.forEach((m) => m.setMap(null))
        markersRef.current = []

        const bounds = new kakao.maps.LatLngBounds()
        markersDataRef.current = markersData // 마커 데이터 저장

        markersData.forEach((place) => {
            const marker = new kakao.maps.Marker({
                map,
                position: new kakao.maps.LatLng(place.y, place.x),
            })

            // 마커에 place 정보 저장
            marker.place = place

            kakao.maps.event.addListener(marker, 'click', () => {
                moveToSelectedPlace(place)
                onMarkerClickRef.current?.(place)
            })

            markersRef.current.push(marker)
            bounds.extend(new kakao.maps.LatLng(place.y, place.x))
        })

        if (markersData.length) {
            map.setBounds(bounds)
            markersDataRef.current = markersData
        }
    }, [markersData, map])

    // 선택된 마커 업데이트 (지도 리렌더링 없이)
    useEffect(() => {
        if (!map || !window.kakao || !markersRef.current.length) return

        // 모든 마커의 이미지를 기본으로 리셋
        markersRef.current.forEach((marker) => {
            marker.setImage(undefined)
        })

        // 선택된 마커가 있으면 주황색으로 변경하고 지도 중심 이동
        if (selectedPlaceId) {
            const selectedMarker = markersRef.current.find((marker) => {
                return marker.place && marker.place.id === selectedPlaceId
            })

            if (selectedMarker) {
                selectedMarker.setImage(createOrangeMarkerImage())
                // 선택된 장소로 지도 중심 이동
                moveToSelectedPlace(selectedMarker.place)
            }
        }
    }, [selectedPlaceId, map, resultsState])

    return (
        <div className="kakao-map-wrapper">
            <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
            {showSearchResults && (
                <SearchResults
                    places={places}
                    selectedPlaceId={selectedPlaceId}
                    resultsState={resultsState}
                    onPlaceSelect={handlePlaceSelect}
                    onDragStart={handleDragStart}
                    onLoadMore={loadNextPage}
                    hasNextPage={hasNextPage}
                    isLoading={isLoading}
                />
            )}
        </div>
    )
}

export default KakaoMap
