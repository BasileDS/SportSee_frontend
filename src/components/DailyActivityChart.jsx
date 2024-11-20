/* eslint-disable react/prop-types */
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts"

function DailyActivityChart ({activity}) {

    const dailyActivity = activity.data.sessions

    if (dailyActivity.length < 10) {
        const diff = 10 - dailyActivity.length

        for (let i = 0; i < diff; i++) {
            dailyActivity.push({ position: dailyActivity.length + i })
        }   
    }
    
    const dailyData = dailyActivity.map( (data, i) =>
        data = { day: data.day, kilogram: data.kilogram, calories: data.calories, position: i+1 }
    )


    const CustomizedLegend = (props) => {
        const { payload } = props

        const ulStyle = {
            display: "flex",
            gap: "20px",
            justifyContent: "end",
            marginTop: "0"
        }

        const liStyle = {
            listStyle: "none",
            fontSize: "14px",
            fontWeight: "500",
            textAlign: "right",
            color: "#74798C",
        }
        
        const legends = payload.map( legend => {
            const unit = legend.payload.unit
            const isCalories = legend.dataKey === "calories"
            const text = isCalories ? `Calories brûlées (${unit})` :  `Poids (${unit})`
            const bulletColor = isCalories ? "#E60000" : "#282D30"

            return <li key={`bar-chart-${legend.dataKey}`} style={liStyle} >
                    <svg width="15" height="15" viewBox="0 -2 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z" fill={bulletColor} />
                    </svg>
                    {text}
                </li>
        })

        const legendReder = (
            <ul style={ulStyle}>
                {legends}
            </ul>
        )

        return legendReder
    }

    const CustomTooltip = ({ active, payload }) => {
        
        if (active && payload) {
            const tooltipStyle = {
                backgroundColor: "#E60000",
                width: "39px",
                height: "63px",
                display: "grid",
                placeContent: "center",
                marginLeft: "30px",
                marginBottom: "30px"
            } 
            
            const textStyle = {
                color: "white",
                fontSize: "7px",
                fontWeight: "500",
                textAlign: "center",
                margin: "0"
            } 
    
            const tooltipData = payload.map( data => <p key={data.name} style={textStyle}>{`${data.value}${data.unit}`}</p> )
    
            const tooltip = (
                <div style={tooltipStyle}>
                    {tooltipData}
                </div>
            )
    
            return tooltip
        }

        return null
    }

    const renderBarChart = (
        <ResponsiveContainer 
            height={320}
        >
            <BarChart
                data={dailyData}
                margin={{ top: 50, right: 15, bottom: 35, left: 20 }}
                barGap="8"
            >
                <CartesianGrid 
                    strokeDasharray="3 2"
                    strokeOpacity={0.5}
                    vertical={false}
                />
                <XAxis
                    dataKey="position"
                    stroke="#9B9EAC"
                    tickMargin={25}
                    tickSize={0}
                    padding={{ left: -10, right: -10 }}
                />
                <YAxis
                    yAxisId="kg"
                    dataKey="kilogram"
                    domain={["dataMin - 2", "dataMax + 1"]}
                    tickCount="3"
                    tickLine={false}
                    axisLine={false}
                    orientation="right"
                    stroke="#9B9EAC"
                    tickMargin={35}
                    strokeOpacity={0}
                    strokeDashoffset={100}
                />
                <YAxis
                    yAxisId="kcal"
                    dataKey="calories"
                    domain={["dataMin", "dataMax + 50"]}
                    tickLine={false}
                    tickCount="0"
                    axisLine={false}
                    hide={true}
                />
                <Tooltip 
                    content={<CustomTooltip />}
                />
                <Legend
                    content={<CustomizedLegend />}
                    layout="horizontal"
                    align="right"
                    verticalAlign="top"
                    wrapperStyle={{ top: 10, right: 15 }}
                />
                <Bar
                    yAxisId="kg"
                    dataKey="kilogram"
                    fill="#282D30"
                    barSize="8"
                    unit="kg"
                    radius={[100, 100, 0, 0]}
                    minPointSize={5}
                />
                <Bar
                    yAxisId="kcal"
                    dataKey="calories"
                    fill="#E60000"
                    barSize="8"
                    unit="Kcal"
                    scale="log"
                    minPointSize={5}
                    radius={[100, 100, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    )

    return <>
        <p className="chart-title" >Durée moyenne des sessions</p>
        {renderBarChart}
    </>
}

export default DailyActivityChart