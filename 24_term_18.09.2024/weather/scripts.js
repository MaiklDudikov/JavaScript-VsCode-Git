// OpenWeatherMap API key (получите ваш ключ и замените его здесь)
// 106ff14aa9b86281abb5240df8b123b1
const apiKey = 'e342e402b4235365f0d325328a99ec4d';

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        showError('Please enter a city name');
    }
});

// Получаем текущую погоду
async function getWeather(city) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const weatherResponse = await fetch(currentWeatherUrl);
        const weatherData = await weatherResponse.json();

        if (weatherData.cod === '404') {
            showError('404 NOT FOUND. Please enter a different city.');
            return;
        }

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(weatherData);
        displayHourlyWeather(forecastData);

    } catch (error) {
        showError('An error occurred while fetching the data');
    }
}

// Отображаем текущую погоду
function displayCurrentWeather(data) {
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('current-weather').classList.remove('hidden');

    const cityName = data.name;
    const date = new Date().toLocaleDateString();
    const description = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const temp = `${Math.round(data.main.temp)}°C`;
    const minTemp = `${Math.round(data.main.temp_min)}°C`;
    const maxTemp = `${Math.round(data.main.temp_max)}°C`;
    const windSpeed = `${data.wind.speed} km/h`;

    document.getElementById('city-name').textContent = cityName;
    document.getElementById('weather-date').textContent = date;
    document.getElementById('weather-description').textContent = description;
    document.getElementById('weather-icon').src = icon;
    document.getElementById('current-temperature').textContent = temp;
    document.getElementById('min-temperature').textContent = minTemp;
    document.getElementById('max-temperature').textContent = maxTemp;
    document.getElementById('wind-speed').textContent = windSpeed;
}

// Отображаем почасовой прогноз
function displayHourlyWeather(data) {
    document.getElementById('hourly-weather').classList.remove('hidden');
    const hourlyContainer = document.getElementById('hourly-forecast');
    hourlyContainer.innerHTML = '';

    const forecasts = data.list.slice(0, 6); // Почасовой прогноз на 6 часов

    forecasts.forEach(forecast => {
        const time = new Date(forecast.dt * 1000).getHours() + ':00';
        const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        const description = forecast.weather[0].description;
        const temp = `${Math.round(forecast.main.temp)}°C`;
        const windSpeed = `${forecast.wind.speed} km/h`;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <p>${time}</p>
            <img src="${icon}" alt="Weather Icon">
            <p>${description}</p>
            <p>${temp}</p>
            <p>Wind: ${windSpeed}</p>
        `;

        hourlyContainer.appendChild(forecastItem);
    });
}

// Показать ошибку
function showError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-message').classList.remove('hidden');
    document.getElementById('current-weather').classList.add('hidden');
    document.getElementById('hourly-weather').classList.add('hidden');
}
