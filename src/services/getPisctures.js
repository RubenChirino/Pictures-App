import React from "react";

export default function getPictures(){

    const apiURL= `https://picsum.photos/v2/list`;
    
    return fetch(apiURL).then(res => res.json()).then(response => {
            //console.log('Respuesta:', response);
            
            const result = response.map(array => {
                const { id, author, url, download_url } = array;

                return { id, author, url, download_url };
            })

            return result

        })
  
}



