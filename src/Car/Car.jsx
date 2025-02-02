import React from "react";

function Car(props) {
  const { car } = props;
  return (
    <div>
      <p>{car}</p>
    </div>
  );
}

export default Car;
