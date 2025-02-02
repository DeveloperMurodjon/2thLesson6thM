import React from "react";
import Address from "../Address/Address.jsx";
import Car from "../Car/Car.jsx";
import "./User.css";

function User({ user }) {
  return (
    <div className="UserCard">
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>
        <b>Phone</b>: {user.phone}
      </p>
      <p>
        <b>Email</b>: {user.email}
      </p>
      <Address address={user.address} />
      <Car cars={user.cars} />
    </div>
  );
}

export default User;
