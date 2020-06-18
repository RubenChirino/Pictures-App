import React, { useState, useEffect } from "react";
import getPictures from "../services/getPisctures";

export default function usePictures(){
 
    const [loading, setLoading] = useState(false);

    const [pictures, setPictures] = useState([]); 

    const userName = sessionStorage.getItem('userName');

    useEffect(function(){
        setLoading(true);     
      
        if(userName === null || userName === undefined){
            setPictures([]);
            setLoading(false);
        }else{
            getPictures().then(res => {
                setPictures(res);
                setLoading(false);
            }); 
        }

    }, [userName]) 

    return { loading, pictures }

}

