import React from "react";

function Car({ cars }) {
  return (
    <div>
      <p>Cars: {cars.join(", ")}</p>
    </div>
  );
}

export default Car;
