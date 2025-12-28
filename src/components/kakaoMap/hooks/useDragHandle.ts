import { useRef, useEffect } from 'react'

interface UseDragHandleProps {
    onDragStart: (e: React.MouseEvent | React.TouchEvent) => void
}

export const useDragHandle = ({ onDragStart }: UseDragHandleProps) => {
    const dragHandleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const dragHandle = dragHandleRef.current
        if (!dragHandle) return

        const handleTouchStart = (e: TouchEvent) => {
            onDragStart(e as unknown as React.MouseEvent | React.TouchEvent)
        }

        dragHandle.addEventListener('touchstart', handleTouchStart, { passive: false })

        return () => {
            dragHandle.removeEventListener('touchstart', handleTouchStart)
        }
    }, [onDragStart])

    return dragHandleRef
}
