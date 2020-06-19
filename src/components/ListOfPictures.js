import React from "react";
import Pictures from "./Pictures";

export default function ListOfPictures({ pictures }){ 

    return(
  
         pictures.map(({ id, author, url, download_url }) => 
         <Pictures 
         key={id}
         id={id}       
         author={author} 
         url={url}
         download_url={download_url}
         />)
        
    );

}



