const apiKey = "863242cfb2b1d357e6093d9a4df19a4b"; // حتماً این را با کلید خودت عوض کن

async function checkWeather(city) {
    // اضافه کردن trim() برای پاک کردن فاصله‌های اضافی
    const cityClean = city.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityClean}&appid=${apiKey}`;
    
    const response = await fetch(apiUrl);
    
    if (response.status == 404) {
        alert("City not found! Please check the spelling.");
    } else {
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }
}

document.querySelector(".search button").addEventListener("click", () => {
    checkWeather(document.querySelector(".search input").value);
});
