import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Tablehad,{Table} from './Table';
//import Navbar from './Navbar';
//import Pizza from './Pizza';
//import Clock from './Clock';
//import Dropdown from './Dropdown';
//import Board from './PassProps';
import ErrorPage from "./TestError.js";
import reportWebVitals from './reportWebVitals';

/*class App2 extends Component {
  render(){
    return ( 
        <Tablehad />
    )
  }
}
*/

ReactDOM.render(
  <React.StrictMode>
    <ErrorPage />
  </React.StrictMode>,
  document.getElementById('navbar')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
