import React, { useState } from "react"
import { Dispatch } from "react"

type ThemeContextProps = {
    theme?: string,
    setTheme: Dispatch<React.SetStateAction<'light' | 'dark'>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
    theme: undefined,
    setTheme: () => undefined
})

type Props = {
    children: React.ReactNode
}

export const ThemeProvider = ({children} : Props) => {
    
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}