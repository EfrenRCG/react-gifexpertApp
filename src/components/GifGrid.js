import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {



  const {data:images,loading} = useFetchGifs(category);
  
    return (
    <>
    <h3 className='animate__animated animate__fadeInTopLeft'>{category}</h3>
    {loading && <p className='animate__animated animate__flash'>loading</p>}
   <div className='card-grid'>
      
      
        {images.map( img =>
          
          // <li key={id}>
          //   {title}
          //   {/* <img src={img.url}/> }
          // </li>

          <GifGridItem 
            key={img.id}        
            {...img}
          />
          )
        }
      </div> 
    </>
  )
}
