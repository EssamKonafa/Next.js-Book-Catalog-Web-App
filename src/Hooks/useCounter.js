import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function useCounter() {

    const [favoritesCount, setFavoritesCount] = useState(0)
    const counterState = useSelector((state) => state.counter)

    useEffect(() => {
        setFavoritesCount(counterState.count)
    }, [counterState])

    return favoritesCount

}