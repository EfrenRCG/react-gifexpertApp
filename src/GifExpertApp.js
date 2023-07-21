import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { ResetCategories } from './components/ResetCategories';

export const GifExpertApp = ()=>{
    
    //const categories = ['zoro','lufy','sanji'];
    
    const [categories, setcategories] = useState(['Oaxaca']);

    // const handleAdd = () =>{
    //     //setcategories([...categories,'chopper'])
    //     setcategories(cate =>['saitama',...categories])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <ResetCategories setcategories={setcategories}/>
            <AddCategory setcategories={(categories , setcategories)}/>
            
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {categories.map(category => (
                    //<li key={category}> {category} </li>
                    <GifGrid 
                        key={category}
                        category={category}
                    /> 
                    )
                )}
            </ol>
        </>
    );
}