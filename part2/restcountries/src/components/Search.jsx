export default function Search({ searchString, setSearchString }) {
  const handleSearchInputChange = ({ target }) => setSearchString(target.value);

  return (
    <input
      type="text"
      value={searchString}
      onChange={handleSearchInputChange}
    />
  );
}
