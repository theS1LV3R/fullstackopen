import { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import People from "./components/People";
import Search from "./components/Search";

const SERVER_URL = "http://localhost:3001";

const App = () => {
  /** @type {[{name: string, number: string}[], setPeople: (people: {name: string, number: string}[]) => void]} */
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/persons`).then((res) => {
      setPeople(res.data);
    });
  }, []);

  const [searchString, setSearchString] = useState("");

  return (
    <div>
      <h2>Search</h2>
      <Search searchString={searchString} setSearchString={setSearchString} />
      <h2>Phonebook</h2>
      <Form people={people} setPeople={setPeople} />
      <h2>Numbers</h2>
      <People
        people={people.filter((p) =>
          `${p.name} ${p.number}`
            .toLowerCase()
            .includes(searchString.toLowerCase())
        )}
      />
    </div>
  );
};

export default App;
