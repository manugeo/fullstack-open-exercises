import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ name, value }) => <tr><td>{name}</td><td>{value}</td></tr>;

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = (good + neutral + bad);
  const average = ((good - bad) / all);
  const goodPercentage = Math.round(((good / all) * 100) * 100) / 100;

  if (all === 0) return null;

  return (
    <div className="statistics">
      <h4 className="heading">statistics</h4>
      <br />
      <table>
        <tbody>
          <Statistic name="good" value={good} />
          <Statistic name="neutral" value={neutral} />
          <Statistic name="bad" value={bad} />
          <Statistic name="all" value={all} />
          <Statistic name="average" value={average} />
          <Statistic name="positive" value={goodPercentage} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h4 className="heading">give feedback</h4>
      <br />
      <div className="buttons-container">
        <Button text="Good" onClick={handleGoodClick} />
        <Button text="Neutral" onClick={handleNeutralClick} />
        <Button text="Bad" onClick={handleBadClick} />
      </div>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

ReactDOM.render(<App />,
  document.getElementById('root')
)