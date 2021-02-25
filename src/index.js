import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Modal from './components/modal';
import Homepage from './components/homepage'

ReactDOM.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Homepage />
    {/* <Modal></Modal> */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
