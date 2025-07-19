const apiKey = "7c93741e3ed7be45b7c4b8ef66d9454c";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city) {
    const res = await fetch(apiURL + city + `&appid=${apiKey}`)
    if (res.status == 404) {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
    } else {
        let data = await res.json()
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " kmph";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./weather-app-img/images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./weather-app-img//images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./weather-app-img//images/rain.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./weather-app-img//images/mist.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./weather-app-img//images/drizzle.png"
        }
        else if (data.weather[0].main == "snow") {
            weatherIcon.src = "./weather-app-img//images/snow.png"
        }

    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
