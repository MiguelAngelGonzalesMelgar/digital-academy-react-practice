import { useState } from "react";

const KeyboardControlledCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  // Handlers
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  }

  const handleDrecrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }
  
  return (
    <section className="container my-3 text-center">
      <h2>Keyboard Controlled Counter</h2>
      <div className="d-flex justify-content-center">
        <div className="card text-center" style={{ width: "18rem"}}>
          <div className="card-body">
            <h3 className="card-title">{count}</h3>

            <button className="btn btn-success m-1"
            onClick={handleIncrement}
            >Increment</button>
            <button className="btn btn-warning m-1"
            onClick={handleDrecrement}
            >Decrement</button>
          </div>
          </div>
      </div>
    </section>
  )
}

export default KeyboardControlledCounter;
