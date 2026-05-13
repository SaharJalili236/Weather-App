const apiKey = "f2467d3545e851a71906a20f92275f14"; // کلید جدید و تست شده

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.status == 404) {
            alert("اسم شهر را درست وارد کنید");
        } else {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        }
    } catch (error) {
        console.log("خطا در اتصال");
    }
}

document.querySelector(".search button").addEventListener("click", () => {
    const city = document.querySelector(".search input").value;
    if(city) {
        checkWeather(city);
    } else {
        alert("لطفاً نام شهر را تایپ کنید");
    }
});
