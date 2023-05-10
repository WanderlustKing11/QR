import React from 'react';
import '../dist/style.css';

const TODOS = [
  "Connect React", 
  "Import CSS",
  "Configure Webpack",
  "Keep it sexy"
];

const App = () => {
  return <div>
    <h1>Hello, React!</h1>
    <h2>With JSX</h2>
    {TODOS.map((element) => {
      return <li>{element}</li>;
    })}
  </div>
};

export default App;