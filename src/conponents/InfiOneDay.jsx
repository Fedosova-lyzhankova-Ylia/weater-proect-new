import React from "react";
import "./InfiOneDay.scss";
import сloud from "../assets/imeges/сloud.png"
import Clock from "./Clock";
import pressure from "../assets/icons/pressure.png"
import temper from "../assets/icons/temper.png"
import veter from "../assets/icons/veter.png"
import ocadki from "../assets/icons/ocadki.png"


function InfiOneDay({ temp, cityName, icon_id, temp_onfo , davlenie_info, ocadki_info, veter_info }) {
  return (
    <div className="home">
      {/* 1 блок */}
      <div className="this_day">
        <div className="top_blok">
          <div className="top_blok_vraper">
            <div className="this_temp">{temp}°C</div>
            <div className="this_day_name">Сегодня</div>
          </div>
          <div className="icon_weather"><img width="120" src={`http://openweathermap.org/img/wn/${icon_id}@2x.png`} alt="icon" /></div>
        </div>
        <div className="boton_blok">
          <div className="this_time">
            Время: <span>
              <Clock/>
            </span>
          </div>
          <div className="this_city">
            Город: <span>{cityName}</span>
          </div>
        </div>
      </div>


      {/* 2 блок */}
      <div className="day_info">
        <div className="day_info_items">
          <img className="сloud"  src={сloud} alt="облака" />
          <div className="icon_info">
            <div className="icon_info_info"><img width="30" src={temper} alt="Температура" /></div>
            <div className="icon_info_info"><img src={pressure} alt="давление" /></div>
            <div className="icon_info_info"><img src={ocadki} alt="Осадки" /></div>
            <div  className="icon_info_info"><img src={veter} alt="Скорость ветра" /></div>
          </div>
          <div className="name_info">
            <div className="name_info_info">Температура:</div>
            <div className="name_info_info">Давление:</div>
            <div className="name_info_info">Осадки:</div>
            <div className="name_info_info">Скорость ветра:</div>
          </div>
          <div className="value_info" >
            <div className="value_info_info">{temp}°C ощущается как {temp_onfo} °C</div>
            <div className="value_info_info">{davlenie_info} мм ртутного столба</div>
            <div className="value_info_info">{ocadki_info}</div>
            <div className="value_info_info">{veter_info} м/с </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default InfiOneDay;
