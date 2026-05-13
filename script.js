const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.status == 404) {
            alert("City not found!");
        } else {
            console.log(data); // برای اینکه در کنسول ببینیم اطلاعات می‌آید یا نه
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

document.querySelector(".search button").addEventListener("click", () => {
    const city = document.querySelector(".search input").value;
    checkWeather(city);
});
