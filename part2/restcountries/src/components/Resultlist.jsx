import Country from "./Country";
import Result from "./Result";

export default function Resultlist({ countries, setSearch, searchString }) {
  if (searchString === "" ) {
    return <p>Type in the input to search</p>
  }

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
        <Result key={c.cca3} country={c} setSearch={setSearch} />
      ))}
    </ul>
  );
}
