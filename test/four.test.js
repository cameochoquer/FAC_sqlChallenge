const test = require("node:test");
const assert = require("node:assert");
const { listStudentsWithProjects } = require("../model.js");

test("can list all students with locations", () => {
  const students = listStudentsWithProjects();
  const expected = [
    { name: "FACX Machine", username: "oliverjam" },
    { name: "FACX Machine", username: "yvonne-liu" },
    { name: "Hamster Hotel", username: "oliverjam" },
    { name: "Hamster Hotel", username: "starsuit" },
    { name: "Agony Yaunt", username: "starsuit" },
    { name: "Agony Yaunt", username: "bobbysebolao" },
  ];
  assert.deepEqual(students, expected);
});
