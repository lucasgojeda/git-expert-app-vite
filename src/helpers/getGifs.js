
/**
 * Esta función realiza la petición al api.
 * @function
 * @param {String} category - Nombre de la categoria a buscar.
 * @param {String} api_key - Clave personal obtenida en la pagina del api.
 * @param {String} url - Url de la api a la cuál se realiza la petición.
 * @param {Number} limit - Limite de resultados a traer desde el api.
 * @returns {Array<Object>} - [{ id, title, url }, ...{}]
 */
 export const getGifs = async( category, api_key, url, limit) => {

    const urlFinished = `${url}?api_key=${api_key}&q=${ encodeURI( category )}&limit=${limit}`;

    const resp = await fetch(urlFinished);
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