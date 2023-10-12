import { createContext, FC, ReactNode, useCallback, useContext, useMemo, useState } from "react"
import { Box, ThemeProvider } from "@mui/material"
import { dark, light } from "../themes"

interface IThemeContext {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContext)

export const useTheme = ()=> useContext(ThemeContext)

export const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const toggleTheme = useCallback(() => {
    setTheme(current => current === 'dark' ? 'light' : 'dark')
  }, [])

  const _theme = useMemo(() => {
    return theme === 'light' ? light : dark
  }, [theme])


  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Box width={'100vw'} height={'100vh'} bgcolor={_theme.palette.background.default}>
        {children}
      </Box>
    </ThemeProvider>
  </ThemeContext.Provider>
}

