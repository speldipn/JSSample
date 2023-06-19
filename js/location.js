const citySpan = document.querySelector("#geolocation span:first-child");
const weatherSpan = document.querySelector("#geolocation span:last-child");

const API_KEY = "779d44ee3ae728a161e4b9370f9f4c61";

const fetchSuccess = (loc) => {
  const { coords: { latitude, longitude } } = loc;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url).then((res) => res.json()).then(res => {
    const { name, weather, main } = res;
    citySpan.innerText = name;
    weatherSpan.innerText = `${weather[0].main} 🌡${main.temp}`;
  });
}

const fetchFailed= (e) => {
  console.error(e);
}


navigator.geolocation.getCurrentPosition(fetchSuccess, fetchFailed);