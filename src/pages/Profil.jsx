/* eslint-disable react/prop-types */

import { Suspense } from "react"

import InfoMessage from "../components/InfoMessage"
import Heading from "../components/Heading"

import "../styles/profil.css"
import { Await, useLoaderData } from "react-router-dom"
import ProfilCharts from "./profilCharts"

export default function Profil () {

    const {userData, activities, averageSessions, performance} = useLoaderData()

    return <>
        <Suspense fallback={"CHARGEMENT"}>
            <Await resolve={userData}>
                {(userData) => 
                    <div className="profil-content-wrapper">
                        <div className="profil-content">
                            <Heading title={"Bonjour"} variable={userData?.data?.userInfos?.firstName} heading={1} />
                            <InfoMessage />
                            <ProfilCharts activities={activities} averageSessions={averageSessions} performance={performance}/>
                        </div>
                    </div>
                }
            </Await>
        </Suspense>
    </>
}



/*
Plutôt que de passer une fonction prenant la promesse en paramètre pour afficher les contenu jsx,
il est possible d'afficher un composant en récupérant la valeur de la promesse via useAsyncValue cf. ci-dessous

    function HeadingContent () {
        const userData = useAsyncValue()

        return <div className="main-content">
            <Heading title={"Bonjour"} variable={userData?.data?.userInfos?.firstName} heading={1} />
            <InfoMessage />
        </div>
    }


*/