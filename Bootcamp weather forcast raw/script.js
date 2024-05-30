document.getElementById('getWeather').addEventListener('click', function() {
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found.');
                return;
            }
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('weatherInfo').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
