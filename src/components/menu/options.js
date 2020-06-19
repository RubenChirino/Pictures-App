import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function Options({ logout }){

    const [path, pushLocation] = useLocation();

    const [checked, setChecked] = useState(false);

    function handleLogOut(){
      
        const menu = document.querySelector('#sidemenu');

        menu.classList.toggle("menu-expanded");
        menu.classList.toggle("menu-collapsed");
    
        document.querySelector('body').classList.toggle('body-expanded');

        sessionStorage.clear(); 
        pushLocation('/');
    }

    function handleDarkMode(e){

     setChecked(e.target.checked); 
     
     if(e.target.checked){
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }

    }

    function changeMedia(mq){
        setChecked(mq.matches);  
        
        if(mq.matches){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
    }

    useEffect(function(){
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addListener(changeMedia);
        setChecked(mq.matches);       
    },[]);

    return(

        <div id="menu-items">

            <div className="item" id="photo">
                <div className="option" onClick={handleLogOut}>
                    <div className="icon"><img src={logout} alt="" /></div>
                    <div className="title"><span className="color-options">Logout</span></div>
                </div>
            </div>

            <div className="item separator"></div>

            <div className="item" id="photo">
                <div className="option">
                    <div className="icon"><img src={logout} alt="" /></div>
                    <div className="title">
                    <span className="color-options">Cloud Services</span>
                    <input onChange={handleDarkMode} type="checkbox" id="darkModeCheck" checked={checked} className="form-check-input check-modes-styles" />
                    </div>
                </div>
            </div>

        </div> 

    );

}

/* 

<span>Cloud Services</span>

*/