import fetch from "node-fetch";
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    //users.forEach(console.log);
    //can be written as 
    users.forEach(user => console.log(user));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();
