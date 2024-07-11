# Weather App - IP Base

This is a simple weather app that uses your IP address to determine your location (latitude and longitude) and then uses this information to fetch weather data from an API to cache the weather information, which is then displayed to the end user.

## API Reference

#### Get location base on API

```http
  http://ip-api.com/json/?fields=country,city,lat,lon,timezone
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `Json` | It will returns your country, city, lat - lon and timezone |

#### Get the location's weather

```http
  https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=...
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Json` | We will replace the lat and lon in the api so it can reach our location's weather |


## Screenshots

[![temp-Image-GYcb1-K.avif](https://i.postimg.cc/rFvHpDSY/temp-Image-GYcb1-K.avif)](https://postimg.cc/crBh94kQ)
