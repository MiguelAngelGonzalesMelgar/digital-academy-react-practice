
const KeyBoardControlledCounter: React.FC = () => {
  
  return (
    <section className="container">
      <h2>Keyboard Controlled Counter</h2>

      <div className="card text-center" style={{ width: "18rem"}}>
        <div className="card-body">
          <h3 className="card-title">Count</h3>

          <button className="btn btn-succes m-1">Increment</button>
          <button className="btn btn-warning m-1">Decrement</button>
        </div>

      </div>
    </section>
  )
}

export default KeyBoardControlledCounter;
