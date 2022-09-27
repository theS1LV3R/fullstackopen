import { useState, useEffect } from "react";

import numbers from "./services/numbers";

import Form from "./components/Form";
import People from "./components/People";
import Search from "./components/Search";
import Notification from "./components/Notification";

export const LOADING_STATE = {
  LOADING: 0,
  RESOLVED: 1,
  ERROR: 2,
};

const App = () => {
  /** @type {[{name: string, number: string}[], setPeople: (people: {name: string, number: string}[]) => void]} */
  const [people, setPeople] = useState([]);
  const [notification, setNotification] = useState();
  const [loadingState, setLoadingState] = useState(LOADING_STATE.LOADING);

  useEffect(() => {
    numbers
      .getAll()
      .then((num) => setPeople(num))
      .then(() => setLoadingState(LOADING_STATE.RESOLVED));
  }, [loadingState]);

  const [searchString, setSearchString] = useState("");

  return (
    <div>
      {notification && (
        <Notification
          severety={notification.severety}
          message={notification.message}
          setNotification={setNotification}
        />
      )}
      <h2>Search</h2>
      <Search searchString={searchString} setSearchString={setSearchString} />
      <h2>Phonebook</h2>
      <Form
        people={people}
        setPeople={setPeople}
        setNotification={setNotification}
        setLoadingState={setLoadingState}
      />
      <h2>Numbers</h2>
      <People
        people={people.filter((p) =>
          `${p.name} ${p.number}`
            .toLowerCase()
            .includes(searchString.toLowerCase())
        )}
        setPeople={setPeople}
      />
    </div>
  );
};

export default App;
