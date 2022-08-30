import { useState } from "react";

const genRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { quote: "If it hurts, do it more often.", votes: 0 },
    {
      quote: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      quote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { quote: "Premature optimization is the root of all evil.", votes: 0 },
    {
      quote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      quote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
  ]);

  const [selected, setSelected] = useState(genRandomNum(0, anecdotes.length - 1));

  const handleButtonClick = () =>
    setSelected(genRandomNum(0, anecdotes.length - 1));

  const handleVote = () =>
    setAnecdotes(
      anecdotes.map((v, i) =>
        i === selected ? { ...v, votes: v.votes + 1 } : v
      )
    );

  return (
    <div>
      <p>{anecdotes[selected].quote}</p>
      <p>votes: {anecdotes[selected].votes}</p>
      <button onClick={handleVote}>vote for this</button>
      <button onClick={handleButtonClick}>gib random quote</button>
    </div>
  );
};

export default App;
