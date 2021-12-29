import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGift'

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
       data: [],
       loading: true 
    });
    //useEffect ejecuta las funciones solo cuando se refresca pagina (renderiza)
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                    // console.log(imgs);
                    setstate({
                        data:imgs,
                        loading:false
                    });
            });
            // .then(imgs => setImages(imgs));
    }, [category]);

    // setTimeout( () => {
    //     setstate({
    //         data: [1,2,3,4],
    //         loading: false 
    //     })
    // }, 3000 );

    return state;
}