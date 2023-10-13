import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts";
import { MenuItem } from "./MenuItem";

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext()
  return <>
    <div style={{
      width: '200px',
      height: '100vh',
      display: 'flex',
      flexDirection: "column",
      backgroundColor: theme.background.paper
    }}>
      <div style={{
        width: '100%',
        height: '160px',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: theme.background.divider
      }}>
        < img style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%'
        }}
          src="avatar.jpg" />
      </div>
      <div style={{ width: '100%', flex: 1 , flexDirection: 'column'}}>
        <MenuItem text="Home" matIcon="home"/>
        <MenuItem text="Painel" matIcon="dashboard"/>
        <MenuItem text="Produtos" matIcon="view_list"/>
        <MenuItem text="Fornecedores" matIcon="factory"/>
      </div>
    </div >
    <div style={{display: 'flex'}}>
      {children}
    </div>
  </>
}
