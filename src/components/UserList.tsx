import { useState } from "react";
import UserCard from "./UserCard";

const users = [
  {name: "Steven", age: 25},
  {name: "Martha", age: 53},
  {name: "Claude", age: 15},
];

const UserList: React.FC = () => {
  const [clickedUser, setClickedUser] = useState<string | null>(null); 

  const handleClick = (name: string) => {
    setClickedUser(name);
  }

  return (
    <section className="container my-5">
      <h2>Users List</h2>
      <div className="row">
        {users.map((user) => {
          return (
          <div className="col-md-4" key={user.name}>
          <UserCard
            name={user.name}
            age={user.age}
            onClick={handleClick}
          />
          </div>
          )
      })}
        {clickedUser && (
        <p className="alert alert-primary my-3">
          Hello, {clickedUser}!
        </p>
        )}
      </div>
    </section>
  )
}

export default UserList;

