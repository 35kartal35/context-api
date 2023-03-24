import { useContext } from "react"
import { ThemeContext } from "./themecontext-Provider"

export default function Footer() {
    const ThemeContextValue = useContext(ThemeContext)
    return (
        <div>
            burası footer, tema Rengi: {ThemeContextValue.themecolor}
        </div>
    )
}