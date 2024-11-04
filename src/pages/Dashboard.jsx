import Header from "../components/header"
import InfoMessage from "../components/InfoMessage"
import Sidebar from "../components/Sidebar"
import TitleHeading from "../components/TitleHeading"

import "../styles/dashboard.css"

function Dashboard () {

    const userName = "Basile"

    return <>
        <Header />
        <Sidebar />
        <div>
            <TitleHeading title={"Bonjour"} variable={userName} heading={1} />
            <InfoMessage />
        </div> 
    </>
}

export default Dashboard