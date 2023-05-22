const test = require("node:test");
const assert = require("node:assert");
const { listCohortsInFinsbo } = require("../model.js");

test("can list all cohorts in Finsbury Park", () => {
  const cohorts = listCohortsInFinsbo();
  const expected = [
    { name: "14" },
    { name: "15" },
    { name: "16" },
    { name: "17" },
  ];
  assert.deepEqual(cohorts, expected);
});
