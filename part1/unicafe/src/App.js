import { useState } from "react";
import Button from "./components/Button";


/**
 *
 *
 * @param {{ good: number, neutral: number, bad: number }}
 * @return {HTMLUListElement}
 */
const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad

  if (sum === 0) return <p>no stats recorded yet</p>

  return (
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>sum: {sum}</li>
      <li>average: {(good / bad )}</li>
      <li>positive: {(good/sum)*100 }%</li>
    </ul>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <div className="buttons">
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
