const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.status == 404) {
            alert("City not found!");
            document.querySelector(".city").innerHTML = "Not Found";
        } else {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            console.log("Success:", data);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// دکمه جستجو
document.querySelector(".search button").addEventListener("click", () => {
    const city = document.querySelector(".search input").value;
    if(city) checkWeather(city);
});

// اینتر زدن در کیبورد
document.querySelector(".search input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const city = e.target.value;
        if(city) checkWeather(city);
    }
});
