import React, { useEffect, Fragment } from "react";
import { useLocation } from "wouter";
import usePictures from "../hooks/usePictures";
import ListOfPictures from "../components/ListOfPictures";
import avatarImg from "../images/avatar.png";
import '../styles/sidebar.css';

export default function Home( { params } ){

    const [path, pushLocation] = useLocation();

    //console.log(params.user, params.id);

    if(params.id !== '123456'){
        pushLocation('/');
    } 

    const {loading, pictures} = usePictures();
     
    function handleMenu(){

        const menu = document.querySelector('#sidemenu');

        menu.classList.toggle("menu-expanded");
        menu.classList.toggle("menu-collapsed");

        document.querySelector('body').classList.toggle('body-expanded');
    }

    return( <Fragment>
         
    <div id="sidemenu" className="menu-collapsed">
        { /* Header */ }
        <div id="header">
            <div id="title"><span>Vida MRR</span></div>

            <div id="menu-btn" onClick={handleMenu}>
               <div className="btn-hamburguer"></div>
               <div className="btn-hamburguer"></div>
               <div className="btn-hamburguer"></div>
            </div>

        </div>
        { /* Profile */ }
        <div id="profile">
            <div id="photo"><img src={avatarImg} alt="" /></div>

            <div id="name"><span>Marco Polo</span></div>
        </div>
        { /* Items */ }
        <div id="menu-items">

            <div className="item" id="photo">
                <a href="#">
                    <div className="icon"><img src={avatarImg} alt="" /></div>
                    <div className="title"><span>Cloud Services</span></div>
                </a>
            </div>

                

        </div>

    </div>

    <div id="main-container" className="container"> { /* container */ }

        <h1>Hola a todos!</h1>

        <div className="row mt-4">
            <ListOfPictures pictures={pictures} />
        </div>
    
    </div>

    </Fragment> 
    );

}

/* 

    <div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>

*/