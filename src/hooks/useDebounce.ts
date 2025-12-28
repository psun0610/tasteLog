import { useEffect, useState } from 'react'

/**
 * 입력값에 디바운스를 적용하는 훅
 * @param value 디바운스를 적용할 값
 * @param delay 디바운스 지연 시간 (밀리초)
 * @returns 디바운스가 적용된 값
 */
export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}
