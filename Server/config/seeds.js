const db = require("./connection");
const { Employee, Task } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Employee", "employees");
  await cleanDB("Task", "tasks");

  const employees = await Employee.insertMany([
    {
      username: "slimmy",
      firstName: "Slim",
      lastName: "Shady",
      email: "slimthicc@cox.net",
      password: "slimmple",
    },
    {
      username: "mikehawkbig1",
      firstName: "Mike",
      lastName: "Hawk",
      email: "mikehawkbig1@bob.com",
      password: "smallrichard11",
    },
    {
      username: "SisterLisa",
      firstName: "sista",
      lastName: "Lisa",
      email: "mothertheresalovesus@nun.com",
      password: "nunya",
    },
    {
      username: "OzzyFan",
      firstName: "Ozzy",
      lastName: "Osbourne",
      email: "ozzyosbourne@n.com",
      password: "batheads91",
    },
  ]);
  console.log("Employees Seeded");

  const tasks = await Task.insertMany([
    {
      title: "Shred Docs",
      description: "Destroy all evidence",
      deadline: "06/03/2024",
      priority: "High",
      status: "Not Complete",
      employee: employees[0]._id,
    },
    {
      title: "Implement Keylogger",
      description: "Track all employee card information via a keylogger",
      deadline: "06/27/2024",
      priority: "Medium",
      status: "Not Complete",
      employee: employees[1]._id,
    },
    {
      title: "Resolve Bugs",
      description: "this is a joke task bugs are fun",
      deadline: "06/27/2069",
      priority: "Low",
      status: "Not Complete",
      employee: employees[2]._id,
    },
    {
      title: "Team Meeting",
      description: "Meet with your assigned team",
      deadline: "06/27/2024",
      priority: "Medium",
      status: "Not Complete",
      employee: employees[3]._id,
    },
  ]);
  console.log("Tasks Seeded");
  process.exit();
});
