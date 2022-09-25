import { useState } from "react";
import numbers from "../services/numbers";

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
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!newName || !newNumber) {
      return alert("Please fill in all fields, name or number is empty");
    }

    if (people.find((p) => p.name === newName)) {
      if (
        window.confirm(
          `${newName} already exists in phonebook, replace old number with new?`
        )
      ) {
        const person = people.find((p) => p.name === newName);
        person.number = newNumber

        await numbers.update(person.id, person);

        setPeople([...people.filter((p) => p.id !== person.id), person]);
      }
      return;
    }

    if (people.find((p) => p.number === newNumber)) {
      return alert(`${newNumber} already exists in phonebook`);
    }

    const { id } = await numbers
      .add({ name: newName, number: newNumber })
      .catch((e) => {
        alert(`Error while adding: ${e}`);
        console.error(e);
        Promise.reject(e);
      });
    setPeople([...people, { id, name: newName, number: newNumber }]);
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
