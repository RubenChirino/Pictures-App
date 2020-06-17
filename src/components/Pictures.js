import React from "react";
import '../styles/home.css'

export default function Pictures({ id, author, url, download_url }){
    
    return(
    <div className="col-sm-6 col-md-4 col-lg-4 pt-4">
        <div className="card">
                <img src={download_url} alt={author} className="card-img-top images-sizes" width="100"/>
            <div className="card-body">
                <h4>{`Realizada por: ${author}`}</h4>          
            </div>
        </div>
    </div>
    );

}

/* col-md-4 animated fadeInUp */