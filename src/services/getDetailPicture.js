
 
export default function getDetailPicture({ params }){

    const apiURL= `https://picsum.photos/v2/list`;  
    
    return fetch(apiURL).then(res => res.json()).then(response => {
            
            const result = response.map(array => {
                
                const { id, author, url, download_url, width, height } = array;

                return { id, author, url, download_url, width, height };

            })

            return result.find(singlePicture => singlePicture.id === params.id);

        })
  
}
