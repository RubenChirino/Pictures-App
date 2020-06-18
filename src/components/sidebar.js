import React from "react";
import avatarImg from "../images/avatar.png"
import logoutImg from "../images/logout.png"
import Header from "./menu/header";
import Profile from "./menu/profile";
import Options from "./menu/options";
import "../styles/sidebar.css";

export default function SideBar(){
   
    return(

    <div id="sidemenu" className="menu-collapsed">

        <Header />

        <Profile avatar={avatarImg} />
        
        <Options logout={logoutImg} />

    </div>

    );

}
