import { useRef, useEffect, useCallback } from 'react'

interface UseInfiniteScrollProps {
    hasNextPage: boolean
    isLoading: boolean
    onLoadMore?: () => void
    threshold?: number
    itemsCount?: number // items가 변경될 때 스크롤 가능 여부 재확인을 위한 카운트
}

export const useInfiniteScroll = ({
    hasNextPage,
    isLoading,
    onLoadMore,
    threshold = 200,
    itemsCount = 0,
}: UseInfiniteScrollProps) => {
    const listRef = useRef<HTMLUListElement>(null)

    // 스크롤 핸들러
    const handleScroll = useCallback(() => {
        const list = listRef.current
        if (!list || !hasNextPage || isLoading || !onLoadMore) return

        const { scrollTop, scrollHeight, clientHeight } = list
        const distanceFromBottom = scrollHeight - scrollTop - clientHeight

        if (distanceFromBottom < threshold) {
            onLoadMore()
        }
    }, [hasNextPage, isLoading, onLoadMore, threshold])

    // 스크롤 이벤트 리스너 등록
    useEffect(() => {
        const list = listRef.current
        if (!list) return

        list.addEventListener('scroll', handleScroll)
        return () => {
            list.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    // 스크롤 가능 여부 확인 및 자동 로드
    useEffect(() => {
        const list = listRef.current
        if (!list || !hasNextPage || isLoading || !onLoadMore) return

        const checkScroll = () => {
            const { scrollHeight, clientHeight } = list
            const isScrollable = scrollHeight > clientHeight

            if (!isScrollable && hasNextPage && !isLoading) {
                onLoadMore()
            }
        }

        const timeoutId = setTimeout(checkScroll, 100)
        return () => clearTimeout(timeoutId)
    }, [itemsCount, hasNextPage, isLoading, onLoadMore])

    return listRef
}
