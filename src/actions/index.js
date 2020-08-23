import Axios from "axios";

const API_KEY = "8d29966327ba69622ef836e884699042";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},uk&appid=${API_KEY}`;
  let request = Axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
