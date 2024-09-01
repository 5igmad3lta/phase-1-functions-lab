function distanceFromHqInBlocks(block) {
    if (block > 42)
        return block - 42;
    else if (block < 42)
        return 42 - block;
}
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (destination < start)
        return (start - destination) * 264;
    else if (destination > start )
        return (destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
    const flatRate = 25;
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400)
        return 0;
    else if (feet >= 401 && feet <= 1999)
        return (feet - 400) * 0.02;
    else if (feet >=2000 && feet <= 2499)
        return flatRate;
    else (feet >= 2500)
    return 'cannot travel that far';
}