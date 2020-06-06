import React from 'react';

import './App.css';
import Hello from './Hello.js';

// function App(props) {
//   return (
//   <div>Hello from App.js updated {props.name} and he is {props.age-10}</div>
//   );
// }

function App(props) {
  let {name, age} = props;
  return (
  <div>
    <h1>Hello <strong>{name}</strong></h1>
    <h2>I love React!</h2>
    <ol><li>Enlgish</li><li>Maths</li><li>Urdu</li></ol>
    <ul><li>Sir Zia</li><li>Sir Zeeshan</li><li>Sir Adeel</li></ul>
    <p>My age subtracted by 10 is: {age-10}</p>
  </div>
  );
}

// function App({name, age}) {
//   return (
//   <div>Hello from App.js updated {name} and he is {age-10}</div>
//   );
// }

export default App;
