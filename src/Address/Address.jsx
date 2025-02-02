import React from "react";
import "./Address.css";

function Address({ address }) {
  return (
    <div>
      <p>
        <b>Region:</b> {address.region}
      </p>
      <p>
        <b>ZIP code:</b> {address.zip}
      </p>
    </div>
  );
}

export default Address;
