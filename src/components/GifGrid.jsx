import React from 'react';
import "animate.css";
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    // console.log( loading );
 

    return (
        <div className="card-grid">
            <h3>{category}</h3>
            { loading && <p>Loading</p> }
                {
                    images.map( ({id, title, url}) => {
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