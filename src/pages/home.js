import React, { useEffect } from "react";
import { useLocation } from "wouter";
import usePictures from "../hooks/usePictures";

export default function Home( { params } ){

    const [path, pushLocation] = useLocation();

    //console.log(params.user, params.id);

    if(params.id !== '123456'){
        pushLocation('/');
    } 

    const {loading, pictures} = usePictures();
     
    return(
        pictures.map(({ author }) => <h1>${author}</h1>)
    );

}