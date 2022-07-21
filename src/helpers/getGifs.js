


export const getGifs = async( category ) => {
    const api_key = 'YV5aIOS7VFn8aDqi34Rr6uQHpl4nwPfJ';
    const url = 'https://api.giphy.com/v1/gifs/search';
    const limit = 10;

    const resp = await fetch(`${url}?api_key=${api_key}&q=${ encodeURI( category )}&limit=${limit}`)
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}