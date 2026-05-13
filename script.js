const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// گوش دادن به کلیک دکمه
document.querySelector(".search button").addEventListener("click", () => {
    const city = document.querySelector(".search input").value;
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

// گوش دادن به دکمه اینتر
document.querySelector(".search input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(e.target.value);
    }
});

console.log("Script is loaded and running!");
