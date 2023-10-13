import { Routes, Route, Navigate } from "react-router-dom"
import { useThemeContext } from "../shared/contexts"

export const AppRoutes = () => {
  const {theme, toggleTheme} = useThemeContext()
  return (
    <Routes>
      <Route path="/" element={<button style={{backgroundColor: theme.secondary.fill, padding: '8px 16px'}} onClick={toggleTheme}>TOGGLE THEME</button>} />

      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  )
}
