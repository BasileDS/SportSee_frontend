export async function getUserByUserId(userId) {
    const userData = await fetch(`http://localhost:3000/user/${userId}`).then(r => r.json())

    return userData
}

export async function getActivityByUserId(userId) {
    const userData = await fetch(`http://localhost:3000/user/${userId}/activity`).then(r => r.json())

    return userData
}

export async function getAverageSessionsByUserId(userId) {
    const userData = await fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(r => r.json())

    return userData
}

export async function getPerformanceByUserId(userId) {
    const userData = await fetch(`http://localhost:3000/user/${userId}/performance`).then(r => r.json())

    return userData
}

export function getDailyCalories(activity) {
    // const date = new Date 
    // const currentDay = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
    const currentDay = "2020-07-04"
    const index = activity.data.sessions.findIndex((session) => session.day === currentDay)

    return activity.data.sessions[index].calories
}

export function getUserCaloriesCount(userData) {
    const userCaloriesCount = userData.data.keyData.calorieCount
    return userCaloriesCount
}

export function getUserCarbohydrateCount(userData) {
    const userCarbohydrateCount = userData.data.keyData.carbohydrateCount
    return userCarbohydrateCount
}

export function getUserLipidCount(userData) {
    const userLipidCount = userData.data.keyData.lipidCount
    return userLipidCount
}

export function getUserProteinCount(userData) {
    const userProteinCount = userData.data.keyData.proteinCount
    return userProteinCount
}

export async function getUserDataByUserId(userId) {
    const data = getUserByUserId(userId)
    const activities = getActivityByUserId(userId)
    const averageSessions = getAverageSessionsByUserId(userId)
    const performance = getPerformanceByUserId(userId)

    const userData = {
        data: data,
        activities: activities,
        averageSessions: averageSessions,
        performance: performance
    }

    return userData
}

export function getAverageSessionDuration (averageSessions) {
    const sessions = averageSessions.averageSessions.data.sessions

    const averageSessionDuration = sessions.reduce( (accumulator, currentValue) => 
        accumulator + currentValue.sessionLength , 0 ) / sessions.length
    
    return Math.round(averageSessionDuration)
}

export function getTodayScore(userData) {
    const todayScore = userData.userData.data.todayScore
    const score = userData.userData.data.score
    
    const result = todayScore ?? score
    const percentage = `${result * 100}%`
   
    const data = [{
        "name": "de votre objectif",
        "value": result * 100,
        "fill": "#FF0000"
    },
    {
        "name": "maxValue",
        "value": 100,
        "fill": "#FFFFFF"
    }
]

    return { data, percentage }
}