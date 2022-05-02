import { left, move, place, report, right } from "./functions";

let coordinates = [];
test("expect robot to be placed at specified x,y position (1,4)", () => {
    coordinates = place(1, 4, "NORTH");
    expect(coordinates).toStrictEqual([1, 4, "NORTH"]);
});

test("expect robot to move one y position towards the north", () => {
    expect(move(coordinates)).toStrictEqual([1, 5, "NORTH"]);
});

test("expect command to be ignored, since robot can only move between 0,0 and 5,5", () => {
    expect(move(coordinates)).toStrictEqual([1, 5, "NORTH"]);
});

test("expect robot to start facing the west without changing coordinates", () => {
    expect(left(coordinates)).toStrictEqual([1, 5, "WEST"]);
});

test("expect robot to move one x position towards the west", () => {
    expect(move(coordinates)).toStrictEqual([0, 5, "WEST"]);
});

test("expect command to be ignored, since robot can only move between 0,0 and 5,5", () => {
    expect(move(coordinates)).toStrictEqual([0, 5, "WEST"]);
});

test("expect robot to start facing the south without changing coordinates", () => {
    expect(left(coordinates)).toStrictEqual([0, 5, "SOUTH"]);
});

test("expect robot to move one x position towards the SOUTH", () => {
    expect(move(coordinates)).toStrictEqual([0, 4, "SOUTH"]);
});

test("expect robot to be placed at specified x,y position (4,0)", () => {
    coordinates = place(4, 0, "SOUTH");
    expect(coordinates).toStrictEqual([4, 0, "SOUTH"]);
});

test("expect command to be ignored, since robot can only move between 0,0 and 5,5", () => {
    expect(move(coordinates)).toStrictEqual([4, 0, "SOUTH"]);
});

test("expect robot to start facing the EAST without changing coordinates", () => {
    expect(left(coordinates)).toStrictEqual([4, 0, "EAST"]);
});

test("expect robot to be placed at specified x,y position (4,0)", () => {
    coordinates = place(4, 0, "NORTH");
    expect(coordinates).toStrictEqual([4, 0, "NORTH"]);
});

test("expect robot to start facing the EAST without changing coordinates", () => {
    expect(right(coordinates)).toStrictEqual([4, 0, "EAST"]);
});

test("expect robot to move one x position towards the EAST", () => {
    expect(move(coordinates)).toStrictEqual([5, 0, "EAST"]);
});

test("expect command to be ignored, since robot can only move between 0,0 and 5,5", () => {
    expect(move(coordinates)).toStrictEqual([5, 0, "EAST"]);
});

test("expect function to print out the current coordinates of the robot", () => {
    expect(report(coordinates)).toStrictEqual("Output: 5, 0, EAST");
});