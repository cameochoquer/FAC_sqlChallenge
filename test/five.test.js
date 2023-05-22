const test = require("node:test");
const assert = require("node:assert");
const { listStudentsWithProjectsInFinsbo } = require("../model.js");

test("can list all students with locations", () => {
  const students = listStudentsWithProjectsInFinsbo();
  const expected = [
    { name: "Agony Yaunt", username: "bobbysebolao" },
    { name: "Hamster Hotel", username: "starsuit" },
    { name: "Agony Yaunt", username: "starsuit" },
  ];
  assert.deepEqual(students, expected);
});
