// Weather Forecast Service Implementation

const readline = require('readline');
const https = require('https');

// Function to fetch weather forecast from API
function fetchWeatherForecast(callback) {
    const url = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast';

    https.get(url, (res) => {
        let data = '';

        // Collect data
        res.on('data', (chunk) => {
            data += chunk;
        });

        // Parse and return data
        res.on('end', () => {
            try {
                const jsonData = JSON.parse(data);
                callback(null, jsonData);
            } catch (error) {
                callback(error);
            }
        });
    }).on('error', (error) => {
        callback(error);
    });
}

// Function to find forecast for a specific location
function getForecastForLocation(location, forecasts) {
    const forecast = forecasts.find((item) => item.area.toLowerCase() === location.toLowerCase());
    return forecast ? forecast.forecast : null;
}

// Command-line interface setup
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Weather Forecast Service\n=========================");

// Prompt user for location
rl.question("Enter a location in Singapore: ", (location) => {
    console.log("Fetching weather forecast...\n");

    fetchWeatherForecast((error, data) => {
        if (error) {
            console.error("Error fetching weather data:", error.message);
            rl.close();
            return;
        }

        const forecasts = data.items[0].forecasts;
        const forecast = getForecastForLocation(location, forecasts);

        if (forecast) {
            console.log(`The weather forecast for ${location} is: ${forecast}`);
        } else {
            console.log(`No forecast available for the location: ${location}. Please try another location.`);
        }

        rl.close();
    });
});

module.exports = { fetchWeatherForecast, getForecastForLocation };
