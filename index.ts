if (process.argv.length < 3) {
    console.log("Usage: node " + process.argv[1] + " FILENAME");
    process.exit(1);
}

var fs = require("fs");
try {
    var data = fs.readFileSync(process.argv[2], "utf8");
    //   console.log(data);
} catch (e) {
    console.log("Error:", e.stack);
}

function place(x, y, direction) {
    var coordinates = [];
    coordinates[0] = x;
    coordinates[1] = y;
    coordinates[2] = direction;
    return coordinates;
}

function move(coordinates) {
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

function left(coordinates) {
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

function right(coordinates) {
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

function report(coordinates) {
    return `Output: ${coordinates[0]}, ${coordinates[1]}, ${coordinates[2]}`;
}

const result = data.split(/\r?\n/);
let robotPlacement = false;
let coordinates = [];
for (var i = 0; i < result.length; i++) {
    let instruction = result[i].split(" ");
    // console.log("0", instruction)
    if (instruction[0] == "PLACE") {
        let placementInstruction = instruction[1].split(",");
        if (
            parseInt(placementInstruction[0]) > -1 &&
            parseInt(placementInstruction[0]) < 6 &&
            parseInt(placementInstruction[1]) > -1 &&
            parseInt(placementInstruction[1]) < 6
        ) {
            robotPlacement = true;
            coordinates = place(
                parseInt(placementInstruction[0]),
                parseInt(placementInstruction[1]),
                placementInstruction[2]
            );
        }
    }
    if (robotPlacement) {
        // console.log("2", coordinates)
        if (instruction[0] == "MOVE") {
            coordinates = move(coordinates);
            // console.log("3", coordinates)
        } else if (instruction[0] == "RIGHT") {
            coordinates = right(coordinates);
            // console.log("4", coordinates)
        } else if (instruction[0] == "LEFT") {
            coordinates = left(coordinates);
            // console.log("5", coordinates)
        } else if (instruction[0] == "REPORT") {
            console.log(report(coordinates));
            // console.log("6", coordinates)
        }
    }
}
