/* eslint-disable react/jsx-key */
import "../styles/sidebar.css"

function Sidebar() {
  const year = new Date().getFullYear()

  const navOptions = [
    {
      title: "yoga", 
      src: ""
    },
    {
      title: "swim", 
      src: ""
    },
    {
      title: "bicycle", 
      src: ""
    },
    {
      title: "exercice", 
      src: ""
    }
  ]

  return <>
    <div className="sidebar">
      <nav>
        {navOptions.map( activity => 
          <p>{activity.title}</p>
        )}
      </nav>
      <p className="copyright">{`Copyright, SportSee ${year}`}</p>
    </div>
  </>
  }
  
export default Sidebar
  