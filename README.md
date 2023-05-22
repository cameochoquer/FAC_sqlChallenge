# SQL challenge

Practice writing SQL queries with more complex logic. There's usually more than one way to get the right answer. If your solution is different that's fine!

## Setup

Make sure you have Git and Node (v18) installed.

1. [Use this template](https://github.com/foundersandcoders/sql-challenge/generate), clone your copy, cd into it
1. Run `npm install` to install all the dependencies

There's a bunch of data about various FAC cohorts in `seed.sql`. You'll need to read this to figure out exactly what tables you're working with. The DB will automatically be populated with this data before each test.

Each challenge requires you to complete the corresponding statement in `model.js`. There are tests you can run to verify, e.g. `npm run test:1`.

## Challenge 1: Cohorts by location

List the names of all cohorts that took place in Finsbury Park.

## Challenge 2: Students by location

List the usernames of all students who attended FAC in Finsbury Park.

<details>
<summary>Reveal hint</summary>

You need to use the query from the previous question.

</details>

## Challenge 3: Student locations

List the username of each student along with the location of their cohort.

<details>
<summary>Reveal hint</summary>

Remember you can use joins to connect two tables together and access information from both.

</details>

## Challenge 4: Students with projects

List all project names with the usernames of the students who worked on them.

<details>
<summary>Reveal hint</summary>

Since projects-to-students is a _many-to-many_ relationship (each project can have multiple authors, each student can have multiple projects) we can't link them with just IDs. We need to use a separate table to keep track of which students worked on which projects.

This is often called a _join table_, or _junction table_. You'll need to join to this as an intermediary step to link projects to students. You don't need to create it—it is already created in `init.sql`

</details>

## Challenge 5: Students with projects by location

List all project names with the usernames of the students who worked on them, only for students who attended FAC in Finsbury Park.

<details>
<summary>Reveal hint</summary>

You've written all the queries you need in previous steps.

</details>
