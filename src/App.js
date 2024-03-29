import React, { Fragment } from 'react';
import { Route } from "wouter"
import Login from "./pages/login";
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (

    <Fragment>   
  
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/404" component={() => <h1>404 ERROR :(</h1>} />
     
    </Fragment>

  );
}

export default App;
