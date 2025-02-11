

import fetch from "node-fetch";

async function getWeatherData() {
  const city = "dewas"; // Hardcoded city, get it from user

  try {
    const response = await fetch(`https://wttr.in/${city}?format=j1`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const currentCondition = data.current_condition[0];
    const temperatureC = currentCondition.temp_C;
    const humidity = currentCondition.humidity;

    console.log(`Current Temperature in ${city}: ${temperatureC}°C`);
    console.log(`Current Humidity in ${city}: ${humidity}%`);
    return { temperatureC, humidity };

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

getWeatherData(); 
