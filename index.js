// index.js

// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(location) {
    const headquarters = 42;
    return Math.abs(location - headquarters);
}

// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264; // Assuming one block is 264 feet
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Assuming one block is 264 feet
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice;
    if(distance > 2500) {
        return'cannot travel that far';
    }

    if (distance <= 400) {
        farePrice = 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25; // $25 for distance over 2000 feet
    } 
    

    return farePrice;
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};





