const test = require("node:test");
const assert = require("node:assert");
const { listStudentsWithLocation } = require("../model.js");

test("can list all students with locations", () => {
  const students = listStudentsWithLocation();
  const expected = [
    { username: "eliascodes", location: "Bethnal Green" },
    { username: "oliverjam", location: "Bethnal Green" },
    { username: "yvonne-liu", location: "Bethnal Green" },
    { username: "matthewdking", location: "Nazareth" },
    { username: "helenzhou6", location: "Bethnal Green" },
    { username: "virtualdominic", location: "Finsbury Park" },
    { username: "charlielafosse", location: "Finsbury Park" },
    { username: "starsuit", location: "Finsbury Park" },
    { username: "bobbysebolao", location: "Finsbury Park" },
    { username: "albadylic", location: "Finsbury Park" },
    { username: "reubengt", location: "Finsbury Park" },
  ];
  assert.deepEqual(students, expected);
});
