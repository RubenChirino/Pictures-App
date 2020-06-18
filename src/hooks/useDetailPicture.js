import { useState, useEffect } from "react";
import getDetailPicture from "../services/getDetailPicture";


export default function useDetailPicture({params}){
 
    const [loadingDetail, setLoadingDetail] = useState(false);

    const [detailPicture, setdetailPicture] = useState([]); 

    const userName = sessionStorage.getItem('userName');

    useEffect(function(){
        setLoadingDetail(true);     
      
        if(userName === null || userName === undefined){
            setdetailPicture([]);
            setLoadingDetail(false);
        }else{
            getDetailPicture({params}).then(res => {
                setdetailPicture(res);
                setLoadingDetail(false);
            }); 
        }

    }, [userName]) 


    return { loadingDetail,  detailPicture}  

}

