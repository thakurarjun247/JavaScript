
import fetch from "node-fetch";


    
    let allUsers = fetch("https://jsonplaceholder.typicode.com/users");

    allUsers
      .then((response) => response.json()) // Parse the response as JSON
      .then((users) => {
        users.forEach((user) => {
          console.log(user); // Print each user object
        });
      })
      .catch((error) => {
        console.error("Error fetching users:", error); // Handle any errors
      });