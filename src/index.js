import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Modal from './components/modal';
import Homepage from './pages/homepage';
import App from './App';
import AboutUs from './pages/aboutUs';
import PastEvents from './pages/pastEvents'
import BottomAppBar from './components/modal';

ReactDOM.render(
  <React.StrictMode>
    {/* <App></App> */}
    {/* <Homepage /> */}
    <PastEvents />
    {/* <AboutUs/> */}
      {/* <Switch>
        <Route exact path = ""></Route>
        <Route exact path = ""></Route>
      </Switch> */}
      {/* <BottomAppBar></BottomAppBar> */}
    {/* <Modal position="fixed"></Modal> */}
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
