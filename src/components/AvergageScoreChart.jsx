import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"
import { getTodayScore } from "../utils/getUserData"

function AvergageScoreChart (userData) {

    const { data, percentage } = getTodayScore(userData)

    const style = {
        backgroundColor: "#ffffff",
        borderRadius: "200px",
        boxShadow: "inset 0px 0px 0px 7px #FBFBFB"
    }

    return <>
        <div className="score">
            <p className="chart-title">Score</p>
            <p className="score-percentage">{percentage}</p>
            <p className="score-description">de votre objectif</p>
        </div>
        <ResponsiveContainer aspect={1/1} minWidth={180}>
            <RadialBarChart 
                innerRadius="115%"
                outerRadius="80%"
                data={data}
                startAngle={210}
                endAngle={-150}
                style={style}
                title="Hello"
            >
                <RadialBar dataKey="value" cornerRadius={37} />
            </RadialBarChart>
        </ResponsiveContainer>
    </>
}

export default AvergageScoreChart