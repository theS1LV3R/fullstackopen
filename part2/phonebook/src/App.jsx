import { useState } from "react";
import Form from "./components/Form";
import People from "./components/People"

const App = () => {
  const [people, setPeople] = useState([{ name: "Arto Hellas" }]);


  return (
    <div>
      <h2>Phonebook</h2>
      <Form people={people} setPeople={setPeople} />
      <h2>Numbers</h2>
      <People people={people} />
    </div>
  );
};

export default App;
