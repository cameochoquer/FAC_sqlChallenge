const db = require("./database/db.js");

const select_cohorts_in_finsbo = db.prepare(/*sql*/ `
  SELECT name FROM cohorts WHERE location = 'Finsbury Park'
`);

function listCohortsInFinsbo() {
  return select_cohorts_in_finsbo.all();
}

const select_students_in_finsbo = db.prepare(/*sql*/ `
  SELECT username FROM students WHERE cohort_name IN (
    SELECT name FROM cohorts WHERE location = 'Finsbury Park'
  )
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

const select_students_with_projects = db.prepare(/*sql*/ `
  SELECT projects.name, students.username FROM projects
  INNER JOIN students_projects ON projects.id = students_projects.project_id
  INNER JOIN students ON students.username = students_projects.student_username
`);

function listStudentsWithProjects() {
  return select_students_with_projects.all();
}

const select_students_with_projects_in_finsbo = db.prepare(/*sql*/ `
  SELECT projects.name, students.username FROM projects
  INNER JOIN students_projects ON projects.id = students_projects.project_id
  INNER JOIN students ON students.username = students_projects.student_username
  WHERE students.username IN (
    SELECT username FROM students
      WHERE cohort_name IN (
        SELECT name FROM cohorts WHERE location = 'Finsbury Park'
      )
    )
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
