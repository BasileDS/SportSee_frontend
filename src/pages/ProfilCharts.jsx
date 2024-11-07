/* eslint-disable react/prop-types */

import { Suspense } from "react"
import { Await } from "react-router-dom"

function ProfilCharts ({ activities, averageSessions, performance }) {

    return (<div className="profil-charts-container">
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={activities}>
                {(activities) => <div className="chart-container daily-activity-chart-wrapper">
                    <div>{activities.data.sessions[0].day}</div>
                    <div>{activities.data.sessions[0].kilogram}</div>
                    <div>{activities.data.sessions[0].calories}</div>
                </div>}
            </Await>
        </Suspense>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={averageSessions}>
                {(averageSessions) => <div className="chart-container session-length-wrapper">
                    <div>{averageSessions.data.sessions[0].day}</div>
                    <div>{averageSessions.data.sessions[0].sessionLength}</div>
                </div>}
            </Await>
        </Suspense>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={performance}>
                {(performance) => <>
                    <div className="chart-container hexa-chart-wrapper">{performance.data.kind[1]}</div>
                </>}
            </Await>
        </Suspense>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={performance}>
                {(performance) => <>
                    <div className="chart-container score-chart-wrapper">{performance.data.kind[2]}</div>
                </>}
            </Await>
        </Suspense>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={performance}>
                {(performance) => <>
                    <div className="stats-container other">{performance.data.kind[2]}</div>
                </>}
            </Await>
        </Suspense>
    </div>)
}

export default ProfilCharts