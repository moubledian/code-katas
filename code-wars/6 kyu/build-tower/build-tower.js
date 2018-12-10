// Kata URL: https://www.codewars.com/kata/build-tower/train/javascript


export default nFloors => {
    let tower = [];

    for (let index = 0; index < nFloors; index++) {
        const currentFloor = getCurrentFloor(nFloors, index);
        tower.push(buildFloor(nFloors, currentFloor));
    }

    return tower;
};

function buildFloor(nFloors, currentFloor) {
    const voidSpace = currentFloor;
    const floorWidth = getFloorWidth(nFloors);
    const blocksWidth = getBlocksWidth(voidSpace, floorWidth);

    return " ".repeat(voidSpace) + "*".repeat(blocksWidth) + " ".repeat(voidSpace);
}

function getFloorWidth(nFloors) {
    return (nFloors * 2) - 1;
}

function getBlocksWidth(voidSpace, floorWidth) {
    return floorWidth - (voidSpace * 2);
}

function getCurrentFloor(nFloors, index) {
    return nFloors - index - 1;
}
