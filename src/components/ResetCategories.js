import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const ResetCategories = ({setcategories}) => {
    const [resetEstate, setresetEstate] = useState(false)

    console.log(setcategories)
    
    const reset =  (state) => {
        if (state) {
            setresetEstate(true)
            setTimeout(()=>{
                setresetEstate(false)  
                setcategories([])
            },3000)
        }
        else{
            return true
        }
    }

    return (
    <>
       <button className='reset' onClick={()=>reset(true)}>Reset</button>
        {resetEstate && <h2 className='prosReset animate__animated animate__fadeInTopLeft'>Reseteando</h2>}
    </>
  )
}

ResetCategories.prototypes = {
    setcategories: PropTypes.func.isRequired
}