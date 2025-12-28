import { useState, useRef, useCallback, useEffect } from 'react'
import { Place } from '../types'

interface Pagination {
    current: number
    last: number
    hasNext?: boolean
}

interface UseKakaoMapSearchProps {
    keyword?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map: any
    onPlacesChange?: (places: Place[]) => void
    filterRestaurants: (data: Place[]) => Place[]
    createMarkers: (data: Place[], shouldSetBounds: boolean) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    markersRef: React.MutableRefObject<any[]>
    markersDataRef: React.MutableRefObject<Place[]>
}

export const useKakaoMapSearch = ({
    keyword,
    map,
    onPlacesChange,
    filterRestaurants,
    createMarkers,
    markersRef,
    markersDataRef,
}: UseKakaoMapSearchProps) => {
    const [places, setPlaces] = useState<Place[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [hasNextPage, setHasNextPage] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [shouldAutoLoadNext, setShouldAutoLoadNext] = useState<boolean>(false)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const placesServiceRef = useRef<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paginationRef = useRef<any>(null)
    const currentKeywordRef = useRef<string>('')
    const onPlacesChangeRef = useRef(onPlacesChange)

    useEffect(() => {
        onPlacesChangeRef.current = onPlacesChange
    }, [onPlacesChange])

    const handlePlacesChange = useCallback((newPlaces: Place[]) => {
        setPlaces(newPlaces)
        onPlacesChangeRef.current?.(newPlaces)
    }, [])

    // pagination에서 다음 페이지 존재 여부 확인
    const getHasNext = useCallback((pagination: Pagination): boolean => {
        if (pagination.hasNext !== undefined) {
            return pagination.hasNext
        }
        return pagination.current < pagination.last
    }, [])

    // 검색 결과 처리 공통 로직
    const processSearchResults = useCallback(
        (data: Place[], pagination: Pagination, isFirstPage: boolean) => {
            const restaurantData = filterRestaurants(data)
            paginationRef.current = pagination

            if (isFirstPage) {
                markersDataRef.current = restaurantData
                handlePlacesChange(restaurantData)
                setPlaces(restaurantData)
                markersRef.current.forEach((m) => m.setMap(null))
                markersRef.current = []
                createMarkers(restaurantData, true)
            } else {
                setPlaces((prevPlaces) => {
                    const newPlaces = [...prevPlaces, ...restaurantData]
                    markersDataRef.current = newPlaces
                    handlePlacesChange(newPlaces)
                    return newPlaces
                })
                createMarkers(restaurantData, false)
            }

            setCurrentPage(pagination.current)

            const hasFilteredResults = restaurantData.length > 0
            const originalHasNext = getHasNext(pagination)
            const shouldSetHasNext = originalHasNext && hasFilteredResults
            setHasNextPage(shouldSetHasNext)

            // 필터링 후 결과가 없거나 적으면 자동으로 다음 페이지 로드
            if ((restaurantData.length === 0 || restaurantData.length < 10) && originalHasNext) {
                setShouldAutoLoadNext(true)
            } else {
                setShouldAutoLoadNext(false)
            }
        },
        [filterRestaurants, createMarkers, handlePlacesChange, getHasNext, markersRef, markersDataRef]
    )

    // 검색 초기화
    const resetSearch = useCallback(() => {
        setPlaces([])
        markersDataRef.current = []
        markersRef.current.forEach((m) => m.setMap(null))
        markersRef.current = []
        setCurrentPage(1)
        setHasNextPage(false)
        paginationRef.current = null
    }, [markersRef, markersDataRef])

    // 다음 페이지 로드
    const loadNextPage = useCallback(() => {
        if (!map || !window.kakao || isLoading || !currentKeywordRef.current || !hasNextPage) {
            return
        }

        setIsLoading(true)
        const kakao = window.kakao
        const ps = placesServiceRef.current || new kakao.maps.services.Places()
        if (!placesServiceRef.current) {
            placesServiceRef.current = ps
        }

        const nextPage = currentPage + 1

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const nextPageCallback = (data: Place[], status: string, pagination: any) => {
            setIsLoading(false)

            if (status === kakao.maps.services.Status.OK) {
                processSearchResults(data, pagination, false)
            } else {
                setHasNextPage(false)
                paginationRef.current = null
            }
        }

        ps.keywordSearch(currentKeywordRef.current, nextPageCallback, {
            page: nextPage,
            size: 15,
        })
    }, [map, hasNextPage, isLoading, currentPage, processSearchResults])

    // 키워드 검색 (첫 페이지)
    useEffect(() => {
        if (!map || !keyword || !window.kakao) {
            if (!keyword) {
                resetSearch()
            }
            return
        }

        if (currentKeywordRef.current !== keyword) {
            markersRef.current.forEach((m) => m.setMap(null))
            markersRef.current = []
            setPlaces([])
            setCurrentPage(1)
            setHasNextPage(false)
            currentKeywordRef.current = keyword
        }

        setIsLoading(true)
        const kakao = window.kakao
        const ps = new kakao.maps.services.Places()
        placesServiceRef.current = ps

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const placesSearchCB = (data: Place[], status: string, pagination: any) => {
            setIsLoading(false)

            if (status === kakao.maps.services.Status.OK) {
                processSearchResults(data, pagination, true)
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                resetSearch()
            } else {
                resetSearch()
            }
        }

        ps.keywordSearch(keyword, placesSearchCB, {
            page: 1,
            size: 15,
        })
    }, [keyword, map, processSearchResults, resetSearch, markersRef])

    // 자동 다음 페이지 로드
    useEffect(() => {
        if (shouldAutoLoadNext && hasNextPage && !isLoading && currentKeywordRef.current) {
            setShouldAutoLoadNext(false)
            loadNextPage()
        }
    }, [shouldAutoLoadNext, hasNextPage, isLoading, loadNextPage])

    return {
        places,
        currentPage,
        hasNextPage,
        isLoading,
        loadNextPage,
    }
}
