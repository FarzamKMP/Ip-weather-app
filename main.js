const getLoc = async () => {
    try {
       const url = 'http://ip-api.com/json/?fields=country,city,lat,lon,timezone';
       const response = await fetch(url);
       const data = await response.json();
       return data;
    } catch (error) {
       console.error('Error fetching location:', error);
       throw error;
    }
 };
 
 const getWeather = async (lat, lon) => {
    try {
       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8f16bfc505364bbcdd10443b420beee2`;
       const response = await fetch(url);
       const data = await response.json();
       return data;
    } catch (error) {
       console.error('Error fetching weather:', error);
       throw error;
    }
 };
 
 function DayOrNight() {
    let DayOrNight;
    const d = new Date();
    if (d.getHours() >= 6 && d.getHours() <= 19) {
       DayOrNight = 'Day';
    } else {
       DayOrNight = 'Night';
    }
    return DayOrNight;
 }
 
 const backGroundVideo = document.getElementById('BgVideo');
 const icon = document.querySelector('.icon');
 
 function getBackground(weatherMode) {
    let videoSrc;
    let iconSrc;
    switch (weatherMode) {
       case 'Thunderstorm':
          videoSrc = '/videos/Thunder.mp4';
          iconSrc = '/icons/storm.png';
          break;
       case 'Drizzle':
       case 'Rain':
          videoSrc = '/videos/Rainy.mp4';
          iconSrc = '/icons/rain.png';
          break;
       case 'Snow':
          videoSrc = '/videos/Snow.mp4';
          iconSrc = '/icons/snowy.png';
          break;
       case 'Clear':
          videoSrc = '/videos/Sunny.mp4';
          iconSrc = '/icons/Sun.png';
          break;
       case 'Clouds':
          videoSrc = '/videos/Cloudy.mp4';
          iconSrc = '/icons/cloudy.png';
          break;
       default:
          videoSrc = "./Sunny.mp4";
          iconSrc = '/icons/Sun.png';
    }
    backGroundVideo.src = videoSrc;
    backGroundVideo.load();
    icon.src = iconSrc;
 }
 
 
 function getTemp(weTemp) {
    const k = weTemp;
    const f = (k - 273.15) * 9 / 5 + 32;
    const c = k - 273.15;
    return {
       kel: Math.floor(k),
       far: Math.floor(f),
       can: Math.floor(c)
    };
 }
 
 
 const locTimeZone = document.querySelector('.TimeZone');
 const Temperature = document.querySelector('.Temperature');
 const weatherType = document.querySelector('.weather');
 const Desc = document.querySelector('.Description');
 
 getLoc().then(locData => {
    const locationTimeZone = locData.timezone;
    locTimeZone.textContent = locationTimeZone;
    return getWeather(locData.lat, locData.lon)
 
 }).then(weData => {
    const weatherTemp = weData.main.temp;
    const weatherMode = weData.weather[0].main;
    const weatherDesc = weData.weather[0].description;
    Temperature.textContent = weatherTemp
 
    const changeButtonK = document.querySelector('.changeTempK')
    changeButtonK.addEventListener('click', () => {
       Temperature.textContent = weatherTemp
    })
    const changeButtonF = document.querySelector('.changeTempF')
    changeButtonF.addEventListener('click', () => {
       const currentTemperature = parseFloat(Temperature.textContent); // Assuming current temperature is displayed in Kelvin
       const convertedTemperatures = getTemp(currentTemperature);
 
       // Change Kelvin to Fahrenheit
       Temperature.textContent = convertedTemperatures.far + '°F';
    });
 
    weatherType.textContent = weatherMode
    getBackground(weatherMode); 
    Desc.textContent = weatherDesc
 })