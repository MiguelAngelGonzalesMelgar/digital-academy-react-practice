import { useEffect, useState } from "react";

const KeyboardControlledCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  // Handlers
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  }

  const handleDrecrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }

  useEffect(() => {
    // Keydown handler
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        handleIncrement();
      } else if (event.key === "ArrowDown") {
        handleDrecrement();
      }
    };

    // Window event 
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [])

  
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
          <p className="fs-5 mt-2">
            Click to increment or decrement count. 
          </p>
          <p>
            <strong>Try pressing: </strong><kbd>ArrowUp</kbd> <strong> or: </strong> <kbd>ArrowDown</kbd>
            </p>
    </section>
  )
}

export default KeyboardControlledCounter;
