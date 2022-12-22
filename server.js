const express = require('express');
const faker = require('faker');
const port = 2021;

const app = express();
const createUser = () => {
  return {
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
    jobType: faker.name.jobType(),
    job: faker.name.jobTitle(),
    location: faker.address.city()
  }
}

const createUsers = (numUsers = 5) => {
  return new Array(numUsers)
    .fill(undefined)
    .map(createUser);
}

app.get('/users', (req, res) => {
  let fakeUsers = createUsers(1000000)
  res.set('Access-Control-Allow-Origin', '*')

  res.send(fakeUsers)
})
app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`)
});
