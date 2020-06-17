import React, { Fragment } from 'react';
import Login from "./pages/login";
/* import { BrowserRouter, Switch, Route } from 'react-router-dom'; */
import { Link, Route } from "wouter"
import home from './pages/home';

function App() {
  return (

    <Fragment>  
  
        <Route path="/" component={Login} />
        <Route path="/Home/:user/:id" component={home} />
        { /*<Route component={NotFound} /> */}
     
    </Fragment>

  );
}

export default App;


    /*<div className="App">

  </div> */