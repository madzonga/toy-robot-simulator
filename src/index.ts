import { left, move, place, report, right } from "./functions";

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

const result = data.split(/\r?\n/);
let robotPlacement = false;
let coordinates = [];
for (var i = 0; i < result.length; i++) {
    let instruction = result[i].split(" ");
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
        if (instruction[0] == "MOVE") {
            coordinates = move(coordinates);
        } else if (instruction[0] == "RIGHT") {
            coordinates = right(coordinates);
        } else if (instruction[0] == "LEFT") {
            coordinates = left(coordinates);
        } else if (instruction[0] == "REPORT") {
            console.log(report(coordinates));
        }
    }
}
