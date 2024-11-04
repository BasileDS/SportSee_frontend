import { NavLink } from "react-router-dom"

import sportseeLogo from "../assets/sportsee-logo.svg"


import "../styles/header.css"

function Header() {

  const menu = [
    {
      title: "Accueil",
      path: "/"
    }, 
    {
      title: "Profil",
      path: "/profil"
    }, 
    {
      title: "Réglage",
      path: "/reglage"
    }, 
    {
      title: "Communauté",
      path: "/communaute"
    }
  ]

  return <header>
    <img src={sportseeLogo} alt="SportSee Logo" />
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
  