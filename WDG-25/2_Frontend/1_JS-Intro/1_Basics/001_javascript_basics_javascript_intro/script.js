// Simulated weather data
const fakeWeatherData = {
  london: { temp: 14, description: 'cloudy', emoji: '☁️' },
  newyork: { temp: 18, description: 'sunny', emoji: '☀️' },
  tokyo: { temp: 22, description: 'partly cloudy', emoji: '⛅' },
  sydney: { temp: 25, description: 'clear skies', emoji: '🌞' },
  berlin: { temp: 10, description: 'light rain', emoji: '🌧️' },
  paris: { temp: 12, description: 'drizzle', emoji: '🌦️' },
  toronto: { temp: 8, description: 'snowy', emoji: '❄️' },
  cairo: { temp: 30, description: 'hot and sunny', emoji: '🔥' },
  rio: { temp: 28, description: 'humid and sunny', emoji: '🌤️' },
  mumbai: { temp: 32, description: 'monsoon rain', emoji: '🌧️' },
};

document.querySelector('button').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim().toLowerCase();
  const result = document.getElementById('result');

  if (!city) {
    result.innerHTML = '<div class="error">Please enter a city name.</div>';
    return;
  }

  const weather = fakeWeatherData[city];

  if (weather) {
    result.innerHTML = `
        <h3>${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
        <p>🌡️ ${weather.temp}°C</p>
        <p>${weather.emoji} ${weather.description}</p>
      `;
  } else {
    result.innerHTML = `<div class="error">Sorry, no data available for "${city}".</div>`;
  }
});
