export default function Person({ person }) {
  return <li>{person.name}: {person.number ?? "no number"}</li>;
}
