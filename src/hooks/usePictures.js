import React, { useState, useEffect } from "react";
import getPictures from "../services/getPisctures";

    const INITIAL_PAGE = 1;

export default function usePictures(){
 
    const [loading, setLoading] = useState(false);

    const [loadingNextPage, setLoadingNextPage] = useState(false);

    const [page, setPage] = useState(INITIAL_PAGE); 

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

    useEffect(function(){
        if(page === INITIAL_PAGE) return

        setLoadingNextPage(true);

        getPictures({ page: page })
        .then(nextPictures => {
            setPictures(prevPictures => prevPictures.concat(nextPictures))
            setLoadingNextPage(false);
        })


    }, [page]) 

    return { loading, loadingNextPage, pictures, setPage}  //, setPage

}

