const db = require("./database/db.js");

const select_cohorts_in_finsbo = db.prepare(`
  SELECT
  name
  FROM cohorts
  WHERE location = 'Finsbury Park'
`);

function listCohortsInFinsbo() {
  return select_cohorts_in_finsbo.all();
}

const select_students_in_finsbo = db.prepare(/*sql*/ `
  SELECT
  username
  FROM students
  JOIN cohorts on cohorts.name = students.cohort_name
  WHERE location = 'Finsbury Park'
`);

function listStudentsInFinsbo() {
  return select_students_in_finsbo.all();
}

const select_students_with_location = db.prepare(/*sql*/ `
SELECT students.username, cohorts.location
FROM students INNER JOIN cohorts
ON students.cohort_name = cohorts.name
`);

function listStudentsWithLocation() {
  return select_students_with_location.all();
}

//List all project names with the usernames of the students who worked on them.
const select_students_with_projects = db.prepare(/*sql*/ `
  SELECT 
  p.name,
  sp.student_username AS username
  FROM students_projects AS sp
  JOIN projects AS p ON sp.project_id = p.id
`);

function listStudentsWithProjects() {
  return select_students_with_projects.all();
}

const select_students_with_projects_in_finsbo = db.prepare(/*sql*/ `
WITH ls AS (
  SELECT
    username,
    location
  FROM students
  JOIN cohorts ON cohorts.name = students.cohort_name
  WHERE location = 'Finsbury Park'
)
SELECT
  ls.username,
  p.name
  FROM students_projects AS sp
  JOIN ls ON sp.student_username = ls.username
  JOIN projects AS p ON sp.project_id = p.id
  ORDER BY ls.username
`);

function listStudentsWithProjectsInFinsbo() {
  return select_students_with_projects_in_finsbo.all();
}

module.exports = {
  listCohortsInFinsbo,
  listStudentsInFinsbo,
  listStudentsWithLocation,
  listStudentsWithProjects,
  listStudentsWithProjectsInFinsbo,
};
