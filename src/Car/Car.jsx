import React from "react";
import "./Car.css";

function Car({ cars } = "mavjud emas") {
  return (
    <div>
      {
        <p>
          <b>Cars:</b> {cars.join(", ")}
        </p>
      }
    </div>
  );
}

export default Car;
