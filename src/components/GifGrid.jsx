import React from 'react';
import "animate.css";
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

/**
 * Este componente muestra los resultados de las busquedas realizadas.
 * Desde este componente se hace el llamado a el hook que realiza la petición al Api.
 * @module GifGrid
 */

/**
 * 
 * 
 * @property {String} category - Nombre de la categoria a buscar.
 */
const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);


    return (
        <div className="card-grid">
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            {
                images.map(({ id, title, url }) => {
                    return <GifGridItem key={id} title={title} url={url} />
                })
            }
        </div>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;