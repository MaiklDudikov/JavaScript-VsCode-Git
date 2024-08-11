function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';

    if (!city) {
        alert('Введите название города');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Выводим данные в консоль для проверки
            displayWeather(data);
        })
        .catch(error => console.error('Ошибка:', error));
}


function displayWeather(data) {
    const weatherToday = document.getElementById('weatherToday');

    weatherToday.innerHTML = `
        <h2>${data.name}</h2>
        <p>${new Date().toLocaleDateString()}</p>
        <p>${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" class="weather-icon">
        <p>${data.main.temp}°C</p>
        <p>Мин. температура: ${data.main.temp_min}°C</p>
        <p>Макс. температура: ${data.main.temp_max}°C</p>
        <p>Скорость ветра: ${data.wind.speed} м/с</p>
    `;
}

function getHourlyWeather(lat, lon) {
    const apiKey = 'YOUR_API_KEY'; // Замените на ваш ключ API
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Выводим данные в консоль для проверки
            displayHourlyWeather(data);
        })
        .catch(error => {
            console.error('Ошибка получения данных о погоде:', error);
        });
}


function displayHourlyWeather(data) {
    const hourlyWeather = document.getElementById('hourlyWeather');
    hourlyWeather.innerHTML = '<h2>Почасовой прогноз</h2><div class="hourly-weather"></div>';
    const hourlyContainer = document.querySelector('.hourly-weather');

    // Выводим данные для первых 6 часов (можно изменить число при необходимости)
    for (let i = 0; i < 6; i++) {
        const forecast = data.list[i];
        const time = new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const description = forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1);

        hourlyContainer.innerHTML += `
            <div class="hourly-item">
                <p>${time}</p>
                <img src="http://openweathermap.org/img/w/${forecast.weather[0].icon}.png" class="weather-icon" alt="${description}">
                <p>${description}</p>
                <p>${forecast.main.temp}°C</p>
                <p>Ветер: ${forecast.wind.speed} м/с</p>
            </div>
        `;
    }
}

