import React from "react";
import { Link } from 'wouter'

export default function DetailPicture({ detailPicture }){

    return(
        <div className="col-sm-12 col-md-10 col-lg-10 pt-4">
            <div className="card">
                <img src={detailPicture.download_url} 
                alt={detailPicture.author} width="100%" className="card-img-top" />
                <div className="card-body">
                    <h4 className="title-detail-picture">{`Author: ${detailPicture.author}`}</h4>  
                    <span className="size-img-text title-detail-picture"> 
                    {`Original size: ${detailPicture.width}x${detailPicture.height}`} </span>
                    <p>Sitio Web: <a target="_blank" href={detailPicture.url} 
                    className=''>{detailPicture.author}</a></p>        
                </div>
            </div>            
        </div>
    );

}

//${}