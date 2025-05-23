import ControlledUncontrolledForm from "./components/ControlledUncontrolledForm"
import KeyboardControlledCounter from "./components/KeyboardControlledCounter"
import UserList from "./components/UserList"

function App() {
  return (
    <section className="container">
      <h1 className="mb-5" >React Basics Practice</h1>
      <ControlledUncontrolledForm/>
      <UserList/>
      <KeyboardControlledCounter/>
    </section>
  )
}

export default App
