import energy from "../assets/icons/energy.svg"
import chicken from "../assets/icons/chicken.svg"
import cheeseburger from "../assets/icons/cheeseburger.svg"
import apple from "../assets/icons/apple.svg"

function KeyNumberCard (keyData) {
        
    const dataType = keyData.keyData[0]       
    let dataNumber = keyData.keyData[1]
    let dataTitle = ""
    let dataIcon = ""
    let dataUnit = "g"
    let dataColor = ""

    switch (dataType) {
        case "calorieCount":
            dataNumber = (dataNumber / 1000).toFixed(3).replace(/\./g, ",")
            dataTitle = "Calories"
            dataIcon = energy
            dataUnit = "kCal"
            dataColor = "#fbeaea"
            break

        case "proteinCount":
            dataTitle = "Proteines"
            dataIcon = chicken
            dataColor = "#e9f4fb"
            break

        case "carbohydrateCount":
            dataTitle = "Glucides"
            dataIcon = apple
            dataColor = "#faf6e5"
            break

        case "lipidCount":
            dataTitle = "Lipides"
            dataIcon = cheeseburger
            dataColor = "#fbeaef"
            break
    
        default:
            break;
    }

    const style = {
        backgroundColor: `${dataColor}`,
        borderRadius: "6px"
    }

    return <div className="key-data">
            <div className="key-data-img-wrapper" style={style} ><img className="key-data-img" src={dataIcon} alt={`${dataTitle}-icon`} /></div>
            <div className="key-data-text">
                <div className="key-data-number">
                    {dataNumber}{dataUnit}
                </div>
                <div className="key-data-title">
                    {dataTitle}
                </div>
            </div>
        </div>
}

export default KeyNumberCard