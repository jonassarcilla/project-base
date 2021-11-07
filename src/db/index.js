var fs = require("fs");
var faker = require("faker/locale/en");
faker.locale = "en";

function generateRandomInt(min,max){
  return Math.floor((Math.random() * (max-min)) + min);
}

let users = [];

for (let i = 1; i <= 100; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  // users.push({
  //   address: `${faker.address.streetAddress()}, ${faker.address.zipCode()}, ${faker.address.city()}, ${faker.address.country()}`,
  //   email: faker.internet.email(firstName, lastName),
  //   id: i,
  //   name: faker.name.findName(firstName, lastName),
  // });

  users.push({
    id: i,
    uuid: faker.datatype.uuid(),
    firstName: firstName,
    lastName: lastName,
    address: `${faker.address.streetAddress()}, ${faker.address.zipCode()}, ${faker.address.city()}, ${faker.address.country()}`,
    userName: faker.internet.userName(firstName, lastName),
    password: faker.internet.password(12,true),
    avatar: faker.internet.avatar(),
    isActive: faker.datatype.boolean()
  });


  
}

let projects = [];
for (let i = 1; i <= 50; i++) {
  var paragraphLength = generateRandomInt(1, 15)
  projects.push({
    id: i,
    name: faker.lorem.text(paragraphLength),
    description: `<p>${faker.lorem.paragraphs(paragraphLength, '<br/>')}</p>`,
    userId: generateRandomInt(1, 101)
  });
}

let projectRoleNames = ["Salesperson", "Project Manager", "Scheduling Supervisor", 
  "Scheduled Tech", "Warehouse Staff", "Observer",
  "Primary Tech", "Primary Tech Supervisor", "Sales Engineer"];
let projectRoles = [];
for (let i = 1; i <= projectRoleNames.length; i++) {
  projectRoles.push({
    id: i,
    roles: projectRoleNames[i - 1]
  });
}

let participants = [];
for (let i = 1; i <= 1000; i++) {
  participants.push({
    id: i,
    projectId: generateRandomInt(1, 51),
    userId: generateRandomInt(1, 101),
    projectRoleId: generateRandomInt(1, 9),
  });
}

let projectContacts = [];
for (let i = 1; i <= 100; i++) {
  var paragraphLength = generateRandomInt(1, 5)
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  projectContacts.push({
    id: i,
    projectId: generateRandomInt(1, 51),
    name: faker.name.findName(firstName, lastName),
    email: faker.internet.email(firstName, lastName),
    notes: `<p>${faker.lorem.paragraphs(paragraphLength, '<br/>')}</p>`
  });
}

let statusNames = ["Open", "In Progress", "Closed"]
let statuses = [];
for (let i = 1; i <= statusNames.length; i++) {
  statuses.push({
    id: i,
    name: statusNames[i - 1]
  });
}

let tasks = [];
for (let i = 1; i <= 1000; i++) {
  var plannedStart = faker.date.between('2015-01-01', new Date());
  var plannedFinish = faker.date.between(plannedStart.getDate().toString(), new Date());

  tasks.push({
    id: i,
    name: faker.lorem.text(generateRandomInt(1, 15)),
    description: `<p>${faker.lorem.paragraphs(generateRandomInt(1, 15), '<br/>')}</p>`,
    projectId: generateRandomInt(1, 51),
    statusId:  generateRandomInt(1, 4),
    plannedStart: plannedStart,
    actualStart: plannedStart,
    plannedFinish: plannedStart,
    actualFinish: plannedStart
  });
}

let resources = [];
for (let i = 1; i <= 10000; i++) {
  let userId = generateRandomInt(0, 100);
  resources.push({
    id: i,
    taskId: generateRandomInt(1, 1001),
    userId: userId,
    external: userId > 0 ? "": faker.company.companyName()
  });
}

let priorityNames = ["Low", "Medium", "High", "Blocker"]
let priorities = [];
for (let i = 1; i <= priorityNames.length; i++) {
  priorities.push({
    id: i,
    name: priorityNames[i - 1],
  });
}

let issues = [];
for (let i = 1; i <= 1000; i++) {
  var dateReported = faker.date.between('2015-01-01', new Date());

  issues.push({
    id: i,
    projectId: generateRandomInt(1, 51),
    statusId: generateRandomInt(1, 4),
    priorityId: generateRandomInt(1, 5),
    description: faker.lorem.words(6),
    notes: `<p>${faker.lorem.paragraphs(generateRandomInt(1, 15), '<br/>')}</p>`,
    dateReported: dateReported,
    dueDate: dateReported,
    isIssue: faker.datatype.boolean()
  });
}

let issuerTypeNames = ["Reporter", "Assignee"];
let issuerTypes = [];
for (let i = 1; i <= issuerTypeNames.length; i++) {
  issuerTypes.push({
    id: i,
    name: issuerTypeNames[i - 1]
  })
}

let issuers = [];
for (let i = 1; i <= 500; i++) {
  let userId = generateRandomInt(0, 100);
  
  issuers.push({
    id: i,
    issueId: generateRandomInt(1, 1001),
    userId: userId,
    external: userId > 0 ? "": faker.company.companyName(),
    issuerTypeId: generateRandomInt(1, 3)
  })
}

let subscribers = [];
for (let i = 1; i <= 100; i++) {
  let userId = generateRandomInt(1, 101);

  subscribers.push({
    id: i,
    issueId: generateRandomInt(1, 1001),
    userId: userId,
  });
}

let comments = [];
for (let i = 1; i <= 1000; i++) {
  comments.push({
    id: i,
    issueId: generateRandomInt(1, 1001),
    userId: generateRandomInt(1, 101),
    dateCreated: faker.date.between('2015-01-01', new Date()),
    dateModified: generateRandomInt(0, 2) === 0 ? null: faker.date.between('2015-01-01', new Date()),
    comment: `<p>${faker.lorem.paragraphs(generateRandomInt(1, 15), '<br/>')}</p>`,
  });
}

const data = {
  users,
  projects,
  projectRoles,
  participants,
  projectContacts,
  statuses,
  tasks,
  resources,
  priorities,
  issues,
  issuerTypes,
  issuers,
  subscribers,
  comments
};

fs.writeFile("src/db/db.json", JSON.stringify(data, null, 2), (err) => {
  if (err) return console.log(err);
  console.log("Created database at src/db/db.json");
});