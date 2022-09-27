import { useState } from "react";
import { LOADING_STATE } from "../App";
import numbers from "../services/numbers";
import { NOTIFICATION_SEVERETIES } from "./Notification";

/**
 *
 * @param {{people: Record<string, any>[], setPeople: any}} { people, setPeople }
 */
export default function Form({
  people,
  setPeople,
  setNotification,
  setLoadingState,
}) {
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

        numbers
          .update(person.id, person)
          .then(() => {
            setPeople([
              ...people.filter((p) => p.id !== person.id),
              { ...person, number: newNumber },
            ]);
          })
          .catch((e) => {
            console.error(e);

            if (e.response.status === 404) {
              setLoadingState(LOADING_STATE.LOADING);
              return setNotification({
                message: `User not found, was it already deleted?`,
                severety: NOTIFICATION_SEVERETIES.ERROR,
              });
            }

            setNotification({
              message: e,
              severety: NOTIFICATION_SEVERETIES.ERROR,
            });
          });
      }
    } else {
      if (people.find((p) => p.number === newNumber)) {
        return alert(`${newNumber} already exists in phonebook`);
      }

      const { id } = await numbers
        .add({ name: newName, number: newNumber })
        .then(() => {
          setNotification({
            message: "Added new number",
            severety: NOTIFICATION_SEVERETIES.INFO,
          });
        })
        .catch((e) => {
          setNotification({
            message: `Error while adding: ${e}`,
            severety: NOTIFICATION_SEVERETIES.ERROR,
          });
          console.error(e);
          Promise.reject(e);
        });

      setPeople([...people, { id, name: newName, number: newNumber }]);
    }

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
