'use client'
import { Provider } from "react-redux"
import { store } from "./store"


//provider to make the redux store be clear for all of the components 
export function TheProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}