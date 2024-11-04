import sportseeLogo from "../assets/sportsee-logo.svg"
import "../styles/header.css"

function Header() {

  const menu = [
    "accueil",
    "profil",
    "réglage",
    "communauté"
  ]

  return <header>
    <img src={sportseeLogo} alt="SportSee Logo" />
    <nav>
      <ul>
        {menu.map( link =>
           <a href="#" key={`nav-${link}`}><li>{link}</li></a>
        )}
      </ul>
    </nav>
  </header>
}
  
export default Header
  