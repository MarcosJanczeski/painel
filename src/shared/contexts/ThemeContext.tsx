import { createContext, FC, ReactNode, useCallback, useContext, useState } from "react"
import { AppTheme, darkTheme, lightTheme } from "../themes"

interface IThemeContext {
  theme: AppTheme
  toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContext)

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(darkTheme)
  const toggleTheme = useCallback(() => {
    setTheme(current => current.title === 'dark' ? lightTheme : darkTheme)
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div style={{
      display: "flex",
      alignItems: 'start',
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.background.default,
      color: theme.primary.text
    }}>
      {children}
    </div>
  </ThemeContext.Provider>
}

