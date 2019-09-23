import { person } from "./lib";
// let test = () => console.log(person.name, person.location);

// test();

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
}

getPosts().then(user => console.log(user));
