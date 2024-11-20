/* eslint-disable react/prop-types */

import { Suspense } from "react"
import { Await } from "react-router-dom"

import AverageSessionChart from "../components/AverageSessionChart"
import KeyNumberCard from "../components/KeyNumberCard"
import PerformancesChart from "../components/PerformancesChart"
import AvergageScoreChart from "../components/AvergageScoreChart"

import "../styles/key-number-card.css"
import DailyActivityChart from "../components/DailyActivityChart"

function ProfilCharts ({ userData, activity, averageSessions, performance }) {

    
    return (<div className="profil-charts-container">
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={activity}>
                {(activity) => <div className="chart-container daily-activity-chart-wrapper">
                    <DailyActivityChart activity={activity} />
                </div>}
            </Await>
        </Suspense>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={averageSessions}>
                {(averageSessions) => <div className="chart-container session-length-wrapper">
                    <AverageSessionChart averageSessions={averageSessions} />
                </div>}
            </Await>
        </Suspense>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={performance}>
                {(performance) => <div className="chart-container hexa-chart-wrapper">
                    <PerformancesChart performance={performance} />
                </div>}
            </Await>
        </Suspense>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={userData}>
                {(userData) => <div className="chart-container score-chart-wrapper">
                        <AvergageScoreChart userData={userData} />
                    </div>}
            </Await>
        </Suspense>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={userData}>
                {(userData) => <div className="key-user-data">
                    {
                        Object.entries(userData.data.keyData).map( keyData =>
                            <KeyNumberCard keyData={keyData} key={keyData[0]}/>
                        )
                    }
                </div>}
            </Await>
        </Suspense>
    </div>)
}

export default ProfilCharts