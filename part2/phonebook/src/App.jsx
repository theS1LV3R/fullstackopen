import { useState } from "react";
import Form from "./components/Form";
import People from "./components/People";
import Search from "./components/Search";

const App = () => {
  /** @type {[{name: string, number: string}[], setPeople: Function]} */
  const [people, setPeople] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

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
