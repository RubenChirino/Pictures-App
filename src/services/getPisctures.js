
 
export default function getPictures({limit = 9, page = 1} = {}){  

    const apiURL= `https://picsum.photos/v2/list?page=${page}&amp;limit=${limit}`;
    
    return fetch(apiURL).then(res => res.json()).then(response => {
            
            const result = response.map(array => {
                const { id, author, url, download_url } = array;

                return { id, author, url, download_url };
            })

            return result

        })
  
}



