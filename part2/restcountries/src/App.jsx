import { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search";
import Resultlist from "./components/Resultlist";

const SERVER_URL = "https://restcountries.com/v3.1";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchString, setSearch] = useState("");

  useEffect(() => {
    axios.get(`${SERVER_URL}/all`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((c) =>
        c.name.official.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [countries, searchString]);

  return (
    <div>
      <h2>Search</h2>
      <Search searchString={searchString} setSearch={setSearch} />
      <Resultlist countries={filteredCountries} searchString={searchString} setSearch={setSearch} />
    </div>
  );
};

export default App;
