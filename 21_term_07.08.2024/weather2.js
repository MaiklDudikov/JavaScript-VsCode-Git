const apiKey = 'e342e402b4235365f0d325328a99ec4d';
const city = 'London'; // Можно заменить на любой другой город

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));
