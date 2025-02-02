import "./App.css";
import UserList from "./UserList/UserList.jsx";
import usersData from "./assets/users.json";

function App() {
  return (
    <div>
      <h1>User List:</h1>
      <UserList users={usersData} />
    </div>
  );
}

export default App;
