import { useState } from "react";

interface UserCardProps {
  name: string,
  age: number,
  onClick: (name: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({name, age, onClick}) => {

  // const [message, setMessage] = useState<string>("");
  
  const handleClick = () => {
    onClick(name);
    // setMessage(`Hello, ${name}!`)
  }

  return (
    <article className="card" style={{width: "18rem"}}>
      <div onClick={handleClick} 
      className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-title">{age}</h6>
        {/*message && (
          <p className="card-text mt-2">{message}</p>
        )*/}
      </div>
    </article>
  )
}

export default UserCard;
