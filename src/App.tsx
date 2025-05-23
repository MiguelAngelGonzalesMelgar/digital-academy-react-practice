import ControlledUncontrolledForm from "./components/ControlledUncontrolledForm";
import KeyboardControlledCounter from "./components/KeyboardControlledCounter";
import UserList from "./components/UserList";
import UserListOriginal from "../refactor/UserListOriginal";
import UserListRefactor from "../refactor/UserListRefactor";

function App() {
  return (
    <section className="container">
      <h1 className="mb-5" >React Basics Practice</h1>
      <ControlledUncontrolledForm/>
      <UserList/>
      <KeyboardControlledCounter/>
      <h2 className="mt-5">Refactor</h2>
      <h4>Original</h4>
      <UserListOriginal/>
      <h4>Refactored</h4>
      <UserListRefactor/>
    </section>
  )
}

export default App
