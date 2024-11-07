/* eslint-disable react/jsx-key */
import "../styles/sidebar.css"
import "../styles/sidebarIcon.css"

import { NavLink } from "react-router-dom"

import bicycleIcon from "../assets/icons/bicycle.svg"
import swimIcon from "../assets/icons/swim.svg"
import weightIcon from "../assets/icons/weight.svg"
import yogaIcon from "../assets/icons/yoga.svg"

function Sidebar() {
  const year = new Date().getFullYear()

  const navOptions = [
    {
      title: "yoga", 
      src: yogaIcon
    },
    {
      title: "swim", 
      src: swimIcon
    },
    {
      title: "bicycle", 
      src: bicycleIcon
    },
    {
      title: "weight", 
      src: weightIcon
    }
  ]

  return <>
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navOptions.map( activity =>
          <NavLink className="sidebar-icon-container" to={activity.title} key={`icon-${activity.title}`} >
            <img
                src={activity.src}
                className="sidebar-icon"
                alt={`icon ${activity.title}`}
            />
          </NavLink>
        )}
      </nav>
      <p className="copyright">{`Copyright, SportSee ${year}`}</p>
    </aside>
  </>
  }
  
export default Sidebar
  