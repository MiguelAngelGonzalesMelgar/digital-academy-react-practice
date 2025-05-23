import { useRef, useState } from "react";

const ControlledUncontrolledForm: React.FC = () => {

  // Controlled input state
  const [controlledInput, setControlInput] = useState<string>("");

  // Uncontrolled input reference
  const uncontrolledInputRef = useRef<HTMLInputElement>(null);


  // Handlers
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    setControlInput(event.target.value)
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const uncontrolledValue = uncontrolledInputRef.current?.value;

    // Data to be shown
    const formData = [
      { field: "Controlled Input", value: controlledInput },
      { field: "Uncontrolled Input", value: uncontrolledValue || "" }
    ];
    console.table(formData);
  }

  return (
    <>
      <h3>Controlled vs Uncontrolled Inputs</h3>
      <form onSubmit={handleSubmit}>
        {/* Controlled input */}
        <div className="form-group mb-3">
          <label htmlFor="controlled-input">
            Controlled Input:
          </label>
          <input id="controlled-input" 
          className="form-control mt-2"
          type="text" 
          value={controlledInput}
          onChange={handleOnChange}
          />
        </div>

      {/* Uncontrolled input */}
        <div className="form-group mb-3">
          <label htmlFor="uncontrolled-input">
            Uncontrolled Input:
          </label>
          <input id="uncontrolled-input"
          className="form-control mt-2"
          type="text"
          ref={uncontrolledInputRef}
          />
        </div>
        <div className="d-flex justify-content-end">
        <button type="submit"
        className="btn btn-success"
        >Log Input Values</button>
        </div>
      </form>
    </>
  );
}

export default ControlledUncontrolledForm
