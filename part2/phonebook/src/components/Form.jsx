import { useState } from "react";

/**
 *
 * @param {{people: Record<string, any>[], setPeople: any}} { people, setPeople }
 */
export default function Form({ people, setPeople }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  /**
   * @param {Event}
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!newName || !newNumber) {
      return alert("Please fill in all fields, name or number is empty");
    }

    if (people.find((p) => p.name === newName)) {
      return alert(`${newName} already exists in phonebook`);
    }

    if (people.find((p) => p.number === newNumber)) {
      return alert(`${newNumber} already exists in phonebook`);
    }

    setPeople([...people, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
  };

  /**
   * @param {Event}
   */
  const handleNameInputChange = ({ target }) => setNewName(target.value);

  /**
   * @param {Event}
   */
  const handleNumberInputChange = ({ target }) => setNewNumber(target.value);

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameInputChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
