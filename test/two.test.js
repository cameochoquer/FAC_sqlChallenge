const test = require("node:test");
const assert = require("node:assert");
const { listStudentsInFinsbo } = require("../model.js");

test("can list all students in Finsbury Park", () => {
  const students = listStudentsInFinsbo();
  const expected = [
    { username: "virtualdominic" },
    { username: "charlielafosse" },
    { username: "starsuit" },
    { username: "bobbysebolao" },
    { username: "albadylic" },
    { username: "reubengt" },
  ];
  assert.deepEqual(students, expected);
});
