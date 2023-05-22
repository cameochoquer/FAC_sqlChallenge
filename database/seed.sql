--
-- Used to add example values to the DB
--

-- Required, otherwise inserting products breaks categories references
-- PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO cohorts (name, location) VALUES
  ('7', 'Bethnal Green'),
  ('10', 'Bethnal Green'),
  ('N2', 'Nazareth'),
  ('13', 'Bethnal Green'),
  ('14', 'Finsbury Park'),
  ('15', 'Finsbury Park'),
  ('16', 'Finsbury Park'),
  ('17', 'Finsbury Park')
ON CONFLICT DO NOTHING;

INSERT INTO students (username, name, cohort_name) VALUES
  ('eliascodes', 'Elias', '7'),
  ('oliverjam', 'Oliver', '10'),
  ('yvonne-liu', 'Yvonne', '10'),
  ('matthewdking', 'Matt', 'N2'),
  ('helenzhou6', 'Helen', '13'),
  ('virtualdominic', 'Dom', '14'),
  ('charlielafosse', 'Charlie', '15'),
  ('starsuit', 'Sam', '16'),
  ('bobbysebolao', 'Bobby', '16'),
  ('albadylic', 'Gregor', '17'),
  ('reubengt', 'Reuben', '17')
ON CONFLICT DO NOTHING;

INSERT INTO projects (id, name, topic, repo_url, url) VALUES
  (1, 'FACX Machine', 'HTML &  CSS', 'https://github.com/FAC10/week1-ajoy-facx-machine', 'https://fac10.github.io/week1-ajoy-facx-machine/'),
  (2, 'Hamster Hotel', 'Postgres', 'https://github.com/oliverjam/hamster-hotel', null),
  (3, 'Agony Yaunt', 'API', 'https://github.com/FAC-Sixteen/week-3-agony-yaunt', 'https://fac-sixteen.github.io/week-3-agony-yaunt/public/')
ON CONFLICT DO NOTHING;

INSERT INTO students_projects VALUES
  ('oliverjam', 1),
  ('yvonne-liu', 1),
  ('oliverjam', 2),
  ('starsuit', 2),
  ('starsuit', 3),
  ('bobbysebolao', 3)
ON CONFLICT DO NOTHING;

COMMIT;

-- turn this back on now we're done
-- PRAGMA foreign_keys = ON;
