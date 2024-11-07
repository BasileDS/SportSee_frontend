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

export async function getDailyCaloriesByUserId(userId) {
    const date = new Date
    console.log(date)
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