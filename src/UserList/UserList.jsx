import User from "../User/User.jsx";
import "./UserList.css";

function UserList({ users }) {
  return (
    <div className="userList">
      {users?.length > 0 ? (
        users.map((user) => <User key={user.id} user={user} />)
      ) : (
        <p>Malumot mavjud emas</p>
      )}
    </div>
  );
}

export default UserList;
