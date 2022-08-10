import React from 'react';
import PropTypes from "prop-types";

/**
 * Este componente es la "Card" donde pondremos individualmente cada gif para ser mostrado en la sección de resultados.
 * @module GifGridItem
 */

/**
 * @property {String} title - Este es el titulo de la categoria.
 * @property {String} url - Este es el url del gif que se va a mostrar.
 */
export const GifGridItem = ( {title, url} ) => {
    return (
        <div className='card animate__animated animate__bounce'>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    );
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};