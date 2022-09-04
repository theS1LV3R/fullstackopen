import { useState } from "react";

/**
 *
 * @param {{people: Record<string, any>[], setPeople: any}} { people, setPeople }
 */
export default function Form({ people, setPeople }) {
  const [newName, setNewName] = useState("");

  /**
   * @param {Event}
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (people.find((p) => (p.name === newName))) {
      return alert(`${newName} already exists in phonebook`);
    }

    setPeople([...people, { name: newName }]);
    setNewName("");
  };

  /**
   * @param {Event}
   */
  const handleNameInputChange = ({ target }) => setNewName(target.value);

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
