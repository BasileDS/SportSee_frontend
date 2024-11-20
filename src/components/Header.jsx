import { NavLink, useOutletContext } from "react-router-dom"

import sportseeLogo from "../assets/sportsee-logo.svg"
import "../styles/header.css"

function Header() {

  const [userId] = useOutletContext()
  
  const logoStyle = {
    marginLeft: "15px"
  }

  const menu = [
    {
      title: "Accueil",
      path: `/dashboard/${userId}`
    }, 
    {
      title: "Profil",
      path: `profil/${userId}`
    }, 
    {
      title: "Réglage",
      path: `reglage/${userId}`
    }, 
    {
      title: "Communauté",
      path: `communaute/${userId}`
    }
  ]

  return <header>
    <img src={sportseeLogo} alt="SportSee Logo" style={logoStyle} />
    <nav> 
      <ul>
        {menu.map( link =>
          <NavLink
            to={link.path}
            id={`nav-${link.title}`}
            key={`nav-${link.title}`}>
            <li>
              {link.title.charAt(0).toUpperCase() + link.title.slice(1)}
            </li>
          </NavLink>
        )}
      </ul>
    </nav>
  </header>
}
  
export default Header
  