const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "5e93ca9c78msh2775492ba0fd7b0p121dacjsn514c5442c746",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};
const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);

            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            wind_degrees.innerHTML = response.wind_degrees;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
        })
        .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});
getWeather("Bangalore");
