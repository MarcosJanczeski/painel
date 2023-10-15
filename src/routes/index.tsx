import { Routes, Route, Navigate } from "react-router-dom"
import { useThemeContext } from "../shared/contexts"

export const AppRoutes = () => {
  const {theme, toggleTheme} = useThemeContext()
  return (
    <Routes>
      <Route path="/" element={<h1>HOME</h1>} />
      <Route path="/painel" element={<h1>PAINEL</h1>} />
      <Route path="/produtos" element={<h1>PRODUTOS</h1>} />
      <Route path="/fornecedores" element={<h1>FORNECEDORES</h1>} />
      <Route path="/clientes" element={<h1>CLIENTES</h1>} />
      <Route path="/pedidos" element={<h1>PEDIDOS</h1>} />
      <Route path="/financeiro" element={<h1>FINANCEIRO</h1>} />

      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  )
}
