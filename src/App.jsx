import "./App.css";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import ControlField from "./components/ControledField/ControlField";
import FamilyTree from "./components/FamilyTree/FamilyTree";

function App() {
  return (
    <>
      <h1> Explore React Form </h1>
      <SimpleForm />
      <ControlField></ControlField>
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
