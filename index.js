function distanceFromHqInBlocks (pickupLocation) {
    return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(start, destination) {
    return distanceFromHqInBlocks (start) * 264
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs ((start - destination) * 264)
}

function calculatesFarePrice (start, destination) {
    const totalDistance = distanceTravelledInFeet(start, destination)
    if (totalDistance <= 400) {
        return 0
    } else if (totalDistance > 400 && totalDistance <= 2000) {
        return (totalDistance - 400)*.02
    } else if (totalDistance >2000 && totalDistance <= 2500) {
        return 25
         } else {
                return 'cannot travel that far'
            }
        } 
    