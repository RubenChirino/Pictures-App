import React, { useEffect } from "react";
import { useLocation } from "wouter";
import usePictures from "../hooks/usePictures";
import ListOfPictures from "../components/ListOfPictures";

export default function Home( { params } ){

    const [path, pushLocation] = useLocation();

    //console.log(params.user, params.id);

    if(params.id !== '123456'){
        pushLocation('/');
    } 

    const {loading, pictures} = usePictures();
     
    return( <div className="container">

        <div className="row mt-4">
            <ListOfPictures pictures={pictures} />
        </div>
    

    </div>
        
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