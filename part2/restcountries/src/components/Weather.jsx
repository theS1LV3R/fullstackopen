import { useState, useEffect } from "react";
import axios from "axios";

// Key was snatched from their api explorer page, unknown how long it will work
const APIURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/oslo?unitGroup=metric&include=current&key=ZMM2U9XUSJ6UV37L4L49NQACY&options=preview&contentType=json";

const LOADING_STATE = {
  LOADING: 0,
  RESOLVED: 1,
  ERROR: 2,
};

export default function Weather({ city }) {
  const [weather, setWeather] = useState({});
  const [loadingState, setLoadingState] = useState(LOADING_STATE.LOADING);

  useEffect(() => {
    axios
      .get(APIURL)
      .then((res) => setWeather(res.data))
      .then(() => setLoadingState(LOADING_STATE.RESOLVED))
      .catch((e) => {
        console.error(e);
        setLoadingState(LOADING_STATE.ERROR);
      });
  }, []);

  return (
    <div className="weather">
      <h2>Weather in {city}</h2>
      {loadingState === LOADING_STATE.ERROR ? (
        <p>Error while loading weather data</p>
      ) : loadingState === LOADING_STATE.LOADING ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>
            Temperature: {weather.currentConditions.temp}C (feels like{" "}
            {weather.currentConditions.feelslike}C)
          </p>
          <p>{weather.currentConditions.conditions}</p>
        </>
      )}
    </div>
  );
}
