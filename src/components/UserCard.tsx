
interface UserCardProps {
  name: string,
  age: number,
  onClick: (name: string) => void;
}

const UserCard: React.FC<UserCardProps> = () => {
  return (
    <article className="card" style={{width: "18rem;"}}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h5 className="card-title">Card title</h5>
      </div>
    </article>
  )
}

export default UserCard;
