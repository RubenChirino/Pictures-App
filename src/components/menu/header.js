import React from "react";

function handleMenu(){

    const menu = document.querySelector('#sidemenu');

    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");

    document.querySelector('body').classList.toggle('body-expanded');
}


export default function Header(){

    return(
    <div id="header">
        <div id="title"><span className="text-header-styles">Pictures App</span></div>

        <div id="menu-btn" onClick={handleMenu}>
           <div className="btn-hamburguer"></div>
           <div className="btn-hamburguer"></div>
           <div className="btn-hamburguer"></div>
        </div>

    </div>
    );

}
