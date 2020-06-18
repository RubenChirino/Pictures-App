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

    const {loading, pictures, setPage } = usePictures();

    function handleNextPage(){
        setPage(prevPage => prevPage + 1);
    }

    return( <Fragment>
         
    <SideBar />

    <div id="main-container" className="container"> { /* container */ }

        <h1>Hola a todos!</h1>

        <div className="row mt-4">   
            <ListOfPictures pictures={pictures} /> 
        </div>
       
        <div className="row justify-content-center mt-5 mb-3">

            <div className="col-4 text-center">
                <button className="btn btn-primary btn-lg" 
                onClick={handleNextPage}>Get next page</button>
            </div>
            
        </div>

    </div>

    </Fragment> 
    );

}
