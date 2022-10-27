import React from "react";
import "./Form.scss";
import "./Card.scss";

function Card({ date, speed, icon_id, temp_min, temp_max, veter }) {
  return (
    
     <div className="card">
        <div className="one_day_card">
          <div className="day_card">{date}</div>
          <div className="day_nedela"></div>
          <div className="img_card">
            <img
              src={`http://openweathermap.org/img/wn/${icon_id}@2x.png`}
              alt="icon"
            />
          </div>
          <div className="day_temp_card"> Макс:{temp_max}  °C</div>
          <div className="day_night_card"> Мин: {temp_min} °C</div>
          <div className="verer_card">Ветер {speed} м/с</div>
          <div className="info_card">{veter}</div>
        </div>
        </div>
     

  );
}

export default Card;
