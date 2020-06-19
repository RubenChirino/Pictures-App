import React from "react";
import { useLocation, Link  } from "wouter";
import handleSideBar from "../helpers/handleSideBar";

export default function Logo(){

    const [path, pushLocation] = useLocation();

    function handleHome(){

        if(path !== '/home'){
          
            handleSideBar(); 
        }    
  
    }

    return( <div className="row justify-content-center mt-3">
            <h1 className="text-center">
                <Link onClick={handleHome} to={`/home`} className="text-decoration-none">Pictures App</Link> 
            </h1>
        </div>
    );

}