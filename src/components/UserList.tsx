import UserCard from "./UserCard";

const users = [
  {name: "Steven", age: 25},
  {name: "Martha", age: 53},
  {name: "Claude", age: 15},
];

const UserList: React.FC = () => {

  const handleClick = (name: string) => {
    console.log(`Hello ${name}`)
  }

  return (
    <section className="container mt-5">
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
      </div>
    </section>
  )
}

export default UserList;

