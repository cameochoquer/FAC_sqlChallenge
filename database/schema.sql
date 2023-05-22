PRAGMA foreign_keys = ON;

BEGIN;

CREATE TABLE IF NOT EXISTS cohorts (
  name TEXT PRIMARY KEY,
  location TEXT
);

CREATE TABLE IF NOT EXISTS students (
  username TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  cohort_name TEXT REFERENCES cohorts(name)
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT,
  repo_url TEXT NOT NULL,
  topic TEXT
);

CREATE TABLE IF NOT EXISTS students_projects (
  student_username TEXT REFERENCES students(username),
  project_id INTEGER REFERENCES projects(id),
  PRIMARY KEY (student_username, project_id)
);

COMMIT;