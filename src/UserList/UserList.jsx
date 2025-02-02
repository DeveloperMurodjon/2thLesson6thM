import User from "../User/User.jsx";
import "./UserList.css";

function UserList(props) {
  const { users } = props;
  console.log("user list", users);
  return (
    <div className="userList">
      {users.length > 0 &&
        users.map(function (user, index) {
          return <User key={index} user={user} />;
        })}
    </div>
  );
}

export default UserList;
