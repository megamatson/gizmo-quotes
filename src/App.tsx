import React from 'react';
import './App.css';

const quotes: [string|React.ReactElement, string][] = [
  ["What's the worst that could happen? He'll be a virgin twice?", 'like the second session or something'],
  [
    <span style={{ fontSize: '100%'}}>
      I cannot wait to use my imposing figure to intimidate kobolds. Using my imposing figure to intimidate <span style={{fontSize: '90%'}}> kobolds is the best... thing and most amount of fun you can have while being in a cave. I can see why all <span style={{fontSize: '80%'}}>the kids are hanging out in caves these days. It's because they like</span> to intimidate kobolds with their imposing figure.</span> I <em>also</em> like to intimidate kobolds with my imposing figure. It is the most fun you can possibly have.
    </span>,
    'like the fourth session or something'
  ],
  ['I do not eat breakfast because breakfast is for nerds.', 'September 10th, 2022'],
];

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>Quote</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map(([quote, date]) => (<tr>
          <td>{quote}</td>
          <td>{date}</td>
        </tr>))}
      </tbody>
    </table>
  );
}

export default App;
