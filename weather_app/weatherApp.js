document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('city-form');
    const weatherInfo = document.getElementById('weather-info');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission

        const cityInput = document.getElementById('city-input');
        const cityName = cityInput.value.trim();

        // Clear previous weather info
        weatherInfo.textContent = '';

        try {
            // Make a request to the weather API
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=70dbb816e8175db9995060a5f8b17af2&units=metric`);
            const data = await response.json();

            if (response.ok) {
                // City found, display temperature
                const temperature = data.main.temp;
                weatherInfo.textContent = `🌡️ Temperature in ${cityName}: ${temperature}°C`;
            } else {
                // City not found
                weatherInfo.textContent = 'No city recognized';
            }
        } catch (error) {
            console.error('Error:', error);
            weatherInfo.textContent = 'An error occurred while fetching data';
        }
    });
});



