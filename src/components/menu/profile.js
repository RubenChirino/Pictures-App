import React from "react";

export default function Profile({ avatar }){

   const userName = sessionStorage.getItem('userName');

   return(

    <div id="profile"> 
        <div id="photo"><img src={avatar} alt="" /></div>

        <div id="name"><span className="color-username" >{userName}</span></div>
    </div>

   );

}