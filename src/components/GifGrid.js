import React, {Fragment} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GiftGridItem from './GiftGridItem';

const GiftGrid = ({category}) => {

    const {data:images, loading}=useFetchGifs(category);
    
    return ( 
        <Fragment>
            <li className="card animate__animated animate__pulse">{category}</li>
            {loading&&<p className="card animate__animated animate__flash">Loading ...</p>}
          <div className="card-grid">
                    {
                        images.map(img=>(
                                <GiftGridItem 
                                key={img.id}
                            {...img}/>
                        ))
                    }
            </div>
        </Fragment>
     );
}
 
export default GiftGrid;