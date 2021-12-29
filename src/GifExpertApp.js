import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories(cats=>[...cats, 'Naruto']);
    //     // setCategories( [...categories, 'Naruto'] );
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(cat => 
                        (<GifGrid 
                            key={cat}
                            category={cat }
                        
                        />
                        
                            )
                        // <li key={cat}>{cat}</li>
                        )
                }
            </ol>
        </>
    );
};

export default GifExpertApp;