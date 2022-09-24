export default function Search({ searchString, setSearch }) {
  const handleSearchInputChange = ({ target }) => setSearch(target.value);

  return (
    <>
      <input
        type="text"
        value={searchString}
        onChange={handleSearchInputChange}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setSearch("");
        }}
      >clear</button>
    </>
  );
}
