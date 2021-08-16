import React from "react";
import "./InfoBox.css";

function InfoBox({ title, cases, secondary, total, active, isRed, ...props }) {
  return (
    <div
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${secondary && "secondary"}`}
    >
      <h3>{title}</h3>
      <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
        {cases}
      </h2>
      <p className="infoBox__total">{total} Total</p>
    </div>
  );
}

export default InfoBox;
