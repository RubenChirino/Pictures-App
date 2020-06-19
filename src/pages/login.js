import React, { useEffect, useState, Fragment } from "react";
import { useLocation } from "wouter";
import "../styles/login.css";

export default function Login(){

    const [path, pushLocation] = useLocation();

    const [incorrect, setIncorrect] = useState(false);

    useEffect(function(){
        sessionStorage.clear();
    }, [])

function handleSubmit(e){

   e.preventDefault();

   const userName = document.getElementById('user').value;
   const passWord = document.getElementById('password').value;

   if(passWord === '123456'){
        sessionStorage.setItem('userName', userName);
        pushLocation(`/home`); 
   }else{
        setIncorrect(true);
   }
   
}

    return(
    
    <Fragment>
  
        {(incorrect) ? <div className="container">
            <div className="row alert alert-danger alert-margin-movil"role="alert">
            <h5>Incorrect password!</h5></div>
        </div> : '' } 

        <div className="container">
            <div className="row margin-center-styles">
                <div className="card form-margin-movil col-12 col-sm-10 col-lg-6 col-xl-6">
    
                    <h1 className="text-center">Sign In</h1>

                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label className="login-label-color">Username</label>
                            <input
                            className="form-control"
                            type="text" id="user"
                            name="email" required
                            />
                        </div>

                        <div className="form-group">
                            <label className="login-label-color">Password</label>
                            <input
                            className="form-control"
                            type="text" id="password"
                            name="passwordname" required
                            />
                        </div>

                        <div className="text-center mb-3">
                            <button className="btn btn-primary btn-lg">
                                Enter
                            </button>
                        </div>
                    
                    </form>
        
                </div>
            </div>
        </div>     

    </Fragment>
    ); 

}


/*

<div className="alert alert-danger container" role="alert" >
            <h5>Incorrect password!</h5>
        </div> 




 style="margin-right: 30px;"
*/
