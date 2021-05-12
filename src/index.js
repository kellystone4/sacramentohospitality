import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Modal from './components/modal';
import Homepage from './pages/homepage';
import App from './App';
import AboutUs from './pages/aboutUs';
import PastEvents from './pages/pastEvents'
// import BottomAppBar from './components/modal';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/navbar'
// import Modal from './components/modal'

ReactDOM.render(
  <React.StrictMode>
         <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/pastEvents" component={PastEvents} />
          {/* <Route path="/modal" component={Modal}/> */}
        </Switch>
      </Router>
    {/* <Router>
      
      {/* <Switch>
    <Homepage />
      <PastEvents />
    <AboutUs/> */}
      {/* <Switch> */}
        {/* <Route exact path from="/" render={props => <Homepage {...props} />} /> */}
        {/* // <Route exact path = ""></Route> */}
      {/* </Switch> */}
      {/* <BottomAppBar></BottomAppBar> */}
    {/* <Modal position="fixed"></Modal> */}
    {/* </Switch> */}
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
