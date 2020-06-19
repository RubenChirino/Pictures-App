import React from "react";
import { Link } from 'wouter'
import '../styles/home.css'
import HandleSideBar from "../helpers/handleSideBar";

export default function Pictures({ id, author, url, download_url }){
    
    function handleSideBar(){

        HandleSideBar();
    }
     
    return(
    <div className="col-sm-6 col-md-4 col-lg-4 pt-4">
        <div className="card">
            <Link onClick={handleSideBar} to={`/detail/${id}`} className="text-decoration-none">
                <img src={download_url} alt={author} className="card-img-top images-sizes" width="100"/>
                <div className="card-body">
                    <h4 className="title-card-color">{`Author: ${author}`}</h4>          
                </div>
            </Link>    
        </div>
    </div>
    );

}
      

/* col-md-4 animated fadeInUp */