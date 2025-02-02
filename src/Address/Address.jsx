import React from "react";
import "./Address.css";

function Address(props) {
  const { region, zip } = props;
  return (
    <div className="AdressWrapper">
      <h3>Adress:</h3>
      <p>
        <b>Region:</b> {region}
      </p>
      <p>
        <b>ZIP code:</b> {zip}
      </p>
    </div>
  );
}

export default Address;
