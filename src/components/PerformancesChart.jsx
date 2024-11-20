import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"

function PerformancesChart ({performance}) {

    const perfomancesByCategory = performance.data.data
    const categories = performance.data.kind

    const categoriesFr = Object.entries(categories).map( (category) => {
        switch (category[1]) {
            case "cardio":
                return "Cardio"
                
            case "energy":
                return "Énergie"

            case "endurance":
                return "Endurance"
                
            case "strength":
                return "Force"
                
            case "speed":
                return "Vitesse"
                
            case "intensity":
                return "Intensité"
                
            default:
                break;
        }
    })
    
    const performanceData = perfomancesByCategory.map( (category, i) => 
        category.kind = { value: category.value, kind: categoriesFr[i] }
    )

    return (
        <ResponsiveContainer aspect={1/1}>
            <RadarChart 
                outerRadius={80}
                data={performanceData.reverse()}
                
            >
                <PolarGrid radialLines={false}  />
                <PolarAngleAxis dataKey="kind" tick={{ fill:"white", fontSize:"12" }}/>
                <PolarRadiusAxis axisLine={false} tick={false}  />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default PerformancesChart