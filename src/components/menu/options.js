import React from "react";
import { useLocation } from "wouter";

export default function Options({ logout }){

    const [path, pushLocation] = useLocation();

    function handleLogOut(){
      
        const menu = document.querySelector('#sidemenu');

        menu.classList.toggle("menu-expanded");
        menu.classList.toggle("menu-collapsed");
    
        document.querySelector('body').classList.toggle('body-expanded');

        sessionStorage.clear(); 
        pushLocation('/');
    }

    return(

        <div id="menu-items">

            <div className="item" id="photo">
                <div className="option" onClick={handleLogOut}>
                    <div className="icon"><img src={logout} alt="" /></div>
                    <div className="title"><span>Logout</span></div>
                </div>
            </div>

            <div className="item separator"></div>

            <div className="item" id="photo">
                <div className="option">
                    <div className="icon"><img src={logout} alt="" /></div>
                    <div className="title"><span>Cloud Services</span></div>
                </div>
            </div>

        </div> 

    );

}