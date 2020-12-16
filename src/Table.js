import React from "react";
import "./Table.css";
import numeral from "numeral";

const Table = ({ tableInfo, title, secondary }) => {
  return (
    <div className={`table ${secondary && "secondary"}`}>
      <h4>{title}</h4>
      {tableInfo}
    </div>
  );
};

export default Table;
