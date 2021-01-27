import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  const all = (good + neutral + bad);
  const average = ((good - bad) / all);
  const goodPercentage = Math.round(((good / all) * 100) * 100) / 100;

  return (
    <div className="statistics">
      <h4 className="heading">statistics</h4>
      <br />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      {(!isNaN(average)) && <p>average {average}</p>}
      {(!isNaN(goodPercentage)) && <p>positive {goodPercentage} %</p>}
    </div>
  );
};

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
        <button className="good" onClick={handleGoodClick}>Good</button>
        <button className="neutral" onClick={handleNeutralClick}>Neutral</button>
        <button className="bad" onClick={handleBadClick}>Bad</button>
      </div>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

ReactDOM.render(<App />,
  document.getElementById('root')
)