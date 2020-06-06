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
  <div>Hello from App.js updated {name} and he is {age-12}<br/>
  <Hello name={name}/></div>
  );
}

// function App({name, age}) {
//   return (
//   <div>Hello from App.js updated {name} and he is {age-10}</div>
//   );
// }

export default App;
