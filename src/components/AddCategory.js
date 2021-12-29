import PropTypes from 'prop-types'
import { useState } from 'react';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(props);
        if (inputValue.trim().length>2) {
            setCategories( cats => [ inputValue,...cats]);
            setInputValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            {/* <h1>{ inputValue }</h1> */}
            <input
                type= "text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    //function
    setCategories: PropTypes.func.isRequired
}
