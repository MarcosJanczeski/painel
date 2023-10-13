import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts";
import { useState } from "react";

type PropsLink = {
  text: string,
  matIcon: string,
  category?: 'primary' | 'secondary'
}

export const MenuItem = ({ text, matIcon, category = 'primary' }: PropsLink) => {
  const { theme } = useThemeContext()
  const [style, setStyle] = useState({
    display: 'flex',
    with: '100%',
    padding: '0.8rem',
    alignItems: "center",
    backgroundColor: theme[category].fill,
    color: theme[category].text,
    borderBottom: theme.background.divider
  })
  const styleToggle = () => setStyle(current => ({
    ...current,
    backgroundColor: theme[category].fill === current.backgroundColor ? theme[category].fillHover : theme[category].fill
  }))

  return <Link
    style={style}
    onMouseEnter={styleToggle}
    onMouseLeave={styleToggle}
    to={"#"}>
    <span className="material-icons" style={{ marginRight: '0.8rem' }}>{matIcon}</span>
    {text}
  </Link>

}
