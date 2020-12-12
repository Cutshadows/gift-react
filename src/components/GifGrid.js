import React, {Fragment} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GiftGridItem from './GiftGridItem';
import PropTypes from 'prop-types'

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
GiftGrid.propTypes={
    category: PropTypes.string.isRequired
}
 
export default GiftGrid;