import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Hello.css';

// function App(props) {
//   return (
//   <div>Hello from App.js updated {props.name} and he is {props.age-10}</div>
//   );
// }

function Hello(props) {  
  return (
  <div className='myname'>Hello from Hello.js {props.name}</div>
  );
}

// function App({name, age}) {
//   return (
//   <div>Hello from App.js updated {name} and he is {age-10}</div>
//   );
// }

export default Hello;
