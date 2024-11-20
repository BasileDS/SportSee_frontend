/* eslint-disable react/prop-types */
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Text } from "recharts"
import "../styles/profil.css"
function AverageSessionChart ({averageSessions}) {


    const titleStyle = {
        color: "white",
        opacity: "50%",
        maxWidth: "150px"
    }

    const tooltipStyle = {
        color: "black",
        fontSize: "8px",
        fontWeight: 500,
        backgroundColor: "white",
        padding: "2px 10px"
    }

    const data = averageSessions.data.sessions
    const days = ["L", "M", "M", "J", "V", "S", "D"]
    const sessionsData = data.map( (session, i) => 
        session.day = { day: days[i], sessionLength: session.sessionLength  }
    )
    const firstAdditionalSessionData = (sessionsData[0].sessionLength + sessionsData[1].sessionLength) / 2
    const lastAdditionalSessionData = (sessionsData[5].sessionLength + sessionsData[6].sessionLength) / 2
    sessionsData.unshift({day: "", sessionLength: firstAdditionalSessionData})
    sessionsData.push({day: "", sessionLength: lastAdditionalSessionData})
    
    const tooltipBackground = document.createElement("div")
    tooltipBackground.setAttribute("id", "tooltipBackground")
    tooltipBackground.classList.add("tooltip-background")
    
    const setTooltipPosition = () => {
        const tooltipWrapper = document.querySelector("#tooltipWrapper")

        if (tooltipWrapper) {
            const rechartsWrapper = tooltipWrapper.parentElement.parentElement
            const tooltipTranslate = tooltipWrapper.parentElement.style.transform
            const xOffset = tooltipTranslate.match(/\(([^,]+),/)
            
            rechartsWrapper.prepend(tooltipBackground)
            tooltipBackground.style.transform = `translateX(calc(${xOffset && xOffset[1]} - 10px)`
            tooltipBackground.style.maxWidth = `calc(${rechartsWrapper.style.width} - ${xOffset && xOffset[1]} + 10px)`
        }
    }

    const removeTooltipBackground = () => {
        tooltipBackground.remove()
    }

     const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {

            return (
                <div id="tooltipWrapper">
                    <p style={tooltipStyle} >{`${payload[0].value} min`}</p>
                </div>
            )
        }

        return null
    }

    const renderLineChart = (
        <ResponsiveContainer >
            <LineChart
                data={sessionsData}
                onMouseLeave={removeTooltipBackground}
                onMouseMove={setTooltipPosition}
            >
                <XAxis
                    tick={{ fill:"white", opacity:"50%", fontSize:"12px" }}
                    dataKey={ (sessionsData) => sessionsData.day }
                    strokeWidth="0"
                    tickMargin="10"
                    padding={{left: -20, right: -20}}
                />
                <YAxis
                    domain={[0, 'dataMax + 50']}
                    hide={true}
                    // height={1000}
                    padding={{ top: 70, bottom: 35 }}
                />
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    stroke="white"
                    strokeWidth=".16em"
                    dot={false}
                    activeDot={{ r:3, stroke: "white", strokeOpacity:"0.198345", strokeWidth:"6" }}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    // trigger="click"
                    allowEscapeViewBox={{ x: true }}
                    cursor={false}

                />
                <Text scaleToFit={true} />
            </LineChart>
        </ResponsiveContainer>
    )

    return <>
        <p className="chart-title" style={titleStyle}>Durée moyenne des sessions</p>
        {renderLineChart}
        <div className="left-no-pointer-event"></div>
        <div className="right-no-pointer-event"></div>
        <div className="chart-line-gradient"></div>
    </>
}

export default AverageSessionChart