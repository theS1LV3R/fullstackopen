export default function Person({ person, deletePerson }) {
  return (
    <li>
      {person.name}: {person.number ?? "no number"}{" "}
      <input
        type="button"
        value="Delete"
        onClick={() => deletePerson(person)}
      />
    </li>
  );
}
