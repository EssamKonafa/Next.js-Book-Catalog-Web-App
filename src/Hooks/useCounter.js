import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function useCounter() {

    //custom hook for gripping redux state of counter and setting it after the component mount and re-rendering with every new change
    const [favoritesCount, setFavoritesCount] = useState(0)
    const counterState = useSelector((state) => state.counter)

    useEffect(() => {
        setFavoritesCount(counterState.count)
    }, [counterState])

    return favoritesCount

}