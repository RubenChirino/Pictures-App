import React, { Fragment } from "react";
import { useLocation } from "wouter";
import useDetailPicture from "../hooks/useDetailPicture";
import SideBar from "../components/sidebar";
import DetailPicture from "../components/detailPicture";
import Logo from "../components/logo";
import Loading from "../components/loading";

export default function Detail( { params } ){

    const [path, pushLocation] = useLocation();

    //Security
    const userName = sessionStorage.getItem('userName');
    if(userName === null || userName === undefined){
        pushLocation('/');
    }   
    //--- 

    const {loadingDetail, detailPicture} = useDetailPicture({params});

    return(
      <Fragment>
     
        <SideBar />

        <div id="main-container" className="container"> 

            <Logo />
      
            { loadingDetail ? <Loading /> :
            <div className="row justify-content-center mb-4">   
              <DetailPicture detailPicture={detailPicture} />  
            </div>       
            }
     
        </div>

      </Fragment>
    );

}