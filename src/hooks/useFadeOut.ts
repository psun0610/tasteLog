import { useEffect, useState } from 'react'

const useFadeOut = (isVisible: boolean, duration = 300) => {
    const [shouldRender, setShouldRender] = useState(isVisible)
    const [isFadingOut, setIsFadingOut] = useState(false)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        if (isVisible) {
            setShouldRender(true)
            setIsFadingOut(false)
        } else {
            setIsFadingOut(true)
            timeoutId = setTimeout(() => {
                setShouldRender(false)
            }, duration)
        }
        return () => clearTimeout(timeoutId)
    }, [isVisible, duration])

    return { shouldRender, isFadingOut }
}

export default useFadeOut
