import Person from "./Person";

import numbers from "../services/numbers";

export default function People({ people, setPeople }) {
  const deletePerson = async (removedPerson) => {
    if (
      window.confirm(`Are you sure you want to delete ${removedPerson.name}`)
    ) {
      await numbers.delete(removedPerson.id);
      setPeople(people.filter((p) => p.id !== removedPerson.id));
    }
  };

  return (
    <ul>
      {people.map((person) => (
        <Person key={person.name} person={person} deletePerson={deletePerson} />
      ))}
    </ul>
  );
}
