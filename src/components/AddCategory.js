import React, {useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setcategories}) => {
    
    const [inputValue, setinputValue] = useState('')


    const handlInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>0){
            setcategories(cate =>[inputValue,...cate])
            setinputValue('');
        }
        console.log('submin hecho')
    }

    return (
        <>
            <form onSubmit={handSubmit}>
                <input 
                    type='text'
                    value={inputValue}
                    onChange={handlInputChange}
                />
            </form>    
        </>
    )
}

AddCategory.prototypes = {
    setcategories: PropTypes.func.isRequired
}
