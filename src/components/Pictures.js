import React from "react";
import { Link } from 'wouter'
import '../styles/home.css'

export default function Pictures({ id, author, url, download_url }){
    
    return(
    <div className="col-sm-6 col-md-4 col-lg-4 pt-4">
        <div className="card">
            <Link to={`/detail/${id}`} className=''>
                <img src={download_url} alt={author} className="card-img-top images-sizes" width="100"/>
                <div className="card-body">
                    <h4>{`Author: ${author}`}</h4>          
                </div>
            </Link>    
        </div>
    </div>
    );

}
      

/* col-md-4 animated fadeInUp */