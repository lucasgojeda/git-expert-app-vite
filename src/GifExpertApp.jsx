import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

/**
 * Este componente es la vista principal y unica de la aplicación.
 * @module GifExpertApp
 */
const GifExpertApp = ({ defaultCategories = [] }) => {

    /**
     * El siguiente useState maneja el estado de los resultados de busqueda.
    //  * @type {Array<String>}
     */
    const [categories, setCategories] = useState(defaultCategories);


    return (
        <div>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </div>
    )
};

export default GifExpertApp;