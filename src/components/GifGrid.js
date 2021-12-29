// import { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGift';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFetchGifs(category);
    
    // console.log(data);
    // console.log(loading);
    // const [images, setImages] = useState([]);
    

    
    // getGifs();
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem

                            key={img.id}
                            {...img}

                        />
                        // <li key={id}> {title} </li>
                    ))
                }
            </div>
        </>
    )
}
