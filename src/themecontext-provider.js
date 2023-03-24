import { createContext, useState } from "react"

export const ThemeContext = createContext({})

export default function ThemeContextProvider(props) {
    const [themeColor, setThemeColor] = useState('dark')


    const contextProvidervalue = {
        themeColor, setThemeColor
    }
    return <ThemeContext.Provider value={contextProvidervalue}>

        {props.children}
    </ThemeContext.Provider >
}