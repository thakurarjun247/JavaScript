
import fetch from "node-fetch";

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1225");

    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchData();
