import React, { Fragment, useState } from 'react';
import AddCategory from './AddCategory';
import GiftGrid from './GifGrid';

const GiftExpertApp = ({defaultCategories=[]}) => {

    //const categories=['One Punch', 'Samurai X', 'Dragon Ball'];
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    // const handledAdd=()=>{
    //     setCategories(['Naruto', ...categories]); //insertar primero en la entrada
    //     //setCategories(cats=>[...cats, 'Naruto']); //Otra forma de insertar en el estado
    // }
    return ( 
        <Fragment>
            
            <h2>GiftExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
           {/*<button onClick={handledAdd}>Agregar</button>*/}
            <h2>
                {
                   categories
                        .map(category =>(
                            <GiftGrid
                                key={category}
                                category={category} />
                            )
                        ) 
                }
            </h2>
        </Fragment>
     );
}
 
export default GiftExpertApp;