import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

function App() {
  const apiKey = "72b92c2ae160b9c39943bba03c1345e3";
  const [data, setData] = useState({});
  const [city, setCity] = useState({});

  const getCity=(e)=>{
   console.log(e.target.value)
   setCity(e.target.value)
  
  }

  const getWeatherDetails = (city) => {
    if (!city) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response ", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };

 const searchWeather=()=>{
  getWeatherDetails(city);
 }

  React.useEffect(() => {
    getWeatherDetails("delhi");
  },[]);

  return (
    <div className="container-fluid">
      <div className="weatherBg col-md-12 text-center mt-5">
        <h1 className="heading h1">WEATHER APP </h1>
        <div className="d-grid col-4 gap-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="city name"
            onChange={getCity}
            
          />
          <button className="btn btn-primary"  onClick={searchWeather}>Search</button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResult container-fluid">
          <img
            className="weatherIcon"
            src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
            alt=""
          />
          <h5 className="city">{data?.name}</h5>
          <h6 className="tempreture">
            {(data?.main?.temp-273.15).toFixed(2)}°C
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
