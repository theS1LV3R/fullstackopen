import Country from "./Country";

export default function Resultlist({ countries }) {
  if (countries.length === 0) {
    return <p>No results</p>;
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  if (countries.length > 10) {
    return <p>Too many results, narrow it down more</p>;
  }

  return (
    <ul>
      {countries.map((c) => (
        <li>{c.name.official}</li>
      ))}
    </ul>
  );
}
