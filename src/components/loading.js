import React, { Fragment } from "react";
import "../styles/loading.css"
import loadingImg from "../images/loading.png";

export default function Loading(){

   return(
       <Fragment>
            <div className="row justify-content-center loading-margin-movil"> 
               <img className="size-img-loading" src={loadingImg} alt="loadingImage" />
            </div>   
       </Fragment>
   );

} 