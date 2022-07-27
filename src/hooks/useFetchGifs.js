import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const api_url = import.meta.env.VITE_API_URL;
const api_key = import.meta.env.VITE_API_KEY;

const limit = 10;

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