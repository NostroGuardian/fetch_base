async function getWeather() { 
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=55.682545&lon=37.680391&appid=fe57b721fd47b8600afac45a7829c1ea&units=metric");
    const data = await response.json();
    return data;
}

getWeather().then(data => {
    document.querySelector('#temp__current').textContent = data.main.temp;
})

document.addEventListener("DOMContentLoaded", getWeather);