import React, { Fragment } from "react";
import { useLocation, Link } from "wouter";
import usePictures from "../hooks/usePictures";
import ListOfPictures from "../components/ListOfPictures";
import SideBar from "../components/sidebar"; 
import Logo from "../components/logo";
import Loading from "../components/loading";

export default function Home(){   

    const [path, pushLocation] = useLocation();

    //Security
    const userName = sessionStorage.getItem('userName');
    if(userName === null || userName === undefined){
        pushLocation('/');
    }   
    //--- 
     
    const { loading, pictures, setPage } = usePictures(); 

    function handleNextPage(){
        setPage(prevPage => prevPage + 1);
    }

    return( <Fragment>
         
        <SideBar />

        <div id="main-container" className="container"> 

            <Logo />
            
            { loading ? <Loading /> :
            <Fragment>
                <div className="row">   
                    <ListOfPictures pictures={pictures} /> 
                </div>
            
                <div className="row justify-content-center mt-5 mb-3">
                    <div className="col-4 text-center">
                        <button className="btn btn-primary btn-lg" 
                        onClick={handleNextPage}>Get next page</button>
                    </div>          
                </div>
            </Fragment>
            }

        </div>

    </Fragment> 
    );

}

