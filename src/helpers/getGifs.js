export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5nVW2bjnw4z2iG1aXBGoAe1MsSlko6AW&q=${ category }&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>({
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
}