export function place(x, y, direction) {
    var coordinates = [];
    coordinates[0] = x;
    coordinates[1] = y;
    coordinates[2] = direction;
    return coordinates;
}

export function move(coordinates) {
    if (coordinates[2] == "NORTH" && coordinates[1] + 1 < 6) {
        coordinates[1] = coordinates[1] + 1;
    } else if (coordinates[2] == "SOUTH" && coordinates[1] - 1 > -1) {
        coordinates[1] = coordinates[1] - 1;
    } else if (coordinates[2] == "EAST" && coordinates[0] + 1 < 6) {
        coordinates[0] = coordinates[0] + 1;
    } else if (coordinates[2] == "WEST" && coordinates[0] - 1 > -1) {
        coordinates[0] = coordinates[0] - 1;
    }
    return coordinates;
}

export function left(coordinates) {
    if (coordinates[2] == "NORTH") {
        coordinates[2] = "WEST";
    } else if (coordinates[2] == "SOUTH") {
        coordinates[2] = "EAST";
    } else if (coordinates[2] == "EAST") {
        coordinates[2] = "NORTH";
    } else if (coordinates[2] == "WEST") {
        coordinates[2] = "SOUTH";
    }
    return coordinates;
}

export function right(coordinates) {
    if (coordinates[2] == "NORTH") {
        coordinates[2] = "EAST";
    } else if (coordinates[2] == "SOUTH") {
        coordinates[2] = "WEST";
    } else if (coordinates[2] == "EAST") {
        coordinates[2] = "SOUTH";
    } else if (coordinates[2] == "WEST") {
        coordinates[2] = "NORTH";
    }
    return coordinates;
}

export function report(coordinates) {
    return `Output: ${coordinates[0]}, ${coordinates[1]}, ${coordinates[2]}`;
}
