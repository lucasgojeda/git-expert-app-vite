import { useEffect, useState } from "react";

import { getEnvironmets } from "../helpers/getEnvironmets";
import { getGifs } from "../helpers/getGifs";


const { VITE_API_URL: api_url, VITE_API_KEY: api_key } = getEnvironmets();
// const env = getEnvironmets();

// const api_url = import.meta.env.VITE_API_URL;
// const api_key = import.meta.env.VITE_API_KEY;

const limit = 10;

// console.log(env)

/**
 * Este hook llama al helper que realiza la petición al api y ordena un poco la data recibida.
 * @function
 * @param {String} category - Categoria a buscar.
 * @returns {Oject} - {data: [{id, title, url}, ...{}], loading: Boolean}
 */
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        getGifs(category, api_key, api_url, limit)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })

            }
            )
    }, [category])

    return state;
}