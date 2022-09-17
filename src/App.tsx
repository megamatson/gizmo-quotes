import React from 'react';
import './App.css';

const quotes: [string, string][] = [
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
