import React, { Fragment } from "react";
import { useLocation } from "wouter";
import usePictures from "../hooks/usePictures";
import ListOfPictures from "../components/ListOfPictures";
import SideBar from "../components/sidebar";

export default function Home(){  

    const [path, pushLocation] = useLocation();

    const userName = sessionStorage.getItem('userName');

    if(userName === null || userName === undefined){
        pushLocation('/');
    } 

    const {loading, pictures} = usePictures();

    return( <Fragment>
         
    <SideBar />

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