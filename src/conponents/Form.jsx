import React, { useState, useEffect } from "react";
import { API_KEY } from "../config";

import Card from "./Card";
import InfiOneDay from "./InfiOneDay";
import { mounh } from "../constants";
import logo from "../assets/icons/logo.ico"
import theme from "../assets/icons/theme.png"


function Form() {
  const [weather, setWeather] = useState({});
  const [fife, setFife] = useState([]);

  const [cityName, setСityName] = useState([]);
  const [city, setCity] = useState("Mogilev");
  const [input, setInput] = useState("");

  const handelWeather = (e) => {
    setCity(input);
    console.log(input);
  };
  const handelCity = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${API_KEY}&lang=ru`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.list[0]);
        setFife(
          data.list.filter((reading) => reading.dt_txt.includes("12:00:00"))
        );
        setСityName(data);
      });
  }, [city]);



  return (
    
  <>
    <div className="header">
      <div className="vraper">
        <div className="logo">
          <img width="65" src={logo} alt="Логотип" />
        </div>
        <div className="tuitle">React weather</div>
      </div>
      <div className="vraper">
        <div className="smenaTheme">
          <img src={theme} alt="Смена темы" />
        </div>
        <div>
          <input
            className="input"
            type="text"
            name="city"
            placeholder="Введите город..."
            onChange={handelCity}
          />
          <button className="button" onClick={handelWeather}>
            ОК
          </button>
        </div>
      </div>
    </div>
    <div>


      
      {/*на СЕГОДНЯ СОСТОЯНИЕ */}
      <div>
      {(typeof weather.main !== 'undefined') ? (
<div >
{cityName && weather && <InfiOneDay temp={Math.round(weather.main?.temp)}
 cityName={cityName.city?.name} 
 icon_id={weather.weather[0].icon}
 davlenie_info={Math.round((weather.main?.pressure)/1.333)} 
 ocadki_info={weather.weather[0].description} 
 veter_info={weather.wind?.speed}
 temp_onfo={Math.round(weather.main?.feels_like)}/>}

</div>

 ) : ('')}



{/* карточки */}
      <div className="card_card_card">
        {fife?.map ((i) => {
          const date = new Date(i.dt * 1000);
          return (
            <Card
              date={`
        ${date.getDate()}
        ${mounh[date.getMonth()].slice(0, 3)}
      `}
              icon_id={i.weather[0].icon}
              temp_min={Math.round(i.main?.temp_min)}
              temp_max={Math.round(i.main?.temp_max)}
              veter={i.weather[0].description}
              speed={i.wind.speed}
            />
          );
        })}
      </div>
</div>
    </div>
   
    </>

  );
}

export default Form;
