import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * En este componente encontramos el input en el cuál se introducen las nuevas categorias a buscar.
 * @module AddCategory
 */

/**
 * @property {Function} setCategories - Sirve agregar nuevas categorias al Array de categorias a buscar, proviene del useState.
 */
const AddCategory = ({setCategories}) => {

    /**
     * El siguiente useState maneja el valor del input de busquedas.
     */
    const [inputValue, setInputValue] = useState('')

    /**
     * La siguiente función cambia el valor del inputValue cada vez que cambia el input. 
     */
    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    };

    /**
     * La siguiente función guarda la nueva categoria en el Array de "categories".
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2 ){
            setCategories(cats => [ inputValue, ...cats ]);
            setInputValue('')
        };

    };

    return (
        <form onSubmit={handleSubmit}>
            <p> { inputValue } </p>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };

export default AddCategory;