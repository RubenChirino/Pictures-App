import React, { useEffect, useState, Fragment } from "react";
import { useLocation } from "wouter";

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

   //console.log({userName, passWord});

   if(passWord === '123456'){
        sessionStorage.setItem('userName', userName);
        pushLocation(`/home`); 
   }else{
        setIncorrect(true);
   }
   
}

    return(
    
    <Fragment>
  
        {(incorrect) ? <div className="alert alert-danger" role="alert" >
            <h5>Incorrect password!</h5>
        </div>  : '' } 

        <div className="container">
            <div className="row margin-center-styles">
                <div className="card col-6">
    
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

