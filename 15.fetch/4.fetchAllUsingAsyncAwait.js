import fetch from "node-fetch";
console.log("----------------------async await-----------------------------");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    users.forEach(console.log);
    users.forEach(user => console.log(user));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();
