import { useState } from "react";
import { useThemeContext } from "../contexts";
import { MenuItem } from "./MenuItem";

//export const MenuLateral: React.FC<{ children: React.ReactNode }>*/ = ({ children }) => {
export const SideMenu = () => {
  const { theme } = useThemeContext()
  const [xpand, setXpand] = useState(true)
  return <div style={{
    width: xpand ? '200px' : '60px',
    height: '100vh',
    display: 'flex',
    flexDirection: "column",
    backgroundColor: theme.background.paper
  }}>
    <div style={{
      width: '100%',
      height: xpand ? '160px' : '60px',
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: theme.background.divider
    }}>

      < img style={{
        width: xpand ? '96px' : '48px',
        height: xpand ? '96px' : '48px',
        margin: '4px',
        borderRadius: '50%'
      }}
        src="icons/avatar.jpg" alt="avatar" />
    </div>
    <div style={{ width: '100%', flex: 1, flexDirection: 'column' }}>
      <MenuItem {...{to:'/', text: "Home", matIcon: "home", xpand }} />
      <MenuItem {...{to:'/painel', text: "Painel", matIcon: "dashboard", xpand }} />
      <MenuItem {...{to:'/produtos', text: "Produtos", matIcon: "view_list", xpand }} />
      <MenuItem {...{to:'/fornecedores', text: "Fornecedores", matIcon: "factory", xpand }} />
      <MenuItem {...{to:'/clientes', text: "Clientes", matIcon: "group_add", xpand }} />
      <MenuItem {...{to:'/pedidos', text: "Pedidos", matIcon: "shopping_cart", xpand }} />
      <MenuItem {...{to:'/financeiro', text: "Financeiro", matIcon: "payments", xpand }} />
      <a href="#"
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'right',
        }}
        onClick={() => setXpand(!xpand)}
      >
        <span
          className="material-icons"
        >{xpand ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'}</span>
      </a>
    </div>
  </div >
  {/*
    <div style={{ display: 'flex' }}>
      {children}
    </div>
    </>
  */}
}
