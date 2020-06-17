import React, { useState, useDebugValue, useEffect } from "react";
import getPictures from "../services/getPisctures";

export default function usePictures(){
 
    const [loading, setLoading] = useState(false);

    const [pictures, setPictures] = useState([]);

    useEffect(function(){
        setLoading(true);
        getPictures().then(res => {
            setPictures(res);
            setLoading(false);
        }); 
    }, [])

    return { loading, pictures }

}