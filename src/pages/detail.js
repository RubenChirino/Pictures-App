import React, { Fragment } from "react";
import { useLocation } from "wouter";
import useDetailPicture from "../hooks/useDetailPicture";
import SideBar from "../components/sidebar";
import DetailPicture from "../components/detailPicture";

export default function Detail( { params } ){

    const [path, pushLocation] = useLocation();

    //Security
    const userName = sessionStorage.getItem('userName');
    if(userName === null || userName === undefined){
        pushLocation('/');
    }   
    //---

    const {loadingDetail, detailPicture} = useDetailPicture({params});

    console.log(detailPicture);

    return(
      <Fragment>
     
        <SideBar />

        <div id="main-container" className="container"> { /* container */ }

            <h1>Hola a todos!</h1>

           <div className="row justify-content-center mt-4 mb-4">   
              <DetailPicture detailPicture={detailPicture} />  
           </div>

        </div>

      </Fragment>
    );

}

/* 
className="size-img-detail"
<ListOfPictures detailPicture={detailPicture} /> 

*/