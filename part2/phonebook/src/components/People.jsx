import Person from "./Person";

export default function People({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </ul>
  );
}
