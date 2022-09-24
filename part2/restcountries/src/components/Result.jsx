export default function Result({ country, setSearch }) {
  const handleButtonClick = (e) => {
    e.preventDefault();

    setSearch(country.name.official);
  };

  return (
    <li>
      {country.name.official} <button onClick={handleButtonClick}>show</button>
    </li>
  );
}
