import React from "react";
 
export default function getDetailPicture({ params }){

    console.log(params);

    const apiURL= `https://picsum.photos/v2/list`;  
    
    return fetch(apiURL).then(res => res.json()).then(response => {
            //console.log('Respuesta:', response);
            
            const result = response.map(array => {
                
                const { id, author, url, download_url, width, height } = array;

                return { id, author, url, download_url, width, height };

            })

            return result.find(singlePicture => singlePicture.id === params.id);

            //return result

        })
  
}

/*

return array.find(singlePicture => singlePicture.id === id);

*/