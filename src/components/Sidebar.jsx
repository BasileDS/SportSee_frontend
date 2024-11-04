import "../styles/sidebar.css"


function Sidebar() {

  const year = new Date().getFullYear()

  return <div>
    <nav>

    </nav>
    <p className="copyright">{`Copyright, SportSee ${year}`}</p>
  </div>
  }
  
export default Sidebar
  