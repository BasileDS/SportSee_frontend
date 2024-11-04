import InfoMessage from "../components/InfoMessage"
import TitleHeading from "../components/TitleHeading"

import "../styles/dashboard.css"

function Dashboard () {

    const userName = "Basile"

    return <div>
        <TitleHeading title={"Bonjour"} variable={userName} heading={1} />
        <InfoMessage />
    </div>
}

export default Dashboard