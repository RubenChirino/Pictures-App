import React, { Fragment } from 'react';
import { Route } from "wouter"
import Login from "./pages/login";
import Home from './pages/home';

function App() {
  return (

    <Fragment>  
  
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
     
    </Fragment>

  );
}

export default App;
