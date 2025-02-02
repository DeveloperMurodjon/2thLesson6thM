import React from "react";
import Address from "../Address/Address.jsx";
import Car from "../Car/Car.jsx";
import "./User.css";

function User(props) {
  const { user } = props;
  console.log("user", user);
  return (
    <div className="UserCard">
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>
        <b>Phone:</b> {user.phone}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <Address region={user.address.region} zip={user.address.zip} />
      <div className="carsTitle">
        <h3>Cars:</h3>
        <div>
          {" "}
          {user.cars.length > 0 &&
            user.cars.map(function (car, index) {
              return <Car key={index} car={car}></Car>;
            })}
          {user.cars.length == 0 && <p>Mashina mavjud emas</p>}
        </div>
      </div>
    </div>
  );
}

export default User;
