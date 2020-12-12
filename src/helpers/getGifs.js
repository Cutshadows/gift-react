

export const getFetchGifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3s20W7cCMw4hsGD3myivqHobaoz8FzgA`;
    const fetchGifs=await fetch(url);
    const {data}=await fetchGifs.json();
    const gifs=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    });
    return gifs;
}