import { createContext, ReactNode, useCallback, useState } from "react"

interface IThemeContext {
  theme: 'light' | 'dark'
  toggle: () => void
}

const AppThemeContext = createContext({} as IThemeContext)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const toggle = useCallback(() => {
    setTheme(current => current === 'dark' ? 'light' : 'dark')
  }, [])
  const providerProps = {theme, toggle}
  return <AppThemeContext.Provider value={{theme, toggle}}>
    {children}
  </AppThemeContext.Provider>
}

