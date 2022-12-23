import React from "react";
function Card(props) {
  //console.log(props);
  return (
    <>
      <div className="card">
        <img src={props.imgsrc} alt="mypic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h1 className="card_title">{props.sname}</h1>
          <a href={props.link} target="_blank">
            <div className="button">
              <button className="ans">Watch Now</button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
